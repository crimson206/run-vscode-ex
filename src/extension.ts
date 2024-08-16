import * as vscode from 'vscode';
import { activateRunVscodeFile } from './runVscodeFile';
import { savePackageJSONToFile } from './getExtensionInfo';

export function activate(context: vscode.ExtensionContext) {
    console.log('Extension is now active!');

    activateRunVscodeFile(context);

    const disposable = vscode.commands.registerCommand('runVscode.combinePackageJSON', savePackageJSONToFile);

    context.subscriptions.push(disposable);

    // Register new force activation command
    const forceActivationDisposable = vscode.commands.registerCommand('runVscode.forceActivation', () => {
        vscode.window.showInformationMessage('Run VSCode Extension has been forcefully activated!');
        // You can add any additional activation logic here
        activateRunVscodeFile(context);
    });
    context.subscriptions.push(forceActivationDisposable);

}

export function deactivate() {}
