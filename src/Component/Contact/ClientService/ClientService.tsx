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
                {title === 'customer service' ? <IconEarphone width='30' height='30' fillPathColor='#E11D07'/>: ''}
                {title === 'E-mail' ? <IconEmail width='30' height='30' fillPathColor='#E11D07'/> :''}
            </div>


            {title === 'customer service' ?
                <p className={styles.descri}>Le service client est disponible <span>7/7jrs</span> à partir de <span>9-17h</span>.
                    Numéro : +26718419411818118</p>
                : ''}

            {title === 'E-mail' ?
                <p className={styles.descri}>Vous aurez une réponse entre <span>1 à 2 jours ouvrables </span>
                sur votre boîte email : imusical@gmail.com</p>
                : ''}

        </section>
    )
}

export default ClientService