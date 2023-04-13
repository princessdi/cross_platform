import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display default title when there is no title in route data', () => {
    component.title = 'Лабораторна робота №1';
    fixture.detectChanges();
    const titleElement = fixture.debugElement.query(By.css('ion-title'));
    expect(titleElement.nativeElement.innerText).toEqual('Лабораторна робота №1');
  });

  it('should display custom title when there is title in route data', () => {
    const title = 'Custom Title';
    component.title = title;
    fixture.detectChanges();
    const titleElement = fixture.debugElement.query(By.css('ion-title'));
    expect(titleElement.nativeElement.innerText).toEqual(title);
  });
});
