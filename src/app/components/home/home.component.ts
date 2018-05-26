import { Component, OnInit } from '@angular/core';
import { User } from '../../User';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  doEditUser:boolean=false;
  users:User[];
  showAddUser:boolean = false;
  user:User ={
    id:0,
    name:'',
    email:'',
    state:''
  }
  
  constructor(public dataService:DataService) { }

  ngOnInit() {

    this.users = this.dataService.getUsers();

  }
  showAddUserForm(){
    this.user = {
      id:0,
    name:'',
    email:'',
    state:''
    }
    this.showAddUser = !this.showAddUser;

  }
  addUser(userToAdd:User){
    this.dataService.addUser(userToAdd);
  }
  deleteUser(id:number){
    this.dataService.deleteUser(id);
  }
  showEditUserForm(id){
    this.doEditUser = true;
    for(let i=0;i<this.users.length;i++){
      if(this.users[i].id == id){
        this.user = this.users[i];

      }
    }
  }

  editUser(user:User){
    
    this.dataService.editUser(user);

  }

}
