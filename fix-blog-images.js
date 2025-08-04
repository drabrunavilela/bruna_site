import fs from 'fs';

const filePath = 'src/pages/BlogPage/BlogPage.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Substituir todas as imagens
const replacements = [
  { from: 'src="/src/assets/images/bruna/dra-bruna-vilela-neuropediatra-18.webp"', to: 'src={fotoNeuropediatra18}' },
  { from: 'src="/src/assets/images/bruna/dra-bruna-vilela-consultorio-04.webp"', to: 'src={fotoConsultorio04}' },
  { from: 'src="/src/assets/images/bruna/dra-bruna-vilela-consultorio-03.webp"', to: 'src={fotoConsultorio03}' },
  { from: 'src="/src/assets/images/bruna/dra-bruna-vilela-neuropediatra-17.webp"', to: 'src={fotoNeuropediatra17}' },
  { from: 'src="/src/assets/images/bruna/dra-bruna-vilela-acolhedora-10.webp"', to: 'src={fotoAcolhedora10}' },
  { from: 'src="/src/assets/images/bruna/dra-bruna-vilela-sorrindo-02.webp"', to: 'src={fotoSorrindo02}' }
];

replacements.forEach(replacement => {
  content = content.replace(new RegExp(replacement.from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), replacement.to);
});

fs.writeFileSync(filePath, content);
console.log('✅ BlogPage corrigida!'); 