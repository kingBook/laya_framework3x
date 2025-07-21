import { Fsm } from "../../framework/runtime/objs/fsm/Fsm";
import { State } from "../../framework/runtime/objs/fsm/State";


const { regClass, property } = Laya;

@regClass()
export class StateGameTitle extends State {
    
    public onStateEnter(fsm: Fsm): void {
        console.log("StateGameTitle::onStateEnter();");
        
        
        
    }
}