import { NodeUtil } from "../framework/runtime/utils/NodeUtil";
import { AppFsm } from "./AppFsm";
import { Game } from "./Game";


const { regClass, property } = Laya;

/** 整个应用的单例 */
@regClass()
export class App extends Laya.Script {

    declare owner: Laya.Sprite | Laya.Sprite3D;

    private static s_instance: App;
    private _fsm: AppFsm;

    /** 整个应用的单例 */
    public static get instance(): App { return App.s_instance; }
    
    /** 应用单例的状态机 */
    public get fsm(): AppFsm { return this._fsm; }

    public onAwake(): void {
        App.s_instance = this;
        
        // 创建状态机
        this._fsm = new AppFsm();
        this._fsm.addState(Game);
        this._fsm.init();
        this._fsm.changeStateTo(Game);
    }

    public onDestroy(): void {
        App.s_instance = null;
    }


}