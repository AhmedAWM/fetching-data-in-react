import React, { useState, useEffect } from "react";
import axios from 'axios';

function OneStudent() {
    const [oneStudent, setOneStudent] = useState({});

    async function getOneStudent(id) {
        const student = await axios.get('https://omar-ga-class.onrender.com/students/' + id);

        setOneStudent(student.data);
    }

    // useEffect(() => { getAllStudents(); }, []); // Calling the function one time only
    useEffect(() => {
        getOneStudent(21);
    }, []);

    return (
        <>
            <h1>All Students</h1>
            {  
                <div key={ oneStudent.id }>
                    <h2>{ oneStudent.studentName }</h2>
                </div>
            }
        </>
    )
}

export default OneStudent;