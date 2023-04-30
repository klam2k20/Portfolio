import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Wrapper from '../Wrapper/Wrapper';
import './Contact.scss';
import axios from 'axios';

const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string().required('Include a message...'),
});

function Contact() {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });

  const handleServerResponse = (ok, msg) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
  };

  const handleSubmit = (values) => {
    setServerState({ submitting: true });
    axios
      .postForm(process.env.REACT_APP_FORM_ENDPOINT, values)
      .then(() => handleServerResponse(true, 'Talk to you soon!'))
      .catch(() => handleServerResponse(false, 'Sorry something went wrong. Try again later.'));
  };

  return (
    <div id='contact'>
      <div className='app_contact-action'>
        <h1 className='head_text'>
          Available for <span>Select</span> <br /> Freelance <span>Opportunties</span>
        </h1>
        <span className='p_text'>
          Have an exciting project you need help with? Send me an email or contact me via LinkedIn!
        </span>
      </div>

      <Formik
        initialValues={{
          name: '',
          email: '',
          message: '',
        }}
        validationSchema={ContactSchema}
        onSubmit={handleSubmit}>
        {({ errors, touched }) =>
          serverState.status && serverState.status.ok ? (
            <h1 className='app_contact-form head_text'>
              <span>{serverState.status.msg}</span>
            </h1>
          ) : (
            <Form className='app_contact-form'>
              <Field type='text' name='name' placeholder='First Last' className='p_text' />
              {errors.name && touched.name ? <div className='error_text'>{errors.name}</div> : null}
              <Field type='text' name='email' placeholder='email@email.com' className='p_text' />
              {errors.email && touched.email ? (
                <div className='error_text'>{errors.email}</div>
              ) : null}
              <Field
                as='textarea'
                name='message'
                placeholder='Hello, there!'
                rows='10'
                className='p_text'></Field>
              {errors.message && touched.message ? (
                <div className='error_text'>{errors.message}</div>
              ) : null}
              <button type='submit' className='bold_text'>
                Let's Connect
              </button>
              {serverState.status && !serverState.status.ok && (
                <div className='error_text'>Sorry something went wrong. Try again later.</div>
              )}
            </Form>
          )
        }
      </Formik>
    </div>
  );
}

export default Wrapper(Contact, 'contact', 'app_whitebg');
