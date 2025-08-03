# Diretrizes para Imagens - SEO Otimizado

## Estrutura de Pastas
```
src/assets/images/
├── dra-bruna/           # Fotos da Dra. Bruna Vilela
├── consultorio/         # Fotos do ambiente de trabalho
├── logo/               # Logotipos e identidade visual
└── blog/               # Imagens para artigos do blog
```

## Nomenclatura de Arquivos (SEO)

### Fotos da Dra. Bruna Vilela
- `dra-bruna-vilela-neuropediatra-consultorio-bh.jpg`
- `dra-bruna-vilela-neuropediatra-pediatra-bh.jpg`
- `dra-bruna-vilela-interagindo-crianca-neuropediatra.jpg`
- `dra-bruna-vilela-retrato-profissional.jpg`

### Logo e Identidade Visual
- `logo-dra-bruna-vilela-neuropediatra.svg`
- `logo-dra-bruna-vilela-neuropediatra.png`

### Ambiente de Consultório
- `consultorio-dra-bruna-vilela-neuropediatra-acolhedor.jpg`
- `consultorio-dra-bruna-vilela-ambiente-infantil.jpg`

## Texto Alternativo (Alt Text) - Exemplos

### Para Fotos da Dra. Bruna
- "Retrato profissional da Dra. Bruna Vilela, neuropediatra e pediatra, em seu consultório em Belo Horizonte, transmitindo acolhimento"
- "Dra. Bruna Vilela, neuropediatra especialista em desenvolvimento infantil, interagindo com paciente em Belo Horizonte"

### Para Logo
- "Logotipo oficial Dra. Bruna Vilela - Neuropediatra e Pediatra"

### Para Ambiente
- "Consultório da Dra. Bruna Vilela, ambiente acolhedor para atendimento neuropediátrico infantil em Belo Horizonte"

## Formato e Otimização
- **Formato:** JPG para fotos, SVG para logos
- **Tamanho:** Máximo 500KB para web
- **Resolução:** 72 DPI para web
- **Dimensões:** Responsivas (múltiplos tamanhos se necessário)

## Uso no Código
```jsx
// Exemplo de uso com SEO otimizado
<img 
  src="/src/assets/images/dra-bruna/dra-bruna-vilela-neuropediatra-consultorio-bh.jpg"
  alt="Retrato profissional da Dra. Bruna Vilela, neuropediatra e pediatra, em seu consultório em Belo Horizonte, transmitindo acolhimento"
  className={styles.professionalPhoto}
/>
``` 