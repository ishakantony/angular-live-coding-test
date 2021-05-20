import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss'],
})
export class FormValidationComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this._fb.group({
      email: null,
    });
  }

  save() {
    console.log('Submitted');
  }
}
