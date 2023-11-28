import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { SearchService } from '../search.service';
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

  userList: any[] = [];
  filteredUserList: any[] = [];
  searchText: string = '';

  constructor(
    private toastr: ToastrService,
    private userService: UserService,
    private router: Router,
    private searchService: SearchService
  ) {}


  ngOnInit(): void {
    this.fetchUserList();
    this.searchService.searchText$.subscribe((searchText) => {
      this.searchText = searchText;
      this.filterUserList();
    });
  }

  filterUserList() {
    this.filteredUserList = this.userList.filter((user) =>
      user.fName.toLowerCase().includes(this.searchText.toLowerCase()) ||
      user.lName.toLowerCase().includes(this.searchText.toLowerCase()) ||
      user.email.toLowerCase().includes(this.searchText.toLowerCase()) 
    );
  }


  fetchUserList(): void {
    const storedData = localStorage.getItem('formData');
    this.userList = storedData ? JSON.parse(storedData) : [];
  }
  
  deleteUser(id: number): void {
    const index = this.userList.findIndex((user) => user.id === id);
  
    if (index !== -1) {
      this.userList.splice(index, 1);
      this.saveUser();
      console.log('User deleted:', id);
    } else {
      console.log('User not found for deletion:', id);
    }
  }

  editUser(user: User): void {
    const index = this.userList.findIndex((u) => u.id === user.id);
    this.router.navigate(['/userform'], { state: { userId: user.id } });

    if (index !== -1) {
      this.userList[index] = user;
      this.saveUser();
    }
    this.userService.editUser(user);
  }

  private saveUser(): void {
    localStorage.setItem('formData', JSON.stringify(this.userList));
  }
}
