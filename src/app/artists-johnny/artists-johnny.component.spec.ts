import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsJohnnyComponent } from './artists-johnny.component';

describe('ArtistsJohnnyComponent', () => {
  let component: ArtistsJohnnyComponent;
  let fixture: ComponentFixture<ArtistsJohnnyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistsJohnnyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsJohnnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
