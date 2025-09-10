import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Imagens críticas identificadas no PageSpeed
const criticalImages = [
  {
    input: 'public/images/identidade-visual/logo-dra-bruna-vilela-header.webp',
    output: 'public/images/identidade-visual/logo-dra-bruna-vilela-header-optimized.webp',
    width: 114,
    height: 45,
    quality: 85
  },
  {
    input: 'public/images/Icon/dra-bruna-vilela-neuropediatra-logo-Instagram.png',
    output: 'public/images/Icon/dra-bruna-vilela-neuropediatra-logo-Instagram.webp',
    width: 48,
    height: 48,
    quality: 85
  },
  {
    input: 'public/images/Icon/dra-bruna-vilela-neuropediatra-logo-Whatsapp.png',
    output: 'public/images/Icon/dra-bruna-vilela-neuropediatra-logo-Whatsapp.webp',
    width: 48,
    height: 48,
    quality: 85
  }
];

async function optimizeImage(imageConfig) {
  try {
    const inputPath = path.join(__dirname, '..', imageConfig.input);
    const outputPath = path.join(__dirname, '..', imageConfig.output);
    
    if (!fs.existsSync(inputPath)) {
      console.log(`❌ Arquivo não encontrado: ${imageConfig.input}`);
      return;
    }

    const originalSize = fs.statSync(inputPath).size;
    
    await sharp(inputPath)
      .resize(imageConfig.width, imageConfig.height, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .webp({ quality: imageConfig.quality })
      .toFile(outputPath);
    
    const optimizedSize = fs.statSync(outputPath).size;
    const savings = originalSize - optimizedSize;
    const savingsPercent = ((savings / originalSize) * 100).toFixed(1);
    
    console.log(`✅ ${imageConfig.input}`);
    console.log(`   Original: ${(originalSize / 1024).toFixed(1)} KiB`);
    console.log(`   Otimizado: ${(optimizedSize / 1024).toFixed(1)} KiB`);
    console.log(`   Economia: ${(savings / 1024).toFixed(1)} KiB (${savingsPercent}%)`);
    console.log('');
    
  } catch (error) {
    console.error(`❌ Erro ao otimizar ${imageConfig.input}:`, error.message);
  }
}

async function optimizeAllImages() {
  console.log('🚀 Otimizando imagens críticas...\n');
  
  for (const imageConfig of criticalImages) {
    await optimizeImage(imageConfig);
  }
  
  console.log('✅ Processamento concluído!');
}

optimizeAllImages().catch(console.error);




