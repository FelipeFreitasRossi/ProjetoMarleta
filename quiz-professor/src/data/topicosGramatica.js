export const topicosGramatica = [
  {
    slug: "adjuntos-adverbiais",
    titulo: "Adjuntos Adverbiais",
    explicacao: "Os adjuntos adverbiais são termos que modificam o verbo, indicando circunstâncias em que a ação ocorre. Podem expressar lugar, tempo, modo, intensidade, causa, finalidade, companhia, entre outros.",
    detalhes: `
      <p>Os adjuntos adverbiais respondem a perguntas como <strong>onde?</strong>, <strong>quando?</strong>, <strong>como?</strong>, <strong>quanto?</strong>, <strong>por quê?</strong>, <strong>para quê?</strong>, <strong>com quem?</strong>.</p>
      
      <h3>1. Adjunto Adverbial de Lugar</h3>
      <p>Indica o local da ação. Ex.: <em>Moro <strong>em São Paulo</strong>.</em></p>
      
      <h3>2. Adjunto Adverbial de Tempo</h3>
      <p>Indica o momento ou duração. Ex.: <em>Chegarei <strong>amanhã</strong>.</em></p>
      
      <h3>3. Adjunto Adverbial de Modo</h3>
      <p>Indica a maneira. Ex.: <em>Falou <strong>calmamente</strong>.</em></p>
      
      <h3>4. Adjunto Adverbial de Intensidade</h3>
      <p>Indica a intensidade. Ex.: <em>Estou <strong>muito</strong> cansado.</em></p>
      
      <h3>5. Adjunto Adverbial de Causa</h3>
      <p>Indica a causa. Ex.: <em>Morreu <strong>de fome</strong>.</em></p>
      
      <h3>6. Adjunto Adverbial de Finalidade</h3>
      <p>Indica o objetivo. Ex.: <em>Estudou <strong>para passar</strong>.</em></p>
      
      <h3>7. Adjunto Adverbial de Companhia</h3>
      <p>Indica companhia. Ex.: <em>Saiu <strong>com os amigos</strong>.</em></p>
    `,
    exemplos: [
      "Lugar: Ela mora <strong>em São Paulo</strong>.",
      "Tempo: Chegarei <strong>amanhã</strong>.",
      "Modo: Falou <strong>calmamente</strong>.",
      "Intensidade: Estou <strong>muito</strong> cansado.",
      "Causa: Morreu <strong>de fome</strong>.",
      "Finalidade: Estudou <strong>para passar</strong>.",
      "Companhia: Saiu <strong>com os amigos</strong>."
    ],
    exercicio: {
      pergunta: "Na frase 'O carro passou rapidamente pela rua', o adjunto adverbial de modo é:",
      alternativas: ["O carro", "passou", "rapidamente", "pela rua"],
      correta: 2
    }
  },
  {
    slug: "adjunto-adnominal",
    titulo: "Adjunto Adnominal",
    explicacao: "Termo que caracteriza ou determina um substantivo, podendo ser artigo, adjetivo, numeral, pronome ou locução adjetiva.",
    detalhes: `
      <p>O adjunto adnominal sempre se liga diretamente a um substantivo, concordando em gênero e número.</p>
      <p>Exemplos de adjuntos adnominais:</p>
      <ul>
        <li><strong>Artigo</strong>: <em>o</em> livro</li>
        <li><strong>Adjetivo</strong>: livro <em>interessante</em></li>
        <li><strong>Numeral</strong>: <em>dois</em> livros</li>
        <li><strong>Pronome</strong>: <em>meu</em> livro</li>
        <li><strong>Locução adjetiva</strong>: amor <em>de mãe</em></li>
      </ul>
    `,
    exemplos: [
      "<strong>A</strong> <strong>nova</strong> casa é grande.",
      "Comprei <strong>dois</strong> livros.",
      "Gosto de <strong>seu</strong> sorriso.",
      "Homem <strong>de coragem</strong> enfrenta desafios."
    ],
    exercicio: {
      pergunta: "Em 'Aquela velha senhora sorriu', os adjuntos adnominais são:",
      alternativas: ["Aquela", "velha", "senhora", "Aquela e velha"],
      correta: 3
    }
  },
  {
    slug: "complemento-nominal",
    titulo: "Complemento Nominal",
    explicacao: "Termo preposicionado que completa o sentido de um substantivo abstrato, adjetivo ou advérbio.",
    detalhes: `
      <p>Diferente do adjunto adnominal, o complemento nominal sempre vem regido de preposição e completa um nome com sentido incompleto.</p>
      <p>Exemplos: <em>medo <strong>de escuro</strong></em>, <em>ansioso <strong>pela viagem</strong></em>.</p>
    `,
    exemplos: [
      "Tenho medo <strong>de escuro</strong>.",
      "Estamos ansiosos <strong>pela viagem</strong>.",
      "Ele age contrário <strong>aos princípios</strong>.",
      "O respeito <strong>pelos mais velhos</strong> é essencial."
    ],
    exercicio: {
      pergunta: "Na frase 'Ele é fiel aos amigos', o complemento nominal é:",
      alternativas: ["Ele é fiel", "aos amigos", "fiel", "amigos"],
      correta: 1
    }
  },
  {
    slug: "aposto",
    titulo: "Aposto",
    explicacao: "Termo que explica, enumera ou resume um substantivo ou pronome, vindo separado por vírgulas, dois-pontos ou travessão.",
    detalhes: `
      <p>Tipos de aposto:</p>
      <ul>
        <li><strong>Explicativo</strong>: explica um termo anterior.</li>
        <li><strong>Enumerativo</strong>: enumera itens.</li>
        <li><strong>Resumitivo</strong>: resume termos anteriores.</li>
        <li><strong>Comparativo</strong>: compara (como, em forma de).</li>
      </ul>
    `,
    exemplos: [
      "São Paulo, <strong>a maior cidade do Brasil</strong>, tem muitos problemas.",
      "Dois irmãos: <strong>João e Maria</strong> chegaram cedo.",
      "Aquele rapaz, <strong>o moreno alto</strong>, é meu primo.",
      "Fome, frio, cansaço, <strong>tudo isso</strong> o abateu."
    ],
    exercicio: {
      pergunta: "Na frase 'Meu amigo, o engenheiro, resolveu o problema', o aposto é:",
      alternativas: ["Meu amigo", "o engenheiro", "resolveu o problema", "problema"],
      correta: 1
    }
  },
  {
    slug: "vocativo",
    titulo: "Vocativo",
    explicacao: "Termo que chama ou interpela o interlocutor, isolado por vírgulas. Não faz parte da estrutura sintática da oração.",
    detalhes: `
      <p>O vocativo pode ser um nome, pronome de tratamento ou apelido.</p>
    `,
    exemplos: [
      "<strong>Maria</strong>, venha aqui!",
      "Estou com fome, <strong>mãe</strong>.",
      "<strong>Senhor presidente</strong>, qual é o seu plano?"
    ],
    exercicio: {
      pergunta: "Em 'Não faça isso, João!', o vocativo é:",
      alternativas: ["Não faça isso", "João", "isso", "Não faça"],
      correta: 1
    }
  },
  {
    slug: "predicativos",
    titulo: "Predicativos (do Sujeito e do Objeto)",
    explicacao: "O predicativo atribui uma qualidade ou estado ao sujeito (via verbo de ligação) ou ao objeto (via verbos como considerar, eleger).",
    detalhes: `
      <h3>Predicativo do Sujeito</h3>
      <p>Refere-se ao sujeito, ligado por verbo de ligação (ser, estar, ficar). Ex.: <em>O dia está <strong>bonito</strong></em>.</p>
      <h3>Predicativo do Objeto</h3>
      <p>Refere-se ao objeto (direto ou indireto), com verbos como <em>considerar, achar, eleger</em>. Ex.: <em>Ele considera o amigo <strong>honesto</strong></em>.</p>
    `,
    exemplos: [
      "Predicativo do sujeito: O dia está <strong>bonito</strong>.",
      "Predicativo do sujeito: Maria é <strong>médica</strong>.",
      "Predicativo do objeto: Ele considera o amigo <strong>honesto</strong>.",
      "Predicativo do objeto: A torcida elegeu o jogador <strong>craque</strong>."
    ],
    exercicio: {
      pergunta: "Em 'Os alunos acharam a aula interessante', o predicativo é do:",
      alternativas: ["sujeito", "objeto", "adjunto adverbial", "complemento nominal"],
      correta: 1
    }
  },
  {
    slug: "agente-da-passiva",
    titulo: "Agente da Passiva",
    explicacao: "Indica quem pratica a ação na voz passiva analítica (verbo ser + particípio). Vem regido pela preposição 'por' (ou 'de').",
    detalhes: `
      <p>Exemplo: <em>O livro foi escrito <strong>pelo autor</strong></em>.</p>
    `,
    exemplos: [
      "O livro foi escrito <strong>pelo autor</strong>.",
      "A cidade foi cercada <strong>pelos inimigos</strong>.",
      "Ele era admirado <strong>de todos</strong>."
    ],
    exercicio: {
      pergunta: "Na frase 'A casa foi vendida pelo proprietário', o agente da passiva é:",
      alternativas: ["A casa", "foi vendida", "pelo proprietário", "proprietário"],
      correta: 2
    }
  },
  {
    slug: "concordancia",
    titulo: "Concordância Verbal e Nominal",
    explicacao: "Regras de concordância entre sujeito e verbo (verbal) e entre substantivo e seus modificadores (nominal).",
    detalhes: `
      <h3>Concordância Verbal</h3>
      <p>O verbo concorda em número e pessoa com o sujeito. Ex.: <em>Os alunos <strong>estudam</strong></em>.</p>
      <h3>Concordância Nominal</h3>
      <p>O adjetivo concorda em gênero e número com o substantivo. Ex.: <em>As meninas <strong>bonitas</strong></em>.</p>
    `,
    exemplos: [
      "Verbal: Ele <strong>estuda</strong> / Eles <strong>estudam</strong>.",
      "Nominal: Menino <strong>esperto</strong> / Meninas <strong>espertas</strong>."
    ],
    exercicio: {
      pergunta: "Qual frase está correta quanto à concordância?",
      alternativas: ["Fazem dois anos", "Faz dois anos", "Fazem dois anos atrás", "Faz dois anos atrás"],
      correta: 1
    }
  },
  {
    slug: "regencia",
    titulo: "Regência Verbal e Nominal",
    explicacao: "Relação de dependência entre um verbo (regência verbal) ou um nome (regência nominal) e seus complementos, geralmente regidos por preposição.",
    detalhes: `
      <h3>Regência Verbal</h3>
      <p>Ex.: <em>Assistir <strong>a</strong> algo</em> (preposição a).</p>
      <h3>Regência Nominal</h3>
      <p>Ex.: <em>Capacidade <strong>de</strong> resolver</em>.</p>
    `,
    exemplos: [
      "Verbal: Ele <strong>assistiu ao</strong> filme.",
      "Verbal: <strong>Obedeço a</strong> meus pais.",
      "Nominal: Tenho orgulho <strong>de</strong> você."
    ],
    exercicio: {
      pergunta: "Qual a regência correta do verbo 'preferir'?",
      alternativas: ["Prefiro café do que chá", "Prefiro café a chá", "Prefiro mais café que chá", "Prefiro café em vez de chá"],
      correta: 1
    }
  },
  {
    slug: "crase",
    titulo: "Crase",
    explicacao: "Fusão da preposição 'a' com o artigo 'a' (ou com pronomes aquele(s), aquela(s), aquilo). Indicada pelo acento grave (`à`).",
    detalhes: `
      <p>Regras básicas: ocorre antes de palavras femininas que admitem artigo, quando o verbo pede preposição 'a'. Ex.: <em>Vou <strong>à</strong> escola</em>.</p>
      <p>Não ocorre antes de verbos, palavras masculinas ou quando não há artigo.</p>
    `,
    exemplos: [
      "Vou <strong>à</strong> praia.",
      "Chegou <strong>à</strong> conclusão.",
      "Refiro-me <strong>à</strong> sua irmã."
    ],
    exercicio: {
      pergunta: "Qual frase está correta quanto ao uso da crase?",
      alternativas: ["Vou a festa", "Vou à festa", "Vou a à festa", "Vou a festa amanhã"],
      correta: 1
    }
  },
  {
    slug: "colocacao-pronominal",
    titulo: "Colocação Pronominal",
    explicacao: "Posição dos pronomes oblíquos átonos (me, te, se, o, a, lhe, nos, vos, os, as, lhes) em relação ao verbo: próclise (antes), ênclise (depois) ou mesóclise (no meio).",
    detalhes: `
      <p><strong>Próclise</strong>: antes do verbo (palavras atrativas: não, nunca, que, etc.). Ex.: <em>Não <strong>se</strong> esqueça</em>.</p>
      <p><strong>Ênclise</strong>: depois do verbo (início de frase, imperativo afirmativo). Ex.: <em>Diga<strong>-me</strong></em>.</p>
      <p><strong>Mesóclise</strong>: no meio do verbo no futuro. Ex.: <em>Dar<strong>te</strong>-ei</em>.</p>
    `,
    exemplos: [
      "Próclise: <strong>Me</strong> empreste o livro?",
      "Ênclise: Empreste<strong>-me</strong> o livro.",
      "Mesóclise: Emprestar<strong>me</strong>-ia o livro?"
    ],
    exercicio: {
      pergunta: "Na frase 'Não ___ esqueça disso', qual pronome e posição corretos?",
      alternativas: ["te - ênclise", "se - próclise", "me - mesóclise", "lhe - próclise"],
      correta: 1
    }
  }
];

export function getTopicoBySlug(slug) {
  return topicosGramatica.find(t => t.slug === slug);
}