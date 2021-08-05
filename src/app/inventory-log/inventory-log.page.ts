import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AuthServiceService } from './../../app/auth-service.service';
import { AlertController } from '@ionic/angular';
import { NgZone  } from '@angular/core';

@Component({
  selector: 'app-inventory-log',
  templateUrl: './inventory-log.page.html',
  styleUrls: ['./inventory-log.page.scss'],
})
export class InventoryLogPage {

  ResponseDataMasuk:any;
  ResponseDataKeluar:any;
  BarangMasuk:any;
  BarangKeluar:any;
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
      await this.api.Get_Data('getBarangMasuk')
      .subscribe(res => {
          this.ResponseDataMasuk = res.data;
          
          if(this.ResponseDataMasuk){
            this.BarangMasuk = this.ResponseDataMasuk;
            
            loading.dismiss();
          }
          else{ 
            this.BarangMasuk='';
            loading.dismiss();
         }         
        }, err => {
          console.log(err);
          loading.dismiss();
        });
        await this.api.Get_Data('getBarangKeluar')
      .subscribe(res => {
          this.ResponseDataKeluar = res.data;
          
          if(this.ResponseDataKeluar){
            this.BarangKeluar = this.ResponseDataKeluar;
            
            loading.dismiss();
          }
          else{ 
            this.BarangKeluar='';
            loading.dismiss();
         }         
        }, err => {
          console.log(err);
          loading.dismiss();
        });
    }


}
