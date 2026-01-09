import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async () => {
    // console.log('data aa gya')
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)

    // console.log(response)

    setUserData(response.data)

    // console.log(userData)

  }

  useEffect(function(){
    getData()
  },[index])

  let printUserData = <h3 className='text-gray-300 absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 text-xs font-semibold'>Loading....</h3>

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return <div key={idx}>
       <Card elem={elem}/>
      </div>
    })
  }

  return (
    <div className='bg-black min-h-screen p-4 text-white flex flex-col overflow-hidden'>
      {/* <button
        onClick={getData}
        className='bg-green-600 text-white px-5 py-2 rounded mb-3 active:scale-95'>Get Data</button> */}


      <div className='flex flex-1 overflow-y-auto flex-wrap gap-4 p-2 mb-4'>
        {printUserData}
      </div>

      <div className='flex justify-center gap-4 items-center p-2'>
        <button style={{opacity:index == 1?0.5: 1}}
        onClick={()=>{
          // console.log('Previous Button Clicked')
          if(index>1){
            setIndex(index-1)
            setUserData([])
          }
        }}
         className='bg-amber-400 text-black rounded px-4 py-2 font-bold text-sm cursor-pointer active:scale-95'>Previous</button>

        <h4>Page {index}</h4>

        <button 
         onClick={()=>{
          // console.log('Next Button Clicked')
          setIndex(index+1)
          setUserData([])
        }}
        className='bg-amber-400 text-black rounded px-4 py-2 font-bold text-sm cursor-pointer active:scale-95'>Next</button>
      </div>

    </div>
  )
}

export default App