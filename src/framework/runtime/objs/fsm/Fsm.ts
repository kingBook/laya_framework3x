import { IState } from "./IState";
import { State } from "./State";
import { StateDefault } from "./StateDefault";

const { regClass, property } = Laya;

/** 状态机类 */
@regClass()
export class Fsm extends Laya.Script {

    /** 存储所有状态的字典 */
    protected _states: Map<string, IState> = new Map<string, IState>();

    /** 状态发生改变后的回调函数 */
    protected _onStateChanged: (old: State, current: State) => void;
    /** 状态改变后的回调函数绑定的 this 对象 */
    protected _onStateChangedThis?: any;
    /** 当前状态 */
    protected _currentState: IState;

    /** 当前状态 */
    public get currentState(): IState {
        return this._currentState;
    }

    /** 获取当前状态（指定状态类型）*/
    public getCurrentState<T extends IState>(t: new () => T): T {
        return <T>this._currentState;
    }

    /**
     * 初始化
     * @param onStateChanged 状态改变后的回调函数
     * @param onStateChangedThis 状态改变后的回调函数绑定的 this 对象
     */
    public init(onStateChanged?: (old: State, current: State) => void, onStateChangedThis?: any): void {
        this.addState(StateDefault);
        this._onStateChanged = onStateChanged;
        this._onStateChangedThis = onStateChangedThis;
        this.changeStateTo(StateDefault);
    }

    /**
     * 添加状态
     * @param t 状态类型
     */
    public addState<T extends State>(t: new () => T): void {
        let state = this.owner.addComponent(t)
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
     * @param toState 目标状态名称
     * @param onChanged 状态改变后的回调函数
     * @param onChangedThis 状态改变后的回调函数绑定的 this 对象
     */
    public changeStateTo<T extends State>(toState: new () => T, onChanged?: (old: State, current: State) => void, onChangedThis?: any): void {
        let state = this._states.get(toState.prototype.constructor.name);
        if (state === undefined) {
            throw new Error("状态 " + toState.prototype.constructor.name + " 未添加，使用 fsm.addState(StateClassName) 方法进行添加");
        }
        // 状态相同时不取消切换
        //if (this._currentState === state) return;

        let old = this._currentState;
        // 状态退出
        old?.onStateExit();
        // 当前状态赋值新状态
        this._currentState = state;
        // 改变状态时的回调
        this._onStateChanged?.call(this._onStateChangedThis, <State>old, <State>state);
        onChanged?.call(onChangedThis, <State>old, <State>state);
        // 状态进入
        this._currentState.onStateEnter(this);
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