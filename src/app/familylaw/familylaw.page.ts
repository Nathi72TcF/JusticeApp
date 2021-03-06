import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { AlertController } from '@ionic/angular';
import { from } from 'rxjs';

@Component({
  selector: 'app-familylaw',
  templateUrl: './familylaw.page.html',
  styleUrls: ['./familylaw.page.scss'],
})
export class FamilylawPage implements OnInit {

  url;

  trustedVideoUrl: SafeResourceUrl;
  array_of_objects = [{vid_link:"https://youtube.com/lalla"},{vid_link:"https://youtube.com/lalla"}]
  // alertController: any;

  constructor(
    private domSanitizer: DomSanitizer,
    public alertController: AlertController
  ) {
    this.getSafeUrl("https://www.youtube.com/embed/8Hlf_qbVotQ?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin");
   }

  ngOnInit() {
  }

  ionViewWillEnter(): void {
    for(let i of this.array_of_objects){
      // i.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(i.vid_link);
    }
  }  

  getSafeUrl(url) {
		this.url = this.domSanitizer.bypassSecurityTrustResourceUrl(url);		
  }
  
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Message <strong>are you sure you want to save save this information to you account</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

}
