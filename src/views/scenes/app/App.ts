import { NodeUtil } from "../../../utils/NodeUtil";
import { AppFsm } from "./fsm/AppFsm";
import { StateHome } from "./fsm/StateHome";
import { StateLevel } from "./fsm/StateLevel";



const { regClass, property } = Laya;

@regClass()
export class App extends Laya.Script {

    private static s_instance: App;
    private _fsm: AppFsm;

    /** 应用类单例 */
    public static get instance(): App { return App.s_instance; }

    /** 应用类状态机 */
    public get fsm(): AppFsm { return this._fsm; }


    public onAwake(): void {
        App.s_instance = this;

        // 初始化状态机
        this._fsm = NodeUtil.addChildAndComponentToNode(this.owner, AppFsm);
        this._fsm.addState(StateHome);
        this._fsm.addState(StateLevel);
        this._fsm.init();

        // 切换到 Home 状态
        this._fsm.changeStateTo(StateHome);

    }



}