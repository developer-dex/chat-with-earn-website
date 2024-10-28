import React from "react";
import PublicLayout from "../../layouts/PublicLayout";
import ContactUs from "../../components/contactUs/ContactUs";

const ContactUsPage = () => {
  return (
    <PublicLayout>
      <div className="pt-6 h-auto">
        <ContactUs />
      </div>
    </PublicLayout>
  );
};

export default ContactUsPage;
