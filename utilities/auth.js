import { google } from 'googleapis'

const googleService = JSON.parse(process.env.NEXT_PUBLIC_GOOGLE_CRED)
let ACC_T = ""
//console.log("ACC_T 1: ", ACC_T);
const auth = new google.auth.JWT(
    googleService.client_email,
    null,
    googleService.private_key,
    ['https://www.googleapis.com/auth/spreadsheets', 'https://mail.google.com/', 'https://www.googleapis.com/auth/firebase.database']);
//authenticate request
auth.authorize(function (err, tokens) {
    if (err) {
        console.error(err)
        console.log(err);
        return;
    } else if (tokens.access_token === null) {
        console.log("Provided service account does not have permission to generate access tokens.");
        return
    } else {
        let accessToken = tokens.access_token;
        ACC_T = accessToken
        //console.log("ACC_T 2: ", ACC_T);
    }
});


export default {auth, ACC_T};