import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const[data, setData] = useState([]);

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Piyush-Piyush')
    //     .then(resoponse => resoponse.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // },[Github])

    const data = useLoaderData()
  return (
    <>
    <div className='flex items-center justify-center'>
        <div><img className='size-12' src={data.avatar_url} alt="avatar" /></div>
        <div className='text-center m-4 bg-gray-600 text-white text-3xl'>Github followers : {data.followers}</div>
    </div>
    </>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const resoponse = await fetch('https://api.github.com/users/Piyush-Piyush')
    return resoponse.json()
}