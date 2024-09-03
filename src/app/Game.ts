
import { State } from "../framework/runtime/objs/fsm/State";
import { NodeUtil } from "../framework/runtime/utils/NodeUtil";
import { GameFsm } from "./GameFsm";

const { regClass, property } = Laya;

@regClass()
export class Game extends State {

    declare owner: Laya.Sprite | Laya.Sprite3D;

    private _fsm: GameFsm;

    public get fsm(): GameFsm { return this._fsm; }

    public onStateEnter(): void {
        this._fsm = NodeUtil.addNodeComponent(GameFsm, this.owner);
    }

}