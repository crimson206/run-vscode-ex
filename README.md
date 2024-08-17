# Run Code Extension

This extension is basically to run vscode extensions programmatically.

For more details, visit `Homepaage`. For the quick understanding of this extension, read `Core` or `Quick Start` page first.

- [Homepage](https://crimson206.github.io/run-vscode-ex/)
    : Blog Page including Docs

- [Git](https://github.com/crimson206/run-vscode-ex)
    : Git Repository

## Core

The `run_vscode.yaml` is the most important element.
This extension detects it and reads its contents to run the vscode extension commands there.

### Syntax

**run_vscode.yaml**
```yaml
execute: true
vscode:
- command: runVscode.combinePackageJSON
- command: editor-capture.captureCurrent
  args:
  - arg1
  - arg2
- command: another.commandName
```

**vscode_extension_progress.json**
```json
[
  {
    "command": "editor-capture.captureCurrent",
    "status": "started",
    "timestamp": 1723839243900
  },
  {
    "command": "editor-capture.captureCurrent",
    "status": "completed",
    "timestamp": 1723839244321
  },
  // ...
]
```


### Process

If `execute` is true (when the file is saved), `Run Code Extension` runs the extension commands written in the file, and the value of `execute` becomes `false`.

To track the progress, it generates `vscode_extension_progress.json` file.

It is designed to report `completed` when the whole process of the command is completed. However, it does not guarantee the expected behavior of commands based on their design.

## Quick Start

run vscode extensions by generating `run_vscode.yaml` file.

### Install

Search `Run Code Extension` in the extension explore and install it.

or

run the line in the terminal,

```bash
code --install-extension crimson206.run-code-extension
```

### Run Vscode

generate a file `run_vscode.yaml` and write the content as below:

```yaml
execute: false
vscode:
    - command: runVscode.combinePackageJSON
```

If you are prepared to run the command, replace `false` by `true` and save the file.
This extension will detect the change, and execute the command, and change the bool value into false back.

The `runVscode.combinePackageJSON` will generate two files in the `temp/run_vscode` directory.
1. extension-packages.json
    - generated file by the command `runVscode.combinePackageJSON`
    - collection of the package.json files of all the installed extensions
2. vscode_extension_progress.json
    - generated whenever a command is executed by `run_vscode.yaml` file
    - contains the start and end time of the executed command
    - expected to be useful when programmatically controlling the extension behaviors
