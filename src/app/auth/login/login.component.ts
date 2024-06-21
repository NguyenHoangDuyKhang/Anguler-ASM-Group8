import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SpinnerService } from "../../@theme/components/spinner/spinner.service";
import { AuthService } from "../../@core/services/apis";
import { LocalStorageService } from "../../@core/services/common";
import { LOCALSTORAGE_KEY, ROUTER_CONFIG } from "../../@core/config";
import { IAlertMessage } from "../../@theme/components/alert/ngx-alerts.component";
import { finalize } from "rxjs";
import introJs from "intro.js";
import { NbComponentStatus, NbToastrService } from "@nebular/theme";

@Component({
  selector: 'ngx-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  alertMessages: IAlertMessage[] = [];

  constructor(
    private router: Router,
    private spinner: SpinnerService,
    private auth: AuthService,
    private toastrService: NbToastrService,
    private storageService: LocalStorageService,
  ) {
  }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])

    });

  }

  onSubmit() {

    this.router.navigate([ROUTER_CONFIG.pages]).then();
    if (this.loginForm.valid) {
      this.spinner.show
      this.auth.login(this.loginForm.value).pipe(finalize(() => {
        this.spinner.hide
      })).subscribe({
        next: this.handleLoginSuccess.bind(this),
        error: this.handleLoginFailed.bind(this)
      })
    }
  }

  protected handleLoginSuccess(res) {

    console.log(res.data.info.role_ID);
    if(res.data.info.role_ID) {
      this.showToast('danger', 'Bạn Chưa có quyền truy cập')

      this.router.navigate(['/auth/login']).then();
    }else {
      this.storageService.setItem(LOCALSTORAGE_KEY.userInfo, res.data.info);
      this.storageService.setItem(LOCALSTORAGE_KEY.token, res.data.token);
      this.router.navigate([ROUTER_CONFIG.pages]).then();
      this.spinner.hide();
    } 
    
    
    
  }

  protected handleLoginFailed() {
    this.spinner.hide();
    this.alertMessages = [{ status: 'danger', message: 'Tài khoản hoặc mật khẩu không chính xác' }];
  }

  showToast(status: NbComponentStatus, message: string) {
    this.toastrService.show(status, message, { status });
  }
}
