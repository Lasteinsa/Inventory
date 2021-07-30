import { Component, OnInit } from '@angular/core';

import { LoadingController,NavController } from '@ionic/angular';
import { AuthServiceService } from './../../app/auth-service.service';
import { AlertController } from '@ionic/angular';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.page.html',
  styleUrls: ['./form-edit.page.scss'],
})
export class FormEditPage implements OnInit {

  public FormEditData:FormGroup;
  ResponseData:any;
  dataBarangEdit:any;

  constructor(public navCtrl: NavController, 
    public api: AuthServiceService, 
    public loadingController: LoadingController,
    public alertController: AlertController, 
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute) {
      this.FormEditData=this.formBuilder.group({
          id:[this.activatedRoute.snapshot.paramMap.get('id')],
          name:[null, Validators.required],
          quantity:[null, Validators.required],
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
            this.FormEditData.controls.name.setValue(this.dataBarangEdit.name);
            this.FormEditData.controls.quantity.setValue(this.dataBarangEdit.quantity);
            this.FormEditData.controls.desk.setValue(this.dataBarangEdit.desk);
          }
          else{ 
            this.dataBarangEdit='';
         }         
        }, err => {
          console.log(err);
        });
    }
  
    simpan(){
      this.api.Post_Data('update',this.FormEditData.value)
        .subscribe(res => {
            this.navCtrl.navigateBack('/home');
          }, (err) => {
            console.log(err);
          });
    }

}