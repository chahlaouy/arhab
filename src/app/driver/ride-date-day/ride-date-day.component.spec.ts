import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RideDateDayComponent } from './ride-date-day.component';

describe('RideDateDayComponent', () => {
  let component: RideDateDayComponent;
  let fixture: ComponentFixture<RideDateDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RideDateDayComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RideDateDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
