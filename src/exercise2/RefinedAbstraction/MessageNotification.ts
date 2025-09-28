import { Notification } from '../Abstraction/Notification';

export class MessageNotification extends Notification {
    send(): void {
        this.platform.showNotification("message", this.message);
    }
}