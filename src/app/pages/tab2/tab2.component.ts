import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientService } from 'src/app/http-client.service';
import { TSEForm1 } from 'src/app/tseform1';
import { Tseform2 } from 'src/app/tseform2';
import { Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.scss']
})
export class Tab2Component implements OnInit,AfterViewInit {
  tab2Form: FormGroup;
  tseForm1List:TSEForm1;
  tab2Data:Tseform2;
  checkboxValue;
  submitted = false;
  introducerName:string;
  constructor(private formBuilder: FormBuilder,public tabset: NgbTabset,private apiService: HttpClientService,private route:Router) { }

  ngAfterViewInit(){
    var userId=sessionStorage.getItem("dealerId");
   
    console.log("ngAfterViewInit::sessionStorage userId:: "+userId);

    if(userId!=null && userId!=''){
      this.apiService.getTSEForm2ListById(userId).subscribe(data=>{
        this.tab2Data=data;
        console.log("this.tab2Data.depthDistribution"+this.tab2Data.depthDistribution);
// if(this.tab2Data.depthDistribution=='Y'){
//   this.tab2Data.depthDistribution=true;
// }
        this.tab2Form.setValue(this.tab2Data);
        console.log("this.tab2Data.dealerFirstname::"+this.tab2Data.dealerFirstname);
        // alert(this.districtList);
      });
     
    }
  }


  ngOnInit() {
    if(sessionStorage.getItem('username')==null || sessionStorage.getItem('username')=='undefine'){
      this.route.navigate(['']);
    }


    this.tab2Form = this.formBuilder.group({
      dealerLastname: ['', Validators.required],
      dealerFirstname: ['', Validators.required],
      dealerTelNo1: ['', Validators.compose([Validators.required,Validators.pattern(/^((\\+91-?)|0)?[0-9]{11}$/)])],
      dealerTelNo2: ['', Validators.compose([Validators.pattern(/^((\\+91-?)|0)?[0-9]{11}$/),Validators.minLength(11)])],
      dealerPanNo: ['', Validators.compose([Validators.required,Validators.pattern(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/),Validators.minLength(10),Validators.maxLength(10)])],
      dealerGSTNNo: ['', Validators.compose([Validators.required,Validators.pattern(/^([0]{1}[1-9]{1}|[1-2]{1}[0-9]{1}|[3]{1}[0-7]{1})([a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1})+$/),Validators.minLength(15),Validators.maxLength(15)])],
      dealerAadharNo: ['', Validators.compose([Validators.pattern(/^[0-9]{12}$/),Validators.minLength(12),Validators.maxLength(12)])],
      acvPotentialQty:['', Validators.compose([Validators.required,Validators.pattern(/^((\\+91-?)|0)?[0-9]{2,19}$/),Validators.minLength(2),Validators.maxLength(19)])],
      targetQty:['',Validators.compose([Validators.required,Validators.pattern(/^((\\+91-?)|0)?[0-9]{2,19}$/),Validators.minLength(2),Validators.maxLength(19)])],
      depthDistribution:['',''],
      numericReach:['',''],
      dealerId:[''],
      createdBy:[''],
      introBy:[''],
      introCustCode:['',Validators.compose([Validators.pattern(/^[0-9a-zA-Z]{10}$/),Validators.minLength(10),Validators.maxLength(10)])],
      introName:['']

  });
  }

  get f() { return this.tab2Form.controls; }


  submitTab2(){
    this.submitted = true;
    if (this.tab2Form.invalid) {
      return;
  }
    var userId=sessionStorage.getItem("dealerId");

    if(userId==null)
{
  alert("Please fill TSE Form 1   !.");
  return
}
var getinNo=this.tab2Form.value.dealerGSTNNo.substring(2,12);
console.log("getinNogetinNo::::"+getinNo);
var dealerPanNo=this.tab2Form.value.dealerPanNo.toUpperCase();
if(dealerPanNo!=getinNo){
  alert("Please check GSTIN with reference to PAN No.")
  return
}



    this.tab2Data=new Tseform2();
    console.log("userID:::"+sessionStorage.getItem('userId'));
this.tab2Data.dealerLastname=this.tab2Form.value.dealerLastname;
this.tab2Data.dealerFirstname=this.tab2Form.value.dealerFirstname;
this.tab2Data.dealerTelNo1=this.tab2Form.value.dealerTelNo1;
this.tab2Data.dealerTelNo2=(this.tab2Form.value.dealerTelNo2!=null?this.tab2Form.value.dealerTelNo2:"");
this.tab2Data.dealerPanNo=this.tab2Form.value.dealerPanNo;
this.tab2Data.dealerGSTNNo=this.tab2Form.value.dealerGSTNNo;
this.tab2Data.dealerAadharNo=(this.tab2Form.value.dealerAadharNo!=null?this.tab2Form.value.dealerAadharNo:"");
this.tab2Data.acvPotentialQty=this.tab2Form.value.acvPotentialQty;
this.tab2Data.targetQty=this.tab2Form.value.targetQty;
this.tab2Data.depthDistribution=this.tab2Form.value.depthDistribution;
this.tab2Data.numericReach=this.tab2Form.value.numericReach;
this.tab2Data.dealerId=sessionStorage.getItem('dealerId');
this.tab2Data.introBy=(this.tab2Form.value.introBy!=null?this.tab2Form.value.introBy:"");
this.tab2Data.introCustCode=(this.tab2Form.value.introCustCode!=null?this.tab2Form.value.introCustCode:"");
this.tab2Data.introName=(this.tab2Form.value.introName!=null?this.tab2Form.value.introName:"");
 
console.log("introCustCode:::"+this.tab2Form.value.introCustCode+"::::introName:::::"+this.tab2Data.introName);
if(this.tab2Form.value.introCustCode!=null){
  // alert("introName"+this.tab2Form.value);
  // var introname= (<HTMLInputElement>document.getElementById("introName")).value;
  //   console.log("introname:::"+introname);
  if(this.tab2Data.introName==""){
alert('Please check the Introducer Code/Name')
return
  }
}
    this.apiService.createUserTab2Form(this.tab2Data)
    .subscribe( data => {

      console.log("Form value:::"+data);
    //   this.router.navigate(['list-user']);
    if(data!=null){
      sessionStorage.setItem("Aadharno",this.tab2Data.dealerAadharNo)
    this.tabset.select('tab3id');
    }
     });
    
    
  }


  getPrevious(){
  var userId=sessionStorage.getItem('userId');
    this.tabset.select('tab1id');
    
  }

 

  checkboxEvent(event){
    alert("checkboxEvent::"+event);
    if(event){
      this.checkboxValue='X ';
    }else{
      this.checkboxValue='N';
    }
  }
  keyPress(event: any) {
    const pattern = /[0-9\+]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      alert("Please enter numeric value")
      event.preventDefault();
    }
  }

  keyPressTelephone(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      alert("Please enter numeric value")
      event.preventDefault();
    }
  }

  keyPressIntroducerName(event: any){
   // alert(event.target.value);
    if(event.target.value.length>9){
      // alert("keyPressIntroducerName::"+event.target.value.length);
      this.getIntroducerName(event.target.value);
    }
  }

  // onBlurGSTINNo(event:any){
  // var panNo=  (<HTMLInputElement>document.getElementById("dealerPanNo")).value;
  // var gstinNo=event.
  //     alert(" onBlurGSTINNo:::"+gstinNo +"::panNo:::"+panNo);
      
   
  // }
  getIntroducerName(event){
    // alert("getIntroducerName::"+event.target.value);
    this.apiService.getIntroducerNameData(event)
    .subscribe( data => {
    if(data.length>0){
    //  this.tab2Data.introName=data;
    //  this.tab2Form.setValue(this.tab2Data);
    this.introducerName=data;
    this.tab2Form.value.introName=data.toString();
      console.log("getIntroducerName:::"+data +":::this.introducerName::"+this.tab2Data.introName);
    }else{
      this.introducerName="";
    //  (<HTMLInputElement>document.getElementById("introName")).value = "";
      alert("Please insert correct Introducer Customer Code.");
      return
    }
     });

  }

  panVerify(event){
//  alert("panVerify:::"+event.target.value);
    this.apiService.panVerification(event.target.value)
    .subscribe( data => {
    if(data.length>0){
      console.log("panVerification:::"+data );
     alert( "Customer code with same PAN and GST Number exists. Please check and proceed");
    }else{
      this.introducerName="";
      // (<HTMLInputElement>document.getElementById("blankChequesFile")).value = "";
     // alert("Please insert correct Introducer Customer Code.");
    }
     });
     var dealerId=sessionStorage.getItem("dealerId");
     const params = new HttpParams()
  .set('dealerId', dealerId)
  .set('pan', event.target.value);
    
     this.apiService.panVerificationApi(params)
     .subscribe( data => {
      console.log("Pan data.data.sts:::"+data);
     if(data.status_cd=="1"){
       if(data.data[0].sts!="Active"){
       console.log("panVerification:::"+data );
      alert( "PAN is not Activate.");
      return
       }
      }else if(data.status_cd=="0"){
        alert( data.error.message);
      }
      
     
      });

     

  }

  gstinVerify(event){
    alert("gstinId::"+event.target.value);
    var dealerId=sessionStorage.getItem("dealerId");
    const params = new HttpParams()
 .set('dealerId', dealerId)
 .set('gstinId', event.target.value);
   
    this.apiService.gstinVerificationApi(params)
    .subscribe( data => {
    
    var count = Object.keys(data).length;
    console.log("GSTIN data.data.sts:::"+count);
    
    if(data.status_cd=="1"){
      if(data.data.sts!="Active"){
      console.log("gstinVerification:::"+data );
     alert( "GSTIN is not Activate.");
     return
      
    }
  
  }else if(data.status_cd=="0"){
      
      alert(data.error.message);
    }

     });

     const params1 = new HttpParams()
     .set('dealerId', dealerId)
     .set('gstinId', event.target.value)
     .set('year', "2019-20");

     this.apiService.gstinMonthVerificationApi(params1)
     .subscribe( data => {
     
     var count = Object.keys(data).length;
     console.log("GSTIN data.data.sts:::"+count);
     
     if(data.status_cd=="1"){
       if(data.data.sts!="Active"){
       console.log("gstinVerification:::"+data );
      alert( "GSTIN is not Activate.");
      return
       
     }
   
   }else if(data.status_cd=="0"){
       
       alert(data.error.message);
     }
 
      });
 

  }


}
