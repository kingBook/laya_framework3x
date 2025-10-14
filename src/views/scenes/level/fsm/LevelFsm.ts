import { Fsm } from "../../../../global/fsm/Fsm";
import { StateLevelFailure } from "./StateLevelFailure";
import { StateLevelRunning } from "./StateLevelRunning";
import { StateLevelStart } from "./StateLevelStart";
import { StateLevelVictory } from "./StateLevelVictory";


const { regClass, property } = Laya;

@regClass()
export class LevelFsm extends Fsm {

    onAwake(): void {
        this.addState(StateLevelStart);
        this.addState(StateLevelRunning);
        this.addState(StateLevelVictory);
        this.addState(StateLevelFailure);
        this.init();

        this.changeStateTo(StateLevelStart);
    }

}