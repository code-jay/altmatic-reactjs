'use client'

import { useSearchParams } from 'next/navigation'
import { useRef, useEffect } from 'react'
import React from 'react'
import './Footer.css'
import Link from 'next/link'

const Footer = () => {
  return (
   <div className="f-wrapper">
        <div className="container">
            <div className="f-container">
                <div className="f-menu">
                    <span><Link href="/privacy-policy">Privacy Policy</Link></span>
                    <span><Link href="/refund-cancellation">Refund & Cancellation</Link></span>
                    <span><Link href="/terms-conditions">Terms & Conditions</Link></span>
                </div>
            </div>
        </div>
   </div>
  )
}

export default Footer