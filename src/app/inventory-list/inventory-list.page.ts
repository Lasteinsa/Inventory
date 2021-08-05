import { Component } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { AuthServiceService } from './../../app/auth-service.service';
import { AlertController } from '@ionic/angular';
import { NgZone  } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const apiUrl = "https://t-gadgetcors.herokuapp.com/https://inventori-api.herokuapp.com/barang";

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.page.html',
  styleUrls: ['./inventory-list.page.scss'],
})
export class InventoryListPage {
  ResponseData:any;
  Data_Barang:any;
  constructor(public navCtrl: NavController, public api: AuthServiceService, public loadingController: LoadingController,
    public alertController: AlertController, private zone:NgZone, public http : HttpClient) { }

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
              console.log(idbarang);
              
              this.http.delete(`${apiUrl}/hapus?product_id=${idbarang}`).subscribe(res => {
                console.log(res);
                this.DataBarang();
              }, err => {
                console.log(err);
              });
            }
          }
        ]
      });
      await alert.present();
    }

}
