import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PBtnComponent} from './p-btn.component';

describe('PBtnComponent', () => {
  let component: PBtnComponent;
  let fixture: ComponentFixture<PBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PBtnComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
