import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonItem, IonLabel, IonToggle, IonDatetime, IonButton, IonCard, IonCardContent} from '@ionic/angular/standalone';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { SleepService } from '../services/sleep.service';

@Component({
  selector: 'app-daytime-sleepiness',
  templateUrl: './daytime-sleepiness.page.html',
  styleUrls: ['./daytime-sleepiness.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, IonItem, IonLabel, IonToggle, IonDatetime, IonButton, IonCard, IonCardContent]
})
export class DaytimeSleepinessPage implements OnInit {

  sleepinessLevel: number | null = null;
  sleepinessOptions = [
  { level: 1, description: 'Feeling active and vital' },
  { level: 2, description: 'Functioning at a high level, but not peak' },
  { level: 3, description: 'Awake but relaxed' },
  { level: 4, description: 'Somewhat foggy' },
  { level: 5, description: 'Foggy and losing interest' },
  { level: 6, description: 'Sleepy and fighting sleep' },
  { level: 7, description: 'Sleep onset soon' }
  ];
  useCurrentTime = true;
  currentTime = new Date();
  selectedTime = '';
  message: string = '';
  showUndo = false;
  lastSleepinessLog: StanfordSleepinessData | null = null;

  constructor(private sleepService: SleepService) { }

  ngOnInit() {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }

  selectSleepiness(level:number, element: HTMLElement) {
    this.sleepinessLevel = level;

    this.message = ''; // clear old message when selection changes

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  }

  async saveEntry() {
    if (this.sleepinessLevel === null) {
      this.message = 'Please select a sleepiness rating.';
      return;
    }

      const timestamp = this.useCurrentTime
      ? new Date()
      : new Date(this.selectedTime);

      const sleepData = new StanfordSleepinessData(this.sleepinessLevel, timestamp);
      // use SleepService to saved the logs
      await this.sleepService.logSleepinessData(sleepData);

      //save reference for undo
      this.lastSleepinessLog = sleepData;

      this.message = 'Daytime sleepiness rating logged successfully!';
      this.sleepinessLevel = null; // resets after save is successful

      // show undo button for 5 seconds
      this.showUndo = true;
      setTimeout(() => {
        this.showUndo = false;
        this.lastSleepinessLog = null;
      }, 5000);
  }

  undoLastEntry() {
  if (!this.lastSleepinessLog) {
    return;
  }

  const index = SleepService.AllSleepData.indexOf(
    this.lastSleepinessLog
  );

  if (index > -1) {
    SleepService.AllSleepData.splice(index, 1);
  }

    this.message = 'Log removed.';
    this.showUndo = false;
    this.lastSleepinessLog = null;
  }

}
