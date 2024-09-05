import React from 'react'
import styles from './_clientService.module.scss'
import Image from 'next/image'
import customerIc from '../../../Icons/customer_service.svg'
import mailIc from '../../../Icons/email.svg'

interface IClientService {
    title: 'customer service' | 'E-mail';

}

function ClientService({ title }: IClientService) {
    return (
        <section className={styles.customer_service}>
            <div className={styles.wrapper_title}>
                <h4> {title} </h4>
                {title === 'customer service' ? <Image src={customerIc} alt='' /> : ''}
                {title === 'E-mail' ? <Image src={mailIc} alt='' /> : ''}
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