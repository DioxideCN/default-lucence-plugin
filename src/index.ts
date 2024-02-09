import { AbstractPlugin } from "./libs/AbstractPlugin";
import { RendererContext } from "./libs/Plugin";

export default class ThemeGravityDom extends AbstractPlugin {
    
    public readonly detail = {
        icon: "https://dioxide-cn.ink/upload/gravity-logo.png",
        name: "theme_gravity_renderer",
        display: "Gravity主题渲染",
        author: "DioxideCN",
        version: "1.0.0",
        description: "嵌入Gravity主题的自定义DOM的显示支持",
        github: "https://github.com/DioxideCN/plugin-lucence-for-halo",
    };
    
    onEnable() {
        console.log("'Theme Gravity Custom DOM' extension has been loaded successfully...");
    }

    onDisable() {
    }

    createRenderer() {
        return [
            {
                name: 'gravity',
                desc: "渲染Gravity主题的自定义Dom",
                components: this.createRenderRule(),
            },
        ];
    }
    
    createRenderRule() {
        return {
            big: {
                desc: '测试',
                allowContent: true, // 默认为false
                allowContentHTML: true, // 默认为false，是否允许content被解析为html
                attributes: [ // 定义属性表单
                    {
                        $formkit: 'text',
                        name: 'owner',
                        label: '仓库所有者',
                        help: '填写该Github代码仓库的所有者',
                        validation: 'required',
                    },
                    {
                        $formkit: 'url',
                        name: 'repository',
                        label: '仓库名',
                        help: '填写该Github代码仓库的仓库名',
                        validation: 'required|url',
                    },
                ],
                render: function(context: RendererContext) {
                    const fragment = document.createDocumentFragment();
                    // 获取内插文本
                    const content = context.getContent();
                    // ------ build fragment
                    const bigDom = document.createElement('big');
                    bigDom.dataset.owner = context.get('owner', 'default');
                    bigDom.dataset.repository = context.get('repository', '');
                    bigDom.innerHTML = content;
                    fragment.append(bigDom);
                    return fragment;
                }
            },
        };
    }

}