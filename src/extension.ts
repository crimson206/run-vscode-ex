import * as vscode from 'vscode';
import { activateRunVscodeFile } from './runVscodeFile';
import { savePackageJSONToFile } from './getExtensionInfo';

export function activate(context: vscode.ExtensionContext) {
    console.log('Extension is now active!');

    activateRunVscodeFile(context);

    const disposable = vscode.commands.registerCommand('runVscode.combinePackageJSON', savePackageJSONToFile);

    context.subscriptions.push(disposable);
}

export function deactivate() {}
