import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateAdvertComponent } from './estate-advert.component';

describe('EstateAdvertComponent', () => {
  let component: EstateAdvertComponent;
  let fixture: ComponentFixture<EstateAdvertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstateAdvertComponent]
    });
    fixture = TestBed.createComponent(EstateAdvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
