import { TestBed, async } from '@angular/core/testing';
import { ListComponent } from './list.component';

describe('ListComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ListComponent
            ]
        }).compileComponents();
    }));

    // it('should addListItemForValue()', () => {
    //     const fixture = TestBed.createComponent(ListComponent);
    //     const list = fixture.debugElement.componentInstance;

    //     list.addListItemForValue("test");
    //     expect(list.listItems.length).toEqual(1);
    //     expect(list.listItems[0]).toEqual("test");
    // });
});