import React from 'react'
import { useState,useEffect } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const Coin = () => {
    const params = useParams()
    const [coin,setCoin] = useState({})
    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;


    useEffect(()=>{
        axios.get(url).then((res)=> {
            setCoin(res.data)
        }).catch((error)=>{
            console.log(error)
        })
    },[])
  return (
    <div>
       
    </div>
  )
}

export default Coin