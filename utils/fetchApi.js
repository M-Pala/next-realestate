import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url)=>{
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '42b343b55cmsh5edaf3d0c93e9acp141dd2jsn11b2b3a459f0',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })

    return data
}