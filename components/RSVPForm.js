import { Component } from 'react'
import { Formik, withFormik } from 'formik'
import styled from 'styled-components'

import { getFormData, uuidv4 } from '../utilities/helper'
import InnerForm from './InnerForm'
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

const RSVPForm = withFormik({
  mapPropsToValues: props => ({
    name: '',
    locations: [],
    pax: ''
  }),
  validate: (values, props) => {
    const errors = {}
    if (!values.is_coming) {
      errors.is_coming = 'Please indicate your presence'
    }

    if (!values.name) {
      errors.name = 'Please specify your name'
    }

    // Required details if coming
    if (values.is_coming === '1') {
      if (!values.locations || values.locations.length < 1) {
        errors.locations = 'Please indicate which event you will come to'
      }

      if (!values.pax) {
        errors.pax = 'Please specify the number of persons'
      } else if (isNaN(parseInt(values.pax))) {
        errors.pax = 'Please input a valid number'
      }
    }

    return errors
  },
  handleSubmit: (
    values,
    { props, resetForm, setSubmitting, setErrors, setStatus }
  ) => {
    // generates UUID
    values.id = uuidv4()

    if (values.is_coming === '1') {
      values.is_jkt = values.locations.includes('jkt') ? 1 : 0
      values.is_sg = values.locations.includes('sg') ? 1 : 0
    }

    fetch(formURL, { method: 'POST', body: getFormData(values) })
      .then(res => {
        setSubmitting(false)
        // Don't reset values.locations cos it's used by Add to calendar
        // resetForm({
        //   name: '',
        //   locations: [],
        //   pax: ''
        // })

        // pass form submission state to lower order component
        setStatus({ hasSubmitted: true })
      })
      .catch(err => {
        setSubmitting(false)
        setErrors(err)
        toast(`Oops! There is an error in your submission (err: ${err})`, {
          className: 'toast-background-err',
          bodyClassName: 'toast-body',
          progressClassName: 'toast-progress-err'
        })
      })
  }
})(InnerForm)

  export default RSVPForm;