"use client"

import Navbar from '@/src/components/Navbar/Navbar';
import Hero from '@/src/components/Hero/Hero';
import GetTrained from '@/src/components/GetTrained/GetTrained';
import OurCourses from '@/src/components/OurCourses/OurCourses';
import Footer from '@/src/components/Footer/Footer';
import {motion, useAnimation} from 'framer-motion'

import './page.css'


export default function Home() {
  const controls = useAnimation()
  return (
    <div className="app">
        <Navbar/>
        <Hero/>
        <GetTrained/>
        <OurCourses/>
        <Footer/>
    </div>
  );
}
