import { PlatformImplementation } from '../Implementation/PlatformImplementation';

export class MobilePlatform implements PlatformImplementation {
    showNotification(type: string, message: string): void {
        console.log(`[MOBILE - ${type.toUpperCase()}] ${message}`);
        console.log("Showing push notification on mobile device...");
    }
}