import { Formik, Field, Form, ErrorMessage } from 'formik'
import React, { useContext, useState } from "react"
import { Context } from '../utilities/context'
import Popup from 'reactjs-popup';
import '../node_modules/reactjs-popup/dist/index.css';
import FormRsvp4 from './FormRsvp4'
import FormRsvp2 from './FormRsvp2'
import { useRouter } from 'next/router'

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

function GetInvitationForm() {
  const [context, setContext] = useContext(Context)
  console.log("invitationForm context: ", context);

  const router = useRouter()
  return (
    <>
      <Formik
        initialValues={{ email: '' }}
        validate={values => {
          const errors = {};

          if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }

          return errors;
        }}
        onSubmit={(values, errors) => {
          let cont = context
          console.log("invitation context: ", cont)
          let codes = context.codes
          let code = codes.filter(function(el){
            return el.email == values.email
            })
          cont.selected = code[0]
          
          console.log("retreived invitation code: ", cont.selected.code)
          setContext(cont)
          // redirecting to invdividual invitation
          router.push("/invitation/" + cont.selected.code)
        }}
      >
        <div className="form-container">
          <Form style={{ display: 'grid' }}>
            <span><label className="form-input-label" htmlFor="email">Email Address:</label>
              <Field className="form-input-text"
                id="email"
                name="email"
                type="email"
              /></span>
            <br /><ErrorMessage className="error-form-input" name="email" />
            <br />
            <button className="button-style button-gold color-light-pink form-button" type="submit">Get Invitation</button>
          </Form>
        </div>
      </Formik>

    </>
  )
}

export default  GetInvitationForm