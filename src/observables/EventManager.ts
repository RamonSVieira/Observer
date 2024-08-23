import { EventObserver } from "../interfaces/EventObserver";

export class EventManager{
    public observers: EventObserver[] = [];

    addObserver(observer: EventObserver): void{
        this.observers.push(observer);
    }

    removeObserver(observer: EventObserver): void{
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(eventData: string): void{
        // obs: O vínculo desta classe é com a interface
        this.observers.forEach((o: EventObserver) => {
            o.update(eventData);
        })
    }
}