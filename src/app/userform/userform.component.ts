import { Component } from '@angular/core';
import {  OnInit  } from '@angular/core';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';
interface User {
  fName: string;
  lName: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  user: User = { fName: '', lName: '', email: '', password: '' }; 
  userList: User[] = [];
  constructor(private formBuilder: FormBuilder , 
    private router: Router, private toastr: ToastrService
    , private userService: UserService) {}


  userForm = new FormGroup({
    fName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    lName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    email: new FormControl('', [Validators.required, Validators.email,]),
    // status: new FormControl('', [Validators.required,]),
    // expiry: new FormControl('', [Validators.required,]),
     password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });
  
 
  ngOnInit(): void {
    // this.fetchUserList();
    const storedData = localStorage.getItem('formData');
    this.userList = storedData ? JSON.parse(storedData) : [];

  // Retrieve the selected user from the UserService
    const selectedUser = this.userService.getSelectedUser();

  // Check if there's a selected user
  if (selectedUser) {
    // Set the selected user to the component's user property
    this.user = { ...selectedUser };
    // Set the form values based on the selected user
    this.userForm.patchValue(selectedUser);
  } else {
    // If there's no selected user, you may want to handle this case
    console.error('No selected user found.');
  }
  }

  onSubmit(): void {
    if (!this.userForm.valid) {
      this.userForm.markAllAsTouched();
      return;
    }
  
    const formData: any = this.userForm.value;
    const selectedUser = this.userService.getSelectedUser();
  
    if (selectedUser) {
      const index = this.userList.findIndex(user => user.email === selectedUser.email);
  
      if (index !== -1) {
        // Update existing user in the list
        this.userList[index] = { ...selectedUser, ...formData };
      }
    } else {
      // Add new user to the list
      this.userList.push(formData);
    }
  
    // Save the updated user list to localStorage
    localStorage.setItem('formData', JSON.stringify(this.userList));
  
    // Display success message and navigate
    this.toastr.success('User saved successfully', 'Success');
    this.router.navigate(['/userlist']);
  
    // Reset the form and fetch the updated user list
    this.userForm.reset();
    this.fetchUserList();
  }
 
  fetchUserList(): void {
    const storedData = localStorage.getItem('formData');
    this.userList = storedData ? JSON.parse(storedData) : [];
  }
  fNameError() {
    return this.userForm.controls.fName.hasError('required') ? 'First Name is required' :
      this.userForm.controls.fName.hasError('minlength') ? 'First Name is required of minimum length of 2 characters' :
        this.userForm.controls.fName.hasError('maxlength') ? 'First Name cannot exceed 50 characters' : '';
  }

  lNameError() {
    return this.userForm.controls.lName.hasError('required') ? 'Last Name is required' :
      this.userForm.controls.lName.hasError('minlength') ? 'Last Name is required of minimum length of 2 characters' :
        this.userForm.controls.lName.hasError('maxlength') ? 'Last Name cannot exceed 100 characters' : '';
  }

  EmailError() {
    return this.userForm.controls.email.hasError('required') ? 'Email is required' :
      this.userForm.controls.email.hasError('email') ? 'Invalid email format' : '';
  }

  passwordError() {
    return this.userForm.controls.password.hasError('required') ? 'Password is required' :
      this.userForm.controls.password.hasError('minLength') ? 'Password should be greater then 8 characters' : '';
  }


  get fName() {
    return this.userForm.get('fName');
  }

  get lName() {
    return this.userForm.get('lName');
  }

  get email() {
    return this.userForm.get('email');
  }

 
  get password() {
    return this.userForm.get('password');
  }


  // showToaster(message: string, duration: number = 3000) {
  //   this.toasterVisible = true;

  //   setTimeout(() => {
  //     this.toasterVisible = false;
  //   }, duration);
  // }
}


