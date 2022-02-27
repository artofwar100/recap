import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Class } from './class';
import { ClassCreateEdit } from './classCreateEdit';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  private url = "https://localhost:44348/api/Classes";

  constructor(private http: HttpClient) { }

  getClasses(): Observable<Class[]> {
    return this.http.get<Class[]>(this.url + '/GetClasses')
  }

  getClass(id: number): Observable<Class> {
    return this.http.get<Class>(this.url + '/GetClass/' + id);
  }

  editClass(classs: Class): Observable<Class> {
    return this.http.put<Class>(this.url + '/PutClass/' + classs.id, classs)
  }

  addClass(classs: Class): Observable<Class> {
    return this.http.post<Class>(this.url + '/PostClass', classs)
  }

  deleteClass(id: number): Observable<Class> {
    return this.http.delete<Class>(this.url + '/DeleteClass/' + id);
  }

}
