import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'angular-webstorage-service';

import { ListItem } from '../list/model/list-item.model';

const LIST_STORAGE_KEY = 'local_list';

@Injectable({
    providedIn: 'root'
})
export class ListStorageService {
    constructor (@Inject(LOCAL_STORAGE) private storage: StorageService) {

    }

    public getCurrentListFromLocalStorage(): ListItem[] {
        let currentList = this.storage.get(LIST_STORAGE_KEY) || [];
        for (let i = 0; i < currentList.length; i++) {
            let item = currentList[i];
            // All items load faded in
            let listItem = new ListItem(item.value, item.checked, item.id, item.lastUpdate, 'in');
            currentList[i] = listItem;
        }
        return currentList;
    }

    public updateLocalStorage(list: ListItem[]) {
        this.storage.set(LIST_STORAGE_KEY, list);
    }
}