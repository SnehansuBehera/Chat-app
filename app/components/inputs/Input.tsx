import clsx from 'clsx'

import React from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

interface inputProps {
    id: string,
    label: string,
    disabled?: boolean,
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors,
    type?: string,
    required?: boolean
}

const Input: React.FC<inputProps> = ({ id, label, disabled, register, errors, type, required }) => {
    return (
        <div>
            <label htmlFor={id} className='text-sm text-gray-600 font-medium leading-6'>{label}</label>
            <div className='mt-2'>
                <input type={id} id={id} {...register(id, { required })} disabled={disabled} autoComplete={id} placeholder=''
                    className={clsx(`
                    form-input
                    w-full
                    rounded-md
                    shadow-sm
                    border-0
                    py-1.5
                    placeholder:text-gray-400
                    text-gray-900
                    ring-1
                    ring-inset
                    ring-gray-300
                    focus:ring-2
                    focus:ring-inset
                    focus:ring-sky-400
                    sm:text-sm
                    sm:leading-6 
                `, errors[id] && "focus:ring-rose-400",
                        disabled && "opacity-50 cursor-default")} /></div>
        </div>
    )
}

export default Input
