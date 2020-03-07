import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-familylaw',
  templateUrl: './familylaw.page.html',
  styleUrls: ['./familylaw.page.scss'],
})
export class FamilylawPage implements OnInit {

  url;

  trustedVideoUrl: SafeResourceUrl;
  array_of_objects = [{vid_link:"https://youtube.com/lalla"},{vid_link:"https://youtube.com/lalla"}]
  

  constructor(
    private domSanitizer: DomSanitizer
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

}
