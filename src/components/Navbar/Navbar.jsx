"use client"

import React, { useState } from 'react'
import './Navbar.css'
import {BiMenuAltRight} from 'react-icons/bi'
import {RxCross2} from 'react-icons/rx'
import { logos } from '@/src/utils/data'
import Image from "next/image"


import {motion, useMotionValueEvent, useScroll} from 'framer-motion'

const Navbar = () => {
    const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
    const [navStyle, setNavStyle] = useState("");
    const {scrollYProgress} = useScroll();
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if(latest > 0.2){
            setNavStyle("sticky");
        }else{
            setNavStyle("");
        }
    })

  return (
    <div className={'n-wrapper ${navStyle}'}>
        {/* Desktop Version*/}
        <div className="container">
            <div className="n-container">
                <div className="n-logo">
                    
                    
                    <span>Altmatic Academy</span>
                </div>
                <div className="n-right">
                    <div className="n-menu">
                        <span>Courses</span>
                        <span>About Us</span>
                        <span>Blog</span>
                        <span>Contact Us</span>
                    </div>
                    <div className="apply-button">
                        Apply
                    </div>
                </div>
            </div>
        </div>

        {/* Mobile/tab Version */}

        <div className="nm-container">
        {/* logo */}
        <span>Altmatic Academy</span>

        { /* Menu icon */}
        {
        !mobileMenuOpened ?
        <BiMenuAltRight size={30} onClick={() => setMobileMenuOpened(true)} />:
        <RxCross2 size={30} onClick={() => setMobileMenuOpened(false)} />
        }

        {/* mobile menu*/}
        <div className="nm-menu"
        style={{transform: mobileMenuOpened && "translateX(0%)"}}
        >
        <span>Courses</span>
        <span>About Us</span>
        <span>Blog</span>
        <span>Contact Us</span>
        <div className="m-apply-button">
            Apply
        </div>
        </div>
       

        </div>
    </div>
  )
}

export default Navbar