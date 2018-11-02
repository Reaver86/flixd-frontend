import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MatButtonModule, MatIconModule, MatToolbarModule } from '@angular/material';

describe('AppComponent', () => {
  let fixture;
  let nativeElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent
      ],
      imports: [
        MatToolbarModule,
        MatButtonModule,
        MatIconModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    nativeElement = fixture.nativeElement;
  });

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have a header', () => {
    expect(nativeElement.querySelector('flixd-header')).toBeTruthy();
  });
});
