import * as vscode from 'vscode';

export class Global {
    // config prefix from package.json contributes.configuration.properties
    public static configPrefix = 'vscode-ahk-plus';
    private static statusBarItem: vscode.StatusBarItem;
    /**
     * get configuration from vscode setting.
     * @param key config key
     */
    public static getConfig<T>(key: string): T {
        return vscode.workspace.getConfiguration(this.configPrefix).get<T>(key);
    }

    public static updateStatusBarItems(text: string) {
        if (!this.statusBarItem) {
            this.statusBarItem = vscode.window.createStatusBarItem(
                vscode.StatusBarAlignment.Left,
            );
        }
        this.statusBarItem.text = text;
        this.statusBarItem.show();
    }

    public static hide() {
        this.statusBarItem.hide();
    }
}

export enum ConfigKey {
    allowedNumberOfEmptyLines = 'formatter.allowedNumberOfEmptyLines',
    compilePath = 'compilePath',
    compileIcon = 'compileIcon',
    compileBaseFile = 'compileBaseFile',
    compileMpress = 'compileMpress',
    documentPath = 'documentPath',
    executePath = 'executePath',
    enableIntelliSense = 'enableIntelliSense',
    indentCodeAfterLabel = 'formatter.indentCodeAfterLabel',
    indentCodeAfterSharpDirective = 'formatter.indentCodeAfterSharpDirective',
    preserveIndent = 'formatter.preserveIndent',
    trimExtraSpaces = 'formatter.trimExtraSpaces',
}
