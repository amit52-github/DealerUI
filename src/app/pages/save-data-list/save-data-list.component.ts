import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/app/http-client.service';

@Component({
  selector: 'app-save-data-list',
  templateUrl: './save-data-list.component.html',
  styleUrls: ['./save-data-list.component.scss']
})
export class SaveDataListComponent implements OnInit {

  saveDataList:string[]=[];

  constructor(private apiService:HttpClientService) { }

  ngOnInit() {
    this.getSaveDataList();
  }


  getSaveDataList(){
    var userId=sessionStorage.getItem("username");   
    this.apiService.getSaveDataList(userId).subscribe(data=>{ 
      console.log("DealerPendingData:::"+data);
       this.saveDataList=data;
      console.log("DealerPendingData::Pending:"+this.saveDataList[0]);
    });
  }

  getDealerID(event){
    debugger;
    console.log("ViewId :"+event.target.id);
    sessionStorage.setItem("dealerId",event.target.id);
    this.apiService.setUserId(event.target.id);
  }

}
