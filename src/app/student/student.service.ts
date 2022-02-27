import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';
import { StudentCreateEdit } from './studentCreateEdit';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private url = "https://localhost:44348/api/Students"

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.url + '/GetStudents')
  }

  getStudent(id: number): Observable<Student> {
    return this.http.get<Student>(this.url + '/GetStudent/' + id);
  }

  editStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(this.url + '/PutStudent/' + student.id, student)
  }

  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.url + '/PostStudent', student)
  }

  deleteStudent(id: number): Observable<Student> {
    return this.http.delete<Student>(this.url + '/DeleteStudent/' + id);
  }
}
