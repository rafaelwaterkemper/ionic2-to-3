import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Http} from  '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public carros;

   constructor(
     public navCtrl: NavController, 
     private _http: Http,
     private _loading: LoadingController) {
      
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
        });
  }
}
