import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LietausRezervuorasComponent } from './lietaus-rezervuoras.component';

describe('LietausRezervuorasComponent', () => {
  let component: LietausRezervuorasComponent;
  let fixture: ComponentFixture<LietausRezervuorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LietausRezervuorasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LietausRezervuorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
