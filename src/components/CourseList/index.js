import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function CourseList() {
    const courses = useSelector(state => state.courses);
    const dispatch = useDispatch();

    const divRef = React.useRef()

    const addCourse = () => {
        dispatch({type: 'ADD_COURSE', title: divRef.current.value});
    }

    return (
        <>
            <ul>
                {courses.map(course => <li key={course} >{course}</li>)}
            </ul>
            <input type='text' ref={divRef}/>
            <button type='button' onClick={addCourse}>
                Add Course
            </button>
        </>
    )
}
