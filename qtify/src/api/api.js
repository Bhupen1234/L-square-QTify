import axios from "axios";

export const BACKEND_ENDPOINT="https://qtify-backend-labs.crio.do";

export const fetchTopAlbums= async()=>{
    try {
       
        const res= await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
        console.log("Inside API ")
        return (res.data);
    } catch (error) {
        
        console.error(error);
    }

}