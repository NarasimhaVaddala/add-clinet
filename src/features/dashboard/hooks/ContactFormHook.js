import { useState } from "react";
import { toast } from "react-toastify";
import { API } from "../../../core/url";

export const useContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email address";
    }

    // if (!mobile.trim()) {
    //   newErrors.mobile = "Mobile number is required";
    // } else if (!/^\d{10}$/.test(mobile)) {
    //   newErrors.mobile = "Mobile number must be 10 digits";
    // }

    // if (!subject.trim()) {
    //   newErrors.subject = "Subject is required";
    // }

    if (!message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    // Validate the form before submission
    const isValid = validateForm();
    if (isValid) {
      try {
        const response = await API.post(
          "/dashboard/contact",
          {
            name,
            email,
            mobile,
            // subject,
            message,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data?.message == "Please provide all required fields") {
          toast.error("Please provide all required fields");
        } else if (
          response.data?.message == "Contact Us form submitted successfully"
        ) {
          toast.success("Form submitted successfully!");
          setEmail("");
          setName("");
          setMobile("");
          setMessage("");
          setSubject("");
          setErrors({});
        } else {
          toast.error("Failed to submit form. Please try again.");
        }
      } catch (error) {
        console.log(error.message);

        toast.error("Failed to submit form. Please try again.");
      }
    }

    setIsLoading(false);
  };

  const formValues = [
    {
      field: "name",
      label: "Name *",
      type: "text",
      value: name,
      onChange: setName,
      error: errors.name,
      required: true,
    },
    {
      field: "email",
      label: "Email *",
      type: "email",
      value: email,
      onChange: setEmail,
      error: errors.email,
      required: true,
    },
    {
      field: "mobile",
      label: "Mobile (optional)",
      type: "tel",
      value: mobile,
      onChange: setMobile,
      error: errors.mobile,
      required: false,
    },
  ];

  return {
    name,
    setName,
    email,
    setEmail,
    mobile,
    setMobile,
    subject,
    setSubject,
    message,
    setMessage,
    isLoading,
    setIsLoading,
    formValues,
    errors,
    handleSubmit,
  };
};
