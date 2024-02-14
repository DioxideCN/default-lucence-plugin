import { CommandFn } from "../../node_modules/@toast-ui/editor/types/plugin";
import { ToolbarItemOptions } from "../../node_modules/@toast-ui/editor/types/ui";

/**
 * 插件(扩展)所有可定义的API类型
 */

// ------ 扩展工具栏
export type PluginToolbar = {
    append: 'start' | 'end',       // 工具的插入位置
    items: ToolbarItemOptions[],   // 工具列表
}

// ------ 扩展命令
export type PluginCommand = {
    name: string,                  // 命令Name
    command: CommandFn,            // 命令的执行函数
}

// ------ 扩展中的某一个具体的渲染器
export interface PluginRenderer {
    desc: string,                  // 渲染器描述
    name: string,                  // 渲染器名称
    components: PluginComponents,  // 渲染器下的组件列表
}

// ------ 扩展中的渲染器集合
export type PluginRenderers = PluginRenderer[];

// ------ 某一渲染器下的一个具体组件
export type PluginComponent = {
    desc?: string,                                            // 组件的描述
    icon?: string | undefined,                                // 组件的图标class，使用font-awesome
    showInComponents?: boolean | undefined,                   // 是否允许在组件库中启用自动插入，默认为true
    allowContent?: boolean | undefined;                       // 是否允许在标签内插入content内容，默认为false
    allowContentHTML?: boolean | undefined;                   // 是否允许插入的content内容为html，默认为false
    attributes?: Record<string, any> | undefined,             // FormKit套件
    render: (context: RendererContext) => DocumentFragment;   // 组件的渲染规则
};

// ------ 扩展中某一渲染器下的所有组件集合
export type PluginComponents = Record<string, PluginComponent>;

// ------ 组件中渲染规则的上下文
export interface RendererContext {
    get(key: string, or?: string | number | boolean): string;  // 获取context中的键值
    getContent(): string;                                      // 获取context中的内容(需要PluginComponent.allowContent为true)
}

// ------ 消息通知
export type Notification = {
    loading?: boolean | undefined,         // 是否需要加载进度条
    type: 'info' | 'warning' | 'error',    // 消息类型
    message: string,                       // 消息内容
    source: string,                        // 消息来源(一般建议填写插件名)
    reactive: 'change-plugin' | 'none',    // 动作('change-plugin'为需要重载页面 'none'为五任何动作)
}