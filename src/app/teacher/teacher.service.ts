import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from './teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private url = "https://localhost:44348/api/Teachers"

  constructor(private http: HttpClient) { }

  getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.url + '/GetTeachers')
  }

  getTeacher(id: number): Observable<Teacher> {
    return this.http.get<Teacher>(this.url + '/GetTeacher/' + id);
  }
  
  editTeacher(teacher: Teacher): Observable<Teacher> {
    return this.http.put<Teacher>(this.url + '/PutTeacher/' + teacher.id, teacher)
  }

  addTeacher(teacher: Teacher): Observable<Teacher> {
    return this.http.post<Teacher>(this.url + '/PostTeacher', teacher)
  }

  deleteTeacher(id: number): Observable<Teacher> {
    return this.http.delete<Teacher>(this.url + '/DeleteTeacher/' + id);
  }




}
