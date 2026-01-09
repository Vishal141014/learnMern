import React from 'react'
import RightCard from './RightCard'


const RightContent = (props) => {
    return (
        // For scoll horizontal images creatation also add shrink-0 on RightCard file
        <div id='right' className='h-full rounded-4xl w-2/3 flex flex-nowrap gap-10 overflow-x-auto'>
            {/* <div className='h-full w-2/3'> */}
            {/* <RightCard />
            <RightCard />
            <RightCard /> */}

            {props.users.map(function(elem, idx){

                return <RightCard key={idx} id={idx} color={elem.color} img={elem.img} tag={elem.tag}/>

            })}
        </div>
    )
}

export default RightContent