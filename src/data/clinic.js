/**
 * ============================================================
 *  DADOS DA CLÍNICA — EDITE TUDO AQUI
 * ============================================================
 *  Todos os textos, contatos, números e imagens do site saem
 *  deste arquivo. Os valores entre [colchetes] são PLACEHOLDERS
 *  e devem ser substituídos pelos dados reais da clínica.
 *
 *  Imagens: ficam em /public/images. Cada foto tem duas
 *  versões (-720 e -1400) para carregamento responsivo.
 *  Para trocar uma foto, adicione os dois arquivos e altere
 *  o nome base (ex.: 'consultorio-amplo').
 * ============================================================
 */

export const clinic = {
  name: '[NOME]',
  fullName: 'CLÍNICA [NOME]',
  tagline: 'Odontologia, tecnologia e cuidado para o seu sorriso.',
  // Responsável técnico — preencha com os dados reais (exigido pelo CFO/CRO)
  technicalResponsible: 'Responsável técnico: Dr(a). [Nome] — CRO-[UF] [número]',
};

export const contact = {
  // Somente números, com DDI + DDD. Ex.: 5598999999999
  whatsappNumber: '5500000000000',
  whatsappMessage: 'Olá! Gostaria de agendar uma avaliação.',
  whatsappDisplay: '(00) 00000-0000',
  phone: '(00) 0000-0000',
  phoneHref: 'tel:+550000000000',
  email: 'contato@[suaclinica].com.br',
  address: '[Rua Exemplo, 000 — Bairro]',
  city: '[Cidade — UF, CEP 00000-000]',
  hours: [
    { days: 'Segunda a sexta', time: '[08h às 18h]' },
    { days: 'Sábado', time: '[08h às 12h]' },
  ],
  // Cole aqui o link "Incorporar mapa" do Google Maps (src do iframe).
  // Enquanto estiver vazio, o site mostra um placeholder.
  mapsEmbedUrl: '',
  instagram: '[@suaclinica]',
};

export const whatsappLink = () =>
  `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.whatsappMessage)}`;

export const nav = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'tratamentos', label: 'Tratamentos' },
  { id: 'estrutura', label: 'Estrutura' },
  { id: 'resultados', label: 'Resultados' },
  { id: 'depoimentos', label: 'Depoimentos' },
  { id: 'contato', label: 'Contato' },
];

/* ---------- Imagens ---------- */
export const img = (base) => ({
  src: `/images/${base}-1400.webp`,
  srcSet: `/images/${base}-720.webp 720w, /images/${base}-1400.webp 1400w`,
});

export const hero = {
  image: 'tratamento-equipe',
  imagePosition: '38% 50%',
  alt: 'Dentista realizando atendimento em paciente em consultório moderno',
};

/* ---------- Jornada do atendimento ---------- */
export const journey = [
  {
    step: '01',
    title: 'Consulta',
    text: 'Escutamos suas queixas, histórico e expectativas antes de qualquer procedimento.',
    image: 'consultorio-amplo',
    position: '50% 55%',
    alt: 'Dentista conversando com paciente na cadeira odontológica',
  },
  {
    step: '02',
    title: 'Avaliação',
    text: 'Exame clínico detalhado e definição de cor, forma e necessidades de cada dente.',
    image: 'avaliacao-cor',
    position: '50% 40%',
    alt: 'Dentista usando escala de cores ao lado do sorriso da paciente',
  },
  {
    step: '03',
    title: 'Tratamento',
    text: 'Procedimentos conduzidos com técnica, conforto e protocolos rigorosos de biossegurança.',
    image: 'tratamento-equipe',
    position: '45% 50%',
    alt: 'Equipe de dentistas realizando procedimento em paciente',
  },
  {
    step: '04',
    title: 'Acompanhamento',
    text: 'Retornos programados para manter a saúde e a estética do seu sorriso ao longo do tempo.',
    image: 'dentista-retrato',
    position: '50% 30%',
    alt: 'Dentista sorrindo em seu consultório',
  },
];

/* ---------- Tratamentos ----------
   OBS.: as fotos enviadas cobrem 6 cenas; alguns tratamentos
   reutilizam fotos com outro enquadramento. Substitua por fotos
   específicas de cada tratamento quando disponíveis.          */
export const treatments = [
  {
    title: 'Limpeza e prevenção',
    text: 'Profilaxia, remoção de tártaro e orientação de higiene para manter a saúde bucal em dia.',
    image: 'consultorio-amplo',
    position: '48% 50%',
  },
  {
    title: 'Clareamento dental',
    text: 'Técnicas de consultório e caseiras supervisionadas para um sorriso mais claro e natural.',
    image: 'avaliacao-cor',
    position: '50% 38%',
  },
  {
    title: 'Implantes dentários',
    text: 'Reposição de dentes perdidos com planejamento individual, função e estética.',
    image: 'atendimento-paciente',
    position: '50% 100%',
  },
  {
    title: 'Ortodontia',
    text: 'Aparelhos fixos e alinhadores para corrigir a posição dos dentes e a mordida.',
    image: 'tratamento-equipe',
    position: '70% 50%',
  },
  {
    title: 'Lentes de contato dental',
    text: 'Facetas finas que harmonizam cor, forma e proporção do sorriso.',
    image: 'avaliacao-cor',
    position: '50% 22%',
  },
  {
    title: 'Prótese dentária',
    text: 'Próteses fixas e removíveis para devolver mastigação, conforto e confiança.',
    image: 'cadeira-odontologica',
    position: '50% 60%',
  },
  {
    title: 'Endodontia',
    text: 'Tratamento de canal com precisão para preservar o dente natural e eliminar a dor.',
    image: 'tratamento-equipe',
    position: '30% 50%',
  },
  {
    title: 'Odontopediatria',
    text: 'Atendimento acolhedor para crianças, com foco em prevenção desde os primeiros dentes.',
    image: 'consultorio-amplo',
    position: '62% 70%',
  },
];

/* ---------- Sobre ---------- */
export const about = {
  image: 'dentista-retrato',
  imagePosition: '50% 25%',
  alt: 'Dentista em pé ao lado da cadeira odontológica',
  pillars: [
    { title: 'Experiência profissional', text: 'Equipe com formação contínua e atuação em diversas especialidades.' },
    { title: 'Tecnologia', text: 'Equipamentos modernos para diagnósticos e tratamentos mais precisos.' },
    { title: 'Atendimento personalizado', text: 'Plano de tratamento pensado para a sua rotina e os seus objetivos.' },
    { title: 'Ambiente confortável', text: 'Espaço acolhedor, silencioso e pensado para reduzir a ansiedade.' },
    { title: 'Segurança', text: 'Protocolos de esterilização e biossegurança em todas as etapas.' },
  ],
  // PLACEHOLDERS — substitua pelos números reais da clínica
  stats: [
    { value: 10, prefix: '+', suffix: '', label: 'anos de experiência' },
    { value: 5000, prefix: '+', suffix: '', label: 'pacientes atendidos' },
    { value: 8, prefix: '+', suffix: '', label: 'especialidades' },
  ],
  statsNote: 'Números ilustrativos — substituir pelos dados reais da clínica.',
};

/* ---------- Estrutura (carrossel) ---------- */
export const structure = [
  { title: 'Consultório', text: 'Ambiente amplo, claro e organizado.', image: 'consultorio-amplo', position: '50% 50%' },
  { title: 'Cadeira odontológica', text: 'Conforto e ergonomia durante o atendimento.', image: 'cadeira-odontologica', position: '50% 62%' },
  { title: 'Sala de atendimento', text: 'Atendimento a quatro mãos com equipe dedicada.', image: 'tratamento-equipe', position: '50% 45%' },
  { title: 'Equipamentos', text: 'Iluminação e instrumentos de última geração.', image: 'consultorio-amplo', position: '80% 30%' },
  // image: null mostra um placeholder — adicione a foto real da recepção
  { title: 'Recepção', text: 'Espaço de espera acolhedor e confortável.', image: null, position: '50% 50%' },
];

/* ---------- Resultados ----------
   Use SOMENTE fotos reais de pacientes, com autorização por
   escrito (termo de uso de imagem) e conforme as regras de
   publicidade do CFO. Preencha before/after com o nome base
   das imagens em /public/images.                              */
export const results = [
  { treatment: 'Clareamento dental', before: '', after: '' },
  { treatment: 'Lentes de contato dental', before: '', after: '' },
  { treatment: 'Ortodontia', before: '', after: '' },
];

/* ---------- Depoimentos ----------
   TEXTOS DE EXEMPLO — substitua por depoimentos reais e
   autorizados pelos pacientes.                                */
export const testimonials = [
  {
    text: '[Depoimento de exemplo] Fui muito bem recebida desde a recepção. A equipe explicou cada etapa do tratamento com calma e clareza.',
    name: '[Nome do paciente]',
    detail: '[Tratamento realizado]',
  },
  {
    text: '[Depoimento de exemplo] Sempre tive receio de dentista, mas o atendimento humanizado fez toda a diferença para mim.',
    name: '[Nome do paciente]',
    detail: '[Tratamento realizado]',
  },
  {
    text: '[Depoimento de exemplo] Ambiente moderno, pontualidade e muito cuidado em cada detalhe. Recomendo.',
    name: '[Nome do paciente]',
    detail: '[Tratamento realizado]',
  },
];
