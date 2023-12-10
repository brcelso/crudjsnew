"use client"

import Table from "./components/table"
import Form from "./components/form"
import { useState } from "react"


export default function Home() {

const [visible, setVisible] = useState(false)

const handler = () => {
  setVisible(!visible)
}
 
  return (
    <section>

      <main className='py-5'>
        <h1 className='text xl md:text-5xl text-center font-bold py-10'>Events</h1>

        <div className="container mx-auto flex justify-between py-5 border-b">

          <div className="left flex gap-3">
            <button onClick={handler} className='flex bg-indigo-500 text-white px-4 py-2 border rounded-md'>
              Add Event
            </button>
          </div>

        </div>
        
        {visible ? <Form></Form> : <></>}
       

        <div className="container mx-auto">
        <Table></Table>  
        </div>
        
      </main>
    </section>
  )
}
