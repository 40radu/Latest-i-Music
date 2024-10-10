import React from 'react'

type Props = {
    width: string,
    height: string,
    strokeColor: string,
    fillColor?: string
}

function IconDeliveryCarCircle({ width , height , strokeColor , fillColor = 'none' }: Props) {
    return (
        <svg width={width} height={height} viewBox="0 0 48 48" fill={fillColor} xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="45.9333" height="46.1667" rx="22.9667" stroke={strokeColor} strokeDasharray="3 3" />
            <path d="M34 31.2001C34 31.9957 33.6839 32.7588 33.1213 33.3214C32.5587 33.884 31.7957 34.2001 31 34.2001C30.2044 34.2001 29.4413 33.884 28.8787 33.3214C28.3161 32.7588 28 31.9957 28 31.2001C28 30.4044 28.3161 29.6414 28.8787 29.0788C29.4413 28.5161 30.2044 28.2001 31 28.2001C31.7957 28.2001 32.5587 28.5161 33.1213 29.0788C33.6839 29.6414 34 30.4044 34 31.2001ZM22 31.2001C22 31.9957 21.6839 32.7588 21.1213 33.3214C20.5587 33.884 19.7956 34.2001 19 34.2001C18.2044 34.2001 17.4413 33.884 16.8787 33.3214C16.3161 32.7588 16 31.9957 16 31.2001C16 30.4044 16.3161 29.6414 16.8787 29.0788C17.4413 28.5161 18.2044 28.2001 19 28.2001C19.7956 28.2001 20.5587 28.5161 21.1213 29.0788C21.6839 29.6414 22 30.4044 22 31.2001Z" stroke={strokeColor} strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M28 31.2H22M34 31.2H34.9156C35.1796 31.2 35.3116 31.2 35.422 31.1856C35.8193 31.1361 36.1887 30.9556 36.4719 30.6727C36.7551 30.3897 36.9358 30.0204 36.9856 29.6232C37 29.5116 37 29.3796 37 29.1156V25.8C37 23.7313 36.1782 21.7474 34.7154 20.2846C33.2526 18.8218 31.2687 18 29.2 18M28.6 28.8V18.6C28.6 16.9032 28.6 16.0548 28.072 15.528C27.5464 15 26.698 15 25 15H16.6C14.9032 15 14.0548 15 13.528 15.528C13 16.0536 13 16.902 13 18.6V28.2C13 29.322 13 29.8824 13.2412 30.3C13.3992 30.5736 13.6264 30.8008 13.9 30.9588C14.3176 31.2 14.878 31.2 16 31.2" stroke={strokeColor} strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21.792 24.6001L23.5752 23.1913C24.5244 22.4401 24.9996 22.0657 24.9996 21.6001M24.9996 21.6001C24.9996 21.1345 24.5244 20.7601 23.5752 20.0089L21.792 18.6001M24.9996 21.6001H16.5996" stroke={strokeColor} strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

export default IconDeliveryCarCircle