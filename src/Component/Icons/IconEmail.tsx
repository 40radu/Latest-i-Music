import React from 'react'


type Props = {
    fillPathColor: string,
    width: string,
    height: string,
    fillColor?: string,

}

function IconEmail({ fillPathColor, width, height, fillColor = 'none' }: Props) {
    return (
        <svg width={width} height={height} viewBox="0 0 30 30" fill={fillColor} xmlns="http://www.w3.org/2000/svg">
            <path d="M13.75 13.75L3.75 7.5V20H16.25V22.5H3.75C3.0625 22.5 2.47417 22.2554 1.985 21.7663C1.49583 21.2771 1.25083 20.6883 1.25 20V5C1.25 4.3125 1.495 3.72417 1.985 3.235C2.475 2.74583 3.06333 2.50083 3.75 2.5H23.75C24.4375 2.5 25.0263 2.745 25.5163 3.235C26.0063 3.725 26.2508 4.31333 26.25 5V11.25H23.75V7.5L13.75 13.75ZM13.75 11.25L23.75 5H3.75L13.75 11.25ZM23.75 27.5C22.375 27.5 21.1979 27.0104 20.2188 26.0312C19.2396 25.0521 18.75 23.875 18.75 22.5V16.875C18.75 16 19.0521 15.2604 19.6562 14.6562C20.2604 14.0521 21 13.75 21.875 13.75C22.75 13.75 23.4896 14.0521 24.0938 14.6562C24.6979 15.2604 25 16 25 16.875V22.5H22.5V16.875C22.5 16.7083 22.4375 16.5625 22.3125 16.4375C22.1875 16.3125 22.0417 16.25 21.875 16.25C21.7083 16.25 21.5625 16.3125 21.4375 16.4375C21.3125 16.5625 21.25 16.7083 21.25 16.875V22.5C21.25 23.1875 21.495 23.7763 21.985 24.2663C22.475 24.7563 23.0633 25.0008 23.75 25C24.4367 24.9992 25.0254 24.7546 25.5163 24.2663C26.0071 23.7779 26.2517 23.1892 26.25 22.5V17.5H28.75V22.5C28.75 23.875 28.2604 25.0521 27.2812 26.0312C26.3021 27.0104 25.125 27.5 23.75 27.5ZM3.75 7.5V5V20V7.5Z" fill={fillPathColor}/>
        </svg>
    )
}

export default IconEmail

