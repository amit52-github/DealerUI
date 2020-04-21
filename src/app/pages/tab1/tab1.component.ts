import { Component, OnInit,  AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TSEForm1 } from 'src/app/tseform1';
import { HttpClientService } from 'src/app/http-client.service';
import { RegistrationFormComponent } from '../registration-form/registration-form.component';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import { JSDocCommentStmt } from '@angular/compiler';
import { Router } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
import { TseFrom1ViewData } from 'src/app/tse-from1-view-data';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.scss']
})
export class Tab1Component implements OnInit,AfterViewInit {

  submitted = false;
  code:any=[];
  legalStatusList:String[];
  salesOfficeList:string[];
  districtList:string[]=[];
  talukaList:string[];
  tab1Form: FormGroup;
  cityList: string[];
  townVillageList:String[];
  invalidLogin: boolean = false;
  tab1Data:TSEForm1;
  tab1ViewData:TseFrom1ViewData;
  numPattern = /^((\\+91-?)|0)?[0-9]{10}$/;
  minlength=10


   tab2Val:boolean=false;


  
  
  constructor(private formBuilder: FormBuilder,private apiService: HttpClientService,public tabset: NgbTabset,private route:Router) {
     this.getSalesOffice();}
 // tabForm1 : TSEForm1=new TSEForm1();  
   


  ngAfterViewInit(){
    var userId=sessionStorage.getItem("dealerId");
   
    if(userId!=null && userId!=''){
      this.apiService.getTSEForm1ListById(userId).subscribe(data=>{
        this.tab1Data=data;     
       this.getDistrict( this.tab1Data.salesOffice);
       
    console.log("districtList:::"+this.tab1Data.cityCode);
       
      this.getTaluka(this.tab1Data.districtCode);
      this.getCity(this.tab1Data.talukaCode);
      
       this.getTownVillageCode(this.tab1Data.cityCode);
        this.tab1Form.setValue(this.tab1Data);
        
        console.log("getTSEForm1ListById::"+this.tab1Data.dealerName);
        // alert(this.districtList);
      });
    }
  }
  

  ngOnInit() {
    if(sessionStorage.getItem('username')==null || sessionStorage.getItem('username')=='undefine'){
      this.route.navigate(['']);
    }


    this.tab1Form = this.formBuilder.group({
       id:['',''],
       salesOffice: ['',''],
       districtCode:['',''],
       talukaCode:['',''],
       cityCode: ['',''],
       townVillageCode: ['',''],
      dealerName:['', Validators.required],
    address:['', Validators.required],
    address1:['', ''],
    address2:['', ''],
    street:['', ''],
    city:['',Validators.required],
    district:['', Validators.required],
    postalCode:['',Validators.compose([Validators.required,Validators.pattern(/^((\\+91-?)|0)?[0-9]{6}$/),Validators.minLength(6),Validators.maxLength(6)])],
    mobileNo:['',Validators.compose([Validators.required,Validators.pattern(this.numPattern),Validators.minLength(10),Validators.maxLength(10)])],
    mobileNo2:['', Validators.compose([Validators.pattern(this.numPattern),Validators.minLength(10),Validators.maxLength(10)])],
    emailAddress:['', Validators.compose([Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)])],
    legalStatus:['',Validators.required],
    unloadingPoint:['',Validators.required],
    bankIFSCCode:['',Validators.compose([Validators.required,Validators.pattern(/^((\\+91-?)|0)?[0-9a-zA-Z]{11}$/),Validators.minLength(11),Validators.maxLength(11)])],
    bankBranchName:['', Validators.required],
    bankAccNo:['', Validators.required],
    createdBy:['', ''],
    dealerID:['', ''],
    createDate:['']
  });
  this.tab1Form.value.createdBy=sessionStorage.getItem('username');


  this.getLegalStatusList();
  }

  get f() { return this.tab1Form.controls; }
 

  submitTab1(){
   
    this.submitted = true;
    if (this.tab1Form.invalid) {
      return;
    }
    if(this.tab1Form.value.salesOffice==""){
      alert("Please select Sales Office");
      return;
    }
    if(this.tab1Form.value.districtCode==""){
      alert("Please select District Code");
      return;
    }
    if(this.tab1Form.value.talukaCode==""){
      alert("Please select Taluka Code");
      return;
    }
    if(this.tab1Form.value.cityCode==""){
      alert("Please select City Code");
      return;
    }
    if(this.tab1Form.value.townVillageCode=="" ||this.tab1Form.value.townVillageCode=='undefined' ){
      alert("Please select Town Village Code");
      return;
    }
    // if(this.tab1Form.value.townVillageCode==""){
    //   alert("Please select ownVillageCode");
    //   return;
    // }
    console.log("this.tab1Form.value.townVillageCode::"+this.tab1Form.value.townVillageCode);
var userId=sessionStorage.getItem("dealerId");
   

   
    this.tab1Data=new TSEForm1();
    this.tab1Data.dealerID=userId!=null && userId!='undefined'?userId:"";
    this.tab1Data.salesOffice=this.tab1Form.value.salesOffice;
    this.tab1Data.cityCode=this.tab1Form.value.cityCode;
    this.tab1Data.townVillageCode=this.tab1Form.value.townVillageCode;
    this.tab1Data.dealerName=this.tab1Form.value.dealerName;
    this.tab1Data.address=this.tab1Form.value.address;
    this.tab1Data.address1=this.tab1Form.value.address1;
    this.tab1Data.address2=this.tab1Form.value.address2;
    this.tab1Data.street=this.tab1Form.value.street;
    this.tab1Data.city=this.tab1Form.value.city;
    this.tab1Data.district=this.tab1Form.value.district;
    this.tab1Data.postalCode=this.tab1Form.value.postalCode;
    this.tab1Data.mobileNo=this.tab1Form.value.mobileNo;
    this.tab1Data.mobileNo2=this.tab1Form.value.mobileNo2;
    this.tab1Data.emailAddress=this.tab1Form.value.emailAddress;
    this.tab1Data.legalStatus=this.tab1Form.value.legalStatus;
    this.tab1Data.unloadingPoint=this.tab1Form.value.unloadingPoint;
    this.tab1Data.bankIFSCCode=this.tab1Form.value.bankIFSCCode;
    this.tab1Data.bankBranchName=this.tab1Form.value.bankBranchName;
    this.tab1Data.bankAccNo=this.tab1Form.value.bankAccNo;
    this.tab1Data.createdBy=sessionStorage.getItem('username');
    this.tab1Data.createDate=new Date();


    
    this.apiService.createUser(this.tab1Data)
      .subscribe( data => {
      this.tab1Data=data;
        console.log("Form value:::"+data.dealerID);
        sessionStorage.setItem('dealerId',data.dealerID);
      this.tabset.select('tab2id');
       }); 
      
    }


    // tabOn(){
    //   this.tab1=true;
    //   this.tab2=false;
    //   this.tab3=true;
    // }
  save() {
    throw new Error("Method not implemented.");
  }

  getSalesOffice(){
    var userId=sessionStorage.getItem('username');
    
    this.apiService.getSalesOfficeList(userId).subscribe(data=>{
      this.salesOfficeList=data;
      console.log("salesOfficeList::"+this.salesOfficeList);
      // alert(this.districtList);
    });
  }
  getDistrict(value){
    // if(value.length==0){
    //   alert("Please select Sales Office");
    //   return;
    // }
// alert("value"+value);
//var sf=value.split(",")[0];
//alert("Sales Office::"+value);
    this.apiService.getDistrictList(value).subscribe(data=>{
      console.log("data:::  "+data);
      this.districtList=data;
     //this.districtList=data[0].split(",");
this.code=JSON.stringify({"key":this.districtList[0],"value":this.districtList[1]})
      console.log('data == '+this.code );
        // this.districtList.forEach(function (value1) {
        //  this.code.push({name:value1[0], description:value1[1]});
        
      // });
 
      
      // alert(this.districtList);
    });
     
    
  }

  getTaluka(value){
    // if(value.length==0){
    //   alert("Please select District");
    //   return;
    // }
    this.apiService.getTalukaList(value).subscribe(data=>{
    this.talukaList=data;
    console.log("talukaList::"+this.talukaList);
    // alert(this.districtList);
  });
}
  

getCity(value){
  // if(value.length==0){
  //   alert("Please select Taluka");
  //   return;
  // }
  this.apiService.getCityList1(value).subscribe(data=>{
    this.cityList=data;
   // console.log("cityList::"+this.cityList);
  });
  // alert(this.districtList);

}

getTownVillageCode(value){
  // if(value.length==0){
  //   alert("Please select City");
  //   return;
  // }
  this.apiService.getTownVillageList(value).subscribe(data=>{
    this.townVillageList=data;
   // console.log("cityList::"+this.cityList);
  });
}

  keyPress(event: any) {
    const pattern = /[0-9]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      alert("Please enter numeric value")
      event.preventDefault();
    }
  } 

  onBlurMobile(event:any){
    if(event.length<10){
      alert("Mobile Should be 10 digit");
      //this.mobileNo.value='';
    }

  }

  onBlurMethod(event:any){

const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //  let inputChar = String.fromCharCode(event.charCode);
  if(!pattern.test(event)){
    this.tab1Form.value.emailAddress='';
   // this.tab1Form.value.emailAddress.focus();
   //event.focus();
  alert("Please enter a valid email address");
   
      
    }
  }

  getLegalStatusList(){
    this.apiService.getLegalStatusList().subscribe(data=>{
      this.legalStatusList=data;
   //   console.log("cityList::"+this.cityList);
    });

  }

}
