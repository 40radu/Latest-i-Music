import React from 'react'

type Props = {
    width : string,
    height : string,
    strokeColor : string,
    fillColor? : string
}

function IconDeliveryCar({ width , height , strokeColor , fillColor = 'none' }: Props) {
    return (
        <svg width={width} height={height} viewBox="0 0 30 30" fill={fillColor} xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_137_35)">
                <path d="M6.25 21.25C6.25 21.913 6.51339 22.5489 6.98223 23.0178C7.45107 23.4866 8.08696 23.75 8.75 23.75C9.41304 23.75 10.0489 23.4866 10.5178 23.0178C10.9866 22.5489 11.25 21.913 11.25 21.25C11.25 20.587 10.9866 19.9511 10.5178 19.4822C10.0489 19.0134 9.41304 18.75 8.75 18.75C8.08696 18.75 7.45107 19.0134 6.98223 19.4822C6.51339 19.9511 6.25 20.587 6.25 21.25Z" stroke={strokeColor} strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18.75 21.25C18.75 21.913 19.0134 22.5489 19.4822 23.0178C19.9511 23.4866 20.587 23.75 21.25 23.75C21.913 23.75 22.5489 23.4866 23.0178 23.0178C23.4866 22.5489 23.75 21.913 23.75 21.25C23.75 20.587 23.4866 19.9511 23.0178 19.4822C22.5489 19.0134 21.913 18.75 21.25 18.75C20.587 18.75 19.9511 19.0134 19.4822 19.4822C19.0134 19.9511 18.75 20.587 18.75 21.25Z" stroke={strokeColor} strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.25 21.25H3.75V16.25M2.5 6.25H16.25V21.25M11.25 21.25H18.75M23.75 21.25H26.25V13.75M26.25 13.75H16.25M26.25 13.75L22.5 7.5H16.25" stroke={strokeColor} strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.75 11.25H8.75" stroke={strokeColor} strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_137_35">
                    <rect width="30" height="30" fill="white" />
                </clipPath>
            </defs>
        </svg>

    )
}

export default IconDeliveryCar