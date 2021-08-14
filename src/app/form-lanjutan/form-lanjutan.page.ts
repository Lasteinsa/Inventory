import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { LoadingController,NavController } from '@ionic/angular';
import { AuthServiceService } from './../../app/auth-service.service';
import { AlertController } from '@ionic/angular';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-lanjutan',
  templateUrl: './form-lanjutan.page.html',
  styleUrls: ['./form-lanjutan.page.scss'],
})
export class FormLanjutanPage implements OnInit {
  public FormPengambilanData:FormGroup;
  ResponseData:any;
  dataBarangEdit:any;

  constructor(public navCtrl: NavController, 
    public api: AuthServiceService, 
    public loadingController: LoadingController,
    public alertController: AlertController, 
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute, private http: HttpClient) {
      this.FormPengambilanData=this.formBuilder.group({
          product_id:[this.activatedRoute.snapshot.paramMap.get('id')],
          admin:[null, Validators.required],
          quantity:[null, Validators.required, Validators.max(his.dataBarangEdit.quantity)],
          desk:[null, Validators.required]
        });
    }

    ngOnInit() {
      this.DataBarangEdit();
    }
  
     DataBarangEdit() {   
      const idbarangEdit = 'get/' + this.activatedRoute.snapshot.paramMap.get('id');
      this.api.Get_Data(idbarangEdit)
        .subscribe(res => {
          this.ResponseData=res;
          console.log(this.ResponseData);
          if(this.ResponseData){
            this.dataBarangEdit=this.ResponseData.data;
            this.FormPengambilanData.controls.product_id.setValue(this.activatedRoute.snapshot.paramMap.get('id'))
            this.FormPengambilanData.controls.quantity.setValue(this.dataBarangEdit.quantity);
          }
          else{ 
            this.dataBarangEdit='';
         }         
        }, err => {
          console.log(err);
        });
    }
    
    simpan(){
      let params = new URLSearchParams();
      for(let key in this.FormPengambilanData.value){
          params.set(key, this.FormPengambilanData.value[key]) 
      }
      this.api.Put_Data('pengambilan',params)
        .subscribe(res => {
            this.navCtrl.navigateBack('/home');
          }, (err) => {
            console.log(err);
          });
    }

}
