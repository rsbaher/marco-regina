import {auth, ACC_T} from './auth'
import { google } from 'googleapis'
import axios from './axios'

export async function getSheetData() {
  let data = {test: "test"};
  const sheets = google.sheets({ version: 'v4', auth });
  const range = `rsvp!A2:H9`;

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.NEXT_PUBLIC_GOOGLE_SHEET,
    range,
  });

  data = response.data.values;
  console.log("Loaded data");
  const FormatedData = formatData(data);
  
  return FormatedData
}

function formatData(data){
  const formatted = [];
  console.log("Formatting data...")
  data.forEach(function (el){
    let obj = {
      fName: String(el[0]),
      lName: String(el[1]),
      email: String(el[2]),
      rsvp: parseInt(el[3]),
      meal: parseInt(el[4]),	
      hotelRooms:	parseInt(el[5]),
      isUnder12: parseInt(el[6]),
      isUnder21: parseInt(el[7]),
    }
    formatted.push(obj)
  })
  return formatted;
}

function apiFormat(guests){}

// Accepts an array of guests
function formFormat(data, mode=1){
  let formatted = [];
  console.log("Formatting data...")
  switch (mode) {
    case 1:
      data.forEach(function (guest){
        let fullname = guest.fullname.split(" ")
        let meal = parseInt(guest.rsvpMeal)
        let obj = {
          fName: String(fullname[0]),
          lName: String(fullname[1]),
          email: String(guest.email),
          rsvp: parseInt(guest.rsvpStatus),
          meal: String(process.env.MEAL_OPTIONS[meal]),	
          hotelRooms:	parseInt(guest.hotelRooms),
          isUnder12: parseInt(guest.isUnder12),
          isUnder21: parseInt(guest.isUnderage),
        }
        formatted.push(obj)
      })
      break;
    case 2:
      data.forEach(function(codes){
        let obj = {
          code: String(codes.code),
          email: String(codes.email)
        }
        formatted.push(obj)
      })
      break;
    default:
      break;
  }
  return formatted;
}

export async function getCodes(code=null, email=null){
  let URL = "/email-code/event/" + process.env.NEXT_PUBLIC_EVENT_ID

  try { 
    const response = await axios.get(URL);
    console.log(response);
    let results = formFormat(response.data)
    
    if(code){
      results = results.filter(function(el){
        return el.code == code
        })
    }
    if(email){
      results = results.filter(function(el){
        return el.email == email
        })
    }
    console.log(results);
    return results

  } catch (e) {
      console.log("Error Retrieving Codes: ", e.toJSON());
      return {error: "Error occured while retrieving data with email: "  + email}
  }
}

export async function getGuestsUsingCode(code){
  const codes = await getCodes(code, null)
  let codeRes = codes[0]
  let URL = "/guest-email/" + codeRes.email
  console.log("getGuestsUsingCode URL: ", URL)

  try { 
    const response = await axios.get(URL);
    console.log("getGuestsUsingCode response: ", response);
    let results = formFormat(response.data)
    console.log("getGuestsUsingCode results: ", results);
    return results

  } catch (e) {
      console.log("Error Retrieving Guests using code: ", e.toJSON());
      return {
        error: "Error occured while retrieving data with code: " + code + " and  email: "+ codeRes.email
      }
  }
}

export async function getGuests(email=null){
  let URL = ""
  if(email && email != null) {
    //todo get guests by email
    URL = "/guest-email/" + email
  } else {
    //todo return all guests by event ID
    URL = "/guest/event/" + process.env.NEXT_PUBLIC_EVENT_ID
  }

  try { 
    const response = await axios.get(URL);
    console.log(response);
    let results = formFormat(response.data)
    console.log(results);
    return results

  } catch (e) {
      console.log("Error Retrieving Guest Data: ", e.toJSON());
      return {error: "Error occured while retrieving data with email: "+email}
  }
}

export async function updateGuests(data){
  // todo foreach guest, update guest
}