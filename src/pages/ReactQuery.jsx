import React from 'react'
import { useQuery } from '@tanstack/react-query'
import  Axios  from 'axios'

const ReactQuery = () => {
        const {data:catsData,isLoading,refetch}= useQuery(["cat"],()=>{
            return Axios.get('https://catfact.ninja/fact').then((res)=>
                res.data
            )
        })
        if(isLoading){
            return     <div>
            <h3 style={{color:'gray'}}>Working with React Query by tanstack to get data from a cats api</h3>
            <h2>Loading...</h2>
        </div>
        }
  return (
    <div>
        <h3 style={{color:'gray'}}>Working with React Query by tanstack to get data from a cats api</h3>
        <p style={{padding:'1.2rem',border:'1px solid gray'}}>
        {catsData.fact}
        </p>
        <button onClick={refetch}>Refetch Data</button>

    </div>
  )
}

export default ReactQuery