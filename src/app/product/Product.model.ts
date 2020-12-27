export class Product{
   

    public P_Id:number;
    public p_Name : string;
    public P_Price:number;
    public P_Photo:string;
    public P_LastUpdate :Date;
  static P_id: number;

    constructor(){
        this.P_Id =0;
        this.p_Name="";
        this.P_Price=0;
        this.P_Photo="";
        this.P_LastUpdate=new Date();

    }

}