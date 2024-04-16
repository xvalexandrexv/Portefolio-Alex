"use server";

import { error } from "console";
import { Resend } from "resend";
import { validateString, getErrorMesage } from "@/lib/utils";
import ContactformEmail from "@/email/contact-form-email";
import React from "react";


const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    // verificaçao/validaçao do lado do servidor se existe mensagem
    // ou se o email est correto
    if(!validateString(senderEmail, 500)) {
        return {
            error: "Invalid sender email"
        }
    }
    
    if(!validateString(message, 5000)) {
        return {
            error: "Invalid message"
        }
    }

    try {
        await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "xvalexandrexv@gmail.com",
            subject: "Message from contact form",
            reply_to: senderEmail as string,
            react: React.createElement(ContactformEmail, {
                message: message as string, 
                senderEmail: senderEmail as string,
            })
            //react: <ContactForEmail message={message} senderEmail={senderEmail}/>
        }); 
    } catch (error: unknown){
      return{
            error: getErrorMesage(error)
      }
    } 
}