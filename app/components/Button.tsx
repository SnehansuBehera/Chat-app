import clsx from 'clsx'
import React from 'react'


interface ButtonProps {
    children?: React.ReactNode,
    type?: 'button' | 'submit' | 'reset' | undefined,
    onClick?: () => void,
    secondary?: boolean,
    danger?: boolean,
    fullWidth?: boolean,
    disabled?: boolean
}
const Button: React.FC<ButtonProps> = ({
    children,
    type,
    onClick,
    secondary,
    danger,
    fullWidth,
    disabled
}) => {
    return (
        <div>
            <button
                onClick={onClick}
                type={type}
                disabled={disabled}
                className={clsx(`
                        font-semibold
                        flex
                        justify-center
                        py-2
                        px-3
                        rounded-md
                        focus-visible:outline
                        focus-visible:outline-2
                        focus-visible:outline-offset-2
                        sm:text-sm
                        sm:leading-6
                    `,
                    fullWidth && "w-full",
                    disabled && "opacity-50 cursor-default"
                    , danger && "bg-rose-500 hover:bg-rose-400 hover:outline-rose-500", secondary ? "text-gray-600" : 'text-white', !secondary && !danger && "bg-sky-500 hover:bg-sky-400 hover:outline-sky-500")}
            >{children}</button>
        </div>
    )
}

export default Button
