import axios from 'axios';
import React, { useEffect, useState } from 'react'


const FetchingApis = () => {
    const [data, setdata] = useState("")
    const [Excuse, setExcuse] = useState(0)
    useEffect(() => {
        axios.get("https://excuser-three.vercel.app/v1/excuse/").then((res) => {
            setdata(res.data[0]);
            console.log(res.data);
        })
    }, [ Excuse])

    const newExcuse=()=>{
        setExcuse(Excuse+1);
        console.log(Excuse);
    }

    return (
        <>
        <div>
            <b>Uid:</b> {data.id} <br /> <b>Excuse:</b> {data.excuse}
        </div>
        <button onClick={newExcuse}>other excuses</button>
        </>
    )
}

export default FetchingApis