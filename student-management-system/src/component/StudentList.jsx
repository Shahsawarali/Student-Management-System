import { useEffect, useState } from "react";
import {collection, getDocs} from 'firebase/firestore';
import { db } from "../firebaseconfig";

function StudentList() {
    const [students, setStudents] = useState([])
    const  studentsCollection = collection(db, 'students')

    console.log('testing inside studentlist...')

    const getStudents = async()=>{
        const studentSanpshot = await getDocs(studentsCollection)
        const StudentList = studentSanpshot.docs.map(doc =>(
            {
                id: doc.id,
                ...doc.data()
            }
        ))
        setStudents(StudentList)
    }

    useEffect(()=>{
        getStudents()
    },[students])
    

    return (
        <>
        <div className="student-list">
            <h1>Student List</h1>
            {students && students.map((student)=>{
               return <div key={student.id} className="student">
                    <h2>{student.name}</h2>
                    <p>Age: {student.age}</p>
                </div>
            }
            )}
            </div>
            </>
    );
}
export default StudentList