export class ListItem {
    value: string;
    checked: boolean;
    id: number;

    constructor(value: string) {
        this.value = value;
        this.checked = false;
    }

    toggleChecked() {
        this.checked = !this.checked;
    }
}