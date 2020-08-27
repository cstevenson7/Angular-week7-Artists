import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsAlComponent } from './artists-al.component';

describe('ArtistsAlComponent', () => {
  let component: ArtistsAlComponent;
  let fixture: ComponentFixture<ArtistsAlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistsAlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsAlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
