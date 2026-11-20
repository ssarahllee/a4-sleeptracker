import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DaytimeSleepinessPage } from './daytime-sleepiness.page';

describe('DaytimeSleepinessPage', () => {
  let component: DaytimeSleepinessPage;
  let fixture: ComponentFixture<DaytimeSleepinessPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DaytimeSleepinessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
