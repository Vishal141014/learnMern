import { useState } from "react"

const Task = () => {
    
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [task, setTask] = useState([])

    const submitHandler = (e)=>{
        e.preventDefault()

        // console.log(title, details)
        const copyTask = [...task];

        copyTask.push({title, details});

        setTask(copyTask)

        setTitle('')
        setDetails('')
    }

    const deleteNote = (idx) => {
        const copyTask = [...task];
        copyTask.splice(idx,1)

        setTask(copyTask)
    }


  return (
    <div className='min-h-screen bg-black text-white lg:flex '>
        <form onSubmit={(e)=>{submitHandler(e)}} action="" className='flex items-start lg:w-1/2 flex-col gap-4  p-10 '>
                
            <h1 className='text-4xl font-bold'>Add Notes</h1>

{/* // Pehla Input for Heading  */}
            <input className='px-5 w-full py-2 font-medium border-2 outline-none rounded '
            type="text" 
            placeholder='Enter Notes Heading' value={title} 
            onChange={(e)=>{
                setTitle(e.target.value)
            }} />

{/* Detailed Wala input  */}

            <textarea className='px-5 font-medium w-full h-32 py-2  border-2 rounded outline-none '
            placeholder='Enter Details of task' value={details}
            onChange={(e)=>{
                setDetails(e.target.value)
            }}
            />

            <button className='bg-white active:scale-95 font-medium w-full outline-none  text-black px-5 py-2 rounded-md'>Add Notes</button>

            {/* <img className='h-50' src="./src/assets/sticky.png" alt="" /> */}
        </form>

        <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto">
            {task.map(function(elem, idx){
                return <div key={idx} className="flex justify-between flex-col items-start relative h-52 px-4 pt-9 pb-5 text-black w-40 rounded-2xl bg-cover bg-[url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')]">

                <div>
                    <h3 className="leading-tight text-lg font-bold">{elem.title}</h3>
                    <p className="mt-4 leading-tigh text-xs font-semibold text-gray-600">{elem.details}</p>
                </div>

                <button onClick={() => {
                    deleteNote(idx)
                }} className="w-full bg-red-500 py-1 text-xs rounded-2xl font-bold cursor-pointer active:scale-95 text-white">Delete</button>

                </div>
            })}
        </div>
        </div>

    </div>
  )
}

export default Task 