const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const tailwindConfigPath = path.join(__dirname, 'tailwind.config.ts');

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css')) {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });
  return arrayOfFiles;
}

const allFiles = getAllFiles(srcDir);
if (fs.existsSync(tailwindConfigPath)) {
  allFiles.push(tailwindConfigPath);
}

let totalReplaced = 0;

for (const filePath of allFiles) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  if (content.toLowerCase().includes('nakhrali')) {
    let updatedContent = content
      .replace(/Nakhrali/g, 'Rajgharana')
      .replace(/nakhrali/g, 'rajgharana')
      .replace(/NAKHRALI/g, 'RAJGHARANA');
      
    fs.writeFileSync(filePath, updatedContent);
    totalReplaced++;
    console.log(`Updated ${path.basename(filePath)}`);
  }
}

console.log(`Total files updated: ${totalReplaced}`);
