import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClientService } from 'src/app/http-client.service';
import { Tseform3 } from 'src/app/tseform3';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.component.html',
  styleUrls: ['./tab3.component.scss']
})
export class Tab3Component implements OnInit,AfterViewInit {
 
  tab3Form: FormGroup;
  tab3Data:Tseform3;
  tse3data:string[]=[];;

  submitted = false;
  progress: boolean=false;
  onSubmit: boolean=false;
 
//
  constructor(private formBuilder: FormBuilder,private tabset: NgbTabset,private apiService: HttpClientService,private route:AppRoutingModule,private router:Router,private toastr: ToastrService) { 
    console.log("status::"+sessionStorage.getItem("dealerStatus"));
  }



  ngAfterViewInit(){
   // alert("value:::"+this.tse3data.length);
    if(sessionStorage.getItem("dealerStatus")=='REJECTED_DEALER' || sessionStorage.getItem("dealerStatus")=='REJECTED_TSM' || sessionStorage.getItem("dealerStatus")=='REJECTED_RHM' ){
    var userId=sessionStorage.getItem("dealerId");
    // this.tse3data=new TseForm3View();
      this.apiService.getTSEForm3ListById(userId).subscribe(data=>{
       
         this.tse3data=data;
 
      });
     
    }
  }

  ngOnInit() {

    if(sessionStorage.getItem('username')==null || sessionStorage.getItem('username')=='undefine'){
      this.router.navigate(['']);
    }

   





    this.tab3Form = this.formBuilder.group({
   //   pancardCopy: ['', Validators.required],
      panCardFile: ['', Validators.required],
   //   gstnCopy: ['', Validators.required],
      gstinFile: ['', Validators.required],
   //   blankChequesCopy: ['', Validators.required],
      blankChequesFile: ['', Validators.required],
  //    photoCopy: ['', Validators.required],
      passportPhotoFile: ['',Validators.required],
  //    addressProofCopy: ['', Validators.required],
      resAddressProofFile: ['', Validators.required],
 //     partDeedCopy: ['', Validators.required],
      partDeedCopyFile: ['', Validators.required],
   //   moaCopy: ['', Validators.required],
     moaIncorpCopyFile:['',Validators.required],
     // bankStateCopy: ['', Validators.required],
      bankStatementFile:['',Validators.required],
    //  stockUndertakingCopy: ['', Validators.required],
      directPartiesFile:['',Validators.required],
   //   itReturnCopy: ['', ''],
      incomeTaxReturnFile:['',''],
   //   auditBalCopy: ['', ''],
      auitedBalanceSheetFile:['',''],
   //   aAdharCopy: ['', ''],
      aadhaarCardCopyFile:['',''],
      shopEstablishmentActFile:['',''],
 //     signFormCopy: ['', Validators.required],
      signedFile:['',Validators.required]
  });
  }

  onPrevious(){
 
    this.tabset.select('tab2id');
  }

   checkAdult(age) {
    return age >= 18;
  }

  onpanCardFile(event){
// alert(event);
 console.log("onpanCardFile::"+event.target.files[0].name)
  var fileValue=event.target.files[0].type;
 
console.log("fileValue:::"+fileValue);
    if(fileValue=="application/pdf"|| fileValue=="image/jpeg"||fileValue=="image/jpg"||fileValue=="image/png"){
      if(event.target.files[0].size<2097152){
        const panCardFile=event.target.files[0];
        this.tab3Form.get('panCardFile').setValue(panCardFile);
       }else{
         (<HTMLInputElement>document.getElementById("panCardFile")).value = "";
         alert("File size should not exceed 2MB!");
         
       }
      
    }else{
        alert('Please upload file having extensions .jpeg/.jpg/.png/.pdf only.');
        (<HTMLInputElement>document.getElementById("panCardFile")).value = "";
        return false;
    }
  
      

  }
  ongstinFile(event){

    var fileValue=event.target.files[0].type;
 
    console.log("fileValue:::"+fileValue);
        if(fileValue=="application/pdf"|| fileValue=="image/jpeg"||fileValue=="image/jpg"||fileValue=="image/png"){
          if(event.target.files[0].size<2097152){
            const gstinFile=event.target.files[0];
            this.tab3Form.get('gstinFile').setValue(gstinFile);
           }else{
            (<HTMLInputElement>document.getElementById("gstinFile")).value = "";
            alert("File size should not exceed 2MB!");
           }
        }else{
            alert('Please upload file having extensions .jpeg/.jpg/.png/.pdf only.');
            (<HTMLInputElement>document.getElementById("gstinFile")).value = "";
            return false;
        }

   
  }
  blankChequesFile(event){

    var fileValue=event.target.files[0].type;
 
    console.log("fileValue:::"+fileValue);
        if(fileValue=="application/pdf"|| fileValue=="image/jpeg"||fileValue=="image/jpg"||fileValue=="image/png"){
          if(event.target.files[0].size<2097152){
            const blankChequesFile=event.target.files[0];
            this.tab3Form.get('blankChequesFile').setValue(blankChequesFile);
           }else{
            (<HTMLInputElement>document.getElementById("blankChequesFile")).value = "";
            alert("File size should not exceed 2MB!");
           }
        }else{
            alert('Please upload file having extensions .jpeg/.jpg/.png/.pdf only.');
            (<HTMLInputElement>document.getElementById("blankChequesFile")).value = "";
            return false;
        }

   
  }
  passportPhotoFile(event){

    var fileValue=event.target.files[0].type;
 
    console.log("fileValue:::"+fileValue);
        if(fileValue=="application/pdf"|| fileValue=="image/jpeg"||fileValue=="image/jpg"||fileValue=="image/png"){
          if(event.target.files[0].size<2097152){
            const passportPhotoFile=event.target.files[0];
            this.tab3Form.get('passportPhotoFile').setValue(passportPhotoFile);
           }else{
            (<HTMLInputElement>document.getElementById("passportPhotoFile")).value = "";
            alert("File size should not exceed 2MB!");
           }
        }else{
            alert('Please upload file having extensions .jpeg/.jpg/.png/.pdf only.');
            (<HTMLInputElement>document.getElementById("passportPhotoFile")).value = "";
            return false;
        }

  
  }
  resAddressProofFile(event){
    var fileValue=event.target.files[0].type;
 
    console.log("fileValue:::"+fileValue);
        if(fileValue=="application/pdf"|| fileValue=="image/jpeg"||fileValue=="image/jpg"||fileValue=="image/png"){
          if(event.target.files[0].size<2097152){
            const resAddressProofFile=event.target.files[0];
            this.tab3Form.get('resAddressProofFile').setValue(resAddressProofFile);
           }else{
            (<HTMLInputElement>document.getElementById("resAddressProofFile")).value = "";
            alert("File size should not exceed 2MB!");
           }
        }else{
            alert('Please upload file having extensions .jpeg/.jpg/.png/.pdf only.');
            (<HTMLInputElement>document.getElementById("resAddressProofFile")).value = "";
            return false;
        }

   
  }
  partDeedCopyFile(event){

    var fileValue=event.target.files[0].type;
 
    console.log("fileValue:::"+fileValue);
        if(fileValue=="application/pdf"|| fileValue=="image/jpeg"||fileValue=="image/jpg"||fileValue=="image/png"){
          if(event.target.files[0].size<2097152){
            const partDeedCopyFile=event.target.files[0];
            this.tab3Form.get('partDeedCopyFile').setValue(partDeedCopyFile);
           }else{
            (<HTMLInputElement>document.getElementById("partDeedCopyFile")).value = "";
            alert("File size should not exceed 2MB!");
           }
        }else{
            alert('Please upload file having extensions .jpeg/.jpg/.png/.pdf only.');
            (<HTMLInputElement>document.getElementById("partDeedCopyFile")).value = "";
            return false;
        }

   
  }
  moaIncorpCopyFile(event){

    var fileValue=event.target.files[0].type;
 
    console.log("fileValue:::"+fileValue);
        if(fileValue=="application/pdf"|| fileValue=="image/jpeg"||fileValue=="image/jpg"||fileValue=="image/png"){
          if(event.target.files[0].size<2097152){
            const moaIncorpCopyFile=event.target.files[0];
            this.tab3Form.get('moaIncorpCopyFile').setValue(moaIncorpCopyFile);
           }else{
            (<HTMLInputElement>document.getElementById("moaIncorpCopyFile")).value = "";
            alert("File size should not exceed 2MB!");
           }
        }else{
            alert('Please upload file having extensions .jpeg/.jpg/.png/.pdf only.');
            (<HTMLInputElement>document.getElementById("moaIncorpCopyFile")).value = "";
            return false;
        }

 
  }
  bankStatementFile(event){
    var fileValue=event.target.files[0].type;
 
    console.log("fileValue:::"+fileValue);
        if(fileValue=="application/pdf"|| fileValue=="image/jpeg"||fileValue=="image/jpg"||fileValue=="image/png"){
          if(event.target.files[0].size<2097152){
            const moaIncorpCopyFile=event.target.files[0];
            this.tab3Form.get('bankStatementFile').setValue(moaIncorpCopyFile);
           }else{
            (<HTMLInputElement>document.getElementById("bankStatementFile")).value = "";
            alert("File size should not exceed 2MB!");
           }
        }else{
            alert('Please upload file having extensions .jpeg/.jpg/.png/.pdf only.');
            (<HTMLInputElement>document.getElementById("bankStatementFile")).value = "";
            return false;
        }

   
  }
  directPartiesFile(event){

    var fileValue=event.target.files[0].type;
 
    console.log("fileValue:::"+fileValue);
        if(fileValue=="application/pdf"|| fileValue=="image/jpeg"||fileValue=="image/jpg"||fileValue=="image/png"){
          if(event.target.files[0].size<2097152){
            const directPartiesFile=event.target.files[0];
            this.tab3Form.get('directPartiesFile').setValue(directPartiesFile);
           }else{
            (<HTMLInputElement>document.getElementById("directPartiesFile")).value = "";
            alert("File size should not exceed 2MB!");
           }
        }else{
            alert('Please upload file having extensions .jpeg/.jpg/.png/.pdf only.');
            (<HTMLInputElement>document.getElementById("directPartiesFile")).value = "";
            return false;
        }

   
  }
  incomeTaxReturnFile(event){

    var fileValue=event.target.files[0].type;
 
    console.log("fileValue:::"+fileValue);
        if(fileValue=="application/pdf"|| fileValue=="image/jpeg"||fileValue=="image/jpg"||fileValue=="image/png"){
          if(event.target.files[0].size<2097152){
            const incomeTaxReturnFile=event.target.files[0];
            this.tab3Form.get('incomeTaxReturnFile').setValue(incomeTaxReturnFile);
           }else{
            (<HTMLInputElement>document.getElementById("incomeTaxReturnFile")).value = "";
            alert("File size should not exceed 2MB!");
           }
        }else{
            alert('Please upload file having extensions .jpeg/.jpg/.png/.pdf only.');
            (<HTMLInputElement>document.getElementById("incomeTaxReturnFile")).value = "";
            return false;
        }


  
  }
  auitedBalanceSheetFile(event){

    var fileValue=event.target.files[0].type;
 
    console.log("fileValue:::"+fileValue);
        if(fileValue=="application/pdf"|| fileValue=="image/jpeg"||fileValue=="image/jpg"||fileValue=="image/png"){
          if(event.target.files[0].size<2097152){
            const auitedBalanceSheetFile=event.target.files[0];
            this.tab3Form.get('auitedBalanceSheetFile').setValue(auitedBalanceSheetFile);
           }else{
            (<HTMLInputElement>document.getElementById("auitedBalanceSheetFile")).value = "";
            alert("File size should not exceed 2MB!");
           }
        }else{
            alert('Please upload file having extensions .jpeg/.jpg/.png/.pdf only.');
            (<HTMLInputElement>document.getElementById("auitedBalanceSheetFile")).value = "";
            return false;
        }

   
  }

  aadhaarCardCopyFile(event){
    var fileValue=event.target.files[0].type;
 
    console.log("fileValue:::"+fileValue);
        if(fileValue=="application/pdf"|| fileValue=="image/jpeg"||fileValue=="image/jpg"||fileValue=="image/png"){
          if(event.target.files[0].size<2097152){
            const aadhaarCardCopyFile=event.target.files[0];
            this.tab3Form.get('aadhaarCardCopyFile').setValue(aadhaarCardCopyFile);
           }else{
            (<HTMLInputElement>document.getElementById("aadhaarCardCopyFile")).value = "";
            alert("File size should not exceed 2MB!");
           }
        }else{
            alert('Please upload file having extensions .jpeg/.jpg/.png/.pdf only.');
            (<HTMLInputElement>document.getElementById("aadhaarCardCopyFile")).value = "";
            return false;
        }

  
  }
  shopEstablishmentActFile(event){
    var fileValue=event.target.files[0].type;
 
    console.log("fileValue:::"+fileValue);
        if(fileValue=="application/pdf"|| fileValue=="image/jpeg"||fileValue=="image/jpg"||fileValue=="image/png"){
          if(event.target.files[0].size<2097152){
            const shopEstablishmentActFile=event.target.files[0];
            this.tab3Form.get('shopEstablishmentActFile').setValue(shopEstablishmentActFile);
           }else{
            (<HTMLInputElement>document.getElementById("shopEstablishmentActFile")).value = "";
            alert("File size should not exceed 2MB!");
           }
        }else{
            alert('Please upload file having extensions .jpeg/.jpg/.png/.pdf only.');
            (<HTMLInputElement>document.getElementById("shopEstablishmentActFile")).value = "";
            return false;
        }

   
  }
  signedFile(event){
    var fileValue=event.target.files[0].type;
 
    console.log("fileValue:::"+fileValue);
        if(fileValue=="application/pdf"|| fileValue=="image/jpeg"||fileValue=="image/jpg"||fileValue=="image/png"){
          if(event.target.files[0].size<2097152){
            const signedFile=event.target.files[0];
            this.tab3Form.get('signedFile').setValue(signedFile);
           }else {
            (<HTMLInputElement>document.getElementById("signedFile")).value = "";
             alert("File size should not exceed 2MB!");
           }
        }else{
            alert('Please upload file having extensions .jpeg/.jpg/.png/.pdf only.');
            (<HTMLInputElement>document.getElementById("signedFile")).value = "";
            return false;
        }

   
  }


  get f() { return this.tab3Form.controls; }

  onSubmitTab3(){
var addharNo=sessionStorage.getItem("Aadharno");
    this.submitted = true;
    this.tab3Data=new Tseform3();
    const formdata=new FormData();

if(addharNo==null){
  alert("Please fill TSE Form 2  !.");  
}
    // stop here if form is invalid
    if(sessionStorage.getItem('dealerStatus')=='REJECTED_DEALER' || sessionStorage.getItem('dealerStatus')=='REJECTED_TSM' || sessionStorage.getItem('dealerStatus')=='REJECTED_RHM' ){
      
      formdata.append('dealerId',sessionStorage.getItem('dealerId'));
      console.log("Tab3Form Id::"+this.tab3Form.get('panCardFile').value);
      formdata.append('dealerStatus',sessionStorage.getItem('dealerStatus'));
      if(this.tab3Form.get('panCardFile').value!=''){
      formdata.append('panCardFile',this.tab3Form.get('panCardFile').value);
      }else{
        formdata.append('panCardFileName',(<HTMLInputElement>document.getElementById("panCardFileName")).value);
      }if(this.tab3Form.get('gstinFile').value!=''){
      
      formdata.append('gstinFile',this.tab3Form.get('gstinFile').value);
    }else{
      formdata.append('gstinFileName',(<HTMLInputElement>document.getElementById("gstnCopyFileName")).value);
    }if(this.tab3Form.get('blankChequesFile').value!=''){

      formdata.append('blankChequesFile',this.tab3Form.get('blankChequesFile').value);
    }else{
      
      formdata.append('blankChequesFileName',(<HTMLInputElement>document.getElementById("blankChequesCopyFileName")).value);
    }if(this.tab3Form.get('passportPhotoFile').value!=''){
      formdata.append('passportPhotoFile',this.tab3Form.get('passportPhotoFile').value);
    }else{
      formdata.append('passportPhotoFileName',(<HTMLInputElement>document.getElementById("photoCopyFileName")).value);
    }if(this.tab3Form.get('resAddressProofFile').value!=''){
      formdata.append('resAddressProofFile',this.tab3Form.get('resAddressProofFile').value);
    }else{
      formdata.append('resAddressProofFileName',(<HTMLInputElement>document.getElementById("addressProofCopyFileName")).value);
    }if(this.tab3Form.get('partDeedCopyFile').value!=''){
      formdata.append('partDeedCopyFile',this.tab3Form.get('partDeedCopyFile').value);
    }else{
      formdata.append('partDeedCopyFileName',(<HTMLInputElement>document.getElementById("partDeedCopyFileName")).value);
    }if(this.tab3Form.get('moaIncorpCopyFile').value!=''){
      formdata.append('moaIncorpCopyFile',this.tab3Form.get('moaIncorpCopyFile').value);
    }else{
      formdata.append('moaIncorpCopyFileName',(<HTMLInputElement>document.getElementById("moaCopyFileName")).value);
    }if(this.tab3Form.get('bankStatementFile').value!=''){
       formdata.append('bankStatementFile',this.tab3Form.get('bankStatementFile').value);
      }else{
        formdata.append('bankStatementFileName',(<HTMLInputElement>document.getElementById("bankStateCopyFileName")).value);
      }if(this.tab3Form.get('directPartiesFile').value!=''){
      formdata.append('directPartiesFile',this.tab3Form.get('directPartiesFile').value);
    }else{
      formdata.append('directPartiesFileName',(<HTMLInputElement>document.getElementById("stockUndertakingCopyFileName")).value);
    }if(this.tab3Form.get('incomeTaxReturnFile').value!=''){
      formdata.append('incomeTaxReturnFile',this.tab3Form.get('incomeTaxReturnFile').value!=null?this.tab3Form.get('incomeTaxReturnFile').value:"");
    }else{
     
      formdata.append('incomeTaxReturnFileName',(<HTMLInputElement>document.getElementById("itReturnCopyFileName")).value!=''?(<HTMLInputElement>document.getElementById("itReturnCopyFileName")).value:"");
    }if(this.tab3Form.get('auitedBalanceSheetFile').value!=''){
      formdata.append('auitedBalanceSheetFile',this.tab3Form.get('auitedBalanceSheetFile').value!=null?this.tab3Form.get('auitedBalanceSheetFile').value:"");
    }else{
      formdata.append('auitedBalanceSheetFileName',(<HTMLInputElement>document.getElementById("auditBalCopyFileName")).value!=''?(<HTMLInputElement>document.getElementById("auditBalCopyFileName")).value:"");
    }if(this.tab3Form.get('aadhaarCardCopyFile').value!=''){
      formdata.append('aadhaarCardCopyFile',this.tab3Form.get('aadhaarCardCopyFile').value);
    }else{
      formdata.append('aadhaarCardCopyFileName',(<HTMLInputElement>document.getElementById("aAdharCopyFileName")).value!=''?(<HTMLInputElement>document.getElementById("aAdharCopyFileName")).value:"");
    }if(this.tab3Form.get('shopEstablishmentActFile').value!=''){
      formdata.append('shopEstablishmentActFile',this.tab3Form.get('shopEstablishmentActFile').value);
    }else{
      formdata.append('shopEstablishmentActFileName',(<HTMLInputElement>document.getElementById("shopEstablishmentActFileName")).value!=''?(<HTMLInputElement>document.getElementById("shopEstablishmentActFileName")).value:"");
    }if(this.tab3Form.get('signedFile').value!=''){
      formdata.append('signedFile',this.tab3Form.get('signedFile').value);
    }else{
      formdata.append('signedFileName',(<HTMLInputElement>document.getElementById("signFormCopyFileName")).value);
    }

  }else{
    if (this.tab3Form.invalid) {
      alert("Please Upload mandatory field!.")
        return;
    }

    console.log("Tab3Form Id::"+sessionStorage.getItem('dealerId'));
    formdata.append('dealerId',sessionStorage.getItem('dealerId'));
    //formdata.append('pancardCopy',this.tab3Form.value.pancardCopy);`
    formdata.append('dealerStatus','');
    formdata.append('panCardFile',this.tab3Form.get('panCardFile').value);
    //formdata.append('gstnCopy',this.tab3Form.value.gstnCopy);
    formdata.append('gstinFile',this.tab3Form.get('gstinFile').value);
    //formdata.append('blankChequesCopy',this.tab3Form.value.blankChequesCopy);
    formdata.append('blankChequesFile',this.tab3Form.get('blankChequesFile').value);
    //formdata.append('photoCopy',this.tab3Form.value.photoCopy);
    formdata.append('passportPhotoFile',this.tab3Form.get('passportPhotoFile').value);
    //formdata.append('addressProofCopy',this.tab3Form.value.addressProofCopy);
    formdata.append('resAddressProofFile',this.tab3Form.get('resAddressProofFile').value);
    //formdata.append('partDeedCopy',this.tab3Form.value.partDeedCopy);
    formdata.append('partDeedCopyFile',this.tab3Form.get('partDeedCopyFile').value);
    //formdata.append('moaCopy',this.tab3Form.value.moaCopy);
    formdata.append('moaIncorpCopyFile',this.tab3Form.get('moaIncorpCopyFile').value);
    //formdata.append('bankStateCopy',this.tab3Form.value.bankStateCopy);
     formdata.append('bankStatementFile',this.tab3Form.get('bankStatementFile').value);
    // formdata.append('stockUndertakingCopy',this.tab3Form.value.stockUndertakingCopy);
    formdata.append('directPartiesFile',this.tab3Form.get('directPartiesFile').value);
    //formdata.append('itReturnCopy',this.tab3Form.value.itReturnCopy);
    formdata.append('incomeTaxReturnFile',this.tab3Form.get('incomeTaxReturnFile').value!=null?this.tab3Form.get('incomeTaxReturnFile').value:"");
    //formdata.append('auditBalCopy',this.tab3Form.value.auditBalCopy);
    formdata.append('auitedBalanceSheetFile',this.tab3Form.get('auitedBalanceSheetFile').value!=null?this.tab3Form.get('auitedBalanceSheetFile').value:"");
    //formdata.append('aAdharCopy',this.tab3Form.value.aAdharCopy);
    formdata.append('aadhaarCardCopyFile',this.tab3Form.get('aadhaarCardCopyFile').value!=null?this.tab3Form.get('aadhaarCardCopyFile').value:"");
    //formdata.append('shopEstablishmentActCopy',this.tab3Form.value.shopEstablishmentActCopy);
    formdata.append('shopEstablishmentActFile',this.tab3Form.get('shopEstablishmentActFile').value!=null?this.tab3Form.get('shopEstablishmentActFile').value:"");
    //formdata.append('signFormCopy',this.tab3Form.value.signFormCopy);
    formdata.append('signedFile',this.tab3Form.get('signedFile').value);

  }


  
    // if(this.tab3Form.value.pancardCopy){
    //   this.tab3Form.value.pancardCopy='YES'
    // }else{
    //   this.tab3Form.value.pancardCopy='NO'
    // }
    

    



 this.progress=true;
// this.onSubmit=true;

    this.apiService.createUserTab3Form(formdata)
    .subscribe( data => {

      console.log("createUserTab3Form:::"+data);
   if(data.length>0){
    this.progress=false;
   this.tabset.select('tab3id');
   this.toastr.success("Request created sucessfully with ID "+data+" and OTP has been sent to the dealer"); 
   sessionStorage.setItem('dealerId','');   
    sessionStorage.setItem('Aadharno','');
    sessionStorage.setItem('dealerStatus','');
  this.router.navigate(['dashboard']);   
   }else{
    
   }

  // switch (event.type){
  //   case HttpEventType.Sent:
  //     console.log('Request has been made!');
  //     break;
  //   case HttpEventType.ResponseHeader:
  //     console.log('Response header has been received!');
  //     break;
  //   case HttpEventType.UploadProgress:
  //     this.progress = Math.round(event.loaded / event.total * 100);
  //     console.log(`Uploaded! ${this.progress}%`);
  //     break;
  //   case HttpEventType.Response:
  //     console.log('User successfully created!', event.body);
  //     setTimeout(() => {
  //       this.progress = 0;
  //     }, 1500);

  // }

     });
    
      
  }


  panCardFileReset(){
    console.log("Reset Value Pancard"+this.tab3Form.value.panCardFile);
    (<HTMLInputElement>document.getElementById("panCardFile")).value = "";

  }
  gstinFileReset(){
    (<HTMLInputElement>document.getElementById("gstinFile")).value = "";
  }
  blankChequesFileReset(){
    (<HTMLInputElement>document.getElementById("blankChequesFile")).value = "";
  }

  passportPhotoFileReset(){
    (<HTMLInputElement>document.getElementById("passportPhotoFile")).value = "";
  }

  resAddressProofFileReset(){
    (<HTMLInputElement>document.getElementById("resAddressProofFile")).value = "";
  }

  partDeedCopyFileReset(){
    (<HTMLInputElement>document.getElementById("partDeedCopyFile")).value = "";
  }

  moaIncorpCopyFileReset(){
    (<HTMLInputElement>document.getElementById("moaIncorpCopyFile")).value = "";
  }
  bankStatementFileReset(){
    (<HTMLInputElement>document.getElementById("bankStatementFile")).value = "";
  }
  directPartiesFileReset(){
    (<HTMLInputElement>document.getElementById("directPartiesFile")).value = "";
  }
  auitedBalanceSheetFileReset(){
    (<HTMLInputElement>document.getElementById("auitedBalanceSheetFile")).value = "";
  }
  incomeTaxReturnFileReset(){
    (<HTMLInputElement>document.getElementById("incomeTaxReturnFile")).value = "";
  }

  aadhaarCardCopyFileReset(){
    (<HTMLInputElement>document.getElementById("aadhaarCardCopyFile")).value = "";
  }
  shopEstablishmentActFileReset(){
    (<HTMLInputElement>document.getElementById("shopEstablishmentActFile")).value = "";
  }

  signedFileReset(){
    (<HTMLInputElement>document.getElementById("signedFile")).value = "";
  }


  getRejectedData(){
    
  }

}
