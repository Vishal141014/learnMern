import React, {useState} from 'react'

const App = () => {

  // Here we are use prevent the form behavior becuase form default behavior was auto reload the page after page submittion So, .preventDefault() This will helping us prevent the form default behavior which was automatic reload the page after the prevention apply page was not reload automaticaly
  const submit = (e)=>{
    e.preventDefault()      
    console.log("Form submitted by", title);

    setTitle('')
  }

  // Two was Binding -> ek teer se doo nishane, Matlab direct khud se kuch karne ki bajye hum react se bolte hai kuch bhi karne se jese form ko submit karna input mangae karna ye sab hota hai jese niche form ko submit kiya hai

  const [title, setTitle] = useState('')


  return (
    <div>
      <form action="" onSubmit={(e) => {
        submit(e)
      }}>
        <input type="text" placeholder='Enter Your Name' 
        value={title} 
        onChange={(e) => {
          // console.log(e.target.value)
          setTitle(e.target.value)
        }}
        />
        <button>Submit</button>
      </form>

    </div>
  )
}

export default App