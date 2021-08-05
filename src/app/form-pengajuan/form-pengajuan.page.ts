import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { LoadingController,NavController } from '@ionic/angular';

const httpOptions = {
  headers: new HttpHeaders({'api-key':'610644b1eba3e'})
};
const apiUrl = "https://t-gadgetcors.herokuapp.com/https://inventori-api.herokuapp.com/barang";

@Component({
  selector: 'app-form-pengajuan',
  templateUrl: './form-pengajuan.page.html',
  styleUrls: ['./form-pengajuan.page.scss'],
})
export class FormPengajuanPage {
  
  constructor(private http: HttpClient, public navCtrl: NavController) { }
  
  FormSimpanData = {};

  pengajuan(){
    let params = new URLSearchParams();
    for(let key in this.FormSimpanData){
        params.set(key, this.FormSimpanData[key]) 
    }
    
    this.http.post(`${apiUrl}/pengajuan`, params, httpOptions).subscribe(res => {
        console.log(res);
        this.navCtrl.navigateBack('/home');
    }, (err) => {
      console.log(err);
    });
  }
}
