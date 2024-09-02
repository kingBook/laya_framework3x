const { regClass, property } = Laya;

//@regClass()
export class MathUtil extends Laya.Script {

    public static readonly EPSILON = 0.000001;

    public static readonly rad2Deg = 180.0 / Math.PI;

    public static readonly deg2Rad = Math.PI / 180.0;

    /**
     * 在glMatrix的绝对或相对容差范围内，测试参数是否具有近似相同的值。<br/>
     * EPSILON(小于等于1.0的值采用绝对公差，大于1.0的值采用相对公差) 
     * */
    public static equals(a: number, b: number): boolean {
        return Math.abs(a - b) <= MathUtil.EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
    }

    /** 通过给定的最大差异，测试参数是否具有近似相同的值。 */
    public static approx(a: number, b: number, maxDiff?: number): boolean {
        maxDiff = maxDiff || MathUtil.EPSILON;
        return Math.abs(a - b) <= maxDiff;
    }

    /** 返回最小浮点数和最大浮点数之间的一个数值。可以使用 clamp 函数将不断变化的数值限制在范围内。 */
    public static clamp(val: number, min: number, max: number): number {
        if (min > max) {
            const temp = min;
            min = max;
            max = temp;
        }

        return val < min ? min : val > max ? max : val;
    }

    public static clamp01(val: number): number {
        return val < 0 ? 0 : val > 1 ? 1 : val;
    }

    /** 两个数之间的线性插值。 */
    public static lerp(from: number, to: number, ratio: number): number {
        return from + (to - from) * ratio;
    }

}