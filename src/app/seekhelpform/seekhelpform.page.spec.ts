import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeekhelpformPage } from './seekhelpform.page';

describe('SeekhelpformPage', () => {
  let component: SeekhelpformPage;
  let fixture: ComponentFixture<SeekhelpformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeekhelpformPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeekhelpformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
