import {getToken, ACC_T} from './auth'
import { google } from 'googleapis'


export async function getPhotos() {
    let newToken = await getToken()
    console.log("getPhotos newToken: ", newToken)
    console.log("getPhotos ACC_T", ACC_T)
    return ["https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80", 
    "https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg"]
}

