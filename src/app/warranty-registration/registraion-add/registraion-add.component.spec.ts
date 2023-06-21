import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraionAddComponent } from './registraion-add.component';

describe('RegistraionAddComponent', () => {
  let component: RegistraionAddComponent;
  let fixture: ComponentFixture<RegistraionAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistraionAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistraionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
