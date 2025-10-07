import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderanimatedComponent } from './headeranimated.component';

describe('HeaderanimatedComponent', () => {
  let component: HeaderanimatedComponent;
  let fixture: ComponentFixture<HeaderanimatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderanimatedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderanimatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
