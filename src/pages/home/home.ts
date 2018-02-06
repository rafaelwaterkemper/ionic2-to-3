import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { EscolhaPage } from '../escolha/escolha';
import { Carro } from '../../domains/carro/carro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  public carros: Carro[];

  constructor(
    public navCtrl: NavController,
    private _http: Http,
    private _loading: LoadingController,
    private _alert: AlertController) {
  }

  ngOnInit() {
    let loader = this._loading.create({
      content: 'Carregando os dados...'
    });

    loader.present();

    this._http.get('https://aluracar.herokuapp.com')
      .map(res => res.json())
      .toPromise()
      .then(carros => {
        loader.dismiss();
        this.carros = carros;
      }).catch(err => {
        this._alert.create({
          title: 'Falha de conexão',
          buttons: [{
            text: 'Estou ciente'
          }],
          subTitle: 'Falha de conexão ao tentar buscar os carros'
        }).present();
        loader.dismiss();
      });
  }

  selecionar(carro){
    this.navCtrl.push(EscolhaPage, {'carroSelecionado': carro});
  }
}
