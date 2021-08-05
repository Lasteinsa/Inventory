import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { LoadingController,NavController } from '@ionic/angular';

const httpOptions = {
  headers: new HttpHeaders({})
};
const apiUrl = "https://t-gadgetcors.herokuapp.com/https://inventori-api.herokuapp.com/barang";

@Component({
  selector   : 'app-form-penambahan',
  templateUrl: './form-penambahan.page.html',
  styleUrls  : ['./form-penambahan.page.scss'],
})

export class FormPenambahanPage {

  constructor(private http: HttpClient, public navCtrl: NavController) { }
  
  FormSimpanData = {};

  add(){
    let params = new URLSearchParams();
    for(let key in this.FormSimpanData){
        params.set(key, this.FormSimpanData[key]) 
    }
    
    this.http.post(`${apiUrl}/add`, params, httpOptions).subscribe(res => {
        console.log(res);
        this.navCtrl.navigateBack('/home');
    }, (err) => {
      console.log(err);
    });
  }

}
