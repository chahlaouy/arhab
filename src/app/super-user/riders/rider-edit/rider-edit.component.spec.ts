import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RiderEditComponent } from './rider-edit.component';

describe('RiderEditComponent', () => {
  let component: RiderEditComponent;
  let fixture: ComponentFixture<RiderEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiderEditComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RiderEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
