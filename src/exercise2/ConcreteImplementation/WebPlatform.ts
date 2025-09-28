import { PlatformImplementation } from '../Implementation/PlatformImplementation';

export class WebPlatform implements PlatformImplementation {
    showNotification(type: string, message: string): void {
        console.log(`[WEB - ${type.toUpperCase()}] ${message}`);
        console.log("Displaying in web browser with CSS styles...");
    }
}