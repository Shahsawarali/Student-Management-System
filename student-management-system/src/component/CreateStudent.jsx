import { useState } from "react"
import { addDoc, collection } from "firebase/firestore"
import {db} from '../firebaseconfig'

function CreateStudent({getStudents}) {
  const [rollno, setRollno] = useState('')
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [isCreatingStudent, setIsCreatingStudent] = useState(false)


  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
      setIsCreatingStudent(true)
      await addDoc(collection(db,'students'),{
        rollno: Number(rollno),
        name: name,
        age: Number(age)
      })
      setRollno('')
      setName('')
      setAge('')
      setIsCreatingStudent(false)
      await getStudents()
    } catch(error) {
      console.log("Error creating user:",error)
      setIsCreatingStudent(false)

    }
  }

  return (

     <form onSubmit={handleSubmit} className="form">

        <input type="number" value={rollno} onChange={(e)=>setRollno(e.target.value)}
         placeholder="Enter Your Roll No" />
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}
         placeholder="Enter Your Name" required />
        <input type="number" value={age} onChange={(e)=>setAge(e.target.value)}
         placeholder="Enter Your Age" />
        <button type="submit">({isCreatingStudent ? 'Creating...': 'Create Student'})</button>
     </form>
     
  )
}

export default CreateStudent