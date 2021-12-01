import GetInvitationForm from '../components/GetInvitationForm'
import Subtitle from '../components/subtitle'
import 'react-toastify/dist/ReactToastify.css'
import Floral from '../components/Floral'
import CardTitle from '../components/CardTitle'

export default function RSVP () {
  return (
    <>
    <section className="content1">
    <h2 className="title" style={{ width: '100%'}}>Event Details</h2>
      <div className="container-three-columns">
        <div style={{ textAlign: 'center'}} className="cards-div background-color-light-pink">
          <CardTitle>Itenerary</CardTitle>
          <p>Itenerary with google maps embeded  and average travel times</p>
        </div>
        <div style={{ textAlign: 'center', }} className="cards-div background-color-light-pink">
          <CardTitle>Hotels</CardTitle>
          <p>List Hotel Options</p>
          <p>Please select if you would like to join into the room block, if so please select the hotel you prefer. Find hotel that has shuttle</p>
        </div>
        <div style={{ textAlign: 'center', }} className="cards-div background-color-light-pink">
          <CardTitle>Meal Options</CardTitle>
          <p>Describe options</p>
        </div>
      </div>
    </section>
    <section className="content2">
      <Floral />

      <h2 className="title" >R.S.V.P.</h2>
      <GetInvitationForm />
    </section>
    </>
)}