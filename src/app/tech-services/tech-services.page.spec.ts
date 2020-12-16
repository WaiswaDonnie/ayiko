import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TechServicesPage } from './tech-services.page';

describe('TechServicesPage', () => {
  let component: TechServicesPage;
  let fixture: ComponentFixture<TechServicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechServicesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TechServicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
