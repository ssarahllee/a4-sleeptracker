import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonButtons,
  IonText,
} from '@ionic/angular/standalone';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    RouterLink,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonButtons,
    IonText,
  ],
})
export class HomePage {
  // name:string="";
  // nameKey:string;
  constructor(public sleepService: SleepService) {
  // Preferences.get({
  //   key: this.nameKey
  // }).then((resultName) => {
  //   if(resultName.value)
  //   {
  //     console.log("real")
      // this.nameSaved.set(true);
  //   }
  // });
  }
  
  async saveName() {
    // await Preferences.set({
    //   key: this.nameKey,
    //   value: this.name
    // });
    // console.log('saved name: ${this.name}');
  }

  ngOnInit() {
    console.log(this.allSleepData);
  }

  /* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
  get allSleepData() {
    return SleepService.AllSleepData;
  }
}
