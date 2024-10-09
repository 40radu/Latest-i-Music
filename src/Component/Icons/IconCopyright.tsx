import React from 'react'

type Props = {
    width: string,
    height: string,
    strokeColor: string,
    fillColor?: string,
    fillColorPath : string
}

function IconCopyright({ width, height, strokeColor, fillColor = 'none'  , fillColorPath}: Props) {
    return (
        <svg width={width} height={height} viewBox="0 0 20 20" fill={fillColor} xmlns="http://www.w3.org/2000/svg">
            <rect x="1.5" y="1.07501" width="17" height="17.85" rx="10" stroke={strokeColor} strokeWidth="1.5" />
            <path d="M6.1172 9.9507C6.1172 9.0633 6.3008 8.2881 6.668 7.6251C7.0352 6.9621 7.5452 6.4521 8.198 6.0951C8.861 5.7381 9.6158 5.5596 10.4624 5.5596C11.5538 5.5596 12.4718 5.8605 13.2164 6.4623C13.961 7.0539 14.4404 7.8852 14.6546 8.9562H11.4722C11.2886 8.3952 10.9316 8.1147 10.4012 8.1147C10.0238 8.1147 9.7229 8.2728 9.4985 8.589C9.2843 8.895 9.1772 9.3489 9.1772 9.9507C9.1772 10.5525 9.2843 11.0115 9.4985 11.3277C9.7229 11.6439 10.0238 11.802 10.4012 11.802C10.9418 11.802 11.2988 11.5215 11.4722 10.9605H14.6546C14.4404 12.0213 13.961 12.8526 13.2164 13.4544C12.4718 14.0562 11.5538 14.3571 10.4624 14.3571C9.6158 14.3571 8.861 14.1786 8.198 13.8216C7.5452 13.4646 7.0352 12.9546 6.668 12.2916C6.3008 11.6286 6.1172 10.8483 6.1172 9.9507Z" fill={fillColorPath} />
        </svg>
    )
}

export default IconCopyright