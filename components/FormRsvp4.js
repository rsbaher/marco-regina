import { Formik, Field, Form, ErrorMessage } from 'formik'
import React, { useContext, useState } from "react"
import { Context } from '../utilities/context'
import Popup from 'reactjs-popup';
import '../node_modules/reactjs-popup/dist/index.css';


export default function FormRsvp4() {
  const [context, setContext] = useContext(Context)
  //console.log("invitationForm context: ", context);
  const data = {
    guest1: {
      fName: 'Regina',
      lName: 'Baher',
      email: 'reginabaher@gmail.com',
      rsvp: "0",
      meal: "0",
      hotelRooms: "0",
      isUnder12: 0,
      isUnder21: 0
    },
    guest2: {
      fName: 'Natalie',
      lName: 'Baher',
      email: 'reginabaher@gmail.com',
      rsvp: "0",
      meal: "0",
      hotelRooms: "0",
      isUnder12: 1,
      isUnder21: 1
    }
  }
  return (
    <>
      <Formik
        initialValues={{
          picked: 'One',
          guest1: {
            fName: 'Regina',
            lName: 'Baher',
            email: 'reginabaher@gmail.com',
            rsvp: '0',
            meal: '0',
            hotelRooms: '0',
            isUnder12: 0,
            isUnder21: 0
          }
        }}
        onSubmit={async (values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ values }) => (
          <Form>
            <div className="container-four-columns">
              <label className="form-input-label2">{values.guest1.fName} {values.guest1.lName}: </label>
              <Field name="guest1.rsvp" as="select" className="form-input-select">
                <option value="0">Not Attending</option>
                <option value="1">Attending</option>
              </Field>
              <Field name="guest1.meal" as="select" className="form-input-select">
                <option value="0">Meal 1</option>
                <option value="1">Meal 2</option>
              </Field>
              <Field name="guest1.hotelRooms" as="select" className="form-input-select">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </Field>
            </div>
            <div className="text-align-center">
              <button type="submit" className="button-style button-gold form-button color-light-gold">Save</button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}