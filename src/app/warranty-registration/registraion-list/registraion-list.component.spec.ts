import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraionListComponent } from './registraion-list.component';

describe('RegistraionListComponent', () => {
  let component: RegistraionListComponent;
  let fixture: ComponentFixture<RegistraionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistraionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistraionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
