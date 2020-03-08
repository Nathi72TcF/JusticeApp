import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LawhomePage } from './lawhome.page';

describe('LawhomePage', () => {
  let component: LawhomePage;
  let fixture: ComponentFixture<LawhomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LawhomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LawhomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
