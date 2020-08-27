import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsArethaComponent } from './artists-aretha.component';

describe('ArtistsArethaComponent', () => {
  let component: ArtistsArethaComponent;
  let fixture: ComponentFixture<ArtistsArethaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistsArethaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsArethaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
