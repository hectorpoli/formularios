import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Usuario } from '../estructura';

@Component({
  selector: 'app-lista-user',
  templateUrl: './lista-user.component.html',
  styleUrls: ['./lista-user.component.css']
})
export class ListaUserComponent implements OnInit {

  title = 'Lista de usuarios';
  users: Usuario[] = [];

  constructor(protected userService: UserService) { }

  page = 1;
  itemsPerPage = 4;

  ngOnInit() {
    this.userService.getUsers()
    .subscribe(
      (data) => {
        this.users = data['results'];
        console.log(this.users);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  mensaje(p: Usuario) {
    alert(p.name.first);
  }

}
