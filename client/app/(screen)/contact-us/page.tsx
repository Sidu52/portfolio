import ContactPage from "@/app/component/contactus";
import ContactDetails from "@/app/component/contactus/ContactDetails";
import ContactForm from "@/app/component/contactus/ContactForm";
import React from "react";

function page() {
  return (
    <>
      <div className="bg-[#010f1d] text-white">
        <ContactPage />
        <ContactDetails />
        <ContactForm />
      </div>
    </>
  );
}

export default page;
