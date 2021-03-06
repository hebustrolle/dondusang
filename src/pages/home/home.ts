import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';


import { InscriptionPage } from '../inscription/inscription';
import { InformationPage } from '../information/information';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public username;
  public password;
  public adressevar = 'adresse';
  public nom = 'nom';
  public email= 'email';
  public telephone= 'telephone';
  constructor(public navCtrl: NavController,  private nativeStorage: NativeStorage) {

  }



  connecter(){
    console.log(this.username);
    console.log(this.password);

    this.nativeStorage.setItem('prenom', {property: this.username, anotherProperty: 'anotherValue'})
    .then(
      () =>{
        console.log('Stored item!');

        this.nativeStorage.setItem('nom', {property: this.nom, anotherProperty: 'anotherValue'})
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
                    this.nativeStorage.setItem('adresse', {property: this.adressevar, anotherProperty: 'anotherValue'})
                  .then(
                    () =>{
                      console.log('Stored item adresse !');
                      this.navCtrl.setRoot(InformationPage);
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
    //console.log(this.user.password);
  }

  inscription(){
    console.log('inscripton');
    this.navCtrl.push(InscriptionPage);
  }
}
