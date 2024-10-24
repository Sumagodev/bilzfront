import React from 'react'
import Section1 from '../ComponentsPage/ContactUs/Section1';
import Section2 from '../ComponentsPage/ContactUs/Section2';
import Section3 from '../ComponentsPage/ContactUs/Section3';
import Section5 from '../ComponentsPage/ContactUs/Section5';
import ContactBanner from '../ComponentsPage/Banner/ContactBanner';
const ContactUs = () => {
  return (
    <>
      <ContactBanner/>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section5 />
    </>
  )
}

export default ContactUs
