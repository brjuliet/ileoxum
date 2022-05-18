import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AtendimentosService } from '../services/atendimentos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  atendimentos: Array<any> = [];
  formulario: FormGroup;
  info: Array<any> = [];
  msgSucesso = false;
  msgErro = false;
  agendamentos: Array<any> = [];

  constructor(
    private atendimentosService: AtendimentosService,
    private formBuilder: FormBuilder
  ) {
    this.formulario = this.formBuilder.group({
      nomeCompleto: [null, [Validators.required]],
      guias: [null, [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.listarUsuarios();
    this.listarTabela();
  }

  listarUsuarios(){
    this.atendimentosService.getGuias().subscribe(resp => {
      this.atendimentos = resp;
    })
  }

  listarTabela(){
    this.atendimentosService.getAtendimentos().subscribe(resp => {
      this.agendamentos = resp;
    })
  }

  onDelete(i: number){
    this.atendimentosService.remove(i).subscribe(
      success => {
        this.listarTabela();
      }
    );
  }

  onSubmit(){
    this.msgSucesso = false;
    this.msgErro = false;

   this.info = this.atendimentos.filter(x => x.id == this.formulario.value.guias);

    const body = {
      nome_paciente: this.formulario.value.nomeCompleto.toUpperCase(),
      nome_guia: this.info[0].nome_guia,
      nome_pessoa: this.info[0].nome_pessoa,
      id_atendimento: this.formulario.value.guias,
      gira: 5
    }

    this.atendimentosService.postGira(body).subscribe(resp=> {
      this.msgSucesso = true;
      this.listarTabela();
    },
      error => {
        this.msgSucesso = false;
        this.msgErro = false;
      }
    )
   }

}
