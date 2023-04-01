import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoisusingourappComponent } from './whoisusingourapp.component';

describe('WhoisusingourappComponent', () => {
  let component: WhoisusingourappComponent;
  let fixture: ComponentFixture<WhoisusingourappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoisusingourappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhoisusingourappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
