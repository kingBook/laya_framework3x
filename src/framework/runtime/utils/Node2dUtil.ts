const { regClass, property } = Laya;

//@regClass()
export class NodeUtil extends Laya.Script {

    public static addNodeComponent<T extends Laya.Component>(t: new () => T, bind: Laya.Node): T {
        let node = new Laya.Sprite();
        node.name = t.prototype.constructor.name;
        bind.addChild(node);
        let comp = node.addComponent(t);
        return comp;
    }

}