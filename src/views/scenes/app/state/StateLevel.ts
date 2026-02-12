import { Fsm } from "../../../../global/fsm/Fsm";
import { State } from "../../../../global/fsm/State";


const { regClass, property } = Laya;

@regClass()
export class StateLevel extends State {

    public onStateEnter(fsm: Fsm): void {
        Laya.loader.loadPackage("bundles/levelBasic").then(() => {
            Laya.Scene.open("bundles/levelBasic/level.ls", false);
        });
    }
}