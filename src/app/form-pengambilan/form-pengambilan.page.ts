import { Component, OnInit, NgZone } from '@angular/core';

import { LoadingController,NavController } from '@ionic/angular';
import { AuthServiceService } from './../../app/auth-service.service';
import { AlertController } from '@ionic/angular';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-pengambilan',
  templateUrl: './form-pengambilan.page.html',
  styleUrls: ['./form-pengambilan.page.scss'],
})
export class FormPengambilanPage implements OnInit {
  public FormEditData:FormGroup;
  ResponseData:any;
  Data_Barang:any;
  constructor(public api: AuthServiceService, public loadingController: LoadingController,
    public alertController: AlertController, private zone:NgZone) { }

    ionViewWillEnter(){
      this.DataBarang();
    }
  
    async DataBarang() {   
      const loading = await this.loadingController.create({
        message: 'Loading...'
      });
      await loading.present();  
      await this.api.Get_Data('get')
      .subscribe(res => {
          this.ResponseData = res.data;
          
          if(this.ResponseData){
            this.Data_Barang = this.ResponseData;
            
            loading.dismiss();
          }
          else{ 
            this.Data_Barang='';
            loading.dismiss();
         }         
        }, err => {
          console.log(err);
          loading.dismiss();
        });
    }

  ngOnInit() {
  }

}
