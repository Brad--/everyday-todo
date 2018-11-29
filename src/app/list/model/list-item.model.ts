export class ListItem {
    value: string;
    checked: boolean;
    id: number;
    lastUpdate: Date;

    fadeState: string;

    constructor (value: string, checked: boolean = false, id: number = -1, lastUpdate: Date = new Date(), fadeState: string = 'out') {
        this.value = value;
        this.checked = checked;
        this.id = id;
        this.lastUpdate = lastUpdate;
        this.fadeState = fadeState;
    }

    toggleChecked () {
        this.checked = !this.checked;
    }

    updateIfStale () {
        if(this.isStale()) {
            this.updateChecked();
        }
    }

    updateChecked () {
        this.checked = false;
        this.lastUpdate = new Date();
    }

    isStale (){
        if (this.lastUpdate <= this.getMidnight()) {
            return true;
        }
        return false;
    }

    getMidnight() {
        let date = new Date();
        date.setHours(0, 0, 0, 0);
        return date;
    }
}