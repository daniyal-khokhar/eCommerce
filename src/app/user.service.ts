import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  id: number;
  fName: string;
  lName: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private selectedUser: User = { id: 0, fName: '', lName: '', email: '', password: '' }; 
  constructor(private router: Router) {}

  getSelectedUser(): User {
    return this.selectedUser;
  }

  setSelectedUser(user: User): void {
    this.selectedUser = user;
  }

  editUser(user: User): void {
    this.router.navigate(['/userform'], { state: { userId: user.id } });
    this.setSelectedUser(user);
  }
}