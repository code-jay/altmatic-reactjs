import React from 'react'
import './GetTrained.css'

function GetTrained() {
  return (
    <div className="gt-wrapper">
        <div className="container">
            <div className="gt-container">
                {/* head of section */}
                <div className="gt-head">
                    {/* <span className='tag'>Why to choose Altmatic Academy?</span> */}
                    <span className='title'>Get Trained and Move Towards your dream Job</span>
                    <span className='des'>Our Domain specialists and Capstone projects helps you to find your dream job and make your past work relavent.</span>
                </div>

                {/* two blocks */}
                <div className="gt-blocks">
                    {/* first block */}
                    <div className="gt-block">
                        <span className='sec-title'>
                            100% Live Online Classes
                        </span>
                        <span className='tex'>
                            Faculty led Live Interactive online classes. Ask doubts in live classroom
                        </span>
                    </div>
                    {/* second block */}
                    <div className="gt-block">
                    <span className='sec-title'>
                            Milestone & Capstone Projects
                        </span>
                        <span className='tex'>
                            Along with milestone projects, work on industry linked live projects                       
                        </span>
                    </div>
                    {/* third block */}
                    <div className="gt-block">
                    <span className='sec-title'>
                            Job Referral
                        </span>
                        <span className='tex'>
                            Job Referrals in MNCs
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GetTrained