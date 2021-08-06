import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RidePriceComponent } from './ride-price.component';

describe('RidePriceComponent', () => {
  let component: RidePriceComponent;
  let fixture: ComponentFixture<RidePriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RidePriceComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RidePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
