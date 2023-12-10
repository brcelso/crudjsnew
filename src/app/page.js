"use client"

import Table from "./components/table"
import Form from "./components/form"


export default function Home() {
  return (
    <section>

      <main className='py-5'>
        <h1 className='text xl md:text-5xl text-center font-bold py-10'>Events</h1>

        <div className="container mx-auto flex justify-between py-5 border-b">

          <div className="left flex gap-3">
            <button className='flex bg-indigo-500 text-white px-4 py-2 border rounded-md'>
              Add Event
            </button>
          </div>

        </div>
        <div className="container mx-auto py-5">
        <Form></Form>
        </div>

        <div className="container mx-auto">
        <Table></Table>  
        </div>
        
      </main>
    </section>
  )
}
