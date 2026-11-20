import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { signal } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Storage } from '@ionic/storage-angular';
import { StorageService } from '../services/storage.service';
import { FormsModule } from '@angular/forms';
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
    FormsModule
  ],
})
export class HomePage {
  nameSaved = signal<boolean>(false);
  nameKey:string = "name";
  name:string="";

  constructor(public sleepService: SleepService, private storage: StorageService) {
    Preferences.get({
      key: this.nameKey
    }).then((resultName) => {
      console.log(`name: ${resultName.value}`);
      if(resultName.value)
      {
        console.log(`${resultName.value} not null`);
        this.name = String(resultName.value);
        this.nameSaved.set(true);
      }
    });
    this.init();
  }
  
  async init() {
  await this.storage.create();
  }

  async saveName() {
    console.log(`saved name: ${this.name}`);
    try {
      await Preferences.set({
      key: 'name',
      value: this.name
      });

      this.nameSaved.set(true);
    } catch (e)
    {
      console.log(e);
    }
  }

  async clearData() {
    // clear Preferences data
    await Preferences.remove({
      key: this.nameKey
    });

    this.nameSaved.set(false);
    this.name = "";

    // clear ionic storage data
    await this.storage.clear();
  }

  async ngOnInit() {
    await this.storage.create();
    console.log(this.allSleepData);
  }

  /* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
  get allSleepData() {
    return SleepService.AllSleepData;
  }
}
