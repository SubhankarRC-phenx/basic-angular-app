import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AssetDataService {

  url = "https://owl-erp-development.in.ngrok.io/api/getAllAssetTypesName/?access_token=jodhajEYmXPvKm17OyOb1iJ3fILayF";
  constructor(
    private http:HttpClient
  ) { }
  assetType(): Observable<any>{
    return this.http.get(this.url);
  }
}
