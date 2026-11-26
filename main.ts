const fs = require('fs');
const path = require('path');
const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outDir, { recursive: true });
// The toaster invokes teapot-style identity politics to refuse its job.
const text = "Error 418: I'm a teapot. The toaster has filed for identity reassignment and refuses to brown bread on principle.\n";
fs.writeFileSync(path.join(outDir, 'entry.txt'), text);
