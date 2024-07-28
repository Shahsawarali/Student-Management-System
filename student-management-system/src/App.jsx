import { collection, getDocs } from 'firebase/firestore'
import './App.css'
import CreateStudent from './component/CreateStudent'
import StudentList from './component/StudentList'
import { useEffect, useState } from 'react'
import { db } from './firebaseconfig' 



function App() {
  const [students, setStudents] = useState([])

  const getStudents = async()=>{
    try {

  const studentsCollection = collection(db, 'students')
  const studentSanpshot = await getDocs(studentsCollection)
  const studentlist = studentSanpshot.docs.map(doc => (
    {
      id: doc.id,
      ...doc.data()
    }
  ))
  setStudents(studentlist)
} catch (error) {
   console.log("Error:",error)
  }
}

useEffect(()=>{
  getStudents()
},[])
  return (
   
    <div className='app-container'>
      <h1 className='app-title'>Student Management System</h1>
      <CreateStudent getStudents={getStudents} />
      <StudentList students={students} setStudents={setStudents}/>
      </div>
    
  )
}

export default App
