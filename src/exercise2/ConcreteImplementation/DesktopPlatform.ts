import { PlatformImplementation } from '../Implementation/PlatformImplementation';

export class DesktopPlatform implements PlatformImplementation {
    showNotification(type: string, message: string): void {
        console.log(`[DESKTOP - ${type.toUpperCase()}] ${message}`);
        console.log("Showing operating system notification...");
    }
}