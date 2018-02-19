import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular'
import { Carro } from '../../domains/carro/carro';
import { Acessorio } from '../../domains/carro/acessorio';
import { CadastroPage } from '../cadastro/cadastro';

@Component({
    templateUrl: './escolha.html'
})
export class EscolhaPage {

    public carro: Carro;

    public acessorios: Acessorio[];

    private _precoTotal: number;

    constructor(public navParams: NavParams, public navCtrl: NavController){
        
        this.carro = this.navParams.get('carroSelecionado');
        
        this._precoTotal= this.carro.preco;

        this.acessorios = [
            new Acessorio('Freio ABS', 150),
            new Acessorio('Câmera de ré', 250),
            {nome: "Freio ABS 2", preco: 150},
            {nome: "Câmera de ré 2", preco: 250}
        ]
    }

    get precoTotal(){
        return this._precoTotal;
    }

    atualizaTotal(ligado: boolean, acessorio){
        ligado ?
            this._precoTotal+= acessorio.preco :
            this._precoTotal-= acessorio.preco;
    }

    avancarNoAgendamento(){
        this.navCtrl.push(CadastroPage, {
            carro: this.carro,
            precoTotal: this._precoTotal
        });
    }
}