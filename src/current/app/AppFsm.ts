import { Fsm } from "../../framework/runtime/objs/fsm/Fsm";
import { Game } from "../game/Game";


const { regClass, property } = Laya;

@regClass()
export class AppFsm extends Fsm {
    
    onAwake(): void {
        this.addState(Game);
        this.init();
        this.changeStateTo(Game);
    }
    
}