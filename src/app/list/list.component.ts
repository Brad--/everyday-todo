import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { ListItem } from './model/list-item.model'

@Component({
    selector: 'list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    listItems: ListItem[] = [];

    addListItemForValue (value: string) {
        this.addListItem(new ListItem(value));
    }

    async addListItem (item: ListItem) {
        item.id = this.listItems.length;
        if (!this.isValueInList(item.value)) {
            this.listItems.push(item);
            await this.delay(250);
            item.fadeState = 'in';
        }
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
    }

    async delay(milliseconds: number) {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

    drop(event: CdkDragDrop<ListItem[]>) {
        moveItemInArray(this.listItems, event.previousIndex, event.currentIndex);
    }

    ngOnInit() {
        // Mock data
        this.addListItemForValue('A List item');
        let item = new ListItem('This should be unchecked');
        item.checked = true;
        item.lastUpdate = new Date(2018, 10, 27);
        this.addListItem(item);

        // The actual ngOnInit
        this.updateListItems();
    }

    updateListItems () {
        for (let i = 0; i < this.listItems.length; i++) {
            this.listItems[i].updateIfStale();
        }
    }
}