import { Component, OnInit, Input } from '@angular/core';
import { HttpClientService } from 'src/app/http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dealer-pending',
  templateUrl: './dealer-pending.component.html',
  styleUrls: ['./dealer-pending.component.scss']
})

// export class PendingData{
//   pendingId:string;
//   pendingName:string;
// };
export class DealerPendingComponent implements OnInit {

  @Input() refreshPage: boolean;
  pendingData:string[]=[];
  username:string;
  constructor(private apiService:HttpClientService,private route:Router) { }

  ngOnInit() {
    this.username=sessionStorage.getItem("username")
    console.log("Username Tse Mu::"+this.username);
    debugger
    if(sessionStorage.getItem('username')==null || sessionStorage.getItem('username')=='undefine'){
      this.route.navigate(['']);
    }
    this.getDealerPending();
    if(this.refreshPage){
      window.location.reload();
    }
  }


  getDealerPending(){
    var userId=sessionStorage.getItem("username")
  this.apiService.getDealerPendingData(userId).subscribe(data=>{
      
    console.log("DealerPendingData:::"+data);
     this.pendingData=data;
    console.log("DealerPendingData::Pending:"+this.pendingData[0]);
  });
}

getViewID(id,status){
 // alert("ViewId::"+id+"::Status:::"+status);
  // console.log("ViewId :"+event.target.id);
  sessionStorage.setItem("dealerId",id);
  sessionStorage.setItem("dealerStatus",status);
  this.apiService.setUserId(id);
}
}