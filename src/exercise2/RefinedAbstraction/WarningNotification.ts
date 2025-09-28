import { Notification } from '../Abstraction/Notification';

export class WarningNotification extends Notification {
    send(): void {
        this.platform.showNotification("warning", ` ${this.message}`);
    }
}