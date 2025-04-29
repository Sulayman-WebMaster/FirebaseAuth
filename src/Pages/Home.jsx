
import React from 'react'
import { Link } from 'react-router'

const Home = () => {
    const singupWithFirebase = ()=>{
        
    }
    const singinWithFirebase = ()=>{

    }
  return (
    <div className='flex items-center justify-between gap-5'>
        <Link to="/signup"><button  className='btn btn-primary' onClick={()=>singupWithFirebase()}>Sign up</button></Link>
        <Link to="/signin"><button className='btn btn-warning' onClick={()=>singinWithFirebase()}>Sign in</button></Link>
       
    </div>
  )
}

export default Home