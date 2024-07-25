import { State } from "../../framework/runtime/objs/fsm/State";
import { NodeUtil } from "../../framework/runtime/utils/NodeUtil";
import { App } from "../app/App";
import { GameFsm } from "./GameFsm";
import { GameGlobalVariables } from "./GameGlobalVariables";

const { regClass, property } = Laya;

@regClass()
export class Game extends State {

    declare owner: Laya.Sprite | Laya.Sprite3D;

    private _global: GameGlobalVariables;
    private _fsm: GameFsm;

    public get global(): GameGlobalVariables { return this._global; }
    public get fsm(): GameFsm { return this._fsm; }

    public onStateEnter(): void {
        this._global = NodeUtil.addNodeComponent(GameGlobalVariables, this.owner);
        this._fsm = NodeUtil.addNodeComponent(GameFsm, this.owner);
    }

}