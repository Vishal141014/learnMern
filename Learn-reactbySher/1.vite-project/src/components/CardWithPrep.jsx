// card creation with use of props properties
import React from 'react'

const CardWithPrep = (props) => {
  return (
    <>
    <div className="card">
            <img src="https://images.unsplash.com/photo-1765750448230-11b703ba4a8e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D" alt="Image not found" />
            <h1>{props.userName}</h1>
            <p>{props.data}</p>
            <button>Follow</button>
    </div>
    </>
  )
}

export default CardWithPrep