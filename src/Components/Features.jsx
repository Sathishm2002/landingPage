import React from 'react'
import Navbar from './Navbar/Navbar'
import Intro from './Intro/Intro';
import Maincontent from './Maincontent/Maincontent';
import Browsers from './Browsers/Browsers';
import FAQ from './FAQ/FAQ';
import ContactUs from './Contact/ContactUS';
const Features = () => {
  return (
    <div>
      <Navbar />
    <Intro/>
    <Maincontent/>
    <Browsers/>
    <FAQ/>
    <ContactUs />
    </div>
  );
}

export default Features