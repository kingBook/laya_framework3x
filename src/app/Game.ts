
import { Fsm } from "../framework/runtime/objs/fsm/Fsm";
import { State } from "../framework/runtime/objs/fsm/State";
import { NodeUtil } from "../framework/runtime/utils/NodeUtil";
import { GameFsm } from "./GameFsm";

const { regClass, property } = Laya;

@regClass()
export class Game extends State {

    public static s_instance: Game;

    declare owner: Laya.Sprite | Laya.Sprite3D;
    private _fsm: GameFsm;

    public static get instance(): Game { return Game.s_instance; };
    public get fsm(): GameFsm { return this._fsm; }

    public onStateEnter(fsm: Fsm): void {
        Game.s_instance = this;
        this._fsm = NodeUtil.addNodeComponent(GameFsm, this.owner);
    }

    public onStateExit(fsm: Fsm): void {
        Game.s_instance = null;
    }

}