import React from 'react'


type Props = {
    strokeColor: string,
    width: string,
    height: string,
    fillColor?: string,

}

function ShieldIcon({strokeColor, width, height, fillColor = 'none'}: Props) {
    return (
        <svg width={width} height={height} viewBox="0 0 30 30" fill={fillColor} xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_137_30)">
                <path d="M14.3254 26.0575C10.562 24.8909 7.40875 22.2905 5.54694 18.8181C3.68514 15.3457 3.26432 11.2801 4.37543 7.5C8.26984 7.67821 12.0806 6.33322 15.0004 3.75C17.9202 6.33322 21.731 7.67821 25.6254 7.5C26.4738 10.3864 26.4346 13.4612 25.5129 16.325" stroke={strokeColor} stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M18.75 23.75L21.25 26.25L26.25 21.25" stroke={strokeColor} stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_137_30">
                    <rect width="30" height="30" fill={fillColor} />
                </clipPath>
            </defs>
        </svg>
    )
}

export default ShieldIcon


