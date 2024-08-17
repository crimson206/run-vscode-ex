import{j as e}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as o}from"./index-CcnH5Kt0.js";import"./index-RYns6xqu.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"core",children:"Core"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"run_vscode.yaml"}),` is the most important element.
This extension detects it and reads its contents to run the vscode extension commands there.`]}),`
`,e.jsx(n.h2,{id:"syntax",children:"Syntax"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"run_vscode.yaml"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-yaml",children:`execute: true
vscode:
- command: runVscode.combinePackageJSON
- command: editor-capture.captureCurrent
  args:
  - arg1
  - arg2
- command: another.commandName
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"vscode_extension_progress.json"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`[
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
`})}),`
`,e.jsx(n.h2,{id:"process",children:"Process"}),`
`,e.jsxs(n.p,{children:["If ",e.jsx(n.code,{children:"execute"})," is true (when the file is saved), ",e.jsx(n.code,{children:"Run Code Extension"})," runs the extension commands written in the file, and the value of ",e.jsx(n.code,{children:"execute"})," becomes ",e.jsx(n.code,{children:"false"}),"."]}),`
`,e.jsxs(n.p,{children:["To track the progress, it generates ",e.jsx(n.code,{children:"vscode_extension_progress.json"})," file."]}),`
`,e.jsxs(n.p,{children:["It is designed to report ",e.jsx(n.code,{children:"completed"})," when the whole process of the command is completed. However, it does not guarantee the expected behavior of commands based on their design."]})]})}function i(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{i as default};
