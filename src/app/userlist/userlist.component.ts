import { Component , OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

interface User {
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
export class UserlistComponent  implements OnInit {
  constructor(private toastr: ToastrService , 
     private userService: UserService , 
     private router: Router ) {}
     userList: User[] = [];
  
  ngOnInit(): void {
    this.fetchUserList();
    const storedData = localStorage.getItem('formData');
    this.userList = storedData ? JSON.parse(storedData) : [];
  }
  fetchUserList(): void {
    const storedData = localStorage.getItem('formData');
    this.userList = storedData ? JSON.parse(storedData) : [];
  }
  deleteUser(index: number): void {
    this.userList.splice(index, 1);
    this.saveUserListToLocalStorage();
  }
  editUser(user: User): void {
    this.router.navigate(['/userform'], { state: { user } });
    this.userService.setSelectedUser(user);
  }

  private saveUserListToLocalStorage(): void {
    localStorage.setItem('formData', JSON.stringify(this.userList));
  }
  
}