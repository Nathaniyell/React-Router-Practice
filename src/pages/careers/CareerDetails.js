import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export default function CareerDetails() {
const { id } = useParams()
const career = useLoaderData()

  return (
    <div className='career-details'>
        <h2>Career Details for {career.title}</h2>
        <p>Starting salary: {career.salary}</p>
        <p>Location: {career.location}</p>
        <div className="details">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores iusto, aliquam omnis eveniet ea architecto deleniti odio repellendus enim odit illum ad reiciendis laboriosam, consequatur commodi culpa eum quam labore, unde ducimus minima nam. Molestias illo quasi, fugiat ab accusantium incidunt sint sapiente earum debitis maxime atque. Natus, ad eaque!
        </div>
    </div>
  )
}

//Loader function
export const careerDetailsLoader = async({params})=>{
    const {id} = params

    const res = await fetch(`http://localhost:3500/careers/${id}`)
    if(!res.ok){
        throw Error("Could not find that career")
    }
    return res.json()
}

