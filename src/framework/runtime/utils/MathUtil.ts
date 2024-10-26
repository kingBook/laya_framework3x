export class MathUtil {

    public static readonly EPSILON = 0.000001;
    public static readonly rad2Deg = 180.0 / Math.PI;
    public static readonly deg2Rad = Math.PI / 180.0;

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