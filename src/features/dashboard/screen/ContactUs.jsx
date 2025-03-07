import React from "react";
import Input from "../../auth/components/Input";
import TextArea from "../../../utils/TextArea";
import { BeatLoader } from "react-spinners";
import { useContactForm } from "../hooks/ContactFormHook";

export default function ContactUs() {
  const { isLoading, message, formValues, errors, handleSubmit, setMessage } =
    useContactForm();

  return (
    <div className="container mt-10 font-News flex items-center justify-center flex-col">
      <h1 className="text-3xl text-center lg:text-start lg:text-5xl font-bold">
        Have an enquiry? Let’s chat
      </h1>

      <div className="w-full flex flex-col gap-4 mt-4 items-center justify-center">
        {formValues.map((input, index) => (
          <Input
            customInputStyl="w-[400px]"
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
          customTextAreaStyle="w-[400px]"
          isValid={errors.message} // Pass error message for textarea
        />

        <button
          type="submit"
          onClick={handleSubmit} // Attach handleSubmit to button
          className=" md:w-[360px] bg-[#EA4C89] text-white font-semibold py-2 mt-4 rounded-lg hover:bg-[#d93c7a] transition duration-300 ease-in-out mb-7 focus:outline-none focus:ring-2 focus:ring-[#EA4C89] focus:ring-offset-2 w-[400px]"
        >
          {isLoading ? <BeatLoader color="#fff" size={10} /> : "Submit Form"}
        </button>
      </div>
    </div>
  );
}
