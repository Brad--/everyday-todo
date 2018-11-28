export class ListItem {
    value: string;
    checked: boolean;
    id: number;
    lastUpdate: Date;
    
    fadeState: string = 'out';

    constructor (value: string) {
        this.lastUpdate = new Date();
        this.value = value;
        this.checked = false;
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