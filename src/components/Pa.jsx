import React from 'react'

export const Pa = (props) => {

    console.log(props.diVs)
    return (
        <div>
            <ul>
                
                {props.diVs.map((d) => (
                 <li key={d.id}>
                 {d.name} ({d.age} years old)
                </li>
                ))}
            </ul>
        </div>
    )
}
