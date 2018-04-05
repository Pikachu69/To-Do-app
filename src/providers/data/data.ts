import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class DataProvider {

  constructor(public storage: Storage) {
   
  }

  getData(){
    return this.storage.get('todos');
  }

  save(data){
    this.storage.set('todos', data);
  }

}
