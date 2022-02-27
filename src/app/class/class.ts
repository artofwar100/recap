import { Student } from "../student/student";
import { Teacher } from "../teacher/teacher";

export interface Class {
    id: number,
    subject: string,

    teacher: Teacher,
    teacherId?: number,
    
    students: Student[],
    studentsId?: number[]
}