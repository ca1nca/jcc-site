import {
  ComponentFixture,
  TestBed,
  async,
} from '@angular/core/testing';

import { ServiceDetailComponent } from './service-detail.component';

describe('ServiceDetailComponent', () => {
  let component: ServiceDetailComponent;
  let fixture: ComponentFixture<ServiceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceDetailComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});