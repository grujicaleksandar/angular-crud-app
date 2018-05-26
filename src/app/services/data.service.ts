import { Injectable } from '@angular/core';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  user:User ={
    id:0,
    name:'',
    email:'',
    state:''
  }
  
  users:User[] = [
    {
      id:1,
      name:'John',
      email:'john@mail.com',
      state:'USA'
    },
    {
      id:2,
      name:'Marry',
      email:'marry@mail.com',
      state:'UK'
    },
    {
      id:3,
      name:'Harvey',
      email:'harvey@mail.com',
      state:'USA'
    }  
  ];

  constructor() { }


  getUsers(){
    return this.users;
  }
  addUser(user:User){
    
    this.users.push(user);
  }
  deleteUser(id){
    for(let i = 0;i<this.users.length;i++){
      if(this.users[i].id == id){
      console.log(this.users[i]);
        this.users.splice(i,1);
      }
        
    }


  }
  editUser(user:User){
    for(let i=0;i<this.users.length;i++){
    
        this.users[i] = user;
      }    
  }
}
