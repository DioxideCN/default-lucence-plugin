/**
 * LucenceEditor的核心类，核心类不会暴露任何API给外部
 */
export default abstract class LucenceCore {
    /**
     * 返回编辑器渲染后的HTML内容，即Markdown被渲染为HTML后的内容
     */
    public getHTML(): string;

    /**
     * 返回编辑器的原始的Markdown内容，即未被修饰为HTML的内容
     */
    public getMarkdown(): string;

    /**
     * 在编辑器内推送消息
     * @param notification 被推送的消息对象 
     */
    static pushNotification(notification: Notification): string;
}