import React from 'react'


type Props = {
    fillPathColor: string,
    width: string,
    height: string,
    fillColor?: string,

}

function IconUser({ fillPathColor, width, height, fillColor = 'none' }: Props) {
    return (
        <svg width={width} height={height} viewBox="0 0 30 30" fill={fillColor} xmlns="http://www.w3.org/2000/svg">
            <path d="M26.8584 24.9609C25.0056 21.7594 22.0971 19.5129 18.7174 18.5601C20.3605 17.7249 21.6745 16.3606 22.4473 14.6872C23.2202 13.0138 23.407 11.1289 22.9776 9.33637C22.5481 7.54385 21.5275 5.9482 20.0802 4.80671C18.633 3.66523 16.8434 3.04443 15.0002 3.04443C13.1569 3.04443 11.3674 3.66523 9.92014 4.80671C8.47288 5.9482 7.45224 7.54385 7.02279 9.33637C6.59335 11.1289 6.78013 13.0138 7.55302 14.6872C8.3259 16.3606 9.63985 17.7249 11.283 18.5601C7.9033 19.5117 4.99471 21.7582 3.14197 24.9609C3.0911 25.0409 3.05694 25.1304 3.04155 25.224C3.02616 25.3176 3.02985 25.4133 3.05242 25.5054C3.07498 25.5975 3.11594 25.6841 3.17283 25.76C3.22972 25.8358 3.30138 25.8994 3.38348 25.9469C3.46558 25.9943 3.55643 26.0247 3.65057 26.0361C3.7447 26.0476 3.84018 26.0398 3.93126 26.0134C4.02233 25.987 4.10712 25.9424 4.18052 25.8824C4.25392 25.8223 4.31442 25.7481 4.35838 25.664C6.60955 21.7746 10.5869 19.4531 15.0002 19.4531C19.4135 19.4531 23.3908 21.7746 25.642 25.664C25.6859 25.7481 25.7464 25.8223 25.8198 25.8824C25.8932 25.9424 25.978 25.987 26.0691 26.0134C26.1602 26.0398 26.2556 26.0476 26.3498 26.0361C26.4439 26.0247 26.5348 25.9943 26.6169 25.9469C26.699 25.8994 26.7706 25.8358 26.8275 25.76C26.8844 25.6841 26.9254 25.5975 26.9479 25.5054C26.9705 25.4133 26.9742 25.3176 26.9588 25.224C26.9434 25.1304 26.9093 25.0409 26.8584 24.9609ZM8.2033 11.25C8.2033 9.90568 8.60193 8.59158 9.34878 7.47384C10.0956 6.3561 11.1572 5.48492 12.3991 4.97049C13.6411 4.45605 15.0077 4.32144 16.3262 4.5837C17.6446 4.84596 18.8557 5.4933 19.8063 6.44386C20.7569 7.39442 21.4042 8.60551 21.6665 9.92397C21.9287 11.2424 21.7941 12.6091 21.2797 13.851C20.7652 15.093 19.8941 16.1545 18.7763 16.9014C17.6586 17.6482 16.3445 18.0469 15.0002 18.0469C13.1982 18.0447 11.4706 17.3279 10.1965 16.0537C8.92227 14.7795 8.20547 13.052 8.2033 11.25Z" fill={fillPathColor}/>
        </svg>
    )
}

export default IconUser

