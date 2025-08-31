import axios from "axios"
import { useEffect, useState } from "react"


const useFetch =(url)=>{
    const [data, setdata] =useState(null)
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState(null)

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const response = await axios.get(url)
                setdata(response.data)
            }catch(err){
                seterror(err)
            } finally{
                setloading(false)
            }
        }
        fetchData()
    },[url])
    return {data, loading, error}
}

export default useFetch