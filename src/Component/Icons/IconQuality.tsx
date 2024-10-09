import React from 'react'

type Props = {
    width: string,
    height: string,
    strokeColor: string,
    fillColor?: string
}

function IconQuality({ width, height, strokeColor, fillColor = 'none'}: Props) {
    return (
        <svg width={width} height={height} viewBox="0 0 48 48" fill= {fillColor} xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="45.9333" height="46.1667" rx="22.9667" stroke={strokeColor} strokeDasharray="3 3" />
            <path d="M17.55 14H30.3833L34.9333 20.4983L23.9667 36.1667L13 20.4983L17.55 14ZM22.4033 15.1667L20.42 19.8333H27.5133L25.53 15.1667H22.4033ZM20.2683 21L23.9667 32.3867L27.665 21H20.2683ZM14.89 19.8333H19.16L21.1433 15.1667H18.1333L14.89 19.8333ZM14.7733 21L22.73 32.375L19.0433 21H14.7733ZM33.0433 19.8333L29.8 15.1667H26.79L28.7733 19.8333H33.0433ZM33.16 21H28.89L25.2033 32.375L33.16 21Z" fill="#E11D07" />
        </svg>

    )
}

export default IconQuality