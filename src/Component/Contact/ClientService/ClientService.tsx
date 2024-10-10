import React from 'react'
import styles from './_clientService.module.scss'
import Image from 'next/image'
import customerIc from '../../../Icons/customer_service.svg'
import IconEmail from '@/Component/Icons/IconEmail';
import IconEarphone from '@/Component/Icons/IconEarphone';

interface IClientService {
    title: 'customer service' | 'E-mail';

}

function ClientService({ title }: IClientService) {
    return (
        <section className={styles.customer_service}>
            <div className={styles.wrapper_title}>
                <h4> {title} </h4>
                {title === 'customer service' ? <IconEarphone width='30' height='30' fillPathColor='#E11D07' /> : ''}
                {title === 'E-mail' ? <IconEmail width='30' height='30' fillPathColor='#E11D07' /> : ''}
            </div>


            {title === 'customer service' ?
                <p className={styles.descri}>Customer service is available <span>7/7 </span>from<span> 9-17h</span>.
                    Phone number : +267184818118</p>
                : ''}

            {title === 'E-mail' ?
                <p className={styles.descri}>You will receive a reply within <span>24 hours </span>
                    by e-mail from: imusical@gmail.com</p>
                : ''}

        </section>
    )
}

export default ClientService