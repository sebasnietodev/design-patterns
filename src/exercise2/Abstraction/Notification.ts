import { PlatformImplementation } from '../Implementation/PlatformImplementation';

export abstract class Notification {
    protected platform: PlatformImplementation;
    protected message: string;

    constructor(platform: PlatformImplementation, message: string) {
        this.platform = platform;
        this.message = message;
    }

    abstract send(): void;
}