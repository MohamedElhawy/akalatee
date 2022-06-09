import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StatusService } from 'src/app/services/status.service';
import { HttpService } from 'src/app/services/http.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule 
      ],
      providers: [
        StatusService,
        HttpService,
        UserService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // this is test 1
  it('header and footer status should equal to ', () => {
    expect(component.show_header_footer_status_home).toEqual(false);
  });

  // this is test 2
  it('varibale is ', () => {
    expect(component.test_var).toBeTrue();
  });

  // this is test 3
  it('slider images does exist = ', () => {
    expect(component.test_slider_img_exist()).toBeFalse();
  });



});
