import * as vscode from 'vscode';

export function setupFileWatcher(context: vscode.ExtensionContext, handler: (uri: vscode.Uri) => void) {
    const watcher = vscode.workspace.createFileSystemWatcher('**/run_vscode.yaml');
    watcher.onDidCreate(handler);
    watcher.onDidChange(handler);
    context.subscriptions.push(watcher);

    const workspaceFolders = vscode.workspace.workspaceFolders;
    if (workspaceFolders) {
        workspaceFolders.forEach(folder => {
            const pattern = new vscode.RelativePattern(folder, '**/run_vscode.yaml');
            vscode.workspace.findFiles(pattern).then(files => {
                files.forEach(handler);
            });
        });
    }
}