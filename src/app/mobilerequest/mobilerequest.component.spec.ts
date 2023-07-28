import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilerequestComponent } from './mobilerequest.component';

describe('MobilerequestComponent', () => {
  let component: MobilerequestComponent;
  let fixture: ComponentFixture<MobilerequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilerequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobilerequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
