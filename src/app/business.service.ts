import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  uri = 'http://localhost:4000/business';
  constructor(private http: HttpClient) { }
  addBusiness(person_name, business_name, business_gst_number) {
  const obj = {
  person_name: person_name,
  business_name: business_name,
  business_gst_number: business_gst_number
  };
  console.log(obj);
  this.http.post(`${this.uri}/add`, obj)
  .subscribe(res => console.log('Done'));
  }

  getBusiness(): Observable<any> {
    return this.http.get(`${this.uri}`);
  }



  editBusiness(person_name, business_name, business_gst_number, id: string) {
    console.log('entro al servicio'+ id)
    const obj = {
      person_name: person_name,
      business_name: business_name,
      business_gst_number: business_gst_number
    };
    this.http.post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }



  remove(_id: string) {
    return this.http.get(`${this.uri}/delete/${_id}`);
  }

  getOneBusiness(id: string): Observable<any>{
    return this.http.get(`${this.uri}/edit/${id}`)
  }
  delete(id: string){
    this.http.get(`${this.uri}/delete/${id}`)
      .subscribe(res => console.log('Done'));
  }
}
