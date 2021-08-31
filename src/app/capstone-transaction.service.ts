import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class CapstoneTransactionService {


  apiUrl: string = 'http://localhost:9004/api/transactions';

  constructor(private httpClient:HttpClient) { }

  list(): Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }

  add(transaction:Transaction){
    return this.httpClient.post(`${this.apiUrl}/add`, transaction);
  }

  // Update 
  update(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/${id}`, data);
  }

  // Delete
  delete(id: any): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }


}
