
import { GroupChat } from './ConcreteMediator/GroupChat';
import { User } from './Colleague/User';

const groupChat = new GroupChat();

const alice = new User("Alice", groupChat);
const bob = new User("Bob", groupChat);
const charlie = new User("Charlie", groupChat);

groupChat.addUser(alice);
groupChat.addUser(bob);
groupChat.addUser(charlie);

console.log("\n--- Sending messages ---");
alice.sendMessage("Hello everyone!");
bob.sendMessage("How are you all?");
charlie.sendMessage("All good here!");

console.log("\n--- Charlie leaves the chat ---");
groupChat.removeUser(charlie);

console.log("\n--- More messages ---");
alice.sendMessage("Charlie is no longer here");
bob.sendMessage("See you later");