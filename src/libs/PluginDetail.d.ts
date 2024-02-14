export type PluginDetail = {
    icon: string,                      // 插件图标地址(格式: URL)
    name: string,                      // 插件中文名称
    author: string,                    // 作者
    version: string,                   // 插件版本(格式: 数字.数字.数字)
    description: string,               // 插件描述
    github: string,                    // GitHub地址(格式: URL)
    external?: {                       // 定义扩展的外部资源(非必要)
        style?: string[] | undefined,  // 插件需要的<link>资源
        script?: string[] | undefined, // 插件需要的<script>资源
    } | undefined,
}