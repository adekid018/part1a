import React from "react";
const Course =(props)=>{
    const {course}=props
    
    return (
    <div>
        <h1>Web development curriculum</h1>
        <h1 key={course[0].id}>{course[0].name}</h1>
        <ul>
            {course[0].parts.map(value=>{
                return <li key={value.id}>{value.name} {value.exercises}</li>
            })}
        </ul>
        <p>total of {course[0].parts.reduce((acc,cur)=>acc+cur.exercises,0)} exercises</p>

        <h1 key={course[1].id}>{course[1].name}</h1>
        <ul>
            {course[1].parts.map(value=>{
                return <li key={value.id}>{value.name} {value.exercises}</li>
            })}
        </ul>
        <p>total of {course[1].parts.reduce((acc,cur)=>acc+cur.exercises,0)} exercises</p>
    </div>
    )
}
export default Course;