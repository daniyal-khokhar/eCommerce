import { Component  , OnInit } from '@angular/core';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  userList: User[] = [];

  constructor(private formBuilder: FormBuilder, 
    private userService: UserService,
    private router: Router) {}


  userForm = new FormGroup({
    fName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    lName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    email: new FormControl('', [Validators.required, Validators.email,]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });
  

  ngOnInit(): void {
    const storedData = localStorage.getItem('formData');
    this.userList = storedData ? JSON.parse(storedData) : [];
    
    const selectedUser = this.userService.getSelectedUser();
    if (selectedUser.id !== 0) {
      this.userForm.patchValue(selectedUser);
    }
  }

  onSubmit(): void {
    if (!this.userForm.valid) {
      this.userForm.markAllAsTouched();
      return;
    }
    let currentDate = new Date();
  
    const formData: User = this.userForm.value as User;
    formData.id = currentDate.getMinutes() + currentDate.getSeconds();
    const selectedUser = this.userService.getSelectedUser();
    console.log(selectedUser.id);
    
    if (selectedUser.id !== 0) {
      const index = this.userList.findIndex((user) => user.id === selectedUser.id);
      if (index !== -1) {
        this.userList[index] = formData;
      }
    } else {
      this.userList.push(formData);
    }
  
    localStorage.setItem('formData', JSON.stringify(this.userList));
    this.userForm.reset();
  
    this.userService.setSelectedUser({ id: 0, fName: '', lName: '', email: '', password: '' });  
    this.router.navigate(['/userlist']);
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

}