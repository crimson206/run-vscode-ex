import * as vscode from 'vscode';
import * as ts from 'typescript';

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(
        vscode.workspace.registerNotebookSerializer('tsx-notebook', new TSXNotebookSerializer())
    );
    context.subscriptions.push(new TSNotebookController());
}

class TSXNotebookSerializer implements vscode.NotebookSerializer {
    async deserializeNotebook(
        content: Uint8Array,
        token: vscode.CancellationToken
    ): Promise<vscode.NotebookData> {
        // 여기서는 빈 노트북을 반환합니다. 실제 구현에서는 content를 파싱하여 노트북 데이터를 생성할 수 있습니다.
        return {
            cells: []
        };
    }

    async serializeNotebook(
        data: vscode.NotebookData,
        token: vscode.CancellationToken
    ): Promise<Uint8Array> {
        // 노트북 데이터를 직렬화하는 로직을 구현합니다.
        // 여기서는 빈 배열을 반환합니다.
        return new Uint8Array();
    }
}


class TSNotebookController implements vscode.Disposable {
    readonly controllerId = 'ts-notebook-controller';
    readonly notebookType = 'tsx-notebook';
    readonly label = 'TypeScript Notebook';
    readonly supportedLanguages = ['typescript'];

    private readonly _controller: vscode.NotebookController;
    private _executionOrder = 0;

    constructor() {
        this._controller = vscode.notebooks.createNotebookController(
            this.controllerId,
            this.notebookType,
            this.label
        );

        this._controller.supportedLanguages = this.supportedLanguages;
        this._controller.supportsExecutionOrder = true;
        this._controller.executeHandler = this._executeAll.bind(this);

    }

    dispose() {
        this._controller.dispose();
    }

    private _executeAll(cells: vscode.NotebookCell[], notebook: vscode.NotebookDocument, controller: vscode.NotebookController): void {
        for (let cell of cells) {
            this._doExecution(cell, notebook, controller);
        }
    }

    private async _doExecution(cell: vscode.NotebookCell, notebook: vscode.NotebookDocument, controller: vscode.NotebookController): Promise<void> {
        const execution = controller.createNotebookCellExecution(cell);
        execution.executionOrder = ++this._executionOrder;
        execution.start(Date.now());

        try {
            const result = this._transpileAndExecuteTS(cell.document.getText());
            execution.replaceOutput([
                new vscode.NotebookCellOutput([
                    vscode.NotebookCellOutputItem.text(result)
                ])
            ]);
            execution.end(true, Date.now());
        } catch (error) {
            execution.replaceOutput([
                new vscode.NotebookCellOutput([
                    vscode.NotebookCellOutputItem.error(error as Error)
                ])
            ]);
            execution.end(false, Date.now());
        }
    }

    private _transpileAndExecuteTS(code: string): string {
        const result = ts.transpileModule(code, {
            compilerOptions: { module: ts.ModuleKind.CommonJS }
        });

        // 여기서는 간단히 트랜스파일된 코드를 반환합니다.
        // 실제 실행은 더 복잡한 로직이 필요할 수 있습니다.
        return `Transpiled code:\n${result.outputText}`;
    }
}


export function deactivate() {}