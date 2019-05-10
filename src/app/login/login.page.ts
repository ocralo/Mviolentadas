import { Component, OnInit } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';
import { HomePage } from '../home/home.page';
import { User } from '../modules/user';
import { AngularFireAuth } from "angularfire2/auth";



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  user = {} as User;

  constructor(private afAuth: AngularFireAuth,public toastController:ToastController, public navCtrl:NavController) { }
  
  async Login(user: User) {
    try {
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      console.log(result);
    } catch (e) {
      console.error(e);
    }
      
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
