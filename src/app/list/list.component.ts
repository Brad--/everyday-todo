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
        if (!this.valueInList(item.value))
            this.listItems.push(item);
    }

    valueInList (value: string) {
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
        // this.addListItemForValue("A really long list item value doot doot");

        // let item = new ListItem("List Item 2");
        // item.checked = true;
        // this.addListItem(item);
    }
}