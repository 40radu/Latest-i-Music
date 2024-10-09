import ClientService from '@/Component/Contact/ClientService/ClientService'
import Hero from '@/Component/Contact/Hero/Hero'
import React from 'react'
import styles from './_contact.module.scss'
import Input from '@/Component/global/Input/Input'
import TxtArea from '@/Component/Contact/Txt-Area/TxtArea'
import Button from '@/Component/global/Button/page'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "I-Musical | Contact",
  description: "Vendre des instruments de musique",
};

function Contact() {

  async function handleAction(formData: any) {
    "use server"
    console.log(formData)
  }
  return (
    <div className={styles.contact_container}>

      <Hero />

      <div className={styles.wrapper_services}>

        <div className={styles.customer_service}>
          <ClientService title='customer service' />
          <ClientService title='E-mail' />
        </div>

        <form className={styles.wrapper_form} action={handleAction}>
          <Input icon='user' type='text' placeholder='enter your name' inputName='name' />
          <Input icon='email' type='email' placeholder='enter your email' inputName='name' />
          <TxtArea />
          <Button type='submit' className='primary' value='Send' />
        </form>

      </div>


    </div>
  )
}

export default Contact