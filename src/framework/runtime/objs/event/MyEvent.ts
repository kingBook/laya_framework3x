const { regClass, property } = Laya;

//@regClass()
export class MyEvent {
    public type: string;
    public target: any;

    public constructor(type: string, target?: any) {
        this.type = type;
        this.target = target;
    }
}