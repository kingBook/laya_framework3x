
import { Fsm } from "../framework/runtime/objs/fsm/Fsm";
import { State } from "../framework/runtime/objs/fsm/State";
import { LevelFsm } from "./LevelFsm";
import { StateLevelRunning } from "./StateLevelRunning";

const { regClass, property } = Laya;

@regClass()
export class StateLevelStart extends State {
    
    private _fsm:LevelFsm;
    
    public onStateEnter(fsm: Fsm): void {
        this._fsm = <LevelFsm>fsm;
        
        
        this._fsm.changeStateTo(StateLevelRunning);
    }
    
    public onStateExit(fsm: Fsm): void {
        
    }
    
}