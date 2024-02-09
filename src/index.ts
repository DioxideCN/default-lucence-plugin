import { AbstractPlugin } from "./libs/AbstractPlugin";
import { PluginCommand, PluginRenderers, PluginToolbar, RendererContext } from "./libs/Plugin";

export default class ThemeGravityDom extends AbstractPlugin {
    
    public readonly detail = {
        icon: 'https://host/icon.png',
        name: 'plugin_name',
        display: 'PluginName',
        author: 'Author',
        version: '1.0.0',
        description: 'Your plugin description',
        github: 'https://github.com/your_github_repository',
    };
    
    public onEnable(): void {
        console.log('Extension has been loaded...');
    }

    public onDisable(): void {
        console.log('Extension has been disabled...');
    }

    public createToolbar(): PluginToolbar | null {
        return null;
    }

    public createCommands(): PluginCommand[] | null {
        return null;
    }

    public createRenderer(): PluginRenderers | null {
        return null;
    }

}