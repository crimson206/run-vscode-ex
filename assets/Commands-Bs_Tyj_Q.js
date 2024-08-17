import{j as n}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as c}from"./index-CcnH5Kt0.js";import"./index-RYns6xqu.js";function s(o){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...c(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"commands",children:"Commands"}),`
`,n.jsxs(e.h2,{id:"from-packagejson",children:["From ",n.jsx(e.code,{children:"package.json"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`"commands": [
  {
    "command": "runVscode.combinePackageJSON",
    "title": "Run Code Extension: Combine PackageJSON"
  },
  {
    "command": "runVscode.forceActivation",
    "title": "Run Code Extension: Force Activation"
  }
],
`})}),`
`,n.jsx(e.h2,{id:"details",children:"Details"}),`
`,n.jsx(e.h3,{id:"combinepackagejson",children:"combinePackageJSON"}),`
`,n.jsxs(e.p,{children:["It generates a json file called ",n.jsx(e.code,{children:"extension-packages.json"})," in the ",n.jsx(e.code,{children:"outputDir"}),`.
The skeleton is below:`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`{
  "extension1_name": {
    // extension1's package.json
  },
  "extension2_name": {
    // extension2's package.json
  },
  // ...
}
`})}),`
`,n.jsx(e.h3,{id:"forceactivation",children:"forceActivation"}),`
`,n.jsxs(e.p,{children:["This command forces this extension activated. If it doesn't react to ",n.jsx(e.code,{children:"run_vscode.yaml"})," file, try this command."]})]})}function d(o={}){const{wrapper:e}={...c(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(s,{...o})}):s(o)}export{d as default};
