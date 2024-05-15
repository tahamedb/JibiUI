import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountOpeningComponent } from './account-opening.component';

describe('AccountOpeningComponent', () => {
  let component: AccountOpeningComponent;
  let fixture: ComponentFixture<AccountOpeningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountOpeningComponent]
    });
    fixture = TestBed.createComponent(AccountOpeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
