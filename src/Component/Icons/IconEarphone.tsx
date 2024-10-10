import React from 'react'


type Props = {
    fillPathColor: string,
    width: string,
    height: string,
    fillColor?: string,

}

function IconEarphone({ fillPathColor, width, height, fillColor = 'none' }: Props) {
    return (
        <svg width={width} height={height} viewBox="0 0 30 30" fill={fillColor} xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_44_72)">
                <path d="M29.9956 16.7737C29.9984 16.1568 29.9013 13.8294 29.8273 13.1638C28.9741 5.5246 22.774 -0.0197754 15.0855 -0.0197754C7.07741 -0.0197754 0.589004 6.15085 0.148818 14.3329C0.139443 14.5115 0.0738184 15.7785 0.0691309 16.5327L0.0667871 16.9523C0.0283203 17.1257 0.00488281 17.3048 0.00488281 17.4894V23.7782C0.00488281 25.1516 1.12191 26.2687 2.49535 26.2687H5.02332C6.39676 26.2687 7.51423 25.1516 7.51423 23.7782V17.4899C7.51423 16.1165 6.39626 14.9994 5.02329 14.9994H2.49488C2.32578 14.9995 2.15711 15.0166 1.99145 15.0505C2.00551 14.7463 2.01816 14.5063 2.02147 14.4337C2.40726 7.26226 8.08991 1.85522 15.0855 1.85522C21.8027 1.85522 27.2182 6.69929 27.9635 13.3724C27.9949 13.6508 28.0352 14.3587 28.0675 15.0693C27.8861 15.0271 27.6991 14.9994 27.505 14.9994H25.0066C23.6332 14.9994 22.5161 16.1164 22.5161 17.4899V23.7496C22.5161 24.6979 23.0552 25.5149 23.8371 25.9349L17.8184 28.2979V28.145C17.8184 27.6275 17.3983 27.2075 16.8809 27.2075H14.0684C13.5508 27.2075 13.1309 27.6275 13.1309 28.145V29.0825C13.1309 29.6 13.5508 30.02 14.0684 30.02H16.8809C16.8888 30.02 16.8959 30.0177 16.9038 30.0177L18.5843 30.0111L28.2392 26.2208C28.3658 26.1683 28.4731 26.09 28.5613 25.9963C29.4064 25.5974 29.9965 24.7443 29.9965 23.7496V17.4899C29.9965 17.337 29.9778 17.1884 29.9511 17.0436C29.9768 16.9573 29.9951 16.8678 29.9956 16.7736L29.9956 16.7737ZM2.49491 16.8744H5.02294C5.36278 16.8744 5.63885 17.1501 5.63885 17.4899V23.7787C5.63885 24.1185 5.36228 24.3941 5.02288 24.3941H2.49494C2.1551 24.3941 1.8795 24.1185 1.8795 23.7787V17.4899C1.87994 17.1501 2.15554 16.8744 2.49491 16.8744ZM24.3907 17.4899C24.3907 17.1501 24.6664 16.8744 25.0062 16.8744H27.5047C27.8445 16.8744 28.1206 17.1501 28.1206 17.4899V23.7496C28.1206 24.0894 27.844 24.3651 27.5046 24.3651H25.0062C24.6663 24.3651 24.3907 24.0894 24.3907 23.7496V17.4899Z" fill={fillPathColor} />
            </g>
            <defs>
                <clipPath id="clip0_44_72">
                    <rect width={width} height={width} fill={fillColor} />
                </clipPath>
            </defs>
        </svg>
    )
}

export default IconEarphone

