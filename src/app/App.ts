import { EventManager } from "../framework/runtime/objs/event/EventManager";
import { NodeUtil } from "../framework/runtime/utils/NodeUtil";
import { AppFsm } from "./AppFsm";


const { regClass, property } = Laya;

@regClass()
export class App extends Laya.Script {

    declare owner: Laya.Sprite | Laya.Sprite3D;

    private static s_instance: App;
    private _eventManager: EventManager;
    private _fsm: AppFsm;

    public static get instance(): App { return App.s_instance; }
    public get fsm(): AppFsm { return this._fsm; }
    public get eventManager(): EventManager { return this._eventManager; }

    onAwake(): void {
        App.s_instance=this;
        this._eventManager = NodeUtil.addNodeComponent(EventManager, this.owner);
        this._fsm = NodeUtil.addNodeComponent(AppFsm, this.owner);
    }

    onStart() {

    }

    onDestroy(): void {
        App.s_instance = null;
    }


}