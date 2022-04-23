import Form from "@/components/form/Form";
import Title from "@/components/Title/title";
import React from "react";

const Contact = () => {
  return (
    <div className="containers flex flex-col items-center">
      <Title
        title="Contact Us"
        className="text-transparent bg-clip-text bg-grad-text-2 mr-0 text-center"
      />
      <Form className="mt-[63px]" />
    </div>
  );
};

export default Contact;
