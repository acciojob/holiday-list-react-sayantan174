import React from 'react'

const HolidayList = (props)=>{
    let k=0;
    return(
        <>
            <ol>
                {props.city.map((city)=>{
                    
                    if(city.country==='India'){
                    return <li key={"location"+(++k)}>{city.name}</li>
                    }
                })}
            </ol>
        </>
    )
}

export default HolidayList;