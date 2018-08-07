import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnsModulesComponent } from './cns-modules.component';

describe('CnsModulesComponent', () => {
  let component: CnsModulesComponent;
  let fixture: ComponentFixture<CnsModulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnsModulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnsModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
