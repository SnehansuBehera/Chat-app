"use client"

import React, { useCallback, useEffect, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Input from '@/app/components/inputs/Input';
import Button from '@/app/components/Button';
import AuthSocialButton from './AuthSocialButton';
import { BsGithub, BsGoogle } from 'react-icons/bs';
import axios from 'axios';
import toast from 'react-hot-toast';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';


type Variant = "LOGIN" | "REGISTER";
const AuthForm = () => {
    const session = useSession();
    const [variant, setVariant] = useState<Variant>("LOGIN");
    const [Loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (session?.status === 'authenticated') {
            router.push('/user');
        }
    }, [session?.status]);

    const toogleVariant = useCallback(() => {
        if (variant === "LOGIN") {
            setVariant("REGISTER");
        } else {
            setVariant("LOGIN");
        }
    }, [variant]);

    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            pssword: "",
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setLoading(true);
        if (variant === 'REGISTER') {

            axios.post('/api/register', data)
                .then(() => signIn('credentials', { ...data, redirect: false }))
                .catch(() => toast.error("Something went wrong"))
                .finally(() => setLoading(false));

        }
        if (variant === "LOGIN") {
            signIn('credentials', { ...data, redirect: false })
                .then((callback) => {
                    if (callback?.error) {
                        toast.error("Invalid Credentials");
                    }
                    if (callback?.ok && !callback?.error) {
                        toast.success("Logged in success");
                        router.push('/user');
                    }
                })
                .finally(() => setLoading(false))


        }

    }
    const socialAction = (action: string) => {
        setLoading(true);
        signIn(action, { redirect: false })
            .then((callback) => {
                if (callback?.error) {
                    toast.error("Invalid Credentials");
                }
                if (callback?.ok && !callback?.error) {
                    toast.success("Logged in success");
                }
            })
            .finally(() => setLoading(false))
    }
    return (
        <div className='mt-8 sm:w-full  sm:max-w-md sm:mx-auto'>
            <div className='bg-white px-4 py-8 sm:px-10 sm:rounded-lg shadow'>
                <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
                    {variant === "REGISTER" && <Input label='Name' id='name' register={register} errors={errors} disabled={Loading} />}
                    <Input label='Email' id='email' register={register} errors={errors} disabled={Loading} />
                    <Input label='Password' id='password'
                        register={register} errors={errors} disabled={Loading} />

                    <Button type='submit' fullWidth={true} disabled={Loading}>{variant === "LOGIN" ? "Sign in" : "Register"}</Button>
                </form>
                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="border-t w-full border-gray-300" />

                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className='bg-white px-4 text-gray-500'>Or continue with</span>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 mt-6">
                    <AuthSocialButton icons={BsGithub} onClick={() => socialAction('github')} />
                    <AuthSocialButton icons={BsGoogle} onClick={() => socialAction('google')} />
                </div>
                <div className='flex items-center justify-center mt-6 text-sm text-gray-600 gap-2'>
                    <div>{variant === 'LOGIN' ? "Don't have account?" : "Already have an account?"}</div>
                    <div onClick={toogleVariant} className='text-sky-500 cursor-pointer'>{variant === "LOGIN" ? "Register" : "Login"}</div>
                </div>
            </div>
        </div>
    )
}

export default AuthForm
