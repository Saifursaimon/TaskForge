import React, { useContext } from 'react'
import banner from '../../../assets/banner.png'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthProvider'
const Banner = () => {
  const {user} = useContext(AuthContext)
    return (
        <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse justify-between">
        <img
          src={banner}
          className=" w-1/2 "
        />
        <div>
          <h1 className="text-5xl font-bold leading-relaxed">Manage All Your <br/> Team's <span className="bg-primary p-4 shape">Daily Tasks</span> <br/> More Efficiently</h1>
          <p className="py-6">
            Star building and developing your team by starting to manage <br/> your team work system.And create a comfortable and easy <br/> colaboration atmosphere.
          </p>
          <div className=' flex gap-5'>
          <Link to='/' className="btn btn-primary rounded-full">Learn More</Link>
          <Link to={user? '/dashboard/profile' : '/authentication/register'} className="btn btn-neutral rounded-full">Get Started</Link>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Banner