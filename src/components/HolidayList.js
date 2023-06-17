import React from 'react'

const HolidayList = (props)=>{
    return(
        <>
            <ol>
                {props.city.map((city)=>{
                    if(city.country==='India')
                    return <li>{city.name}</li>
                })}
            </ol>
        </>
    )
}

export default HolidayList;