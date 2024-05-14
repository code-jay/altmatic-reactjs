import React from 'react'
import { ourCourse2, ourCourses } from '@/src/utils/data'
import Image from "next/image"
import './OurCourses.css'

const OurCourses = () => {
  return (
<div className="oc-wrapper">
    <div className="container">
        <div className="oc-container">
            <div className="oc-head">
                <span className='title'>Our Courses</span>
            </div>

            <div className="oc-features">
                {
                    ourCourses.map((feature, i)=>(
                        <div key={i} className='oc-feature'>
                            <Image
                                src={feature.icon}
                                alt="feature"
                                width={175}
                                height={140}
                            />
                            <span className='sec-title'>{feature.title}</span>
                            <div className="oc-feature-text">
                                <span className='text'>{feature.duration}</span>
                                <span className='text'>{feature.livesession}</span>
                            </div>
                        </div>
                    ))}
            </div>
            <div className="oc-features">
                {
                    ourCourse2.map((feature, i)=>(
                        <div key={i} className='oc-feature'>
                            <Image
                                src={feature.icon}
                                alt="feature"
                                width={175}
                                height={140}
                            />
                            <span className='sec-title'>{feature.title}</span>
                            <div className="oc-feature-text">
                                <span className='text'>{feature.duration}</span>
                                <span className='text'>{feature.livesession}</span>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    </div>
</div>  

)}

export default OurCourses