import { ChatMediator } from '../Mediator/ChatMediator';
import { User } from '../Colleague/User';

export class GroupChat implements ChatMediator {
    private users: User[] = [];

    addUser(user: User): void {
        this.users.push(user);
        console.log(`${user.getName()} joined the group chat`);

        this.users.forEach(u => {
            if (u !== user) {
                u.receiveMessage(`${user.getName()} joined the chat`, "System");
            }
        });
    }

    removeUser(user: User): void {
        const index = this.users.indexOf(user);
        if (index > -1) {
            this.users.splice(index, 1);
            console.log(`${user.getName()} left the group chat`);

            this.users.forEach(u => {
                u.receiveMessage(`${user.getName()} left the chat`, "System");
            });
        }
    }

    sendMessage(message: string, sender: User): void {
        this.users.forEach(user => {
            if (user !== sender) {
                user.receiveMessage(message, sender.getName());
            }
        });
    }

    getUsers(): User[] {
        return [...this.users];
    }
}