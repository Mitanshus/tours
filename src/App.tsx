import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tour from "./Tour"
import './App.css';


const url = 'https://course-api.com/react-tours-project'


function App() {
 

type touring={
   id: string;
  
  
   tourr:{
    id:string,
    name:string,
    info:string,
    image:string,
    price:number}[]
}
  

  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState<any []>([])

  const removeTour = (id:string) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  useEffect(() => {
    fetchTours()
  }, [])

   if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    )
  }
  console.log(tours)
   return (
    <main>
      
      <Tour tourr={tours}/>
      
    </main>
  )
}

export default App;
