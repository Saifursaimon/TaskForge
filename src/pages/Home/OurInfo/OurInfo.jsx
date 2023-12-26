import React from 'react'
import hero1 from '../../../assets/hero1.png'
const OurInfo = () => {
    return (
        <div className="hero  mt-24">
  <div className="hero-content flex-col lg:flex-row justify-between">
    <img src={hero1} className="w-1/2" />
    <div>
      <h1 className="text-5xl font-bold capitalize leading-normal">How important it is for you to stay flexible</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Learn More</button>
    </div>
  </div>
</div>
    )
}

export default OurInfo