import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WebSocketService } from 'src/app/services/web-socket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;

  constructor(
    private fb: FormBuilder,
    private webSocketService: WebSocketService,
    private router: Router
  ) {
    this.formLogin = this.fb.group({
      nombre: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  async login() {
    try {
      await this.webSocketService.login(this.formLogin.value);
      this.router.navigate(['mensajes']);
    } catch (e) {
      console.log(e);
    }
  }

}
