
import { Fsm } from "../../framework/runtime/objs/fsm/Fsm";
import { State } from "../../framework/runtime/objs/fsm/State";
import { NodeUtil } from "../../framework/runtime/utils/NodeUtil";
import { GameFsm } from "./GameFsm";
import { StateGameLevel } from "./StateGameLevel";
import { StateGameTitle } from "./StateGameTitle";

const { regClass, property } = Laya;

@regClass()
export class Game extends State {

    public static s_instance: Game;

    private _fsm: GameFsm;

    public static get instance(): Game { return Game.s_instance; };
    public get fsm(): GameFsm { return this._fsm; }

    public onStateEnter(fsm: Fsm): void {
        Game.s_instance = this;

        this._fsm = NodeUtil.addNewChildAndComponentToNode(this.owner, GameFsm);
        this._fsm.addState(StateGameTitle);
        this._fsm.addState(StateGameLevel);
        this._fsm.init();
        this._fsm.changeStateTo(StateGameTitle);
    }

    public onStateExit(): void {
        Game.s_instance = null;
    }

}