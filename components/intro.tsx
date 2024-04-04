"use client"
import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'

export default function Intro() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className='relative'>
          <motion.div
          initial={{opacity:0, scale:0}}
          animate={{opacity:1, scale:1}}
          transition={{
            type: "tween",
            duration: 0.3,
          }}>
          <Image src="https://media.licdn.com/dms/image/D4D03AQGN2YDThY9I2A/profile-displayphoto-shrink_800_800/0/1706112266840?e=1717632000&v=beta&t=fNBnPxU3tCIK6wzNnVswv7ABWhXgM1f89HdCYP_NrGc" 
          alt="Alexandre portratit"
          width="192"
          height="192"
          quality="95"
          priority={true}
          className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white'
          />
          </motion.div>

          <motion.span className='absolute bottom-0 right-0 text-4xl'
          initial={{opacity:0, scale:0}}
          animate={{opacity:1, scale:1}}
          transition={{
            type: "spring",
            stiffness: 125,
            delay:0.2,
            duration: 0.1
          }}
          >
            👋</motion.span>
        </div>
      </div>

      <p>
      <span className="font-bold">Hello, I'm Ricardo.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">8 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </p>
    </section>
  )
}


// <Image src="https://media.licdn.com/dms/image/D4D03AQGN2YDThY9I2A/profile-displayphoto-shrink_800_800/0/1706112266840?e=1717632000&v=beta&t=fNBnPxU3tCIK6wzNnVswv7ABWhXgM1f89HdCYP_NrGc"
