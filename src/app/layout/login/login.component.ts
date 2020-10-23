import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UrlService } from 'src/app/shared/url-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private urlService: UrlService, private router: Router) { }

  loginForm: FormGroup;
  user: any;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      cpf: this.fb.control('', [Validators.required]),
      senha: this.fb.control('', [Validators.required])
    });
  }

  entrar(){
    this.urlService.sendRequestPostWithoutHeaders("Usuario/Login?cpf="+this.loginForm.get("cpf").value+"&senha="+this.loginForm.get("senha").value, "")
      .subscribe(resp => {
        this.user = resp;
        sessionStorage.setItem("user", JSON.stringify(this.user));
        this.router.navigate([""]);
      });
  }

}
