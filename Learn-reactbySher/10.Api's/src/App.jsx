import axios from 'axios';
import React, {useState} from 'react'

const App = () => {

     const [data, setData] = useState([])

  const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    console.log(response);

    const data = await response.json
    console.log(data);
  }

  
  const getDataExios = async ()=>{
    // const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')

    // console.log(response.data)

    // or second method is 

    // const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos/1')

    // console.log(data)

    //-------------------------------------------------
    // Here how to use API data we use image api data

    const response = await axios.get('https://picsum.photos/v2/list')

    // console.log(response)
    setData(response.data)
  }

  return (
    <div>
      <button onClick={getData}>Get Data From Fetch</button>
      <button onClick={getDataExios}>Get Data From Axios</button>

      <div>
        {data.map(function(elem, index){
          return <h3>Hello {elem.author} <img src={elem.download_url} alt="" /> {index+1}</h3>
        })}
      </div>
    </div>
  )
}

export default App