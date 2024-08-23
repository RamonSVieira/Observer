import { EventObserver } from "../interfaces/EventObserver";

export class FaxNotifier implements EventObserver{
    update(paramento: string){
        console.log("Notificação de FAX do FAX NOTIFIER", paramento);
    }
}