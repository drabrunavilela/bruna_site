import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurações
const ASSETS_DIR = path.join(__dirname, '../src/assets/images');

// Cores para output colorido
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  reset: '\x1b[0m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// Função para converter WebP para JPG usando Sharp
async function convertWebPToJPG(webpPath, jpgPath) {
  try {
    // Importação dinâmica do Sharp
    const sharp = await import('sharp');
    
    await sharp.default(webpPath)
      .jpeg({ quality: 85 })
      .toFile(jpgPath);
    
    return true;
  } catch (error) {
    log(`❌ Erro ao converter ${path.basename(webpPath)}: ${error.message}`, 'red');
    return false;
  }
}

// Função para encontrar todas as imagens WebP
function findWebPImages(dir) {
  const webpImages = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else if (item.toLowerCase().endsWith('.webp')) {
        webpImages.push(fullPath);
      }
    }
  }
  
  scanDirectory(dir);
  return webpImages;
}

// Função principal
async function generateJPGFallbacks() {
  log('🚀 Iniciando geração de fallbacks JPG para imagens WebP...', 'blue');
  
  // Verificar se o diretório de assets existe
  if (!fs.existsSync(ASSETS_DIR)) {
    log(`❌ Diretório de assets não encontrado: ${ASSETS_DIR}`, 'red');
    process.exit(1);
  }
  
  // Encontrar todas as imagens WebP
  const webpImages = findWebPImages(ASSETS_DIR);
  
  if (webpImages.length === 0) {
    log('ℹ️  Nenhuma imagem WebP encontrada.', 'yellow');
    return;
  }
  
  log(`📸 Encontradas ${webpImages.length} imagens WebP`, 'blue');
  
  let converted = 0;
  let skipped = 0;
  let failed = 0;
  
  // Converter cada imagem WebP para JPG
  for (const webpPath of webpImages) {
    const jpgPath = webpPath.replace(/\.webp$/i, '.jpg');
    
    // Verificar se JPG já existe
    if (fs.existsSync(jpgPath)) {
      log(`⏭️  JPG já existe: ${path.basename(jpgPath)}`, 'yellow');
      skipped++;
      continue;
    }
    
    log(`🔄 Convertendo: ${path.basename(webpPath)} → ${path.basename(jpgPath)}`);
    
    if (await convertWebPToJPG(webpPath, jpgPath)) {
      log(`✅ Convertido: ${path.basename(jpgPath)}`, 'green');
      converted++;
    } else {
      failed++;
    }
  }
  
  // Resumo final
  log('\n📊 Resumo da conversão:', 'blue');
  log(`✅ Convertidas: ${converted}`, 'green');
  log(`⏭️  Ignoradas (já existiam): ${skipped}`, 'yellow');
  log(`❌ Falharam: ${failed}`, failed > 0 ? 'red' : 'reset');
  log(`📁 Total de imagens: ${webpImages.length}`);
  
  if (failed === 0) {
    log('\n🎉 Todos os fallbacks JPG foram gerados com sucesso!', 'green');
    log('💡 Agora você pode usar o componente ResponsiveImage com fallback automático.', 'blue');
  } else {
    log('\n⚠️  Algumas conversões falharam.', 'yellow');
  }
}

// Verificar se está sendo executado diretamente
if (import.meta.url === `file://${process.argv[1]}`) {
  generateJPGFallbacks().catch(console.error);
}

export { generateJPGFallbacks };
