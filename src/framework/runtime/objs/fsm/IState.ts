import { Fsm } from "./Fsm";

export interface IState {

    /** 状态进入 */
    onStateEnter(fsm: Fsm): void;

    /** 状态更新 */
    onStateUpdate(): void;

    /** 状态后更新 */
    onStateLateUpdate(): void;

    /** 状态退出 */
    onStateExit(): void;
}