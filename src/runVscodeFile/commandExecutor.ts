import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { Command } from './configParser';

interface ProgressReport {
    command: string;
    status: 'started' | 'in_progress' | 'completed' | 'error';
    message?: string;
    timestamp: number;
}

function reportProgress(report: ProgressReport) {
    const workspaceFolders = vscode.workspace.workspaceFolders;
    if (!workspaceFolders) return;

    const config = vscode.workspace.getConfiguration('runVscode');
    const outputDir = config.get<string>('outputDir') || "temp/run_vscode";

    const progressFilePath = path.join(workspaceFolders[0].uri.fsPath, outputDir, 'vscode_extension_progress.json');
    
    let reports: ProgressReport[] = [];
    if (fs.existsSync(progressFilePath)) {
        const content = fs.readFileSync(progressFilePath, 'utf8');
        reports = JSON.parse(content);
    }
    
    reports.push(report);

    const directory = path.dirname(progressFilePath);
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
    }

    fs.writeFileSync(progressFilePath, JSON.stringify(reports, null, 2));
}

export async function executeCommands(commands: Command[]) {
    for (const cmd of commands) {
        try {
            reportProgress({
                command: cmd.command,
                status: 'started',
                timestamp: Date.now()
            });

            await vscode.commands.executeCommand(cmd.command, ...(cmd.args || []));

            reportProgress({
                command: cmd.command,
                status: 'completed',
                timestamp: Date.now()
            });

            vscode.window.showInformationMessage(`Command "${cmd.command}" executed successfully.`);
        } catch (error) {
            reportProgress({
                command: cmd.command,
                status: 'error',
                message: error instanceof Error ? error.message : String(error),
                timestamp: Date.now()
            });

            vscode.window.showErrorMessage(`Error executing command "${cmd.command}": ${error}`);
        }
    }
}
