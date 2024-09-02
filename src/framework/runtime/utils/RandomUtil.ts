const { regClass, property } = Laya;
//https://github.com/cocos/cocos-engine/blob/v3.8.4/cocos/core/math/utils.ts#L126
//@regClass()
export class RandomUtil extends Laya.Script {

    /** 返回最小(包含)和最大(不包含)之间的浮点随机数，区间为 [min, max)。 */
    public static randomRange(min: number, max: number): number {
        return Math.random() * (max - min) + min;
    }

    /** 返回最小(包含)和最大(不包含)之间的随机整数，区间为 [min, max)。 */
    public static randomRangeInt(min: number, max: number): number {
        return Math.floor(RandomUtil.randomRange(min, max));
    }

}