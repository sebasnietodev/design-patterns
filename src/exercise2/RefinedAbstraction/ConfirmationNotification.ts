import { Notification } from '../Abstraction/Notification';

export class ConfirmationNotification extends Notification {
    send(): void {
        this.platform.showNotification("confirmation", `✅ ${this.message}`);
    }
}