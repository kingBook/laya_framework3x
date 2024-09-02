import { MyEvent } from "./MyEvent";

const { regClass, property } = Laya;

class EventData {
    public type: string;
    public listener: (event: MyEvent) => void;
    public thisArg: any;
}

@regClass()
export class EventManager extends Laya.Script {

    private _list: Array<EventData> = new Array<EventData>();

    public addEventListener(type: string, listener: (event: MyEvent) => void, thisArg: any): void {
        if (this.hasEventListener(type, listener, thisArg)) return;

        let value = new EventData();
        value.type = type;
        value.listener = listener;
        value.thisArg = thisArg;
        this._list.push(value);
    }

    public removeEventListener(type: string, listener: (event: MyEvent) => void, thisArg: any): void {
        let i = this._list.length;
        while (--i >= 0) {
            let value = this._list[i];
            if (value.type === type && value.listener === listener && value.thisArg === thisArg) {
                this._list.splice(i, 1);
            }
        }

    }

    public hasEventListener(type: string, listener: (event: MyEvent) => void, thisArg: any): boolean {
        let i = this._list.length;
        while (--i >= 0) {
            let value = this._list[i];
            if (value.type === type && value.listener === listener && value.thisArg === thisArg) {
                return true;
            }
        }
        return false;
    }

    public dispatchEvent<T extends MyEvent>(event: T): boolean {
        let successScheduled = false;
        let i = this._list.length;
        while (--i >= 0) {
            let value = this._list[i];
            if (value.type === event.type) {
                value.listener.call(value.thisArg, event);
                successScheduled = true;
            }
        }
        return successScheduled;
    }

}