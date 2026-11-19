import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  IonList,
} from '@ionic/angular/standalone';
import { SleepService } from '../services/sleep.service';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonAccordion,
    IonAccordionGroup,
    IonItem,
    IonLabel,
    IonList,
  ],
})
export class HistoryPage implements OnInit {
  overnightLogs: OvernightSleepData[] = [];
  sleepinessLogs: StanfordSleepinessData[] = [];

  constructor() {}

  ngOnInit() {}

  // get the records from SleepService
  ionViewWillEnter() {
    this.overnightLogs = SleepService.AllOvernightData;
    this.sleepinessLogs = SleepService.AllSleepinessData;
  }
}
