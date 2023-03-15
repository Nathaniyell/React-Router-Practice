import React from 'react'
import { useLoaderData, Link } from 'react-router-dom'

function Careers() {
    const careers = useLoaderData()
    //This special hook that comes with the react-router-dom helps us keep the loaded data from the API
    //While also enabling us have a access of the data for usage


  return (
    <div className='careers'>
      {careers.map((career)=>{
        return <Link to={career.id.toString()} key={career.id}>
            <p>{career.title}</p>
            <p>Based in {career.location}</p>
        </Link>
      })}
    </div>
  )
}

export default Careers


//loader

export const careersLoader = async () =>{
    //We fetch external data here with the fetch api
const res = await fetch('http://localhost:3500/careers')
if(!res.ok){
  throw Error("Could not fetch the careers")
}
return res.json()
}
//The data gotten here is exported to the route where we want to make use of it
