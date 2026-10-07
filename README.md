# Clínica [Nome] — Site odontológico

React + Vite + CSS puro (sem TypeScript, sem bibliotecas de UI).

## Rodar

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # gera a pasta dist/ para publicar
npm run preview  # testa o build
```

## Onde editar

**Tudo que é dado da clínica está em `src/data/clinic.js`:**

- nome, slogan e responsável técnico (CRO)
- WhatsApp (número + mensagem), telefone, e-mail, endereço, horários
- link do Google Maps (`contact.mapsEmbedUrl` — use o `src` do iframe em *Compartilhar → Incorporar um mapa*)
- textos dos tratamentos, pilares e números do "Sobre"
- depoimentos (atualmente **textos de exemplo**)
- fotos de antes/depois (atualmente **placeholders**)

Cores e fontes: variáveis no topo de `src/styles/global.css`.
SEO (título, descrição, Open Graph): `index.html`.
Política de privacidade (modelo): `public/politica-de-privacidade.html`.

## Imagens

Ficam em `public/images`, cada uma em duas larguras (`-720.webp` e `-1400.webp`).
Para trocar, gere os dois tamanhos e use o nome base em `clinic.js`.
O enquadramento de cada foto é ajustado pela propriedade `position` (CSS `object-position`).

Pendências de imagem:

- **Recepção** — não há foto; o carrossel mostra um placeholder.
- **Resultados (antes/depois)** — usar somente fotos reais de pacientes, com termo de autorização de uso de imagem e respeitando as normas de publicidade do CFO.
- Alguns tratamentos reutilizam a mesma foto com outro recorte; o ideal é ter uma foto por tratamento (principalmente Odontopediatria).
- A foto `dentista-retrato` mostra a logo de outra clínica no uniforme — substitua por uma foto da equipe real antes de publicar.
- A foto `atendimento-paciente` mostra o nome bordado do dentista fotografado — idem.

Créditos das fotos (Pexels / Unsplash): Tima Miroshnichenko, Özkan Güner, Emily Gaibor.

## Estrutura

```
src/
  data/clinic.js        ← dados editáveis
  hooks/useMotion.js    ← scroll reveal, parallax, contador
  components/           ← uma seção por arquivo
  styles/global.css
```

Acessibilidade: navegação por teclado, foco visível, skip link, `aria` no carrossel e menu, e respeito a `prefers-reduced-motion` (animações desligadas para quem prefere).
