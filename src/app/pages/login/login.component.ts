import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    private webSocketService: WebSocketService
  ) {
    this.formLogin = this.fb.group({
      nombre: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  login() {
    this.webSocketService.login(this.formLogin.value);
  }

}
