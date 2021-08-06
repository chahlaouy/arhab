import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RideDateHourComponent } from './ride-date-hour.component';

describe('RideDateHourComponent', () => {
  let component: RideDateHourComponent;
  let fixture: ComponentFixture<RideDateHourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RideDateHourComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RideDateHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
