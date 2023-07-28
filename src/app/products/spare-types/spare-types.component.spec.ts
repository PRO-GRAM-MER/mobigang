import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpareTypesComponent } from './spare-types.component';

describe('SpareTypesComponent', () => {
  let component: SpareTypesComponent;
  let fixture: ComponentFixture<SpareTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpareTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpareTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
