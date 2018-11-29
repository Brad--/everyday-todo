import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { ListItem } from './model/list-item.model'
import { ListStorageService } from '../services/list-storage.service';

@Component({
    selector: 'list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    listItems: ListItem[] = [];

    constructor(private listStorageService: ListStorageService) {

    }

    addListItemForValue (value: string) {
        this.addListItem(new ListItem(value)).then(() => {});
    }

    async addListItem (item: ListItem) {
        item.id = this.listItems.length;
        if (!this.isValueInList(item.value)) {
            this.listItems.push(item);
            await this.delay(250);
            item.fadeState = 'in';
        }
        this.updateLocalStorage();
    }

    isValueInList (value: string) {
        for (let i = 0; i < this.listItems.length; i++) {
            if (this.listItems[i].value === value) {
                return true;
            }
        }
        return false;
    }

    async removeListItem(id: number) {
        for (let i = 0; i < this.listItems.length; i++) {
            if (this.listItems[i].id === id) {
                this.listItems[i].fadeState = 'out';
                await this.delay(200);
                this.listItems.splice(i, 1);
            }
        }
        this.updateLocalStorage();
    }

    delay(milliseconds: number) {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

    drop(event: CdkDragDrop<ListItem[]>) {
        moveItemInArray(this.listItems, event.previousIndex, event.currentIndex);
        this.updateLocalStorage();
    }

    toggleChecked (item: ListItem) {
        item.toggleChecked();
        this.updateLocalStorage();
    }

    ngOnInit() {
        // The actual ngOnInit
        this.listItems = this.listStorageService.getCurrentListFromLocalStorage();
        this.updateListItems();
    }

    updateListItems () {
        for (let i = 0; i < this.listItems.length; i++) {
            this.listItems[i].updateIfStale();
        }
    }

    updateLocalStorage () {
        this.listStorageService.updateLocalStorage(this.listItems);
    }
}