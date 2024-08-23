import { EventObserver } from "../interfaces/EventObserver";

export class EmailNotifier implements EventObserver{
    update(eventData: string): void {
        console.log("Notificação de EMAIL do EMAIL NOTIFIER", eventData);
    }
}