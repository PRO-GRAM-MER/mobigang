import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerSlideComponent } from './partner-slide.component';

describe('PartnerSlideComponent', () => {
  let component: PartnerSlideComponent;
  let fixture: ComponentFixture<PartnerSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerSlideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
