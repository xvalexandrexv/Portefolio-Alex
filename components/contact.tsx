"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import { useSectionInView } from '@/lib/hooks';
import { motion } from "framer-motion"; 
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';



export default function Contact() {
const { ref } = useSectionInView("Contact", 0.5);


return (
    <motion.section 
        ref={ref} 
        id="contact" 
        className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
        initial={{opacity: 0}}
        whileInView={{opacity:1}}
        transition={{duration: 1}}
        viewport={{once: true}}
        >
        <SectionHeading>Contact Me</SectionHeading>
            <p className="text-gray-700 -mt-6">Please contact me directly at {" "}
                <a className="underline" 
                href="mailto:alexandrefigueiredoesilva@gmail.com">
                alexandrefigueiredoesilva@gmail.com</a> {" "}
                or through this form.
            </p>

            <form 
                className="mt-10 flex flex-col"
                action={async formData => {
                    await sendEmail(formData)
                    
                }} // tratamento do submite em next.JS
                >
                <input 
                    className="h-14 px-4 rounded-lg borderBlack"
                    name="senderEmail" 
                    type="email"
                    required // verrificaçao do lado do cliente se o email esta correto
                    maxLength={500}
                    placeholder="Your email"
                    />
                <textarea 
                    className="h-52 my-3 rounder-lg borderBlack p-4"
                    name="message"
                    placeholder="Your message"
                    required
                    maxLength={5000}
                    />
                <SubmitBtn/>
            </form>
    </motion.section>
  )
}
