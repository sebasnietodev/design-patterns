import { User } from '../Colleague/User';

export interface ChatMediator {
    addUser(user: User): void;
    removeUser(user: User): void;
    sendMessage(message: string, sender: User): void;
}