import { NodeUtil } from "../../framework/runtime/utils/NodeUtil";
import { LevelFsm } from "./LevelFsm";


const { regClass, property } = Laya;

@regClass()
export class Level extends Laya.Script {

    private static s_instance: Level;
    declare owner: Laya.Sprite;
    private _fsm: LevelFsm;

    public static get instance(): Level { return Level.s_instance }
    public get fsm(): LevelFsm { return this._fsm; }

    onAwake(): void {
        Level.s_instance = this;
        this._fsm = NodeUtil.addChildAndComponentToNode(this.owner, LevelFsm);
    }

    onDestroy(): void {
        Level.s_instance = null;
    }

}