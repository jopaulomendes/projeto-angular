import { Usuario } from './../../../model/Usuario';
import { Observable } from 'rxjs';
import { UsuarioService } from './../../../service/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: Array<Usuario>;
  nome: String;

  constructor(private usuarioService: UsuarioService) {
    this.usuarios = []
  }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.usuarioService.list().subscribe(data => {
      this.usuarios = data;
    });
  }

  delete(id: Number) {
    if (confirm('Deseja realmente excluir o usuário?')) {
      this.usuarioService.delete(id).subscribe(data => {
        alert("Delete: " + data);
        this.list();
      });
    }
    
  }

  findByUser() {
    this.usuarioService.findByUser(this.nome).subscribe(data => {
      this.usuarios = data;
    });
  }

  limpar() {
    this.list();
    this.nome = null;
  }
}
