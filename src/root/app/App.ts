import { NodeUtil } from "../../framework/runtime/utils/NodeUtil";
import { Game } from "../game/Game";
import { AppFsm } from "./AppFsm";



const { regClass, property } = Laya;

/** 整个应用的单例 */
@regClass()
export class App extends Laya.Script {

    private static s_instance: App;
    private _fsm: AppFsm;

    /** 整个应用的单例 */
    public static get instance(): App { return App.s_instance; }

    /** 应用单例的状态机 */
    public get fsm(): AppFsm { return this._fsm; }

    public onAwake(): void {
        App.s_instance = this;

        // 状态机
        this._fsm = NodeUtil.addNewChildAndComponentToNode(this.owner, AppFsm);
        this._fsm.addState(Game);
        this._fsm.init();
        // 切换到 Game 状态
        this._fsm.changeStateTo(Game);
    }

    public onDestroy(): void {
        App.s_instance = null;
    }


}