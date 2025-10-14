import { Fsm } from "./Fsm";
import { IState } from "./IState";

const { regClass, property } = Laya;

/** 状态类 */
@regClass()
export class State extends Laya.Script implements IState {

    /** 状态进入 */
    public onStateEnter(fsm: Fsm): void {
    }

    /** 状态更新 */
    public onStateUpdate(): void {
    }

    /** 状态后更新 */
    public onStateLateUpdate(): void {
    }

    /** 状态退出 */
    public onStateExit(): void {
    }

}