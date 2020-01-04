import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminpanelPage } from './adminpanel.page';

describe('AdminpanelPage', () => {
  let component: AdminpanelPage;
  let fixture: ComponentFixture<AdminpanelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminpanelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminpanelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
