import { Fsm } from "../../../../global/fsm/Fsm";
import { State } from "../../../../global/fsm/State";




const { regClass, property } = Laya;

@regClass()
export class StateHome extends State {

    public onStateEnter(fsm: Fsm): void {
        console.log("StateHome::onStateEnter();");



    }
}