import StudentTable from "./StudentTable";

function StudentList({students}) {
    
    

    return (
        <>
        <h1>Student List</h1>
        {/* <div className="student-list">
            {students && students.map((student)=>{
               return <div key={student.id} className="student">
                    <h2>{student.name}</h2>
                    <p>Age: {student.age}</p>
                </div>
            }
            )}
            </div> */}
            <StudentTable students={students}/>
            </>
    );
}
export default StudentList