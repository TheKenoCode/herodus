'use client';

// React and Next.js imports
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react';
// Library and utility imports
import { useForm } from 'react-hook-form';

// Assets

interface FormInput {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function Register() {
  const router = useRouter();

  const { register, handleSubmit } = useForm<FormInput>();

  const onSubmit = (data: FormInput) => {
    // Check if passwords match
    if (data.password !== data.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Handle registration
    handleRegister(data);
  };

  // Function to handle user registration
  const handleRegister = async (data: FormInput) => {
    try {
      await axios.post(`/api/users`, data);
      router.push('/auth/login');
    } catch (error) {
      console.error(error); // eslint-disable-line
    }
  };

  return (
    <section className='bg-center bg-no-repeat bg-cover bg-home-hero-bg text-white pt-28 pb-24'>
      <form
        className='flex   flex-col  justify-between md:w-[500px] p-5 m-auto'
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className='text-center text-md md:text-2xl'>
          Sign up and join historians across the world
        </h1>

        {/* <button
                onClick={() => {
                  signIn('google')
                  router.push('/login')
                }}
                className="flex items-center gap-4 pl-3 mx-auto mt-10 bg-white rounded-full shadow-xl"
              >
                <Image src={googleLogo} height={30} alt="google" width={30} />
                <span className="px-4 py-3 font-bold text-white duration-300 ease-in-out rounded-r-full transition-bg bg-secondary hover:bg-primary">
                  Sign in with Google
                </span>
              </button> */}

        <label className='mb-2 text-xl'>Name</label>
        <input
          type='name'
          className='h-10 pl-4 mb-5 text-black rounded-full focus:outline-secondary'
          {...register('name', { required: true })}
        />

        <label className='mb-2 text-xl'>Email</label>
        <input
          type='email'
          className='h-10 pl-4 mb-5 text-black rounded-full focus:outline-secondary'
          {...register('email', { required: true })}
        />

        <label className='mb-2 text-xl'>Password</label>
        <input
          type='password'
          className='h-10 pl-4 mb-5 text-black rounded-full focus:outline-secondary'
          {...register('password', { required: true })}
        />

        <label className='mb-2 text-xl'>Confirm Password</label>
        <input
          type='password'
          className='h-10 pl-4 mb-5 text-black rounded-full focus:outline-secondary'
          {...register('confirmPassword', { required: true })}
        />

        <input
          className='w-40 py-2 m-auto mt-10 cursor-pointer font-bold uppercase transition duration-500 border-2 rounded-full border-secondary hover:bg-secondary hover:scale-110 ease'
          type='submit'
          value='Register'
        />
      </form>
    </section>
  );
}
