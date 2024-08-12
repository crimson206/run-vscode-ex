import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';


export function combinePackageJSON(): object {
    const extensions = vscode.extensions.all;
    const combinedJSON = extensions.reduce((acc, extension) => {
        const packageJSON = extension.packageJSON;
        acc[extension.id] = packageJSON;
        return acc;
    }, {} as Record<string, any>);

    return combinedJSON;
}

export function savePackageJSONToFile(): void {
    const combinedJSON = combinePackageJSON();
    const jsonString = JSON.stringify(combinedJSON, null, 2);
    
    try {
        const config = vscode.workspace.getConfiguration('runVscode');
        const outputDir = config.get<string>('outputDir') || "temp/run_vscode";

        const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
        if (!workspaceFolder) {
            throw new Error('No workspace folder found');
        }

        const fullPath = path.join(workspaceFolder.uri.fsPath, outputDir, 'extension-packages.json');
        
        const directory = path.dirname(fullPath);
        if (!fs.existsSync(directory)) {
            fs.mkdirSync(directory, { recursive: true });
        }
        
        fs.writeFileSync(fullPath, jsonString, 'utf8');
        vscode.window.showInformationMessage(`Combined PackageJSON saved to ${fullPath}`);
    } catch (error) {
        vscode.window.showErrorMessage(`Error saving file: ${error instanceof Error ? error.message : String(error)}`);
        console.error('Full error:', error);
    }
}