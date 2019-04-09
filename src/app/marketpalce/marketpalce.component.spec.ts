import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketpalceComponent } from './marketpalce.component';

describe('MarketpalceComponent', () => {
  let component: MarketpalceComponent;
  let fixture: ComponentFixture<MarketpalceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketpalceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketpalceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
