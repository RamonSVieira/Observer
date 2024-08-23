import { EventManager } from "./observables/EventManager";

import { EmailNotifier } from "./observadores/EmailNotifier";
import { FaxNotifier } from "./observadores/FaxNotifier";
import { PushNotifier } from "./observadores/PushNotifier";


const push = new PushNotifier();
const email = new EmailNotifier();
const fax = new FaxNotifier();

const manager = new EventManager()

manager.addObserver(push);
manager.addObserver(email);
manager.addObserver(fax);

manager.notify("Evento novo");