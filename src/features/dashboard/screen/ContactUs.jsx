import React from "react";
import Input from "../../auth/components/Input";
import TextArea from "../../../utils/TextArea";
import { BeatLoader } from "react-spinners";
import { useContactForm } from "../hooks/ContactFormHook";
import SectionHeading from "../../../utils/SectionHeading";
import SectionLayout from "../../../Layout/SectionLayout";

export default function ContactUs() {
  const { isLoading, message, formValues, errors, handleSubmit, setMessage } =
    useContactForm();

  return (
    <SectionLayout>
      <SectionHeading txt="Have an enquiry? Let’s chat" style={"text-center"} />

      <div className="flex flex-col gap-4 mt-4 items-center justify-center">
        {formValues.map((input, index) => (
          <Input
            customInputStyl="w-full"
            key={index}
            lable={input.label}
            type={input.type}
            value={input.value}
            onChange={(e) => input.onChange(e.target.value)}
            isValid={input.error} // Pass error message here
          />
        ))}

        <TextArea
          label={"Message"}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          customTextAreaStyle="w-full"
          isValid={errors.message} // Pass error message for textarea
        />

        <button
          type="submit"
          onClick={handleSubmit} // Attach handleSubmit to button
          className="bg-[#EA4C89] text-white font-semibold py-2 mt-4 rounded-lg hover:bg-[#d93c7a] transition duration-300 ease-in-out mb-7 focus:outline-none focus:ring-2 focus:ring-[#EA4C89] focus:ring-offset-2 w-full"
        >
          {isLoading ? <BeatLoader color="#fff" size={10} /> : "Submit Form"}
        </button>
      </div>
    </SectionLayout>
  );
}
