
import { NodeUtil } from "../../framework/runtime/utils/NodeUtil";
import { AppFsm } from "./AppFsm";
import { AppGlobalVariables } from "./AppGlobalVariables";

const { regClass, property } = Laya;

@regClass()
export class App extends Laya.Script {

    declare owner: Laya.Sprite | Laya.Sprite3D;

    private static _instance: App;
    private _fsm: AppFsm;
    private _global: AppGlobalVariables;

    public static get instance(): App { return App._instance; }
    public get fsm(): AppFsm { return this._fsm; }
    public get global(): AppGlobalVariables { return this._global; }

    onAwake(): void {
        App._instance=this;
        this._fsm = NodeUtil.addNodeComponent(AppFsm, this.owner);
        this._global = NodeUtil.addNodeComponent(AppGlobalVariables, this.owner);
    }

    onStart() {

    }

    onDestroy(): void {
        App._instance = null;
    }


}