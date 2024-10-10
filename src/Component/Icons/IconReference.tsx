import React from 'react'

type Props = {
    width: string,
    height: string,
    strokeColor: string,
    fillColor?: string
}

function IconReference({ width, height, fillColor = 'none', strokeColor }: Props) {
    return (
        <svg width={width} height={height} viewBox="0 0 30 30" fill={fillColor} xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_137_25)">
                <path d="M24.8437 7.83747C25.2734 8.0818 25.6301 8.43619 25.8773 8.86417C26.1244 9.29215 26.2531 9.77826 26.25 10.2725V19.3775C26.25 20.3887 25.6962 21.3212 24.8025 21.8125L16.365 27.15C15.9467 27.3796 15.4772 27.5 15 27.5C14.5228 27.5 14.0533 27.3796 13.635 27.15L5.1975 21.8125C4.76021 21.5735 4.39515 21.2214 4.14051 20.7931C3.88587 20.3647 3.751 19.8758 3.75 19.3775V10.2712C3.75 9.25997 4.30375 8.32872 5.1975 7.83747L13.635 2.86248C14.0657 2.62502 14.5495 2.50049 15.0412 2.50049C15.533 2.50049 16.0168 2.62502 16.4475 2.86248L24.885 7.83747H24.8437Z" stroke={strokeColor} strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.25 15C11.25 15.9946 11.6451 16.9484 12.3483 17.6517C13.0516 18.3549 14.0054 18.75 15 18.75C15.9946 18.75 16.9484 18.3549 17.6517 17.6517C18.3549 16.9484 18.75 15.9946 18.75 15C18.75 14.0054 18.3549 13.0516 17.6517 12.3483C16.9484 11.6451 15.9946 11.25 15 11.25C14.0054 11.25 13.0516 11.6451 12.3483 12.3483C11.6451 13.0516 11.25 14.0054 11.25 15Z" stroke={strokeColor} strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_137_25">
                    <rect width="30" height="30" fill={fillColor} />
                </clipPath>
            </defs>
        </svg>

    )
}

export default IconReference