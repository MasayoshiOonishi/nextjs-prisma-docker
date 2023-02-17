import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useForm } from 'react-hook-form'
import { User } from '@prisma/client'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

type UserForm = Omit<User, 'id'>
export default function Home() {
    const { register, handleSubmit, formState: { errors } } = useForm<UserForm>();
  const onSubmit = (data: UserForm) => {
    const res = axios.post('/api/users', data)
    console.log(res)  
};
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email</label>
      <input id="email" {...register("email", { required: true })} />
      {errors.email && <span>This field is required</span>}
      
      <label htmlFor="name">Name</label>
      <input id="name" {...register("name")} />
      
      <input type="submit" />
    </form>
  )
}
