import { NodeUtil } from "../framework/runtime/utils/NodeUtil";
import { LevelFsm } from "./LevelFsm";


const { regClass, property } = Laya;

@regClass()
export class Level extends Laya.Script {

    declare owner: Laya.Sprite;
    private _fsm: LevelFsm;

    public get fsm(): LevelFsm { return this._fsm; }

    onAwake(): void {
        this._fsm = NodeUtil.addNodeComponent(LevelFsm, this.owner);
    }

}