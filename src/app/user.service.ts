import { Injectable } from '@angular/core';

interface User {
  fName: string;
  lName: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private selectedUser: User = { fName: '', lName: '', email: '', password: '' }; // Initialize with default values

  getSelectedUser(): User {
    return this.selectedUser;
  }

  setSelectedUser(user: User): void {
    this.selectedUser = user;
  }
}