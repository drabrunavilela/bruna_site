import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurações
const ASSETS_DIR = path.join(__dirname, '../src/assets/images');
const QUALITY = 85;
const SIZES = [
  { width: 480, suffix: '-sm' },   // Mobile
  { width: 768, suffix: '-md' },   // Tablet
  { width: 1200, suffix: '-lg' },  // Desktop
  { width: 1920, suffix: '-xl' }   // Large Desktop
];

// Cores para output colorido
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  magenta: '\x1b[35m',
  reset: '\x1b[0m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// Função para gerar versão responsiva usando Sharp
async function generateResponsiveVersion(inputPath, outputPath, width) {
  try {
    const sharp = await import('sharp');
    
    await sharp.default(inputPath)
      .resize(width, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ quality: QUALITY })
      .toFile(outputPath);
    
    return true;
  } catch (error) {
    log(`❌ Erro ao redimensionar ${path.basename(inputPath)} para ${width}px: ${error.message}`, 'red');
    return false;
  }
}

// Função para gerar versão JPG responsiva
async function generateResponsiveJPG(inputPath, outputPath, width) {
  try {
    const sharp = await import('sharp');
    
    await sharp.default(inputPath)
      .resize(width, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .jpeg({ quality: QUALITY })
      .toFile(outputPath);
    
    return true;
  } catch (error) {
    log(`❌ Erro ao gerar JPG ${path.basename(inputPath)} para ${width}px: ${error.message}`, 'red');
    return false;
  }
}

// Função para obter dimensões da imagem original
async function getImageDimensions(imagePath) {
  try {
    const sharp = await import('sharp');
    const metadata = await sharp.default(imagePath).metadata();
    return { width: metadata.width, height: metadata.height };
  } catch (error) {
    log(`❌ Erro ao obter dimensões de ${path.basename(imagePath)}: ${error.message}`, 'red');
    return null;
  }
}

// Função para encontrar todas as imagens WebP originais
function findOriginalWebPImages(dir) {
  const webpImages = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else if (item.toLowerCase().endsWith('.webp') && !item.includes('-sm') && !item.includes('-md') && !item.includes('-lg') && !item.includes('-xl')) {
        webpImages.push(fullPath);
      }
    }
  }
  
  scanDirectory(dir);
  return webpImages;
}

// Função principal
async function generateResponsiveImages() {
  log('🚀 Iniciando geração de imagens responsivas...', 'blue');
  log('📐 Tamanhos a serem gerados: 480px, 768px, 1200px, 1920px', 'cyan');
  
  // Verificar se o diretório de assets existe
  if (!fs.existsSync(ASSETS_DIR)) {
    log(`❌ Diretório de assets não encontrado: ${ASSETS_DIR}`, 'red');
    process.exit(1);
  }
  
  // Encontrar todas as imagens WebP originais
  const originalImages = findOriginalWebPImages(ASSETS_DIR);
  
  if (originalImages.length === 0) {
    log('ℹ️  Nenhuma imagem WebP original encontrada.', 'yellow');
    return;
  }
  
  log(`📸 Encontradas ${originalImages.length} imagens originais para processamento`, 'blue');
  
  let totalGenerated = 0;
  let totalSkipped = 0;
  let totalFailed = 0;
  
  // Processar cada imagem original
  for (const imagePath of originalImages) {
    const fileName = path.basename(imagePath, '.webp');
    const dir = path.dirname(imagePath);
    
    log(`\n🔄 Processando: ${path.basename(imagePath)}`, 'magenta');
    
    // Obter dimensões da imagem original
    const dimensions = await getImageDimensions(imagePath);
    if (!dimensions) {
      totalFailed++;
      continue;
    }
    
    log(`📏 Dimensões originais: ${dimensions.width}x${dimensions.height}px`, 'cyan');
    
    // Gerar cada tamanho responsivo
    for (const size of SIZES) {
      // Pular se a imagem original for menor que o tamanho desejado
      if (dimensions.width <= size.width) {
        log(`⏭️  Pulando ${size.width}px (original é ${dimensions.width}px)`, 'yellow');
        totalSkipped++;
        continue;
      }
      
      // Gerar versão WebP
      const webpOutputPath = path.join(dir, `${fileName}${size.suffix}.webp`);
      if (fs.existsSync(webpOutputPath)) {
        log(`⏭️  WebP ${size.width}px já existe`, 'yellow');
        totalSkipped++;
      } else {
        log(`🔄 Gerando WebP ${size.width}px...`);
        if (await generateResponsiveVersion(imagePath, webpOutputPath, size.width)) {
          log(`✅ WebP ${size.width}px gerado`, 'green');
          totalGenerated++;
        } else {
          totalFailed++;
        }
      }
      
      // Gerar versão JPG correspondente
      const jpgOutputPath = path.join(dir, `${fileName}${size.suffix}.jpg`);
      if (fs.existsSync(jpgOutputPath)) {
        log(`⏭️  JPG ${size.width}px já existe`, 'yellow');
        totalSkipped++;
      } else {
        log(`🔄 Gerando JPG ${size.width}px...`);
        if (await generateResponsiveJPG(imagePath, jpgOutputPath, size.width)) {
          log(`✅ JPG ${size.width}px gerado`, 'green');
          totalGenerated++;
        } else {
          totalFailed++;
        }
      }
    }
  }
  
  // Resumo final
  log('\n📊 Resumo da geração de imagens responsivas:', 'blue');
  log(`📸 Imagens originais processadas: ${originalImages.length}`, 'cyan');
  log(`✅ Versões responsivas geradas: ${totalGenerated}`, 'green');
  log(`⏭️  Arquivos ignorados (já existiam): ${totalSkipped}`, 'yellow');
  log(`❌ Falhas na geração: ${totalFailed}`, totalFailed > 0 ? 'red' : 'reset');
  
  if (totalFailed === 0) {
    log('\n🎉 Todas as imagens responsivas foram geradas com sucesso!', 'green');
    log('💡 Agora você pode usar srcset no componente ResponsiveImage.', 'blue');
    log('📱 Tamanhos disponíveis: -sm (480px), -md (768px), -lg (1200px), -xl (1920px)', 'cyan');
  } else {
    log('\n⚠️  Algumas gerações falharam.', 'yellow');
  }
  
  log('\n🔧 Próximo passo: Atualizar o componente ResponsiveImage para usar srcset', 'magenta');
}

// Verificar se está sendo executado diretamente
if (import.meta.url === `file://${process.argv[1]}`) {
  generateResponsiveImages().catch(console.error);
}

export { generateResponsiveImages };
