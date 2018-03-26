import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';


@Component({
  selector: 'page-inscription',
  templateUrl: 'inscription.html',
})
export class InscriptionPage {
  public nom;
  public prenom;
  public email;
  public telephone;
  public adresse;
  constructor(public navCtrl: NavController, public navParams: NavParams, private nativeStorage: NativeStorage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InscriptionPage');
  }



  inscription(){
    console.log("on va t'inscrire poto le sang de la veine frêre");
    console.log(this.nom);
    console.log(this.prenom);
    console.log(this.email);
    console.log(this.telephone);
    console.log(this.adresse);


    this.nativeStorage.setItem('nom', {property: this.nom, anotherProperty: 'anotherValue'})
    .then(
      () =>{
        console.log('Stored item!');

        this.nativeStorage.setItem('prenom', {property: this.prenom, anotherProperty: 'anotherValue'})
        .then(
          () =>{
            console.log('Stored item! prenom')

            this.nativeStorage.setItem('email', {property: this.email, anotherProperty: 'anotherValue'})
            .then(
              () =>{
                console.log('Stored item email!');
                this.nativeStorage.setItem('telephone', {property: this.telephone, anotherProperty: 'anotherValue'})
                .then(
                  () =>{
                    console.log('Stored item! telephone');
                    this.nativeStorage.setItem('adresse', {property: this.adresse, anotherProperty: 'anotherValue'})
                  .then(
                    () =>{
                      console.log('Stored item adresse !');
                    } ,
                    error => console.error('Error storing item', error)



                  );
                  } ,
                  error => console.error('Error storing item', error)



                );

              } ,
              error => console.error('Error storing item', error)



            );

          } ,
          error => console.error('Error storing item', error)



        );
      } ,
      error => console.error('Error storing item', error)



    );

    /**  this.http.post('/user.json', this.nom).subscribe((data:any) => {
    resolve();
  }); **/
}


}
