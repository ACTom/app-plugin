/**
 * 插件需实现的内容
 */
declare interface IPlugin {
    /* 插件ID */
    id: string;
    /* 插件版本 */
    version: string;
    /* 插件名称 */
    name: string;
    /* 插件依赖项 */
    dependencies: object;
    /* 安装插件时执行的方法 */
    install(): void;
    /* 卸载插件时执行的方法 */
    uninstall(): void;
    /* 插件初始化 */
    init(): void;
}