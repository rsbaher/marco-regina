
import Floral from '../components/Floral'
import {getSheetData} from '../utilities/helper'
import React, { useContext } from "react"
import { Context } from '../utilities/context'
import Layout from '../components/layout'


function RSVP(pageProps) {
  console.log("RSVP props: ", pageProps);
  const [context, setContext] = useContext(Context)
 // console.log("RSVP context: ", context);

  return (
    <Layout h1="Marco &amp; Regina" h2="R S V P">
      <section className="content1">
        <h2 className="title" style={{ width: '100%', paddingTop: '1em'}}>Event Details</h2>
        <div className="container-three-columns">
          <div className="text-align-center cards-div background-color-light-pink">
            <h3>Itenerary</h3>
            <p>Itenerary with google maps embeded  and average travel times</p>
          </div>
          <div className="text-align-center cards-div background-color-light-pink">
            <h3>Hotel</h3>
            <p>List Hotel Options</p>
            <p>Please select if you would like to join into the room block, if so please select the hotel you prefer. Find hotel that has shuttle</p>
          </div>
          <div className="text-align-center cards-div background-color-light-pink">
            <h3>Meal Options</h3>
            <p>Describe options</p>
          </div>
        </div>
      </section>
      <section className="content2">
        <Floral />

        <h2 className="title" >R S V P</h2>
        
      </section>
    </Layout>
  )
}

export async function getStaticProps(props) {

  // fetch data here
  const data = await getSheetData()
  console.log("rsvp.staticprops data[0]: ", data[1]);
  console.log("rsvp.staticprops props: ", props);
  if(props.index){
    console.log("props.index was read: ", props.index);
  }
  return {
    props: {
      rsvp: "rsvp data",
      data: data[1],
    }
  }
}

export default RSVP