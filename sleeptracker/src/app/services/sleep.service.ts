import { Injectable } from '@angular/core';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root',
})
export class SleepService {
  private static LoadDefaultData: boolean = false;
  public static AllSleepData: SleepData[] = [];
  public static AllOvernightData: OvernightSleepData[] = [];
  public static AllSleepinessData: StanfordSleepinessData[] = [];

  private overnightKey: string = 'overnightLogs';
  private overnightLoaded: Promise<void>;

  private sleepinessKey = 'sleepiness-data';
  private sleepinessLoaded: Promise<void>;

  constructor() {
    this.overnightLoaded = this.loadSavedData();
    this.sleepinessLoaded = this.loadSavedData();
  }
  // retrieve saved values
  private async loadSavedData(): Promise<void> {
    const overnight = await Preferences.get({
      key: this.overnightKey,
    });
    const sleepiness = await Preferences.get({
      key: this.sleepinessKey,
    });
    // Check if saved overnight logs exist
    if (overnight.value != null) {
      const savedLogs = JSON.parse(overnight.value);
      // Restore saved overnight sleep records
      SleepService.AllOvernightData = savedLogs.map((log: any) => {
        const record = new OvernightSleepData(
          new Date(log.sleepStart),
          new Date(log.sleepEnd),
        );
        record.id = log.id;
        record.loggedAt = new Date(log.loggedAt);
        return record;
      });
      for (const log of SleepService.AllOvernightData) {
        SleepService.AllSleepData.push(log);
      }
    }
    // Check if saved daytime sleepiness logs exist
    if (sleepiness.value != null) {
      const savedLogs = JSON.parse(sleepiness.value);
      // Restore saved daytime sleepiness records
      SleepService.AllSleepinessData = savedLogs.map((log: any) => {
        const record = new StanfordSleepinessData(
          log.loggedValue,
          new Date(log.loggedAt),
        );
        record.id = log.id;
        return record;
      });
      for (const log of SleepService.AllSleepinessData) {
        SleepService.AllSleepData.push(log);
      }
    }
  }

  // wait until preferences finishes up loading the overnight data
  public async whenReady(): Promise<void> {
    await this.overnightLoaded;
  }

  private addDefaultData() {
    var goToBed = new Date();
    goToBed.setDate(goToBed.getDate() - 1); //set to yesterday
    goToBed.setHours(1, 3, 0); //1:03am
    var wakeUp = new Date();
    wakeUp.setTime(goToBed.getTime() + 8 * 60 * 60 * 1000); //Sleep for exactly eight hours, waking up at 9:03am
    this.logOvernightData(new OvernightSleepData(goToBed, wakeUp)); // add that person was asleep 1am-9am yesterday
    var sleepinessDate = new Date();
    sleepinessDate.setDate(sleepinessDate.getDate() - 1); //set to yesterday
    sleepinessDate.setHours(14, 38, 0); //2:38pm
    this.logSleepinessData(new StanfordSleepinessData(4, sleepinessDate)); // add sleepiness at 2pm
    goToBed = new Date();
    goToBed.setDate(goToBed.getDate() - 1); //set to yesterday
    goToBed.setHours(23, 11, 0); //11:11pm
    wakeUp = new Date();
    wakeUp.setTime(goToBed.getTime() + 9 * 60 * 60 * 1000); //Sleep for exactly nine hours
    this.logOvernightData(new OvernightSleepData(goToBed, wakeUp));
  }

  public async logOvernightData(sleepData: OvernightSleepData): Promise<void> {
    await this.overnightLoaded;
    SleepService.AllSleepData.push(sleepData);
    SleepService.AllOvernightData.push(sleepData);
    SleepService.AllOvernightData.sort((a, b) => {
      return b.getSleepStart().getTime() - a.getSleepStart().getTime();
    });
    try {
      await Preferences.set({
        key: this.overnightKey,
        value: JSON.stringify(SleepService.AllOvernightData),
      });
      console.log('Overnight sleep logs saved');
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  public async logSleepinessData(
    sleepData: StanfordSleepinessData,
  ): Promise<void> {
    await this.sleepinessLoaded;
    SleepService.AllSleepData.push(sleepData);
    SleepService.AllSleepinessData.push(sleepData);
    SleepService.AllSleepinessData.sort((a, b) => {
      return b.getLoggedAt().getTime() - a.getLoggedAt().getTime();
    });
    try {
      await Preferences.set({
        key: this.sleepinessKey,
        value: JSON.stringify(SleepService.AllSleepinessData),
      });
      console.log('Sleepiness log saved');
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}
