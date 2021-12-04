import { Formik, Field, Form, ErrorMessage } from 'formik'


const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

export default function GetInvitationForm() {
  return (
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
      onSubmit={(values, errors, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >


      <div  className="form-container">
        <Form style={{display: 'grid'}}>
          <span><label className="form-input-label" htmlFor="email">Email Address:</label>
          <Field className="form-input-text"
            id="email"
            name="email"
            type="email"
          /></span>
          <br/><ErrorMessage className="error-form-input" name="email" />
<br/>
          <button className="button-style button-gold color-pink form-button" type="submit">Get Invitation</button>
        </Form>
      </div>
    </Formik>

  )
}