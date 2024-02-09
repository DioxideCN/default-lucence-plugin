import { CommandFn } from "../../node_modules/@toast-ui/editor/types/plugin";
import { ToolbarItemOptions } from "../../node_modules/@toast-ui/editor/types/ui";

export type PluginToolbar = {
    append: 'start' | 'end',
    items: ToolbarItemOptions[],
}

export type PluginCommand = {
    name: string,
    command: CommandFn,
}

export interface PluginRenderer {
    desc: string,
    name: string,
    components: PluginComponents,
}
export type PluginRenderers = PluginRenderer[];

export type PluginComponent = {
    desc?: string,    // 描述
    showInComponents?: boolean | undefined, // 是否在组件中启用自动插入，默认为true
    allowContent?: boolean | undefined;
    allowContentHTML?: boolean | undefined;
    attributes?: Record<string, any> | undefined,
    render: (context: RendererContext) => DocumentFragment;
};
export type PluginComponents = Record<string, PluginComponent>;

export interface RendererContext {
    get(key: string, or?: string | number | boolean): string;
    getContent(): string;
}