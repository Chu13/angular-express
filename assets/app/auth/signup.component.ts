import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-signout",
  templateUrl: "./signup.component.html"
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;

  onSubmit() {
    console.log(this.myForm);
    this.myForm.reset();
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern('^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$')
      ]),
      password: new FormControl(null, Validators.required),
    })
  }
}