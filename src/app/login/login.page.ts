import { Component, OnInit } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';
import { HomePage } from '../home/home.page';
import { User } from '../modules/user';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  user = {} as User;

  constructor(public toastController:ToastController, public navCtrl:NavController) { }
  
    async Login(){
      const toast = await this.toastController.create({
          message:"Bienvenido",
          duration: 1000
      });
      this.navCtrl.navigateRoot('/home');
      toast.present();
      
    } 
    async Register(){
      const toast = await this.toastController.create({
          message:"Registrate",
          duration: 1000
      });
      toast.present();
      this.navCtrl.push('RegistrerPage');
    } 
    ngOnInit() {
    
  }

}
