import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Função para converter imagem para WebP usando imagemagick
function convertToWebP(inputPath, outputPath) {
  try {
    execSync(`convert "${inputPath}" -quality 85 "${outputPath}"`);
    console.log(`Convertido: ${inputPath} -> ${outputPath}`);
  } catch (error) {
    console.error(`Erro ao converter ${inputPath}:`, error.message);
  }
}

// Função para renomear arquivos
function renameForSEO(filename, category) {
  const baseName = path.parse(filename).name;
  
  if (category === 'bruna') {
    // Para fotos da Dra. Bruna
    const number = baseName.match(/\d+/)?.[0] || '01';
    return `dra-bruna-vilela-neuropediatra-${number}.webp`;
  } else if (category === 'identidade') {
    // Para elementos da identidade visual
    const number = baseName.match(/\d+/)?.[0] || '01';
    return `elementos-identidade-visual-${number}.webp`;
  }
  
  return filename.replace(/\.[^/.]+$/, '.webp');
}

// Processar imagens da pasta Bruna
function processBrunaImages() {
  const brunaDir = path.join(__dirname, '../src/assets/images/Bruna');
  const outputDir = path.join(__dirname, '../src/assets/images/bruna');
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  const files = fs.readdirSync(brunaDir);
  
  files.forEach(file => {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const inputPath = path.join(brunaDir, file);
      const newName = renameForSEO(file, 'bruna');
      const outputPath = path.join(outputDir, newName);
      
      if (!fs.existsSync(outputPath)) {
        convertToWebP(inputPath, outputPath);
      } else {
        console.log(`Arquivo já existe: ${outputPath}`);
      }
    }
  });
}

// Processar imagens da pasta Identidade visual
function processIdentidadeImages() {
  const identidadeDir = path.join(__dirname, '../src/assets/images/Identidade visual');
  const outputDir = path.join(__dirname, '../src/assets/images/identidade-visual');
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  const files = fs.readdirSync(identidadeDir);
  
  files.forEach(file => {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const inputPath = path.join(identidadeDir, file);
      const newName = renameForSEO(file, 'identidade');
      const outputPath = path.join(outputDir, newName);
      
      if (!fs.existsSync(outputPath)) {
        convertToWebP(inputPath, outputPath);
      } else {
        console.log(`Arquivo já existe: ${outputPath}`);
      }
    }
  });
}

// Executar conversões
console.log('Iniciando conversão de imagens...');
processBrunaImages();
processIdentidadeImages();
console.log('Conversão concluída!'); 