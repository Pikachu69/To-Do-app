import { Component } from '@angular/core';
import { ModalController, NavController, ViewController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item';
import { ItemDetailPage } from '../item-detail/item-detail';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, 
              public dataService: DataProvider, public view: ViewController) {

    this.dataService.getData().then((todos) => {
      if(todos){
        this.items = todos;
      }
    });

  }

  ionViewDidLoad(){

  }

  addItem(){
    let addModal = this.modalCtrl.create(AddItemPage);

    addModal.onDidDismiss((item) => {
      if(item){
        this.saveItem(item);
      }
    });

    addModal.present();

  }

  dropItem(item){
    this.items = this.items.filter(x => x != item);
    this.dataService.save(this.items);
  }

  saveItem(item){
    this.items.push(item);
    this.dataService.save(this.items);
  }

  viewItem(item){
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }

  editItem(item){
    let item1 = item;
    let addModal = this.modalCtrl.create(AddItemPage);
    addModal.onDidDismiss((item) => {
      if(item){
        this.saveItem(item);
        this.dropItem(item1);
      }
    });
    addModal.present();
  }
}
