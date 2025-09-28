import { WebPlatform } from './ConcreteImplementation/WebPlatform';
import { MobilePlatform } from './ConcreteImplementation/MobilePlatform';
import { MessageNotification } from './RefinedAbstraction/MessageNotification';
import { AlertNotification } from './RefinedAbstraction/AlertNotification';

const webPlatform = new WebPlatform();
const mobilePlatform = new MobilePlatform();

const webMessage = new MessageNotification(webPlatform, "New message received");
const mobileAlert = new AlertNotification(mobilePlatform, "Low battery");

webMessage.send();
mobileAlert.send();