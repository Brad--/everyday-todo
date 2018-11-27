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
        this.listItems.push(item);
    }

    drop(event: CdkDragDrop<ListItem[]>) {
        moveItemInArray(this.listItems, event.previousIndex, event.currentIndex);
    }

    checkboxChanged (event: any) {
        console.log(event);
    }

    ngOnInit() {
        this.addListItemForValue("List Item 1");

        let item = new ListItem("List Item 2");
        item.checked = true;
        this.addListItem(item);
    }
}