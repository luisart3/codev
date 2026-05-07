
interface IconProps {
    className?: string;
    size?: number;
    strokeWidth?: number;
}

export const MenuIcon = ({ className, size = 24, strokeWidth = 1.5 }: IconProps) => {
    return (
        <svg
            className={className}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M4 9H20" />
            <path d="M4 14.5H20.5" />
        </svg>

    );
}

export const ArrowRightIcon = ({ className, size = 25, strokeWidth = 1.5 }: IconProps) => {
    return (
        <svg
            className={className}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M14.4299 5.92999L20.4999 12L14.4299 18.07" />
            <path d="M11.01 12H20.33" />
            <path d="M3.5 12H6.97" />
        </svg>
    );
}

export const Global = ({ className, size = 24, strokeWidth = 1.5 }: IconProps) => {
    return (
        <svg
            className={className}
            width={size}
            height={size}
            strokeWidth={strokeWidth}
            stroke="currentColor"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinejoin="round"
            strokeLinecap="round"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
            <path d="M8.0001 3H9.0001C7.0501 8.84 7.0501 15.16 9.0001 21H8.0001" />
            <path d="M15 3C16.95 8.84 16.95 15.16 15 21" />
            <path d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16" />
            <path d="M3 9.00001C8.84 7.05001 15.16 7.05001 21 9.00001" />
        </svg>
    );
}

export const Video = ({ className, size = 24}: IconProps) => {
    return (
        <svg
            className={className}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M21.15 6.17C20.74 5.95 19.88 5.72 18.71 6.54L17.24 7.58C17.13 4.47 15.78 3.25 12.5 3.25H6.5C3.08 3.25 1.75 4.58 1.75 8V16C1.75 18.3 3 20.75 6.5 20.75H12.5C15.78 20.75 17.13 19.53 17.24 16.42L18.71 17.46C19.33 17.9 19.87 18.04 20.3 18.04C20.67 18.04 20.96 17.93 21.15 17.83C21.56 17.62 22.25 17.05 22.25 15.62V8.38C22.25 6.95 21.56 6.38 21.15 6.17ZM11 11.38C9.97 11.38 9.12 10.54 9.12 9.5C9.12 8.46 9.97 7.62 11 7.62C12.03 7.62 12.88 8.46 12.88 9.5C12.88 10.54 12.03 11.38 11 11.38Z" fill="#2A53F3" />
        </svg>

    )
}


export const Profile2 = ({ className, size = 24, strokeWidth = 1.5 }: IconProps) => {
    return (
        <svg
            className={className}
            width={size}
            height={size}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.16006 10.87C9.06006 10.86 8.94006 10.86 8.83006 10.87C6.45006 10.79 4.56006 8.84 4.56006 6.44C4.56006 3.99 6.54006 2 9.00006 2C11.4501 2 13.4401 3.99 13.4401 6.44C13.4301 8.84 11.5401 10.79 9.16006 10.87Z" />
            <path d="M16.41 4C18.35 4 19.91 5.57 19.91 7.5C19.91 9.39 18.41 10.93 16.54 11C16.46 10.99 16.37 10.99 16.28 11" />
            <path d="M4.15997 14.56C1.73997 16.18 1.73997 18.82 4.15997 20.43C6.90997 22.27 11.42 22.27 14.17 20.43C16.59 18.81 16.59 16.17 14.17 14.56C11.43 12.73 6.91997 12.73 4.15997 14.56Z" />
            <path d="M18.3401 20C19.0601 19.85 19.7401 19.56 20.3001 19.13C21.8601 17.96 21.8601 16.03 20.3001 14.86C19.7501 14.44 19.0801 14.16 18.3701 14" />
        </svg>


    )
}

export const Code = ({ className, size = 24, strokeWidth = 1.5 }: IconProps) => {
    return (
       <svg
        className={className} 
        width={size} 
        height={size} 
        viewBox="0 0 24 24"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
        <path d="M6.88989 9C7.86989 9.49 8.70989 10.23 9.31989 11.15C9.66989 11.67 9.66989 12.34 9.31989 12.86C8.70989 13.77 7.86989 14.51 6.88989 15" />
        <path d="M13 15H17" />
        <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" />
        </svg>

    );
}

export const Star = ({ className, size = 24 }: IconProps) => {
    return (
       <svg
        className={className}
        width={size}
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
        <path d="M13.7299 3.50989L15.4899 7.02989C15.7299 7.51989 16.3699 7.98989 16.9099 8.07989L20.0999 8.60989C22.1399 8.94989 22.6199 10.4299 21.1499 11.8899L18.6699 14.3699C18.2499 14.7899 18.0199 15.5999 18.1499 16.1799L18.8599 19.2499C19.4199 21.6799 18.1299 22.6199 15.9799 21.3499L12.9899 19.5799C12.4499 19.2599 11.5599 19.2599 11.0099 19.5799L8.01991 21.3499C5.87991 22.6199 4.57991 21.6699 5.13991 19.2499L5.84991 16.1799C5.97991 15.5999 5.74991 14.7899 5.32991 14.3699L2.84991 11.8899C1.38991 10.4299 1.85991 8.94989 3.89991 8.60989L7.08991 8.07989C7.61991 7.98989 8.25991 7.51989 8.49991 7.02989L10.2599 3.50989C11.2199 1.59989 12.7799 1.59989 13.7299 3.50989Z" fill="#2A53F3"/>
    </svg>


    );
}

export const Send = ({ className, size = 24, strokeWidth = 1.5 }: IconProps) => {
    return (
       <svg
        className={className}
        width={size}
        height={size} 
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
        <path d="M7.40018 6.32003L15.8902 3.49003C19.7002 2.22003 21.7702 4.30003 20.5102 8.11003L17.6802 16.6C15.7802 22.31 12.6602 22.31 10.7602 16.6L9.92018 14.08L7.40018 13.24C1.69018 11.34 1.69018 8.23003 7.40018 6.32003Z" />
        <path d="M10.1099 13.65L13.6899 10.06" />
        </svg>

    );
}

export const Message = ({ className, size = 24, strokeWidth = 1.5 }: IconProps) => {
    return (
       <svg
        className={className}
        width={size}
        height={size} 
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
        <path d="M17.52 19.99L17.13 16.83C19.27 15.33 20.66 12.94 20.66 10.24C20.66 5.68999 16.71 2 11.83 2C6.95 2 3 5.68999 3 10.24C3 10.5 3.01001 10.75 3.04001 11C3.34389 16.6 8.12663 18.26 10.48 18.39C10.92 18.45 11.37 18.48 11.83 18.48L16.02 20.97C16.73 21.4 17.62 20.82 17.52 19.99Z" />
</svg>


    );
}



