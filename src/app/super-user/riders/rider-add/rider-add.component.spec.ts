import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RiderAddComponent } from './rider-add.component';

describe('RiderAddComponent', () => {
  let component: RiderAddComponent;
  let fixture: ComponentFixture<RiderAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiderAddComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RiderAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
