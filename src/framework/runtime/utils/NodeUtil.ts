/** 节点工具类 */
export class NodeUtil {

    /**
     * 添加一个新的子节点到当前节点，并且在新的子节点挂载组件(新的子节点的名称与组件类名相同)
     * @param node 当前节点
     * @param componentType 新的子节点挂载的组件
     * @returns 
     */
    public static addChildAndComponentToNode<T extends Laya.Component>(node: Laya.Node, componentType: new () => T): T {
        let is3d = node instanceof Laya.Sprite3D;
        let child = is3d ? new Laya.Sprite3D() : new Laya.Sprite();
        child.name = componentType.prototype.constructor.name;
        node.addChild(child);
        let comp = child.addComponent(componentType);
        return comp;
    }

    /**
     * 从节点的父级获取一个组件
     * @param node 节点
     * @param componentType 组件类型
     * @returns 返回第一个获取到的组件，没有则返回 null
     */
    public static getComponentInParent<T extends Laya.Component>(node: Laya.Node, componentType: new () => T): T | null {
        let result = null;
        let parent = node;
        while (parent) {
            result = parent.getComponent(componentType);
            if (result) break;
            parent = parent.parent;
        }
        return result;
    }

    /**
     * 从节点的父级获取同类型的多个组件，并存储到数组
     * @param node 节点
     * @param componentType 组件类型
     * @returns 返回存储同类型组件的数组，没有时返回空数组
     */
    public static getComponentsInParent<T extends Laya.Component>(node: Laya.Node, componentType: new () => T): T[] {
        let result = new Array<T>();
        let parent = node;
        while (parent) {
            let comps = parent.getComponents(componentType) as T[];
            if (comps) {
                result = result.concat(comps);
            }
            parent = parent.parent;
        }
        return result;
    }

    /**
     * 从节点的子级获取一个组件
     * @param node 节点
     * @param componentType 组件类型
     * @returns 返回第一个获取到的组件，没有则返回 null
     */
    public static getComponentInChildren<T extends Laya.Component>(node: Laya.Node, componentType: new () => T): T | null {
        let result = null;
        let nodes = new Array<Laya.Node>();
        nodes.push(node);

        let testNode: Laya.Node | null = null;
        while (testNode = nodes.shift()) {
            result = testNode.getComponent(componentType);
            if (result) {
                break;
            } else {
                for (let i = 0, len = testNode.numChildren; i < len; i++) {
                    let child = testNode.getChildAt(i);
                    nodes.push(child);
                }
            }
        }
        return result;
    }

    /**
     * 从节点的子级获取同类型的多个组件，并存储到数组
     * @param node 节点
     * @param componentType 组件类型
     * @returns 返回存储同类型组件的数组，没有时返回空数组
     */
    public static getComponentsInChildren<T extends Laya.Component>(node: Laya.Node, componentType: new () => T): T[] {
        let result = new Array<T>();
        let nodes = new Array<Laya.Node>();
        nodes.push(node);

        let testNode: Laya.Node | null = null;
        while (testNode = nodes.shift()) {
            let comps = testNode.getComponents(componentType) as T[];
            if (comps) {
                result = result.concat(comps);
            }

            for (let i = 0, len = testNode.numChildren; i < len; i++) {
                let child = testNode.getChildAt(i);
                nodes.push(child);
            }
        }
        return result;
    }

}