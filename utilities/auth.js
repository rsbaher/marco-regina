import { google } from 'googleapis'

const googleService = JSON.parse(process.env.NEXT_PUBLIC_GOOGLE_CRED)

const auth = new google.auth.JWT(
    googleService.client_email,
    null,
    googleService.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']);
//authenticate request
auth.authorize(function (err, tokens) {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log("Successfully connected!");
    }
}); 

export default auth;