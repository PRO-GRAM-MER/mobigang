import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobiComponent } from './mobi.component';

describe('MobiComponent', () => {
  let component: MobiComponent;
  let fixture: ComponentFixture<MobiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
