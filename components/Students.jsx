import React, { useState, useEffect } from "react";
import axios from 'axios';

function Students() {
    const [students, setStudents] = useState([]);

    async function getAllStudents() {
        const allStudents = await axios.get('https://omar-ga-class.onrender.com/students/');

        setStudents(allStudents.data);
    }

    // useEffect(() => { getAllStudents(); }, []); // Calling the function one time only


    return (
        <>
            {/* <h1>All Students</h1>
            {
                students.map((oneStudent) => 
                    <div key={ oneStudent.id }>
                        <h2>{ oneStudent.studentName }</h2>
                    </div>
                )
            } */}
        </>
    )
}

export default Students;