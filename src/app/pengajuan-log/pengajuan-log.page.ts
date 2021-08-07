import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AuthServiceService } from './../../app/auth-service.service';
import { AlertController } from '@ionic/angular';
import { NgZone  } from '@angular/core';

@Component({
  selector: 'app-pengajuan-log',
  templateUrl: './pengajuan-log.page.html',
  styleUrls: ['./pengajuan-log.page.scss'],
})
export class PengajuanLogPage {

  ResponseDataMasuk:any;
  ResponseDataKeluar:any;
  BarangPengajuan:any;
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
      await this.api.Get_Data('getPengajuan')
      .subscribe(res => {
          this.ResponseDataMasuk = res.data;
          
          if(this.ResponseDataMasuk){
            this.BarangPengajuan = this.ResponseDataMasuk;
            
            loading.dismiss();
          }
          else{ 
            this.BarangPengajuan='';
            loading.dismiss();
         }         
        }, err => {
          console.log(err);
          loading.dismiss();
        });
    }

}
