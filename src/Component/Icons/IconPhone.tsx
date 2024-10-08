import React from 'react'


type Props = {
    fillColorPath: string,
    width: string,
    height: string,
    fillColor?: string,

}

function IconPhone({ fillColorPath, width, height, fillColor = 'none' }: Props) {
    return (
        <svg width={width} height={height} viewBox="0 0 40 39" fill={fillColor} xmlns="http://www.w3.org/2000/svg">
            <path d="M32.8156 24.9925C30.8168 24.9925 28.8831 24.6675 27.0793 24.0825C26.7967 23.9873 26.493 23.9734 26.2028 24.0423C25.9126 24.1113 25.6477 24.2603 25.4381 24.4725L22.8868 27.6738C18.2881 25.48 13.9818 21.3362 11.6906 16.575L14.8593 13.8775C15.2981 13.4225 15.4281 12.7887 15.2493 12.22C14.6481 10.4162 14.3393 8.4825 14.3393 6.48375C14.3393 5.60625 13.6081 4.875 12.7306 4.875H7.10807C6.23057 4.875 5.17432 5.265 5.17432 6.48375C5.17432 21.58 17.7356 34.125 32.8156 34.125C33.9693 34.125 34.4243 33.1012 34.4243 32.2075V26.6013C34.4243 25.7238 33.6931 24.9925 32.8156 24.9925Z" fill={fillColorPath} />
        </svg>
    )
}

export default IconPhone


