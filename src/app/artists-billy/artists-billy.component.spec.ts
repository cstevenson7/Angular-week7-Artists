import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsBillyComponent } from './artists-billy.component';

describe('ArtistsBillyComponent', () => {
  let component: ArtistsBillyComponent;
  let fixture: ComponentFixture<ArtistsBillyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistsBillyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsBillyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
