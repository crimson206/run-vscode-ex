import{j as e}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as s}from"./index-CcnH5Kt0.js";import"./index-RYns6xqu.js";function o(t){const n={code:"code",h2:"h2",h3:"h3",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"setting",children:"Setting"}),`
`,e.jsxs(n.h3,{id:"from-packagejson",children:["From ",e.jsx(n.code,{children:"package.json"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`"configuration": {
    "type": "object",
    "title": "Output path of the extensions' Info.",
    "properties": {
    "runVscode.outputDir": {
        "type": "string",
        "default": "temp/run_vscode",
        "description": "The path where the package.json files of extensions will be saved."
    }
    }
}
`})}),`
`,e.jsxs(n.h3,{id:"in-vscodesettingsjson",children:["In ",e.jsx(n.code,{children:".vscode/settings.json"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`"runVscode.outputDir": "temp/run_vscode" // replace it with your preferred one
`})})]})}function d(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{d as default};
