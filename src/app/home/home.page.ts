import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AuthServiceService } from './../../app/auth-service.service';
import { AlertController } from '@ionic/angular';
import { NgZone  } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
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

    async presentAlertConfirm(idbarang) {
      const alert = await this.alertController.create({
        header: 'Konfirmasi',
        message: 'Apakah anda yakin akan menghapus data ini?',
        buttons: [
          {
            text: 'Tidak',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
            }
          }, {
            text: 'Ya',
            handler: () => {
              this.HapusData(idbarang);
            }
          }
        ]
      });
      await alert.present();
    }
  
   HapusData(id) {
      const idDelete={
        id:id
      };
     this.api.Post_Data('Delete_Barang',idDelete)
      .subscribe(res => {
        this.zone.run(() => {
          this.DataBarang();
        });        
        }, (err) => {
          console.log(err);
        });
    }
  

}
