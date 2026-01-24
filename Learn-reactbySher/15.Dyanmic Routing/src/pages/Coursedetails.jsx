import React from 'react'
import { useParams } from 'react-router-dom'

const Coursedetails = () => {

   const giveDeatilsCourseId = useParams()


  return (
    <div>
        <h1 className='whitespace-nowrap'>{giveDeatilsCourseId.courseId} Course details</h1>
    </div>
  )
}

export default Coursedetails