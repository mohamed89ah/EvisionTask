import { SharedService } from 'src/app/shared.service';
import { Product } from './../Product.model';
import { Component, Input, OnInit } from '@angular/core';

 

@Component({
  selector: 'app-add-edit-prod',
  templateUrl: './add-edit-prod.component.html',
  styleUrls: ['./add-edit-prod.component.css']
})
export class AddEditProdComponent implements OnInit {

  constructor(private service:SharedService) { }
@Input()prod:any 
P_Id:string="";
p_Name:string="";
P_Price:number=0
  ngOnInit(): void {

this.P_Id=this.prod.P_Id;
this.p_Name=this.prod.p_Name;
this.P_Price=this.P_Price;
  }

  addProduct(){
var val = {
  P_Id:this.P_Id,
  p_Name:this.p_Name,
  P_Price:this.P_Price
};
this.service.addProduct(val).subscribe(res=>{
  alert(res.toString());
});
  }

  UpdateProduct(){
    var val = {
      P_Id:this.P_Id,
      p_Name:this.p_Name,
      P_Price:this.P_Price
    };
    this.service.updatProduct(val).subscribe(res=>{
      alert(res.toString());
    });
  }


}
