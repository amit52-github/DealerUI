import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClientService } from 'src/app/http-client.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DealerDetail } from 'src/app/dealer-detail';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ComponentsModule } from 'src/app/components/components.module';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.scss']
})
export class ViewPageComponent implements OnInit {

  viewPage: FormGroup;
  dealerDetail:DealerDetail;
  closeResult: string;
  public show:boolean = false;
  username:string;
  refreshPage:boolean=false;

  constructor(private modalService: NgbModal,private formBuilder: FormBuilder,private apiService: HttpClientService,private route:Router,private toastr: ToastrService) {

   }

  ngOnInit() {
  //  this.viewPage = this.formBuilder.group({
  //     salesOffice: ['', ''],
  //     cityCode: ['', ''],
  //     townVillageCode: [''],
  //    dealerName:['', ''],
  //  address:['', ''],
  //  address1:['', ''],
  //  address2:['', ''],
  //  street:['', ''],
  //  city:['',''],
  //  district:['', ''],
  //  postalCode:['',''],
  //  mobileNo:['', ''],
  //  mobileNo2:['', ''],
  //  emailAddress:['',''],
  //  legalStatus:['',Validators.required],
  //  unloadingPoint:['',''],
  //  bankIFSCCode:['',''],
  //  bankBranchName:['', ''],
  //  bankAccNo:['', ''],
  //  createdBy:['', ''],
  //  dealerID:['', ''],
  //  id:[''],
  //  createDate:['']});
    this.viewPageData();
  }
viewPageData(){
  var dealerId=sessionStorage.getItem('dealerId');
  this.username=sessionStorage.getItem("username");
  console.log("View page dealerId::"+dealerId +":::and::username::"+this.username);

  this.apiService.getViewPageData(dealerId).subscribe(data=>{
    this.dealerDetail=data;
    console.log("itReturnCopyFile::"+this.dealerDetail.itReturnCopyFile);
    

  });
}

onReject(){
// alert("Reject Remark value :: "+(<HTMLInputElement>document.getElementById("remark")).value);
console.log("onReject Dealer Id"+sessionStorage.getItem('username'));
var approval;
if(sessionStorage.getItem('username')!=null){
  approval= {
    id:sessionStorage.getItem('dealerId'),
    status: "REJECTED",
    remarks:(<HTMLInputElement>document.getElementById("remark")).value,
    approvalName:sessionStorage.getItem('username')

  }
}else{
  approval = {
    id:sessionStorage.getItem('dealerId'),
    status: "REJECTED",
    remarks: (<HTMLInputElement>document.getElementById("remark")).value ,
    approvalName:this.dealerDetail.mobileNo
  }
}
 
  this.apiService.getViewPageDataApproval(approval).subscribe(data=>{
   // alert(data);
   console.log("getViewPageDataApproval:::"+data);
    if(data.status=="success") {
     // this.toastr.success('Reject Successfully');

      this.route.navigate(['rejected']);
      
    }else {
    alert("Something wrong please wait.")
    }
  });
  // alert('Reject Successfully');
 
}


onApprove(){
 
  
  var approval ;
  debugger
  if(sessionStorage.getItem('username')==null){
  approval= {
    id:sessionStorage.getItem('dealerId'),
    status: "APPROVED",
    remarks:"NA",
    approvalName:this.dealerDetail.mobileNo
  }
}else{
  approval= {
    id:sessionStorage.getItem('dealerId'),
    status: "APPROVED",
    remarks:"NA",
    approvalName:sessionStorage.getItem('username')
  }

  }


  this.apiService.getViewPageDataApproval(approval).subscribe(data=>{
    // alert(data);
    if(data.status=="success") {
    //  this.toastr.success('Approve Successfully');
      this.route.navigate(['approved']);
   //  window.close();this
    //  window.open('','_self').close();
  this.refreshPage=true;
    }else {
     // this.invalidLogin = true;
      alert("Something wrong please wait." );
    }
  });
  // alert('Approve Successfully');
  // window.addEventListener("beforeunload", function (e) {
  //   var confirmationMessage = "\o/";
  // console.log("cond");
  //   e.returnValue = confirmationMessage;     
  //   return confirmationMessage;              
  // });
 
}

onRemarks(){
  this.show=true;
  // console.log("onReject Remark"+(<HTMLInputElement>document.getElementById("remark")).value);
  var remark=(<HTMLInputElement>document.getElementById("remark")).value;
  debugger;

  if(remark==""){
  alert("Please insert remark");
  return
  }
  this.onReject();
}

onApproveClose(){
  sessionStorage.setItem('dealerId','');
  this.route.navigate(['dashboard']);
}


}
