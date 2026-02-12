import { Fsm } from "../../../global/fsm/Fsm";
import { StateHome } from "./state/StateHome";
import { StateLevel } from "./state/StateLevel";



const { regClass, property } = Laya;

@regClass()
export class App extends Fsm {

    private static s_instance: App;

    /** 应用类单例 */
    public static get instance(): App { return App.s_instance; }

    public onAwake(): void {
        App.s_instance = this;

        // 初始化状态机
        this.addState(StateHome);
        this.addState(StateLevel);
        this.initFsm();

        // 切换到 Home 状态
        this.transitionTo(StateHome);

    }



}