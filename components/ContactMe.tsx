import React from 'react'
import { MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form"
type Props = {}

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

function ContactMe({}: Props) {

  const { register, handleSubmit } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:ritikamanishjoshi@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`
  }

  return (
    <div className='h-screen relative flex flex-col text-center md:text-left md:flex-col max-w-7xl
    px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-20 md:top-24 uppercase tracking-[20px] text-red-600 text-md md:text-2xl'>
            Contact
        </h3>

        <div className='flex flex-col space-y-10'>
          <h4 className='text-2xl md:text-4xl font-semibold text-center text-red-600'>
            Let's chat!
          </h4>

          <div className='space-y-10'> 
            <div className='flex items-center space-x-3 justify-center text-gray-600'>
                <MapPinIcon className='text-red-600 h-5 w-5 md:h-7 md:w-7 animate-pulse'/> 
                <p className='md:text-2xl'>Singapore</p>
              </div>
              <div className='flex items-center space-x-3 justify-center text-gray-600'>
                <EnvelopeIcon className='text-red-600 h-5 w-5 md:h-7 md:w-7 animate-pulse'/> 
                <p className='md:text-2xl'>ritikamanishjoshi@gmail.com</p>
              </div>
          </div>

          <form 
          onSubmit={handleSubmit(onSubmit)} 
          className='flex flex-col space-y-2 w-fit mx-auto'> 

            <div className='flex space-x-1'>
              <input {...register("name")} placeholder='Name' className='contactInput' type='text'/>
              <input {...register("email")} placeholder='Email' className='contactInput' type='email'/>
            </div>
            <input {...register("subject")} placeholder='Subject' className='contactInput' type='text'/>
            <textarea {...register("message")} placeholder='Message' className='contactInput'/>
            <button 
            type='submit'
            className='bg-red-600 py-5 px-10 rounded-md text-orange-100 font-semibold'>
              Submit
            </button>

          </form>
        </div>
    </div>
  )
}

export default ContactMe