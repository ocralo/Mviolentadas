import { Component } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';



@Component({
selector: 'app-home',
templateUrl: 'home.page.html',
styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(private call: CallNumber) { }



    async callNumber(): Promise<any>{
        try {
            await this.call.callNumber('3128662953', true);
        } catch(e){
            console.error(e); 
        }
    }
}
//this.call.CallNumber('3128662953', true).then(res=>console.log('launched!',res)).catch(err => console.log('error',err));


