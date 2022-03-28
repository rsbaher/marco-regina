import ReactDOM from 'react-dom';
import { Context } from '../utilities/context'
import { Formik, Field, FieldArray, Form, useField, useFormikContext } from 'formik';
import React, { useContext } from "react"
import '../node_modules/reactjs-popup/dist/index.css';

const MyField = (props) => {
  const {
    values: { Person },
    touched,
    setFieldValue,
  } = useFormikContext();
  const [field, meta] = useField(props);

  React.useEffect(() => {
    // set the value of textC, based on Person
    if (Person && touched.Person) {
      setFieldValue(props.name, `Person: ${Person}`);
    }
  }, [Person, touched.Person, setFieldValue, props.name]);

  return (
    <>
      <input {...props} {...field} />
      {!!meta.touched && !!meta.error && <div>{meta.error}</div>}
    </>
  );
}

const FormRsvp2 = function (props) {
  let data = props.data.inv
  console.log("formRsvp2 data: ", data)
  return (
    <div className="form-container">
      <Formik onSubmit={async (values) => alert(JSON.stringify(values, null, 2))}
        initialValues={data}>
        <Form style={{ display: 'grid' }}>
          <FieldArray
            name="guests"
            render={() => (
              <div>
                {data.map((g, index) => (
                  <div className="cards-div cards-margin-bottom background-color-light-pink" key={index}>
                    <h3>{g.fName + " " + g.lName}</h3>
                    <Field type="hidden" name={`guests.${index}.id`} value={g.id} />
                    <br />
                    <div className='text-align-left'>
                      <p className='margin-form'>
                        <label className="form-input-label">Will you be attending?</label>
                        <Field as="select" className="form-input-select" name={`guests.${index}.rsvp`} value={g.rsvp}>
                          <option value="">Select</option>
                          <option value="0">No</option>
                          <option value="1">Yes</option>
                        </Field>
                      </p>

                      <p className='margin-form'>
                        <label className="form-input-label">What would you like to eat?</label>
                        <Field as="select" className="form-input-select" name={`guests.${index}.meal`} value={g.meal}>
                          <option value="">Select</option>
                          <option value="chicken">Chicken</option>
                          <option value="beef">Beef</option>
                          <option value="fish">Fish</option>
                        </Field>
                      </p>

                      <p className='margin-form'>
                        <label className="form-input-label">{"How many hotel rooms will "+ g.fName + " be requiring?"}</label>
                        <Field as="select" className="form-input-select" name={`guests.${index}.hotelRooms`} value={g.hotelRooms}>
                          <option value="">Select</option>
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                        </Field>
                      </p>
                    </div>
                  </div>
                ))}

              </div>
            )}
          />
          <button className="button-style button-gold color-light-pink form-button" type="submit">Submit</button>
        </Form>

      </Formik>
    </div>

  )
}

export default FormRsvp2