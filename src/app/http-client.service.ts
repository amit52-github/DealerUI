import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpEvent, HttpEventType } from '@angular/common/http';
import { TSEForm1 } from './tseform1';
import { catchError } from 'rxjs/operators';
import { Tseform2 } from './tseform2';
import { Tseform3 } from './tseform3';
import { environment } from 'src/environments/environment';
import { TseFrom1ViewData } from './tse-from1-view-data';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  getCityList(value: any) {
    throw new Error("Method not implemented.");
  }

  
  userID:string;

     
  setUserId(userId){
    this.userID=userId;
  }
  getUserId(){
    return this.userID;
  }

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  httpOptionsMul= {
    headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data',
    
    })
  };

  private subject = new BehaviorSubject<boolean>(true);
  isLoginPage = this.subject.asObservable();
  //  baseUrl='http://localhost:8080/DealerOnboardingProcess/register';
  //  getDistrictUrl='http://localhost:8080/DealerOnboardingProcess/get_district_list/';
  //  getTalukaUrl='http://localhost:8080/DealerOnboardingProcess/get_Taluka_List/';
  //  getCityUrl='http://localhost:8080/DealerOnboardingProcess/get_City_List/';
  //  getTSEForm1DataUrl='http://localhost:8080/DealerOnboardingProcess/get_TSEForm1_Data/';
  //   loginUrl='http://localhost:8080/DealerOnboardingProcess/first_login';
  //   getTownVillageCodeUrl='http://localhost:8080/DealerOnboardingProcess/get_townVillageCode_List/';

  //   baseTab2Url='http://localhost:8080/DealerOnboardingProcess/registerForm2';
  //   baseTab3Url='http://localhost:8080/DealerOnboardingProcess/registerForm3';
  //   getViewPageDataUrl='http://localhost:8080/DealerOnboardingProcess/view_page/';
  //   otpLoginUrl='http://localhost:8080/DealerOnboardingProcess/otp_login';
  //   getViewPageDataApprovalUrl='http://localhost:8080/DealerOnboardingProcess/view_page_approval/';
  //   getDealerPendingUrl='http://localhost:8080/DealerOnboardingProcess/dealer_pending/';
    
  constructor(private http: HttpClient) { }



  login(loginPayload){
    return this.http.post( environment.loginUrl, loginPayload).pipe(
      catchError(this.handleError));;
  }

  getViewPageDataApproval(approval):Observable<any>{
   
    return this.http.post<any>(environment.getViewPageDataApprovalUrl,approval,this.httpOptions).pipe(
      catchError(this.handleError));
  }

  otpLogin(otp): Observable<any>{
    return this.http.post<any>( environment.otpLoginUrl, otp,this.httpOptions).pipe(
      catchError(this.handleError));
  }

httpGetService(url): Observable<any> {
  return this.http.get(url);
}

httpPostService(baseUrl, body): Observable<any> {
  console.log('httpOptions' + baseUrl, body);
  return this.http.post(baseUrl, body).pipe();
}




logout() {
    this.subject.next(true);
}
//JSON.stringify(tab1)
createUser(tab1: TSEForm1): Observable<any> {
  console.log ("TSEForm1 data::"+tab1);
  return this.http.post<any>(environment.baseUrl,tab1,this.httpOptions).pipe(
    catchError(this.handleError));
  ;
}

// updateUser(tab1: TSEForm1): Observable<any> {
//   console.log ("TSEForm1 data::"+tab1);
//   return this.http.post<any>(environment.updateUserUrl,tab1,this.httpOptions).pipe(
//     catchError(this.handleError));
//   ;
// }


createUserTab2Form(tab2: Tseform2): Observable<Tseform2> {
  console.log ("TSEForm2 data::"+tab2);
  return this.http.post<Tseform2>(environment.baseTab2Url,tab2 ,this.httpOptions).pipe(
    catchError(this.handleError));
  ;
}

createUserTab3Form(formData): Observable<any> {
  console.log ("TSEForm2 data::"+formData);
  return this.http.post<any>(environment.baseTab3Url,formData).pipe(
    // map(event=>this.getEventMessage(event,formData)),
     catchError(this.handleError));
}

getSalesOfficeList(userId):Observable<any>{
  return this.http.get<any>(environment.getSalesOfficeUrl+ userId,this.httpOptions).pipe(
    catchError(this.handleError));
}

getDistrictList(depotCode):Observable<any>{
  return this.http.get<any>(environment.getDistrictUrl+ depotCode,this.httpOptions).pipe(
    catchError(this.handleError));
  
}

getLegalStatusList():Observable<any>{
  return this.http.get<any>(environment.getLegalStatusUrl,this.httpOptions).pipe(
    catchError(this.handleError));
}

getTalukaList(distCode):Observable<any>{
  // distCode=distCode.split(",")[0];
  return this.http.get<any>(environment.getTalukaUrl+ distCode,this.httpOptions).pipe(
    catchError(this.handleError));
}


 getCityList1(cityCode):Observable<any>{
  // cityCode=cityCode.split(",")[0];
   return this.http.get<any>(environment.getCityUrl+ cityCode,this.httpOptions).pipe(
   catchError(this.handleError));
  }


  
  getTownVillageList(townVillageCode):Observable<any>{
    // townVillageCode=townVillageCode.split(",")[0];
     return this.http.get<any>(environment.getTownVillageCodeUrl+ townVillageCode,this.httpOptions).pipe(
     catchError(this.handleError));
    }
    getTSEForm1ListById(useId):Observable<TseFrom1ViewData>{
    return this.http.get<TseFrom1ViewData>(environment.getTSEForm1DataUrl+useId,this.httpOptions).pipe(
      catchError(this.handleError));
  }
  getTSEForm2ListById(useId):Observable<Tseform2>{
    return this.http.get<Tseform2>(environment.getTSEForm2DataUrl+useId,this.httpOptions).pipe(
      catchError(this.handleError));
  }
  
  getTSEForm3ListById(useId){
    return this.http.get<any>(environment.getTSEForm3DataUrl+useId,this.httpOptions).pipe(
      catchError(this.handleError));
  }
  getTSEForm1List():Observable<TSEForm1>{
    return this.http.get<TSEForm1>(environment.getTSEForm1DataUrl,this.httpOptions).pipe(
      catchError(this.handleError));
  }

  getViewPageData(dealerId):Observable<any>{
   
    return this.http.get<any>(environment.getViewPageDataUrl+dealerId,this.httpOptions).pipe(
      catchError(this.handleError));
  }
  getDealerPendingData(userId){
    return this.http.get<any>(environment.getDealerPendingUrl+userId,this.httpOptions);
  }


  getSaveDataList(userId){
    return this.http.get<any>(environment.getSaveDataListUrl+userId,this.httpOptions);
  }

  getIntroducerNameData(custCode){
    return this.http.get<any>(environment.getIntroducerNameUrl+custCode,this.httpOptions);
  }

  panVerification(panNo){
    return this.http.get<any>(environment.getPanVerificationUrl+panNo,this.httpOptions);
  }

  panVerificationApi(params){
    return this.http.post<any>(environment.getPanVerificationApiUrl+params,this.httpOptions);
  }

  gstinVerificationApi(params){
    return this.http.post<any>(environment.getGSTINVerificationApiUrl+params,this.httpOptions);
  }

  gstinMonthVerificationApi(params){
    return this.http.post<any>(environment.getGSTINMonthVerificationApiUrl+params,this.httpOptions);
  }


private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError(
    'Something bad happened; please try again later.');
};

private getEventMessage(event:HttpEvent<any>,formData){
  switch(event.type){
    case HttpEventType.UploadProgress:
      return this.fileUploadProgress(event);
       case HttpEventType.Response:
        return this.apiResponse(event);
      default:
       // return 'File "${formData.get('pancardFile').name}'
  }
}

private fileUploadProgress(event){
  const percentDone=Math.round(100*event.loaded/event.total);
  return {status:'progress',message:percentDone};
}
private apiResponse(event){
  return event.body;
}



}
