import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonRadioGroup, IonList, IonItem, IonRadio, IonLabel} from '@ionic/angular/standalone';

@Component({
  selector: 'app-daytime-sleepiness',
  templateUrl: './daytime-sleepiness.page.html',
  styleUrls: ['./daytime-sleepiness.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, IonRadioGroup, IonList, IonItem, IonRadio, IonLabel]
})
export class DaytimeSleepinessPage implements OnInit {

  sleepinessOptions = [
  { level: 1, description: 'Feeling active and vital' },
  { level: 2, description: 'Functioning at a high level' },
  { level: 3, description: 'Relaxed but awake' },
  { level: 4, description: 'Somewhat foggy' },
  { level: 5, description: 'Foggy and losing interest' },
  { level: 6, description: 'Sleepy and fighting sleep' },
  { level: 7, description: 'Almost asleep' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
