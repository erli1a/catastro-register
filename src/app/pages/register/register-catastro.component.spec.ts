import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCatastroComponent } from './register-catastro.component';

describe('RegisterCatastroComponent', () => {
  let component: RegisterCatastroComponent;
  let fixture: ComponentFixture<RegisterCatastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterCatastroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterCatastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
