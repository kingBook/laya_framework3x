import { NodeUtil } from "../../framework/runtime/utils/NodeUtil";
import { Game } from "../game/Game";



const { regClass, property } = Laya;

/** 整个应用的单例 */
@regClass()
export class App extends Laya.Script {

    private static s_instance: App;
    private _game: Game;

    /** 整个应用的单例 */
    public static get instance(): App { return App.s_instance; }
    
    /** 游戏实例 */
    public get game(): Game { return this._game; }


    public onAwake(): void {
        App.s_instance = this;

        // 状态机
        this._game = NodeUtil.addNewChildAndComponentToNode(this.owner, Game);

    }

    public onDestroy(): void {
        App.s_instance = null;
    }


}