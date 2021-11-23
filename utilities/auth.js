import { google } from 'googleapis'

const auth = new google.auth.JWT(
    process.env.NEXT_PUBLIC_CLIENT_EMAIL,
    null,
    process.env.NEXT_PUBLIC_PRIVATE_KEY,
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