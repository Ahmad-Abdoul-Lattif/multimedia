import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtifactDetail } from './artifact-detail';

describe('ArtifactDetail', () => {
  let component: ArtifactDetail;
  let fixture: ComponentFixture<ArtifactDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtifactDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtifactDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
