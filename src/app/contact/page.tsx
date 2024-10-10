'use client'

import ClientService from '@/Component/Contact/ClientService/ClientService'
import Hero from '@/Component/Contact/Hero/Hero'
import React, { useState } from 'react'
import styles from './_contact.module.scss'
import Input from '@/Component/global/Input/Input'
import TxtArea from '@/Component/Contact/Txt-Area/TxtArea'
import Button from '@/Component/global/Button/page'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import ResponseForm from '@/Component/specifies/ResponseForm/ResponseForm'
import gsap from 'gsap'


// export const metadata: Metadata = {
//   title: "I-Musical | Contact",
//   description: "Vendre des instruments de musique",
// };

interface IFormData {
  name: string;
  email: string;
  message: string;
}

function Contact() {

  const [statusResponse, setStatusResponse] = useState<boolean>(true)

  const [formData, setFormData] = useState<IFormData>({
    name: '',
    email: '',
    message: ''
  })

  function handleChangeValue(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target

    setFormData((prevState) => {
      return (
        {
          ...prevState,
          [name]: value
        }
      )
    })

  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const responseForm = document.getElementById('responseForm') as HTMLDivElement

    setTimeout(() => {
      setStatusResponse(true)
      setFormData((prevState) => ({
        name: '',
        email: '',
        message: '',
      }))

      gsap.to(responseForm, {
        opacity: 1,
        duration: 0.5
      })

      
    }, 1000)

    gsap.to(responseForm, {
      opacity: 0,
      duration: 0.5,
      delay: 5
    })

    
  }
  return (
    <div className={styles.contact_container}>

      <Hero />

      <div className={styles.wrapper_services}>

        <div className={styles.customer_service}>
          <ClientService title='customer service' />
          <ClientService title='E-mail' />
        </div>

        <form className={styles.wrapper_form} onSubmit={handleSubmit}>
          <Input icon='user' type='text' placeholder='enter your name' inputName='name' onChange={handleChangeValue} value={formData.name} />
          <Input icon='email' type='email' placeholder='enter your email' inputName='email' onChange={handleChangeValue} value={formData.email} />
          <TxtArea onChange={handleChangeValue} value={formData.message} />
          <Button type='submit' className='primary' value='Send' />
        </form>

      </div>

      <ResponseForm />

    </div>
  )
}

export default Contact