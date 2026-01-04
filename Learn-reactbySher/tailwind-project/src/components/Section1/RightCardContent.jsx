import React from 'react'

const RightCardContent = (props) => {

  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between '>
            {/* <h2 className='bg-white rounded-full h-12 w-12 flex justify-center items-center text-xl font-semibold'>1</h2> */}
            <h2 className='bg-white rounded-full h-12 w-12 flex justify-center items-center text-xl font-semibold'>{props.id+1}</h2>
            <div>
                <p className='text-shadow-2xs text-lg leading-relaxed text-white mb-14'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat natus incidunt animi, tempora deleniti rerum.</p>
                <div className='flex justify-between'>
                    {/* <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full '>Satisfied</button> */}

                    <button style={{backgroundColor:props.color}} className='bg-blue-600 text-black font-medium px-8 py-2 rounded-full '>{props.tag}</button>

                    <button style={{backgroundColor:props.color}} className=' text-black font-semibold px-3 py-2 rounded-full'><i className='ri-arrow-right-line'></i></button>
                </div>
            </div>
        </div>
  )
}

export default RightCardContent