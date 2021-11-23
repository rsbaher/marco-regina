import {Google} from 'googleapis'

export async function getServerSideProps({query}){
    return {
        props: {
            title,
            content
        }
    }
}