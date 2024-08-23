import { EventObserver } from "../interfaces/EventObserver";

export class PushNotifier implements EventObserver{
    update(eventData: string): void {
        console.log("Notificação de PUSH do PUSH NOTIFIER", eventData);
    }
}