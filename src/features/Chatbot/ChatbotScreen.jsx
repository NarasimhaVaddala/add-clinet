import React, { useState } from "react";

// Example chatbot JSON structure
const chatbotData = {
  start: {
    message:
      "Hi [User's Name], Welcome to Women Rider Ride & Billing Support. Please select the issue that you need support with:",
    options: [
      { text: "I have a billing issue.", next: "billing_issue" },
      { text: "I have a problem with my ride.", next: "ride_problem" },
      { text: "I need to update my payment method.", next: "update_payment" },
      {
        text: "I need to inquire about my ride charges.",
        next: "ride_charges",
      },
    ],
  },
  billing_issue: {
    message: "Please select the billing concern that you need support with:",
    options: [
      {
        text: "I’ve been charged incorrectly.",
        next: "charged_incorrectly",
        type: "form",
      },
      {
        text: "I need a refund for a canceled ride.",
        next: "refund_request",
        type: "form",
      },
      {
        text: "I need a detailed breakdown of my ride charges.",
        next: "breakdown_request",
        type: "form",
      },
      {
        text: "I have an issue with my promotional code or discount.",
        next: "promo_issue",
        type: "form",
      },
    ],
  },
  charged_incorrectly: {
    type: "form",
    message: "Please provide the following details for us to investigate:",
    fields: [
      { label: "Ride ID", inputType: "text" },
      { label: "Date of Ride", inputType: "date" },
      { label: "Description of the Billing Issue", inputType: "textarea" },
    ],
    submitText: "Proceed",
    next: "contact_support",
  },
  ride_problem: {
    message: "Please select the issue related to your ride:",
    options: [
      { text: "My ride was delayed.", next: "ride_delayed", type: "form" },
      {
        text: "My driver took a longer route.",
        next: "long_route",
        type: "upload",
      },
      {
        text: "I had an issue with the vehicle condition.",
        next: "vehicle_issue",
        type: "api",
      },
      {
        text: "My ride was canceled without notice.",
        next: "canceled_ride",
        type: "form",
      },
    ],
  },
  long_route: {
    type: "upload",
    message: "Please upload an image showing the route issue.",
    uploadText: "Upload Image",
    next: "contact_support",
  },
  vehicle_issue: {
    type: "api",
    message: "Fetching vehicle details...",
    endpoint: "https://api.womenrider.com/vehicle_issue",
    method: "GET",
    next: "show_vehicle_data",
  },
  contact_support: {
    message:
      "Please write to us at [support@womenrider.com] with the details above, and our team will get back to you within 24 hours.",
  },
};

const ChatbotScreen = () => {
  const [history, setHistory] = useState([
    { message: chatbotData.start.message, options: chatbotData.start.options },
  ]);
  const [showForm, setShowForm] = useState(null);
  const [showUpload, setShowUpload] = useState(null);
  const [loading, setLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);

  const handleOptionClick = async (option) => {
    const nextStep = chatbotData[option.next];
    if (!nextStep) return;

    // For steps that require a form
    if (nextStep.type === "form") {
      setShowForm(nextStep);
    }
    // For steps that require an image upload
    else if (nextStep.type === "upload") {
      setShowUpload(nextStep);
    }
    // For steps that require an API call
    else if (nextStep.type === "api") {
      setLoading(true);
      try {
        const response = await fetch(nextStep.endpoint, {
          method: nextStep.method,
        });
        const data = await response.json();
        setApiResponse(data);
      } catch (error) {
        setApiResponse({ error: "Failed to fetch data." });
      }
      setLoading(false);
      // Update history to display the API response message if needed
      setHistory((prev) => [...prev, { message: nextStep.message }]);
    }
    // Otherwise, simply update the chat history
    else {
      setHistory((prev) => [
        ...prev,
        { message: nextStep.message, options: nextStep.options || [] },
      ]);
    }
  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="w-[350px] h-full flex flex-col gap-4 bg-lime-200 p-4 rounded-md overflow-auto">
        {history.map((entry, index) => (
          <div key={index}>
            <p className="bg-white p-2 rounded-md">{entry.message}</p>
            {entry.options &&
              entry.options.map((opt, idx) => (
                <button
                  key={idx}
                  className="mt-2 bg-blue-500 text-white p-2 rounded-md w-full"
                  onClick={() => handleOptionClick(opt)}
                >
                  {opt.text}
                </button>
              ))}
          </div>
        ))}

        {/* Render form modal for user details */}
        {showForm && (
          <div className="bg-gray-100 p-4 rounded-md">
            <h3 className="mb-2">{showForm.message}</h3>
            {showForm.fields.map((field, idx) => (
              <input
                key={idx}
                type={field.inputType}
                placeholder={field.label}
                className="block w-full mb-2 p-2 border rounded-md"
              />
            ))}
            <button
              className="bg-green-500 text-white p-2 w-full rounded-md mt-2"
              onClick={() => setShowForm(null)}
            >
              {showForm.submitText}
            </button>
          </div>
        )}

        {/* Render upload component */}
        {showUpload && (
          <div className="bg-gray-100 p-4 rounded-md">
            <h3>{showUpload.message}</h3>
            <input type="file" className="block w-full mt-2" />
            <button
              className="bg-blue-500 text-white p-2 w-full rounded-md mt-2"
              onClick={() => setShowUpload(null)}
            >
              {showUpload.uploadText}
            </button>
          </div>
        )}

        {loading && <p>Loading...</p>}
        {apiResponse && (
          <p className="bg-yellow-200 p-2 rounded-md">
            {JSON.stringify(apiResponse, null, 2)}
          </p>
        )}
      </div>
    </div>
  );
};

export default ChatbotScreen;
