import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="http://localhost:61759/api";
readonly  PhotoUrl= "http://localhost:61759/Photos"



constructor(private http:HttpClient) { }

getProductList():Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/product/get');
}

addProduct(val:any){
  return this.http.post(this.APIUrl+'/product/AddProduct',val);
}

updatProduct(val:any){
  return this.http.put(this.APIUrl+'/product/UpdateProduct',val);
}

deleteProduct(val:number){
  return this.http.delete(this.APIUrl+'/product/'+val);
}

UploadPhoto(val:any){
  return this.http.post(this.APIUrl+'/product/Savefile',val);
}


}
