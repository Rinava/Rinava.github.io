import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  emailForm = this.fb.group({
    emailField: [
      null,
      Validators.compose([Validators.required, Validators.email]),
    ],
    messageField: [null, Validators.required],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit(): void {
    alert('Thanks!');
  }
}
