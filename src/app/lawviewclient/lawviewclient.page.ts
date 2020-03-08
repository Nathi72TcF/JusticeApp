import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lawviewclient',
  templateUrl: './lawviewclient.page.html',
  styleUrls: ['./lawviewclient.page.scss'],
})
export class LawviewclientPage implements OnInit {

  id;

  Categories = [
    {id: 'CVLL', name: 'Nkosinathi Mbhazo', pic: 'nathi.jpg', location: 'Quthu KZN', Amount: 'R3500,00', Case: 'Drunk n Driving'},
    // {id: 'CRLL', name: 'Thabo Mafofo', pic: 'eh.jpg', location: 'Giyane LMP', Amount: '4000,00', Case: 'Abuse'},
    // {id: 'STRR', name: 'Londiwe Mtshali', pic: 'londy.jpg', location: 'Khiphunyawo KZN', Amount: '1500,00', Case: 'Bank Conflits'},
    // {id: 'CMML', name: 'Vumi Mathe', pic: 'vumi.jpg', location: 'Qwaqwa KZN', Amount: '5000,00', Case: 'Carring unlisenced weapon'},
    // {id: 'CVLL', name: 'Patient Mthembu', pic: 'peshy.jpg', location: 'Tembisa GAU', Amount: '600,00', Case: 'Rape'},
    // {id: 'CRLL', name: 'Boyke Mtshali', pic: 'woman.jpg', location: 'Soweto KZN', Amount: '500,00', Case: 'Hit and run'},
    // {id: 'STRR', name: 'Bafana Wonga', pic: 'man2.jpg', location: 'Emonti EC', Amount: '850,00', Case: 'Demage Assets'},
    // {id: 'CMML', name: 'Gwi-itshe Madabula', pic: 'itshe.jpg', location: 'Kwa-Ntaba ye Zulu KZN', Amount: '250,00', Case: 'Theft and Assult'},
  ]

  constructor(
    public activatedRoute: ActivatedRoute,
    public alertController: AlertController
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
   }

  ngOnInit() {
    // if (this.Categories) {
    //   console.log(this.Categories);
    //   for (let i = 0; i < this.Categories.length; i++) {
    //     if (this.Categories[i].scoreBoolean === true) {
    //       this.Categories++;
    //     }
    //   }
    //   console.log(this.Categories);
    // }
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
