import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LawviewclientPage } from './lawviewclient.page';

describe('LawviewclientPage', () => {
  let component: LawviewclientPage;
  let fixture: ComponentFixture<LawviewclientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LawviewclientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LawviewclientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
