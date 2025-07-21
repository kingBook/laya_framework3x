import { Fsm } from "../../framework/runtime/objs/fsm/Fsm";
import { State } from "../../framework/runtime/objs/fsm/State";


const { regClass, property } = Laya;

@regClass()
export class StateGameLevel extends State {
    
    public onStateEnter(fsm: Fsm): void {
        Laya.loader.loadPackage("bundles/levelBasic").then(()=>{
            Laya.Scene.open("bundles/levelBasic/level.ls", false);
        });
    }
}