import { Product } from './../Product.model';
import { Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import {SharedService} from 'src/app/shared.service'


@Component({
  selector: 'app-show-prod',
  templateUrl: './show-prod.component.html',
  styleUrls: ['./show-prod.component.css']
})
export class ShowProdComponent implements OnInit {

  constructor(private service:SharedService) { }

  getProductList:Product[]=[];
  ModalTitle:string="";
  prod:any;
  ActivateAddEditProdComp:boolean=false;  
  ngOnInit(): void {

    this.refreshgetProductList();  
    this.editFlag = false;

  }
public productToSaving = new Product();
 addClick(){
this.prod={
  P_Id:0,
  p_Name:"",
  P_LastUpdate:new Date,
  P_Price:0,
  P_Photo:""
}
this.ModalTitle="Add Product";
this.ActivateAddEditProdComp=true;
 }
public editFlag:boolean = false;
public newFlagForChnageButton:boolean=false;
ChangeFlag(){
  this.editFlag = true;
}
 editeClick( item:Product){
   this.editFlag = true;
// this.prod=item;
console.log(item);
this.productForm.P_Id = item.P_Id;
this.productForm.P_Price = item.P_Price;
this.productForm.p_Name = item.p_Name;

console.log("Will update==>",this.productForm)
this.update(this.productForm);
// this.service.updatProduct(this.productForm).subscribe(data=>{
//   this.refreshgetProductList();
// })
// this.ModalTitle="Edit Product";
// this.ActivateAddEditProdComp=true;

// this.service.addProduct(newProduct).subscribe(data=>{
//   console.log("Done" = item.);
//   this.refreshgetProductList();
// },error=>{
//   console.log(error);
// })
 }
update(p:any){
//   this.productForm.P_Id = p.P_Id;
// this.productForm.P_Price = p.P_Price;
// this.productForm.p_Name = p.p_Name;
  console.log("Form update method",p);
  this.service.updatProduct(p).subscribe(data=>{
  this.refreshgetProductList();
})
}
 closeClick(){
  this.ActivateAddEditProdComp=false;
  this.refreshgetProductList();  
 }

refreshgetProductList(){
  this.editFlag = false;
  this.service.getProductList().subscribe(data=>{
    this.filteredProduct = data;
    console.log(data);
    console.log("Testng....");
    this.getProductList=data;
  },error=>{
    console.log(error);
  });
}

//for Filtering
filteredProduct:Product[] =[];
filter(query:string){
  console.log(query)
  this.getProductList = (query)? this.getProductList.filter(p => p.p_Name.toLowerCase().includes(query.toLowerCase())):
  this.getProductList;
}
//delete
public deleteProductById(product:Product){
  var id = product.P_Id;
  console.log("Product Id : "+id)
  this.service.deleteProduct(id).subscribe(data=>{
    this.refreshgetProductList();
  },error=>{
    console.log(error);
  })
  
}
public productForm:Product = new Product();

public onSubmit(p:Product){
let newProduct = new Product();
newProduct.P_Id = p.P_Id;
newProduct.p_Name = p.p_Name;
newProduct.P_Price =  p.P_Price;
console.log("NewProduct is ",newProduct);

this.service.addProduct(newProduct).subscribe(data=>{
  console.log("Done");
  this.refreshgetProductList();
},error=>{
  console.log(error);
})
}
}
