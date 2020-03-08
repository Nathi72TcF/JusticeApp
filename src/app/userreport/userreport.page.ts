import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
// import * as firebase from 'firebase';

@Component({
  selector: 'app-userreport',
  templateUrl: './userreport.page.html',
  styleUrls: ['./userreport.page.scss'],
})
export class UserreportPage implements OnInit {

  // storage = firebase.storage().ref();
  image;

  constructor(
    public alertController: AlertController
  ) { }

  ngOnInit() {
  }

  // changeListener(admin): void {
  //   const i = admin.target.files[0];
  //   console.log(i);
  //   const upload = this.storage.child(i.name).put(i);
  //   upload.on('state_changed', snapshot => {
  //     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //     console.log('upload is: ', progress , '% done.');
  //   }, err => {
  //   }, () => {
  //     upload.snapshot.ref.getDownloadURL().then(dwnURL => {
  //       console.log('File avail at: ', dwnURL);
  //       this.image = dwnURL;
  //     });
  //   });
  // }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Message <strong>Are you Sure you want to Submit your Information</strong>!!!',
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
            this.DataSaved();
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async DataSaved() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: '<strong>Application Submitted</strong>!!!',
      buttons: [
        {
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
