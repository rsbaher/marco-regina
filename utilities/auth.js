import { google } from 'googleapis'

const auth = new google.auth.JWT(
    process.env.GOOGLE_APPLICATION_CREDENTIALS.client_email,
    null,
    process.env.GOOGLE_APPLICATION_CREDENTIALS.private_key,
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