import ClientService from '@/Component/Contact/ClientService/ClientService'
import Hero from '@/Component/Contact/Hero/Hero'
import React from 'react'
import styles from './_contact.module.scss'
import Input from '@/Component/global/Input/Input'
import TxtArea from '@/Component/Contact/Txt-Area/TxtArea'
import Button from '@/Component/global/Button/page'


function Contact() {
  return (
    <section className={styles.contact_container}>

      <Hero />

      <div className={styles.wrapper_services}>

        <div className={styles.customer_service}>

          <ClientService title='customer service' />

          <ClientService title='E-mail' />

        </div>

        <form className={styles.wrapper_form}>
          <Input icon='user' type='text' placeholder='enter your name' />
          <Input icon='email' type='email' placeholder='enter your email' />
          <TxtArea />
          <Button className='primary' value='Send' />
        </form>

      </div>


    </section>
  )
}

export default Contact