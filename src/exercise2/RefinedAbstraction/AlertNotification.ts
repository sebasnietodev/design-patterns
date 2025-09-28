import { Notification } from '../Abstraction/Notification';

export class AlertNotification extends Notification {
    send(): void {
        this.platform.showNotification("alert", `⚠️ ${this.message}`);
    }
}