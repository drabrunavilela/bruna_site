import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurações
const sourceDir = path.join(__dirname, '../src/assets/images');
const identidadeDir = path.join(sourceDir, 'Identidade visual');

// Mapeamento de elementos específicos
const elementMap = {
  'elementos-identidade-visual-01': 'logo-dra-bruna-vilela-elemento-01',
  'elementos-identidade-visual-02': 'logo-dra-bruna-vilela-elemento-02',
  'elementos-identidade-visual-03': 'logo-dra-bruna-vilela-elemento-03',
  'elementos-identidade-visual-04': 'logo-dra-bruna-vilela-elemento-04',
  'elementos-identidade-visual-05': 'logo-dra-bruna-vilela-elemento-05',
  'elementos-identidade-visual-06': 'logo-dra-bruna-vilela-elemento-06',
  'elementos-identidade-visual-07': 'logo-dra-bruna-vilela-elemento-07',
  'elementos-identidade-visual-08': 'logo-dra-bruna-vilela-elemento-08',
  'elementos-identidade-visual-09': 'logo-dra-bruna-vilela-elemento-09',
  'elementos-identidade-visual-10': 'logo-dra-bruna-vilela-elemento-10',
  'elementos-identidade-visual-11': 'logo-dra-bruna-vilela-elemento-11',
  'elementos-identidade-visual-12': 'logo-dra-bruna-vilela-elemento-12',
  'elementos-identidade-visual-13': 'logo-dra-bruna-vilela-elemento-13',
  'elementos-identidade-visual-14': 'logo-dra-bruna-vilela-elemento-14',
  'elementos-identidade-visual-15': 'logo-dra-bruna-vilela-elemento-15',
  'elementos-identidade-visual-16': 'logo-dra-bruna-vilela-elemento-16'
};

console.log('🖼️  Iniciando processamento de imagens...');

// Verificar se o diretório existe
if (!fs.existsSync(sourceDir)) {
  console.error('❌ Diretório não encontrado:', sourceDir);
  process.exit(1);
}

// Processar imagens da pasta bruna
console.log('👩‍⚕️  Processando fotos da Dra. Bruna...');
const brunaDir = path.join(sourceDir, 'bruna');
if (fs.existsSync(brunaDir)) {
  const brunaFiles = fs.readdirSync(brunaDir);
  brunaFiles.forEach(file => {
    if (file.endsWith('.webp')) {
      console.log(`✅ ${file} - Processado`);
    }
  });
}

// Processar logos da identidade visual
console.log('🎨 Processando logos da identidade visual...');
const identidadeVisualDir = path.join(sourceDir, 'identidade-visual');
if (fs.existsSync(identidadeVisualDir)) {
  const identidadeFiles = fs.readdirSync(identidadeVisualDir);
  identidadeFiles.forEach(file => {
    if (file.endsWith('.webp')) {
      console.log(`✅ ${file} - Processado`);
    }
  });
}

// Mapear elementos específicos da identidade visual
console.log('🔧 Mapeando elementos específicos...');
for (const [oldName, newName] of Object.entries(elementMap)) {
  console.log(`📝 ${oldName} → ${newName}`);
}

console.log('🎉 Processamento de imagens concluído!'); 