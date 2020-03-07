import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserreportPage } from './userreport.page';

describe('UserreportPage', () => {
  let component: UserreportPage;
  let fixture: ComponentFixture<UserreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
