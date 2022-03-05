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

function GetInvitationForm(props) {
  const [context, setContext] = useContext(Context)
  console.log("invitationForm props: ", props);
  console.log("invitationForm contect: ", context);
 // const [open, setOpen] = useState(false);
 // const closeModal = () => setOpen(false);
  const Children = props.children
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
          alert(JSON.stringify(values, null, 2));
          let cont = context
          cont.email = values.email
          setContext(cont)
          //getcode
         
          // go to /rsvp/code
          router.push("/rsvp")
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
            <button className="button-style button-gold color-pink form-button" type="submit">Get Invitation</button>
          </Form>
        </div>
      </Formik>

      <Popup open={open} closeOnDocumentClick onClose={closeModal}
        position="center center" className="modal2" modal>
        <div className="modal2-body">
          <FormRsvp2 formContx={context}/>
        </div>
      </Popup>
    </>
  )
}

export async function getStaticProps(props) {

  // fetch data here
  const data = await getSheetData()
  console.log("rsvp.staticprops data[0]: ", data[0]);
  console.log("rsvp.staticprops props: ", props);
  return {
    props: {
      data: data[0],
      email: ""
    }
  }
}

export default  GetInvitationForm