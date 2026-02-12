import { State } from "./State";
import { StateDefault } from "./StateDefault";

const { regClass, property } = Laya;

/** 状态机类 */
@regClass()
export class Fsm extends Laya.Script {

    /** 存储所有状态的字典 */
    protected _states: Map<string, State> = new Map<string, State>();
    /** 状态切换后的回调函数 */
    protected _onTransitioned: (old: State, current: State) => void;
    /** 当前状态 */
    protected _currentState: State;

    /** 获取当前状态（指定状态类型）*/
    public getCurrentState<T extends State>(t: new () => T): T {
        return <T>this._currentState;
    }

    /**
     * 初始化状态
     * @param onTransitioned 状态改变后的回调函数
     */
    public initFsm(onTransitioned?: (old: State, current: State) => void): void {
        this.addState(StateDefault);
        this._onTransitioned = onTransitioned;
        this.transitionTo(StateDefault);
    }

    /**
     * 添加状态
     * @param t 状态类型
     */
    public addState<T extends State>(t: new () => T): void {
        const state = this.owner.addComponent(t);
        state.enabled = false;
        this._states.set(t.prototype.constructor.name, state);
    }

    /**
     * 获取状态
     * @param t 状态类型
     * @return 返回获取的状态，如果没有，则返回 undefined
     */
    public getState<T extends State>(t: new () => T): T {
        return <T>this._states.get(t.prototype.constructor.name);
    }

    /**
     * 切换到指定状态
     * @param targetState 目标状态名称
     * @param onTransitioned 状态改变后的回调函数
     */
    public transitionTo<T extends State>(targetState: new () => T, onTransitioned?: (old: State, current: State) => void): void {
        const state = this._states.get(targetState.prototype.constructor.name);
        if (state === undefined) {
            throw new Error("状态 " + targetState.prototype.constructor.name + " 未添加，使用 fsm.addState(StateClassName) 方法进行添加");
        }
        // 当前状态已是目标状态时，返回
        //if (this._currentState === state) return;

        const old = this._currentState;

        // 状态退出
        old && (old.enabled = false);
        old?.onStateExit();

        // 当前状态赋值新状态
        this._currentState = state;

        // 改变状态时的回调
        this._onTransitioned?.call(null, old, state);
        onTransitioned?.call(null, old, state);

        // 状态进入
        state.enabled = true;
        state.onStateEnter(this);
    }

    public onUpdate(): void {
        this._currentState.onStateUpdate();
    }

    public onLateUpdate(): void {
        this._currentState.onStateLateUpdate();
    }

    public onDestroy(): void {
        //this._currentState = null;
        //this._onStateChanged = null;
        //this._states = null;
    }

}