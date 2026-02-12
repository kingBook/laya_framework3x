import { Fsm } from "../../../global/fsm/Fsm";
import { StateLevelFailure } from "./state/StateLevelFailure";
import { StateLevelRunning } from "./state/StateLevelRunning";
import { StateLevelStart } from "./state/StateLevelStart";
import { StateLevelVictory } from "./state/StateLevelVictory";


const { regClass, property } = Laya;

@regClass()
export class Level extends Fsm {

    private static s_instance: Level;
    declare owner: Laya.Sprite;

    public static get instance(): Level { return Level.s_instance }

    onAwake(): void {
        Level.s_instance = this;

        // 初始化状态机
        this.addState(StateLevelStart);
        this.addState(StateLevelRunning);
        this.addState(StateLevelVictory);
        this.addState(StateLevelFailure);
        this.initFsm();
        
        // 切换到 关卡开始 状态
        this.transitionTo(StateLevelStart);
    }

    onDestroy(): void {
        Level.s_instance = null;
    }

}