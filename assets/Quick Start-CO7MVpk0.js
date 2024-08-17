import{j as e}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as i}from"./index-CcnH5Kt0.js";import"./index-RYns6xqu.js";function c(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"run-code-extension",children:"Run Code Extension"}),`
`,e.jsxs(n.p,{children:["run vscode extensions by generating ",e.jsx(n.code,{children:"run_vscode.yaml"})," file."]}),`
`,e.jsx(n.h2,{id:"install",children:"Install"}),`
`,e.jsxs(n.p,{children:["Search ",e.jsx(n.code,{children:"Run Code Extension"})," in the extension explore and install it."]}),`
`,e.jsx(n.p,{children:"or"}),`
`,e.jsx(n.p,{children:"run the line in the terminal,"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`code --install-extension crimson206.run-code-extension
`})}),`
`,e.jsx(n.h2,{id:"run-vscode",children:"Run Vscode"}),`
`,e.jsxs(n.p,{children:["generate a file ",e.jsx(n.code,{children:"run_vscode.yaml"})," and write the content as below:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-yaml",children:`execute: false
vscode:
    - command: runVscode.combinePackageJSON
`})}),`
`,e.jsxs(n.p,{children:["If you are prepared to run the command, replace ",e.jsx(n.code,{children:"false"})," by ",e.jsx(n.code,{children:"true"}),` and save the file.
This extension will detect the change, and execute the command, and change the bool value into false back.`]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"runVscode.combinePackageJSON"})," will generate two files in the ",e.jsx(n.code,{children:"temp/run_vscode"})," directory."]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["extension-packages.json",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["generated file by the command ",e.jsx(n.code,{children:"runVscode.combinePackageJSON"})]}),`
`,e.jsx(n.li,{children:"collection of the package.json files of all the installed extensions"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["vscode_extension_progress.json",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["generated whenever a command is executed by ",e.jsx(n.code,{children:"run_vscode.yaml"})," file"]}),`
`,e.jsx(n.li,{children:"contains the start and end time of the executed command"}),`
`,e.jsx(n.li,{children:"expected to be useful when programmatically controlling the extension behaviors"}),`
`]}),`
`]}),`
`]})]})}function r(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(c,{...s})}):c(s)}export{r as default};
