import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsJaniceComponent } from './artists-janice.component';

describe('ArtistsJaniceComponent', () => {
  let component: ArtistsJaniceComponent;
  let fixture: ComponentFixture<ArtistsJaniceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistsJaniceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsJaniceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
