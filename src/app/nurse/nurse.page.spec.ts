import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NursePage } from './nurse.page';

describe('NursePage', () => {
  let component: NursePage;
  let fixture: ComponentFixture<NursePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NursePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
