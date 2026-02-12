
import { Fsm } from "../../../../global/fsm/Fsm";
import { State } from "../../../../global/fsm/State";
import { LevelFsm } from "./LevelFsm";
import { StateLevelRunning } from "./StateLevelRunning";

const { regClass, property } = Laya;

@regClass()
export class StateLevelStart extends State {

    private _fsm: LevelFsm;

    public override onStateEnter(fsm: Fsm): void {
        this._fsm = <LevelFsm>fsm;


        this._fsm.transitionTo(StateLevelRunning);
    }

    public override onStateExit(): void {

    }

}