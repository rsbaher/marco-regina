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
import 'react-toastify/dist/ReactToastify.css'
import RSVPForm from '../components/RSVPForm'
import Layout from '../components/Layout'
import Floral from '../components/Floral'
import Card from '../components/card'
import CardTitle from '../components/CardTitle'

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
const DivContainer2 = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr;
grid-gap: 1em;
margin: auto;
max-width: 700px;
padding: 1em;

@media (max-width: 414px) {
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
}
`

function getEvents(locations) {
  if (!locations) return ''

  let comingEvents = []
  locations.forEach((location, index) => {
    if (events[location]) {
      comingEvents.push(events[location])
    }
  })
  return comingEvents
}

export default function RSVP () {
  return (
  <Layout>
    <section className="content1">
    <Subtitle style={{ width: '100%'}}>Event Details</Subtitle>
      <DivContainer2>
        
        <Card venue="sg" style={{ textAlign: 'center', backgroundColor: '#ffe6e6' }}>
          <CardTitle>Itenerary</CardTitle>
          <p>Itenerary with google maps embeded  and average travel times</p>
        </Card>
        <Card venue="sg" style={{ textAlign: 'center', backgroundColor: '#ffe6e6' }}>
          <CardTitle>Hotels</CardTitle>
          <p>List Hotel Options</p>
          <p>Please select if you would like to join into the room block, if so please select the hotel you prefer. Find hotel that has shuttle</p>
        </Card>
        <Card venue="sg" style={{ textAlign: 'center', backgroundColor: '#ffe6e6' }}>
          <CardTitle>Meal Options</CardTitle>
          <p>Describe options</p>
        </Card>
      </DivContainer2>
    </section>
    <section className="content2">
      <Floral />

      <Subtitle>R.S.V.P.</Subtitle>
      <RSVPForm />

    </section>
  </Layout>
)}