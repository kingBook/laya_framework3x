import { PlayerPrefs } from "../framework/runtime/utils/PlayerPrefs";

const { regClass } = Laya;

@regClass()
export class LocalManager extends Laya.Script {

    /** 返回已解锁的关卡数字，默认：0 */
    public static get levelNumber(): number {
        return PlayerPrefs.getInt("levelNumber", 0);
    }

    /** 设置已解锁的关卡数字 */
    public static set levelNumber(value: number) {
        PlayerPrefs.setInt("levelNumber", value);
    }
}