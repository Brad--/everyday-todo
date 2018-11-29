import { TestBed, async } from '@angular/core/testing';
import { ListComponent } from './list.component';
import { ListStorageService } from '../services/list-storage.service';
import { ListItem } from './model/list-item.model';

import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

describe('ListComponent', () => {
    let listComponent: ListComponent;
    let listStorageService: ListStorageService;
    let spy: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ListComponent
            ],
            providers: [
                ListStorageService
            ]
        })
        .compileComponents();

        listStorageService = new ListStorageService(new StorageService());
        listComponent = new ListComponent(listStorageService);
    }));

    it('should initialize with an empty list', () => {
        spy = spyOn(listStorageService, 'getCurrentListFromLocalStorage').and.returnValue([]);
        expect(listComponent.listItems.length).toEqual(0);
    });

    it('should initialize with a list from local storage', () => {
        spy = spyOn(listStorageService, 'getCurrentListFromLocalStorage').and.returnValue([new ListItem('an item')]);
        listComponent.ngOnInit();
        expect(listComponent.listItems.length).toEqual(1);
    });

    it('should addListItemForValue()', () => {
        spy = spyOn(listStorageService, 'getCurrentListFromLocalStorage').and.returnValue([]);
        spy = spyOn(listStorageService, 'updateLocalStorage');

        // list.addListItemForValue("test");
        // expect(list.listItems.length).toEqual(1);
        // expect(list.listItems[0]).toEqual("test");
    });
});