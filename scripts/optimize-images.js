import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import fs from 'fs';
import path from 'path';

// Função para converter e renomear imagens
async function optimizeImages() {
  const sourceDir = 'src/assets/images';
  const brunaDir = path.join(sourceDir, 'Bruna');
  const identidadeDir = path.join(sourceDir, 'Identidade visual');
  
  // Criar diretórios de destino se não existirem
  const brunaDestDir = path.join(sourceDir, 'bruna');
  const identidadeDestDir = path.join(sourceDir, 'identidade-visual');
  
  if (!fs.existsSync(brunaDestDir)) {
    fs.mkdirSync(brunaDestDir, { recursive: true });
  }
  if (!fs.existsSync(identidadeDestDir)) {
    fs.mkdirSync(identidadeDestDir, { recursive: true });
  }

  // Processar fotos da Dra. Bruna
  console.log('🖼️  Processando fotos da Dra. Bruna...');
  
  const brunaFiles = fs.readdirSync(brunaDir).filter(file => 
    file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.png')
  );

  for (let i = 0; i < brunaFiles.length; i++) {
    const file = brunaFiles[i];
    const filePath = path.join(brunaDir, file);
    const fileNumber = (i + 1).toString().padStart(2, '0');
    
    // Determinar o tipo de foto baseado no nome ou número
    let photoType = 'sorrindo';
    if (fileNumber === '01' || fileNumber === '02') photoType = 'sorrindo';
    else if (fileNumber === '03' || fileNumber === '04') photoType = 'consultorio';
    else if (fileNumber === '05' || fileNumber === '06') photoType = 'atenciosa';
    else if (fileNumber === '07' || fileNumber === '08') photoType = 'profissional';
    else if (fileNumber === '09' || fileNumber === '10') photoType = 'acolhedora';
    else photoType = 'neuropediatra';

    const newFileName = `dra-bruna-vilela-${photoType}-${fileNumber}.webp`;
    const destPath = path.join(brunaDestDir, newFileName);

    try {
      const files = await imagemin([filePath], {
        destination: brunaDestDir,
        plugins: [
          imageminWebp({
            quality: 85,
            method: 6
          })
        ]
      });

      // Renomear o arquivo convertido
      if (files.length > 0) {
        const convertedFile = files[0];
        fs.renameSync(convertedFile.destinationPath, destPath);
        console.log(`✅ Convertido: ${file} → ${newFileName}`);
      }
    } catch (error) {
      console.error(`❌ Erro ao processar ${file}:`, error.message);
    }
  }

  // Processar logos da identidade visual
  console.log('🎨 Processando logos da identidade visual...');
  
  const identidadeFiles = fs.readdirSync(identidadeDir).filter(file => 
    file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.png')
  );

  // Mapear elementos específicos da identidade visual
  const logoMapping = {
    'elementos_id-01': 'logo-dra-bruna-vilela-principal',
    'elementos_id-02': 'logo-dra-bruna-vilela-nome-completo',
    'elementos_id-03': 'logo-dra-bruna-vilela-icone-favicon',
    'elementos_id-04': 'logo-dra-bruna-vilela-horizontal',
    'elementos_id-05': 'logo-dra-bruna-vilela-vertical',
    'elementos_id-06': 'logo-dra-bruna-vilela-simples',
    'elementos_id-07': 'logo-dra-bruna-vilela-completa',
    'elementos_id-08': 'logo-dra-bruna-vilela-minimalista',
    'elementos_id-09': 'logo-dra-bruna-vilela-detalhada',
    'elementos_id-10': 'logo-dra-bruna-vilela-moderna',
    'elementos_id-11': 'logo-dra-bruna-vilela-classica',
    'elementos_id-12': 'logo-dra-bruna-vilela-elegante',
    'elementos_id-13': 'logo-dra-bruna-vilela-refinada',
    'elementos_id-14': 'logo-dra-bruna-vilela-sofisticada',
    'elementos_id-15': 'logo-dra-bruna-vilela-profissional',
    'elementos_id-16': 'logo-dra-bruna-vilela-corporativa'
  };

  for (const file of identidadeFiles) {
    const filePath = path.join(identidadeDir, file);
    const baseName = path.parse(file).name;
    
    // Determinar o nome do arquivo baseado no mapeamento
    let newFileName = 'logo-dra-bruna-vilela-generico.webp';
    
    for (const [pattern, name] of Object.entries(logoMapping)) {
      if (baseName.includes(pattern)) {
        newFileName = `${name}.webp`;
        break;
      }
    }

    const destPath = path.join(identidadeDestDir, newFileName);

    try {
      const files = await imagemin([filePath], {
        destination: identidadeDestDir,
        plugins: [
          imageminWebp({
            quality: 90,
            method: 6
          })
        ]
      });

      // Renomear o arquivo convertido
      if (files.length > 0) {
        const convertedFile = files[0];
        fs.renameSync(convertedFile.destinationPath, destPath);
        console.log(`✅ Convertido: ${file} → ${newFileName}`);
      }
    } catch (error) {
      console.error(`❌ Erro ao processar ${file}:`, error.message);
    }
  }

  console.log('🎉 Otimização de imagens concluída!');
  console.log('📁 Imagens otimizadas salvas em:');
  console.log(`   - Fotos da Dra. Bruna: ${brunaDestDir}`);
  console.log(`   - Logos: ${identidadeDestDir}`);
}

// Executar a otimização
optimizeImages().catch(console.error); 