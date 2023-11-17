import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

interface User {
  id: number;
  fName: string;
  lName: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
    userList: User[] = [];

    constructor(private toastr: ToastrService,
    private userService: UserService,
    private router: Router) { }

    ngOnInit(): void {
    this.fetchUserList();
    }
    
  fetchUserList(): void {
    const storedData = localStorage.getItem('formData');
    this.userList = storedData ? JSON.parse(storedData) : [];
  }
  deleteUser(id: number): void {
    const index = this.userList.findIndex((user) => user.id === id);
    if (index !== 1) {
      this.userList.splice(index, 1);
      this.saveUserListToLocalStorage();
    }
  }

  editUser(user: User): void {
    const index = this.userList.findIndex((u) => u.id === user.id);
    this.router.navigate(['/userform'], { state: { userId: user.id } });
    // this.setSelectedUser(user);id,
     
    if (index !== -1) {
      this.userList[index] = user;
      this.saveUserListToLocalStorage();
    }
    this.userService.editUser(user);
  }
  private saveUserListToLocalStorage(): void {
    localStorage.setItem('formData', JSON.stringify(this.userList));
  }

}