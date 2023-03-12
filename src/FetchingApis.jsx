import axios from 'axios';
import React, { useEffect, useState } from 'react'


const FetchingApis = () => {
    const [data, setdata] = useState("")
    const [Excuse, setExcuse] = useState('')

    const newExcuse = (category) => {
        axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}`).then((res) => {
            setdata(res.data[0]);
            console.log(res.data);
        })
    }

    const [Name, setName] = useState("");
    const [Prediction, setPrediction] = useState(null)

    const fetchData = () => {
        axios.get(`https://api.agify.io/?name=${Name}`).then((res) => {
            setPrediction(res.data)
            console.log(res.data);
        })
    }

    return (
        <>
            <h2>People and their excuses</h2>
            <div style={{ textAlign: 'left', margin: 'auto' }}>
                <b>Uid:</b> {data.id}
                <br />
                <b>Excuse:</b> {data.excuse}
                <br />
                <b>Category:</b> {data.category}
            </div>
            <button onClick={() => newExcuse("party")}>Party excuses</button>
            <button onClick={() => newExcuse("office")}>office excuses</button>
            <button onClick={() => newExcuse("family")}>family excuses</button>
            <br />
            &lt;-------------------------- x x x -----------------------&gt;

            <h2>Age Prediction Api</h2>
            <div>
                <input placeholder='ex:heera' type="text" onChange={(e) => setName(e.target.value)} />
                <br />
                <button onClick={fetchData}>Predict Age</button>
                <br /><br />
                <div className='data' style={{ border: '1px solid grey', padding: '1rem', maxWidth: '150px', margin: 'auto', textAlign: 'left' }}>
                    <b>NAME:</b>{Prediction?.name}
                    <br />
                    <b>AGE:</b> {Prediction?.age}
                    <br />
                    <b>COUNT:</b> {Prediction?.count}
                </div>
            </div>
        </>
    )
}

export default FetchingApis