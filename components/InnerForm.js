import { Component } from 'react'
import { Formik, withFormik } from 'formik'
import { ToastContainer, toast } from 'react-toastify'
import styled from 'styled-components'
import Subtitle from '../components/subtitle'
import Button from '../components/button'
import TextBox from '../components/textbox'
import RadioButton from '../components/radiobutton'
import Checkbox from '../components/checkbox'
import { getFormData, uuidv4 } from '../utilities/helper'
import styles from '../components/rsvp.style'
import 'react-toastify/dist/ReactToastify.css'

const formURL = process.env.FORM_URL
const presenceOptions = [
  { caption: 'I will be there', value: 1 },
  { caption: "Sorry I can't make it", value: 0 }
]
const locationOptions = [
  { caption: 'Singapore, 8 Sep 2018 (11 AM)', value: 'sg' },
  { caption: 'Jakarta, 15 Sep 2018 (7 PM)', value: 'jkt' }
]

const SuccessPage = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`

const AddToCalendarIcon = styled.img`
  height: 1em;
  margin-right: 0.3em;
`

class InnerForm extends Component {
    componentDidUpdate() {
      window.addeventatc.refresh()
    }
  
    renderForm() {
      const {
        errors,
        form,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        setFieldValue,
        status,
        touched,
        values
      } = this.props
      return (
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.radioGroupIsComing}>
            <RadioButton
              error={errors.is_coming}
              name="is_coming"
              onBlur={handleBlur}
              onChange={handleChange}
              options={presenceOptions}
              selectedValue={values.is_coming}
              title="Will you come to our wedding?"
              touched={touched.is_coming}
            />
          </div>
          <TextBox
            error={errors.name}
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            style={styles.inputName}
            title="What's your name?"
            touched={touched.name}
            value={values.name}
          />
          {values.is_coming === '1' && (
            <div style={styles.checkboxGroupLocations}>
              <Checkbox
                error={errors.locations}
                name="locations"
                onBlur={handleBlur}
                onChange={setFieldValue}
                options={locationOptions}
                selectedValues={values.locations}
                title="Which event will you come to?"
                touched={touched.locations}
              />
            </div>
          )}
          {values.is_coming === '1' && (
            <TextBox
              error={errors.pax}
              name="pax"
              onChange={handleChange}
              onBlur={handleBlur}
              style={styles.inputPax}
              title="How many persons will come? (including you)"
              touched={touched.pax}
              value={values.pax}
            />
          )}
          <button
          className="button-style"
            style={styles.submitButton}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting && (
              <img asrc="/img/bars.svg" style={styles.spinner} />
            )}
            <span style={{}}>Submit</span>
          </button>
        </form>
      )
    }
  
    renderSuccessPage() {
      const { values } = this.props
  
      return (
        <SuccessPage>
          <h2 className="title">Thank you for your Response!</h2>
          {values.locations &&
            values.locations.indexOf('sg') !== -1 && (
              <div
                title="Add to Calendar (SG)"
                className="addeventatc"
                style={styles.addToCalendar}
              >
                Add to Calendar (SG)
                <span className="start">09/08/2018 11:00 AM</span>
                <span className="end">09/08/2018 01:00 PM</span>
                <span className="timezone">Asia/Singapore</span>
                <span className="calname">YY-SG</span>
                <span className="title">Yonas & Yulin - Holy Matrimony</span>
                <span className="location">
                  Bukit Batok Presbyterian Church, 21 Bukit Batok St 11, Singapore
                </span>
                <span className="description">East Sanctuary 2nd Floor</span>
              </div>
            )}
          {values.locations &&
            values.locations.indexOf('jkt') !== -1 && (
              <div
                title="Add to Calendar (JKT)"
                className="addeventatc"
                style={styles.addToCalendar}
              >
                {/* <AddToCalendarIcon src="/img/calendar.svg" /> */}
                Add to Calendar (JKT)
                <span className="start">09/15/2018 07:00 PM</span>
                <span className="end">09/15/2018 09:00 PM</span>
                <span className="timezone">Asia/Jakarta</span>
                <span className="calname">YY-JKT</span>
                <span className="title">Yonas & Yulin - Wedding Reception</span>
                <span className="location">
                  Hotel Ciputra, Jl. Letnan Jenderal S. Parman, West Jakarta
                </span>
                <span className="description">Dian Ballroom 6th Floor</span>
              </div>
            )}
        </SuccessPage>
      )
    }
  
    render() {
      const { values } = this.props
      const showForm = !this.props.status || !this.props.status.hasSubmitted
      return (
        <div style={{ height: '100%' }}>
          {showForm && this.renderForm()}
          {!showForm && this.renderSuccessPage()}
  
          <ToastContainer />
        </div>
      )
    }
  }

  export default InnerForm;