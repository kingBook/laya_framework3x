
import { Fsm } from "../../framework/runtime/objs/fsm/Fsm";
import { State } from "../../framework/runtime/objs/fsm/State";
import { NodeUtil } from "../../framework/runtime/utils/NodeUtil";
import { GameFsm } from "./GameFsm";
import { StateGameLevel } from "./StateGameLevel";
import { StateGameTitle } from "./StateGameTitle";

const { regClass, property } = Laya;

@regClass()
export class Game extends Laya.Script {


    private _fsm: GameFsm;

    public get fsm(): GameFsm { return this._fsm; }

    public onAwake(): void {
        
        // 初始游戏状态机
        this._fsm = NodeUtil.addChildAndComponentToNode(this.owner, GameFsm);
        this._fsm.addState(StateGameTitle);
        this._fsm.addState(StateGameLevel);
        this._fsm.init();
        // 切换到游戏标题状态
        this._fsm.changeStateTo(StateGameTitle);
    }

    

}