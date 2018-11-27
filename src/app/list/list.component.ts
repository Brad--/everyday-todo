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

    addListItem (item: ListItem) {
        item.id = this.listItems.length;
        if (!this.isValueInList(item.value))
            this.listItems.push(item);
    }

    isValueInList (value: string) {
        for (let i = 0; i < this.listItems.length; i++) {
            if (this.listItems[i].value === value) {
                return true;
            }
        }
        return false;
    }

    removeListItem(id: number) {
        for (let i = 0; i < this.listItems.length; i++) {
            if (this.listItems[i].id === id) {
                this.listItems.splice(i, 1);
            }
        }
    }

    drop(event: CdkDragDrop<ListItem[]>) {
        moveItemInArray(this.listItems, event.previousIndex, event.currentIndex);
    }

    checkboxChanged (event: any) {
        console.log(event);
    }

    ngOnInit() {
        // Mock data
        this.addListItemForValue('A List item');
        let item = new ListItem('This should be unchecked');
        item.checked = true;
        item.lastUpdate = new Date(2018, 10, 27);
        this.addListItem(item);

        this.updateListItems();
    }

    updateListItems () {
        for (let i = 0; i < this.listItems.length; i++) {
            this.listItems[i].updateIfStale();
        }
    }
}