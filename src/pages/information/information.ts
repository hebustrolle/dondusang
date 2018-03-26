import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

/**
 * Generated class for the InformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-information',
  templateUrl: 'information.html',
})
export class InformationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  private nativeStorage: NativeStorage) {
  }

public nom;
public prenom;
public mail;
public adresse;
public telephone;
  ionViewDidLoad() {
    this.nativeStorage.getItem('nom')
  .then(
    data => {
      this.nom = data.property;
      this.nativeStorage.getItem('prenom')
    .then(
      data => {
        this.prenom = data.property;
        this.nativeStorage.getItem('email')
      .then(
        data => {
          this.mail = data.property;
          this.nativeStorage.getItem('adresse')
        .then(
          data => {
            this.adresse = data.property;
            this.nativeStorage.getItem('telephone')
          .then(
            data => {
              this.telephone = data.property;
              this.afficher();
            },
            error => console.error(error)
          );
          },
          error => console.error(error)
        );
        },
        error => console.error(error)
      );
      },
      error => console.error(error)
    );
    },
    error => console.error(error)
  );
    console.log('ionViewDidLoad InformationPage');
  }



  afficher(){
    console.log(this.nom);
    console.log(this.prenom);
    console.log(this.adresse);
    console.log(this.telephone);
    console.log(this.mail);
  }
}
