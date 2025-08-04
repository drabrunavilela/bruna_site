import fs from 'fs';
import path from 'path';

// Lista de arquivos para corrigir
const filesToFix = [
  {
    file: 'src/pages/ServicosPage/TdahPage.tsx',
    imports: ['import fotoConsultorio04 from "../../assets/images/bruna/dra-bruna-vilela-consultorio-04.webp";'],
    replacements: [
      { from: 'src="/src/assets/images/bruna/dra-bruna-vilela-consultorio-04.webp"', to: 'src={fotoConsultorio04}' }
    ]
  },
  {
    file: 'src/pages/ServicosPage/TeaPage.tsx',
    imports: ['import fotoConsultorio04 from "../../assets/images/bruna/dra-bruna-vilela-consultorio-04.webp";'],
    replacements: [
      { from: 'src="/src/assets/images/bruna/dra-bruna-vilela-consultorio-04.webp"', to: 'src={fotoConsultorio04}' }
    ]
  },
  {
    file: 'src/pages/ServicosPage/AtrasosPage.tsx',
    imports: ['import fotoConsultorio04 from "../../assets/images/bruna/dra-bruna-vilela-consultorio-04.webp";'],
    replacements: [
      { from: 'src="/src/assets/images/bruna/dra-bruna-vilela-consultorio-04.webp"', to: 'src={fotoConsultorio04}' }
    ]
  },
  {
    file: 'src/pages/ServicosPage/CefaleiasPage.tsx',
    imports: ['import fotoConsultorio03 from "../../assets/images/bruna/dra-bruna-vilela-consultorio-03.webp";'],
    replacements: [
      { from: 'src="/src/assets/images/bruna/dra-bruna-vilela-consultorio-03.webp"', to: 'src={fotoConsultorio03}' }
    ]
  },
  {
    file: 'src/pages/ServicosPage/EpilepsiaPage.tsx',
    imports: ['import fotoConsultorio03 from "../../assets/images/bruna/dra-bruna-vilela-consultorio-03.webp";'],
    replacements: [
      { from: 'src="/src/assets/images/bruna/dra-bruna-vilela-consultorio-03.webp"', to: 'src={fotoConsultorio03}' }
    ]
  },
  {
    file: 'src/pages/ServicosPage/SegundaOpiniaoPage.tsx',
    imports: ['import fotoConsultorio04 from "../../assets/images/bruna/dra-bruna-vilela-consultorio-04.webp";'],
    replacements: [
      { from: 'src="/src/assets/images/bruna/dra-bruna-vilela-consultorio-04.webp"', to: 'src={fotoConsultorio04}' }
    ]
  },
  {
    file: 'src/pages/GlossarioPage/GlossarioPage.tsx',
    imports: ['import fotoConsultorio03 from "../../assets/images/bruna/dra-bruna-vilela-consultorio-03.webp";'],
    replacements: [
      { from: 'src="/src/assets/images/bruna/dra-bruna-vilela-consultorio-03.webp"', to: 'src={fotoConsultorio03}' }
    ]
  },
  {
    file: 'src/pages/ContatoPage/ContatoPage.tsx',
    imports: [
      'import fotoNeuropediatra12 from "../../assets/images/bruna/dra-bruna-vilela-neuropediatra-12.webp";',
      'import logoInstagram from "../../assets/images/Icon/dra-bruna-vilela-neuropediatra-logo-Instagram.png";',
      'import logoFacebook from "../../assets/images/Icon/dra-bruna-vilela-neuropediatra-logo-Facebook.png";',
      'import logoDoctoralia from "../../assets/images/Icon/dra-bruna-vilela-neuropediatra-logo-Doctoralia.png";'
    ],
    replacements: [
      { from: 'src="/src/assets/images/bruna/dra-bruna-vilela-neuropediatra-12.webp"', to: 'src={fotoNeuropediatra12}' },
      { from: 'src="/src/assets/images/Icon/dra-bruna-vilela-neuropediatra-logo-Instagram.png"', to: 'src={logoInstagram}' },
      { from: 'src="/src/assets/images/Icon/dra-bruna-vilela-neuropediatra-logo-Facebook.png"', to: 'src={logoFacebook}' },
      { from: 'src="/src/assets/images/Icon/dra-bruna-vilela-neuropediatra-logo-Doctoralia.png"', to: 'src={logoDoctoralia}' }
    ]
  }
];

// Função para corrigir um arquivo
function fixFile(filePath, imports, replacements) {
  if (!fs.existsSync(filePath)) {
    console.log(`❌ Arquivo não encontrado: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  
  // Adicionar imports
  const importIndex = content.indexOf('import styles from');
  if (importIndex !== -1) {
    const importLine = content.substring(importIndex, content.indexOf('\n', importIndex) + 1);
    const newImports = imports.join('\n') + '\n\n';
    content = content.replace(importLine, importLine + newImports);
  }
  
  // Fazer replacements
  replacements.forEach(replacement => {
    content = content.replace(new RegExp(replacement.from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), replacement.to);
  });
  
  fs.writeFileSync(filePath, content);
  console.log(`✅ Corrigido: ${filePath}`);
}

// Executar correções
console.log('🔧 Corrigindo imagens em todas as páginas...');
filesToFix.forEach(({ file, imports, replacements }) => {
  fixFile(file, imports, replacements);
});
console.log('🎉 Todas as imagens foram corrigidas!'); 