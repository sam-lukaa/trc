import { useState } from 'react'
import { Details, Form } from '../components'

export const Home = () => {
  const initialData = {
    number: '346676',
    cvv: '',
    expiryMonth: '',
    expiryYear: '',
    password: '',
  }

  const [data, setData] = useState(initialData)

  return (
    <main className="w-full flex max-md:flex-col justify-between gap-[3rem] px-[1rem] lg:px-[4rem] py-[3rem] lg:py-[6rem]">
      <Form data={data} setData={setData} />
      <Details data={data} />
    </main>
  )
}
