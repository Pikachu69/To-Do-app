import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {

  title: String;
  description: String;

  constructor(public navCtrl: NavController, public view: ViewController, public navParams: NavParams) {
  }

  saveItem(){
    let newItem = {
      title: this.title,
      description: this.description
    };
    this.view.dismiss(newItem);
  }

  close(){
    this.view.dismiss();
  }

}
