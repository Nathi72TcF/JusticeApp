import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LawloginPage } from './lawlogin.page';

describe('LawloginPage', () => {
  let component: LawloginPage;
  let fixture: ComponentFixture<LawloginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LawloginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LawloginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
