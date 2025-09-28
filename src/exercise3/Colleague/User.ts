import { ChatMediator } from '../Mediator/ChatMediator';

export class User {
    private name: string;
    private mediator: ChatMediator;

    constructor(name: string, mediator: ChatMediator) {
        this.name = name;
        this.mediator = mediator;
    }

    getName(): string {
        return this.name;
    }

    sendMessage(message: string): void {
        console.log(`${this.name} sends: "${message}"`);
        this.mediator.sendMessage(message, this);
    }

    receiveMessage(message: string, sender: string): void {
        console.log(`${this.name} receives from ${sender}: "${message}"`);
    }
}