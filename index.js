#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const file = process.argv[2];

if (!file) {
  console.log("Penggunaan: batakscript <namafile.btc>");
  process.exit(1);
}

const transpile = (code) => {
  return code
    .replace(/\bbahen\b/g, 'let')
    .replace(/\bpaboa\b/g, 'console.log')
    .replace(/\bmolo_da\b/g, 'else if')
    .replace(/\bmolo\b/g, 'if')
    .replace(/\basing\b/g, 'else')
    .replace(/\bulahi\b/g, 'while')
    .replace(/\bmula\b/g, 'function')
    .replace(/\bboan\b/g, 'return')
    .replace(/\bdohot\b/g, '&&')
    .replace(/\bmanang\b/g, '||')
    .replace(/\bndang\b/g, '!')
    .replace(/\btrue\b/g, 'true')
    .replace(/\bfalse\b/g, 'false');
};

try {
  const filePath = path.resolve(process.cwd(), file);
  const code = fs.readFileSync(filePath, 'utf-8');
  const jsCode = transpile(code);
  
  // Eksekusi kode hasil transpiler
  eval(jsCode);
} catch (err) {
  console.error("Error Batakscript:", err.message);
}
