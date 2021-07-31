import { Component, OnInit } from '@angular/core';
import { LoadingController,NavController } from '@ionic/angular';
import { AuthServiceService } from './../../app/auth-service.service';
import { AlertController } from '@ionic/angular';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-penambahan',
  templateUrl: './form-penambahan.page.html',
  styleUrls: ['./form-penambahan.page.scss'],
})
export class FormPenambahanPage implements OnInit {
  public FormSimpanData:FormGroup;

  constructor(public navCtrl: NavController, 
    public api: AuthServiceService, 
    public loadingController: LoadingController,
    public alertController: AlertController, 
    private formBuilder: FormBuilder) {
      this.FormSimpanData=this.formBuilder.group({
          name:['', Validators.required],
          quantity:['', Validators.required],
          desk:['', Validators.required]
        });
     }

  ngOnInit() {
  }

  simpan() {
    this.api.Post_Data('add',this.FormSimpanData.value)
      .subscribe(res => {
          this.navCtrl.navigateBack('/home');
        }, (err) => {
          console.log(err);
        });
  }

}
