import LucenceCore from "./LucenceCore";
import { PluginCommand, PluginRenderers, PluginToolbar } from "./Plugin";
import { PluginDetail } from "./PluginDetail";

export abstract class AbstractPlugin {
    
    protected core: LucenceCore | undefined;
    public abstract readonly detail: PluginDetail;

    constructor() {
    }
    
    build(core: LucenceCore): AbstractPlugin {
        this.core = core;
        return this;
    }

    /**
     * 生命周期：插件挂载并启用时
     */
    onEnable(): void {
    };

    /**
     * 生命周期：插件禁用并卸载时
     */
    onDisable(): void {
    };

    /**
     * 创建：插件的Toolbar项目
     */
    createToolbar(): PluginToolbar | null {
        return null;
    };

    /**
     * 创建：插件需要使用到的commands
     */
    createCommands(): PluginCommand[] | null {
        return null;
    };

    /**
     * 创建：前置类型的渲染器构造方法
     */
    createRenderer(): PluginRenderers | null {
        return null;
    };
    
}