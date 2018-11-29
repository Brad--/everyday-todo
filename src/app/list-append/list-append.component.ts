import { Component, OnInit } from '@angular/core';

import { ListComponent } from '../list/list.component';
import { ListItem } from '../list/model/list-item.model';

import { faBan } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
    selector: 'list-append',
    templateUrl: './list-append.component.html',
    styleUrls: ['../list/list.component.css','./list-append.component.css'],
    animations: [trigger('fadeInOut', [
        state('out', style({
            opacity: .2
        })),
        state('in', style({
            opacity: 1
        })),
        transition('out => in', [
            animate('.25s')
        ]),
        transition('in => out', [
            animate('.20s')
        ])
    ])]
})
export class ListAppendComponent extends ListComponent {
    faBan = faBan;
    faPlus = faPlus;

    // appendValueAndClear(append: any) {
    //     this.addListItemForValue(append.value);
    //     append.value = '';
    // }

    onRemoveClicked(id: number) {
        // Fade the list item out then delete
        this.removeListItem(id);
    }
}