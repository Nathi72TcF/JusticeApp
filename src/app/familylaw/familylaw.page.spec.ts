import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FamilylawPage } from './familylaw.page';

describe('FamilylawPage', () => {
  let component: FamilylawPage;
  let fixture: ComponentFixture<FamilylawPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilylawPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FamilylawPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
