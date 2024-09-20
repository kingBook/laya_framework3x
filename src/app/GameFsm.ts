import { Fsm } from "../framework/runtime/objs/fsm/Fsm";
import { StateGameLevel } from "./StateGameLevel";
import { StateGameTitle } from "./StateGameTitle";


const { regClass, property } = Laya;

@regClass()
export class GameFsm extends Fsm {

    declare owner: Laya.Sprite | Laya.Sprite3D;
    
    onAwake(): void {
        this.addState(StateGameTitle);
        this.addState(StateGameLevel);
        this.init();
        this.changeStateTo(StateGameTitle);
    }
    
}