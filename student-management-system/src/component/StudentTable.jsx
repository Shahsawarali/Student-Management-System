import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {deleteDoc, doc} from 'firebase/firestore'
import {db} from '../firebaseconfig'

export default function StudentTable({students ,setStudents}) {
    //update student
    function handleUpdateSTudent(studentId){
        alert(studentId)
    }


    //delete student
    async function handleDeleteSTudent(studentId){
       const studentDoc = doc(db, 'student',studentId)
       await deleteDoc(studentDoc)
       setStudents(students.filter((student)=>student.id !==studentId))

       //setStudents
    }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Student Roll #</TableCell>
            <TableCell align="center">Student Name</TableCell>
            <TableCell align="center">Student age</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            <TableRow
              key={student.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {student.rollno}
              </TableCell>
              <TableCell align="center">{student.name}</TableCell>
              <TableCell align="center">{student.age}</TableCell>
              <TableCell align="right">
                <EditIcon onClick={()=>handleUpdateSTudent(student.id)} style={{cursor:'pointer',color:'#007bff',marginRight:10}}/>
              <DeleteForeverIcon onClick={()=>handleDeleteSTudent(student.id)} style={{cursor:'pointer',color:'crimson'}}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
