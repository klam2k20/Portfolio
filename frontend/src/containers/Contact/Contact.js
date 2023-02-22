import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import "./Contact.scss";

function Contact() {
  return (
    <div id='contact'>
      <div className='app_contact-action'>
        <h1 className='head_text'>
          Available for <span>Select</span> <br /> Freelance <span>Opportunties</span>
        </h1>
        <span className='p_text'>
          Have an exciting project you need hello with? Send me an email or contact me via LinkedIn!
        </span>
      </div>

      <form className='app_contact-form' action={process.env.REACT_APP_FORM_ENDPOINT} method='POST'>
        <input type='text' name='name' placeholder='First Last' className='p_text' />
        <input type='text' name='email' placeholder='email@email.com' className='p_text' />
        <textarea
          name='message'
          placeholder='Hello, there!'
          rows='10'
          className='p_text'></textarea>

        <button className='bold_text'>Let's Connect</button>
      </form>
    </div>
  );
}

export default Wrapper(Contact, "contact", "app_whitebg");
