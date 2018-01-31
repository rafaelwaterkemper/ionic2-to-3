import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular'

@Component({
    templateUrl: './escolha.html'
})
export class EscolhaPage {

    public carro;

    public acessorios;

    constructor(public navParams: NavParams){
        this.carro = this.navParams.get('carroSelecionado');

        this.acessorios = [
            {nome: "Freio ABS", preco: 150},
            {nome: "Câmera de ré", preco: 250}
        ]
    }
}