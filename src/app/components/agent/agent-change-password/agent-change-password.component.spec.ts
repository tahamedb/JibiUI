import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentChangePasswordComponent } from './agent-change-password.component';

describe('AgentChangePasswordComponent', () => {
  let component: AgentChangePasswordComponent;
  let fixture: ComponentFixture<AgentChangePasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgentChangePasswordComponent]
    });
    fixture = TestBed.createComponent(AgentChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
