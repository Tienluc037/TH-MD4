import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class BookService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get<any>(environment.api_url + "books");
  }

  createBook(data: any):Observable<any>{
    return this.http.post(environment.api_url+'books',data)
  }

  delete(id): Observable<any> {
    return this.http.delete(environment.api_url + `books/${id}`);
  }

  getById(id): Observable<any> {
    return this.http.get(environment.api_url + `books/${id}`);
  }

  edit(data,id):  Observable<any> {
    return this.http.put(environment.api_url + `books/${id}`,data);
  }

}
