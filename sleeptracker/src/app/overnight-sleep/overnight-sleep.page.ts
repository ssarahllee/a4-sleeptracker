import { SleepService } from './../services/sleep.service';
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
  IonItem,
  IonLabel,
  IonButton,
} from '@ionic/angular/standalone';
import { OvernightSleepData } from '../data/overnight-sleep-data';

@Component({
  selector: 'app-overnight-sleep',
  templateUrl: './overnight-sleep.page.html',
  styleUrls: ['./overnight-sleep.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonItem,
    IonLabel,
    IonButton,
    CommonModule,
    FormsModule,
  ],
})
export class OvernightSleepPage implements OnInit {
  bedtime: string = '';
  wakeUpTime: string = '';
  message: string = '';
  constructor(private sleepService: SleepService) {}

  ngOnInit() {}

  async saveSleep() {
    // confirm the user entered both bedtime & wakeup time
    if (!this.bedtime || !this.wakeUpTime) {
      this.message = 'Please enter both bedtime and wake-up time to save.';
      return;
    }

    // convert strings to Date objects
    const sleepStart = new Date(this.bedtime);
    const sleepEnd = new Date(this.wakeUpTime);

    // make sure the date is valid, like sleepEnd can't be before sleepStart
    if (
      isNaN(sleepStart.getTime()) ||
      isNaN(sleepEnd.getTime()) ||
      sleepEnd <= sleepStart
    ) {
      this.message = 'Invalid. The wake-up time must be after bedtime.';
      return;
    }

    const sleepData = new OvernightSleepData(sleepStart, sleepEnd);
    // use SleepService to saved the logs
    try {
      await this.sleepService.logOvernightData(sleepData);

      this.message = 'Overnight sleep logged successfully!';

      // reset
      this.bedtime = '';
      this.wakeUpTime = '';
    } catch (e) {
      this.message = 'Unable to save your sleep log.';
      console.log(e);
    }

    //this.sleepService.logOvernightData(sleepData);
    //this.message = 'Overnight sleep logged successfully!';
  }
}
