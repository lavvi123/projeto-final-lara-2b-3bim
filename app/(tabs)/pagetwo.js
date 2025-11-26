import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

export default function CharacterPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      
      {/* CARD DO FRODO */}
      <View style={styles.card}>

        <Image 
          source={require('../../assets/frodo.jpg')}
          style={styles.avatar}
        />

        <Text style={styles.name}>Frodo Bolseiro</Text>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Raça:</Text>
          <Text style={styles.value}>Hobbit</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Afiliação:</Text>
          <Text style={styles.value}>Sociedade do Anel</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Papel/Profissão:</Text>
          <Text style={styles.value}>Portador do Um Anel</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Família:</Text>
          <Text style={styles.value}>Casa dos Bolseiros</Text>
        </View>

        <Text style={styles.section}>História</Text>
        <Text style={styles.story}>
          Frodo Bolseiro nasceu em 22 de setembro de 2968 T.E., filho de Drogo
          Bolseiro e Primula Brandebuque. Após perder os pais, foi criado pelos
          Brandebuques até ser adotado por Bilbo. Ao herdar o Um Anel, tornou-se
          o Portador e seu destino mudou para sempre.
        </Text>
      </View>


      {/* CARD DO SAMWISE */}
  
      <View style={styles.card}>

        <Image 
          source={require('../../assets/samwise.jpg')}
          style={styles.avatar}
        />

        <Text style={styles.name}>Samwise Gamgee</Text>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Raça:</Text>
          <Text style={styles.value}>Hobbit</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Afiliação:</Text>
          <Text style={styles.value}>Sociedade do Anel</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Papel/Profissão:</Text>
          <Text style={styles.value}>Jardineiro / Guardião e amigo leal</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Família:</Text>
          <Text style={styles.value}>Casa dos Gamgee</Text>
        </View>

        <Text style={styles.section}>História</Text>
        <Text style={styles.story}>
          Samwise Gamgee, conhecido como Sam, nasceu em 2983 T.E. e trabalhou
          como jardineiro de Frodo Bolseiro. Leal, gentil e corajoso, Sam se
          tornou o companheiro mais fiel de Frodo, seguindo-o até Mordor mesmo
          quando toda esperança parecia perdida. Seu amor pela Terra-média,
          aliado à sua força emocional, fez dele um dos verdadeiros heróis da
          Guerra do Anel.
        </Text>

      </View>

   
      {/* CARD DO MERRY */}
     
      <View style={styles.card}>

        <Image 
          source={require('../../assets/merry.jpg')}
          style={styles.avatar}
        />

        <Text style={styles.name}>Meriadoc Brandebuque (Merry)</Text>

<View style={styles.infoBox}>
  <Text style={styles.label}>Raça:</Text>
  <Text style={styles.value}>Hobbit</Text>
</View>

<View style={styles.infoBox}>
  <Text style={styles.label}>Afiliação:</Text>
  <Text style={styles.value}>Sociedade do Anel / Cavaleiros de Rohan</Text>
</View>

<View style={styles.infoBox}>
  <Text style={styles.label}>Papel/Profissão:</Text>
  <Text style={styles.value}>Cavaleiro de Rohan / Aventureiro</Text>
</View>

<View style={styles.infoBox}>
  <Text style={styles.label}>Família:</Text>
  <Text style={styles.value}>Casa dos Brandebuques (Senhores do Brandivino)</Text>
</View>

<Text style={styles.section}>História</Text>
<Text style={styles.story}>
  Meriadoc Brandebuque, conhecido como Merry, nasceu em 2982 T.E. e é um dos 
  hobbits mais inteligentes e observadores do Condado. Primo e grande amigo 
  de Frodo, Merry sempre demonstrou coragem e lealdade. Ele investigou por 
  conta própria os mistérios envolvendo Frodo e o Anel, reunindo o grupo que 
  o acompanharia na jornada.

  Durante a Guerra do Anel, Merry lutou bravamente ao lado dos Cavaleiros de 
  Rohan, tornando-se o primeiro hobbit a servir oficialmente um reino humano. 
  Na Batalha dos Campos do Pelennor, lutou ao lado de Éowyn e ajudou a derrotar 
  o Rei Bruxo de Angmar, um dos feitos mais lendários da guerra. Após a vitória, 
  Merry retornou ao Condado como herói e mais tarde tornou-se Mestre do Bucaneiro.
</Text>
      </View>

{/* CARD DO PIPPIN */}

<View style={styles.card}>

  <Image 
    source={require('../../assets/pippin.png')}
    style={styles.avatar}
  />

  <Text style={styles.name}>Peregrin Tûk (Pippin)</Text>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Raça:</Text>
    <Text style={styles.value}>Hobbit</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Afiliação:</Text>
    <Text style={styles.value}>Sociedade do Anel / Guarda de Gondor</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Papel/Profissão:</Text>
    <Text style={styles.value}>Escudeiro de Gondor / Aventureiro</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Família:</Text>
    <Text style={styles.value}>Casa dos Tûk (Thains do Condado)</Text>
  </View>

  <Text style={styles.section}>História</Text>
  <Text style={styles.story}>
    Peregrin Tûk, o jovem e curioso Pippin, nasceu em 2990 T.E. e logo
    tornou-se um dos hobbits mais travessos e animados do Condado. Mesmo sem
    muita experiência, provou grande coragem em sua jornada com a Sociedade
    do Anel.

    Após olhar no Palantír, despertou a atenção de Sauron e foi levado a
    Gondor, onde jurou lealdade a Denethor e ingressou na guarda da cidade.
    Durante a Guerra do Anel, ajudou a salvar Faramir e lutou na defesa de
    Minas Tirith.

    Depois da vitória, retornou ao Condado como herói e mais tarde tornou-se
    Thain, liderando seu povo com honra e bravura.
  </Text>

</View>


{/* CARD DO ARAGORN */}

<View style={styles.card}>

  <Image 
    source={require('../../assets/aragorn.png')}
    style={styles.avatar}
  />

  <Text style={styles.name}>Aragorn II (Elessar)</Text>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Raça:</Text>
    <Text style={styles.value}>Homem (Dúnadan)</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Afiliação:</Text>
    <Text style={styles.value}>Sociedade do Anel / Dúnedain do Norte / Rei de Gondor e Arnor</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Papel/Profissão:</Text>
    <Text style={styles.value}>Ranger / Capitão dos Dúnedain / Rei</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Família:</Text>
    <Text style={styles.value}>Casa de Isildur (Reis de Arnor e Gondor)</Text>
  </View>

  <Text style={styles.section}>História</Text>
  <Text style={styles.story}>
    Aragorn II, também chamado de Estel em sua juventude, nasceu em 2931 T.E.
    e foi criado em segredo em Valfenda sob os cuidados de Elrond. Herdeiro de
    Isildur, cresceu como um habilidoso guardião e líder dos Dúnedain.

    Ao reencontrar Arwen, filha de Elrond, assumiu o fardo de seu destino e
    tornou-se parte vital da Sociedade do Anel, protegendo Frodo em sua missão.
    Liderou batalhas decisivas na Guerra do Anel, empunhando a espada reforjada
    Andúril e unindo os povos da Terra-média.

    Após a queda de Sauron, foi coroado Rei Elessar, restaurando os reinos de
    Gondor e Arnor e reinando com justiça ao lado de Arwen Undómiel.
  </Text>

</View>


{/* CARD DO LEGOLAS */}

<View style={styles.card}>

  <Image 
    source={require('../../assets/legolas.jpg')}
    style={styles.avatar}
  />

  <Text style={styles.name}>Legolas Thranduilion</Text>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Raça:</Text>
    <Text style={styles.value}>Elfo Sindarin</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Afiliação:</Text>
    <Text style={styles.value}>Reino da Floresta das Trevas / Sociedade do Anel</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Papel/Profissão:</Text>
    <Text style={styles.value}>Príncipe élfico / Arqueiro / Guerreiro</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Família:</Text>
    <Text style={styles.value}>Thranduil (pai), Dinastia dos Elfos Silvestres</Text>
  </View>

  <Text style={styles.section}>História</Text>
  <Text style={styles.story}>
    Legolas, filho do rei Thranduil, nasceu no Reino da Floresta das Trevas,
    onde cresceu como um habilidoso arqueiro e um dos mais velozes e atentos
    guerreiros élficos. Representou seu povo no Conselho de Elrond e tornou-se
    membro da Sociedade do Anel.

    Durante a jornada, formou uma improvável e profunda amizade com o anão
    Gimli, superando a antiga rivalidade entre suas raças. Sua pontaria,
    leveza e agilidade foram essenciais em diversas batalhas, incluindo o Abismo
    de Helm e Minas Tirith.

    Após a derrota de Sauron, Legolas ajudou a restaurar a paz na Terra-média
    e, mais tarde, seguiu para o Oeste, navegando com Gimli rumo às Terras Imortais.
  </Text>

</View>


{/* CARD DO GIMLI */}

<View style={styles.card}>

  <Image 
    source={require('../../assets/gimli.jpg')}
    style={styles.avatar}
  />

  <Text style={styles.name}>Gimli, Filho de Glóin</Text>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Raça:</Text>
    <Text style={styles.value}>Anão (Povo de Durin)</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Afiliação:</Text>
    <Text style={styles.value}>Sociedade do Anel / Anões de Erebor</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Papel/Profissão:</Text>
    <Text style={styles.value}>Guerreiro / Aventureiro / Senhor das Cavernas Cintilantes</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Família:</Text>
    <Text style={styles.value}>Glóin (pai), linhagem de Durin</Text>
  </View>

  <Text style={styles.section}>História</Text>
  <Text style={styles.story}>
    Gimli nasceu nas Montanhas Azuis durante o exílio dos Anões de Durin,
    cerca de um século após a queda de Erebor para o dragão Smaug. Filho de
    Glóin, um dos companheiros de Thorin Escudo de Carvalho, Gimli cresceu
    ouvindo histórias sobre a reconquista do Reino sob a Montanha e as façanhas
    dos heróis anões.

    Em 3017 T.E., ele testemunhou a chegada de um mensageiro de Sauron,
    que buscava informações sobre Bilbo Bolseiro e o Um Anel. Preocupado,
    acompanhou seu pai até Valfenda, onde participou do Conselho de Elrond
    como representante de Erebor e acabou integrando a Sociedade do Anel.

    Durante a jornada, formou uma improvável amizade com Legolas, ajudando
    a unir Anões e Elfos após séculos de desconfiança. Lutou nas batalhas
    do Abismo de Helm e de Minas Tirith, provando sua força e lealdade.

    Após a queda de Sauron, tornou-se Senhor das Cavernas Cintilantes
    de Aglarond e, anos mais tarde, navegou para o Oeste ao lado de Legolas —
    um destino raro e honrado para um anão.
  </Text>

</View>


{/* CARD DO BOROMIR */}

<View style={styles.card}>

  <Image 
    source={require('../../assets/boromir.jpg')}
    style={styles.avatar}
  />

  <Text style={styles.name}>Boromir, Filho de Denethor</Text>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Raça:</Text>
    <Text style={styles.value}>Humano (Dúnadan de Gondor)</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Afiliação:</Text>
    <Text style={styles.value}>Gondor / Sociedade do Anel</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Papel/Profissão:</Text>
    <Text style={styles.value}>Capitão de Gondor / Guerreiro</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Família:</Text>
    <Text style={styles.value}>Denethor II (pai), Faramir (irmão)</Text>
  </View>

  <Text style={styles.section}>História</Text>
  <Text style={styles.story}>
    Boromir nasceu em Minas Tirith, filho mais velho do Regente Denethor II
    e herdeiro de grande honra entre os homens de Gondor. Forte, corajoso e
    extremamente leal ao seu povo, ele passou sua vida protegendo as fronteiras
    do reino contra as forças de Sauron.

    Após receber em sonhos um chamado misterioso para buscar o conselho de
    Imladris, Boromir viajou até Valfenda, onde participou do Conselho de Elond.
    Lá, ofereceu seu escudo e sua espada para a Sociedade do Anel, acreditando
    que o poder do Um Anel poderia salvar Gondor de sua desesperadora guerra.

    No entanto, o fardo do Anel afetou seu coração, levando-o a tentar tomá-lo
    de Frodo em um momento de fraqueza. Arrependido logo em seguida, Boromir
    encontrou redenção ao defender Merry e Pippin contra um ataque de orcs,
    lutando até o fim. Sua morte honrada marcou profundamente a Sociedade e
    fortaleceu a determinação de Aragorn em seguir seu destino como Rei.

    Boromir é lembrado como um herói trágico: corajoso,
    humano e profundamente devotado ao seu povo.
  </Text>

</View>
{/* CARD DO FARAMIR */}

<View style={styles.card}>

  <Image 
    source={require('../../assets/Faramir.jpg')}
    style={styles.avatar}
  />

  <Text style={styles.name}>Faramir, Capitão de Ithilien</Text>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Raça:</Text>
    <Text style={styles.value}>Humano (Dúnadan de Gondor)</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Afiliação:</Text>
    <Text style={styles.value}>Gondor / Guardiões de Ithilien</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Papel/Profissão:</Text>
    <Text style={styles.value}>Capitão de Ithilien / Comandante militar</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Família:</Text>
    <Text style={styles.value}>Denethor II (pai), Boromir (irmão)</Text>
  </View>

  <Text style={styles.section}>História</Text>
  <Text style={styles.story}>
    Faramir nasceu em Minas Tirith como o segundo filho de Denethor II, Regente
    de Gondor. Ao contrário de seu irmão Boromir, que era celebrado por sua força
    e bravura, Faramir sempre foi conhecido por sua sabedoria, bondade e
    profundo senso de justiça. Ele admirava o legado dos antigos reis e
    estudava história, estratégia e as tradições da Terra-média com grande
    dedicação.

    Como Capitão de Ithilien, liderou os Guardiões na resistência às forças de
    Sauron. Durante a Guerra do Anel, encontrou Frodo e Sam e, mesmo sabendo do
    poder do Um Anel, resistiu à tentação que corrompeu tantos outros, provando
    sua pureza de coração — uma qualidade que até Gandalf reconhecia.

    Após o ataque de Osgiliath, Faramir sofreu gravíssimos ferimentos e foi salvo
    graças aos cuidados de Aragorn. Em sua recuperação conheceu Éowyn, com quem
    formou um profundo laço que culminou em casamento. Após a queda de Sauron,
    tornou-se Príncipe de Ithilien, governando com sabedoria e restaurando a
    paz na região devastada pela guerra.

    Faramir é lembrado como um dos homens mais nobres de Gondor: forte,
    compassivo e guiado pela honra acima da glória.
  </Text>

</View>

{/* CARD DA GALADRIEL */}

<View style={styles.card}>

  <Image 
    source={require('../../assets/galadriel.jpg')}
    style={styles.avatar}
  />

  <Text style={styles.name}>Galadriel, Senhora de Lothlórien</Text>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Raça:</Text>
    <Text style={styles.value}>Elfa Noldor</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Afiliação:</Text>
    <Text style={styles.value}>Lothlórien / Conselho Branco</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Papel/Profissão:</Text>
    <Text style={styles.value}>Senhora de Lothlórien / Líder Elfa</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Família:</Text>
    <Text style={styles.value}>Finarfin (pai), Eärwen (mãe), Celeborn (marido), Celebrían (filha)</Text>
  </View>

  <Text style={styles.section}>História</Text>
  <Text style={styles.story}>
   Galadriel nasceu em Valinor, antes da Primeira Era, e é uma das figuras mais complexas e misteriosas do universo de *O Senhor dos Anéis*.
    Inicialmente, ela se envolveu na rebelião dos Noldor e fugiu para a Terra-média com seu povo, embora não tenha participado do Fratricídio em Alqualondë. 
    Durante a Primeira Era, Galadriel se estabeleceu em Beleriand, onde teve várias interações importantes, incluindo com Melian, a Maia, e com o rei Thingol, de quem se tornou amiga.

Apesar de seu envolvimento nos eventos da época, Galadriel acreditava que derrotar Morgoth estava além das forças dos Elfos, e optou por não participar 
diretamente das guerras. Ao fim da Primeira Era, ela foi convidada a retornar a Valinor, mas escolheu permanecer na Terra-média.

Na Segunda Era, ela e seu marido, Celeborn, governaram o reino de Eregion, mas quando Sauron, disfarçado de Annatar, traiu os Elfos, Galadriel recebeu 
um dos Três Anéis de Poder, Nenya, o Anel da Água. Ela usou seu poder com cautela, evitando utilizar o anel enquanto Sauron possuísse o Um Anel. Galadriel 
também desempenhou um papel importante no fortalecimento da resistência contra Sauron e na formação do Conselho Branco.

Durante a Terceira Era, Galadriel ajudou a proteger a Terra-média, particularmente os povos livres, e foi uma das líderes do Conselho Branco contra as 
forças de Sauron. Ela também desempenhou um papel crucial na Guerra do Anel, oferecendo assistência à Sociedade do Anel. No entanto, quando Frodo Bolseiro
 lhe ofereceu o Um Anel, Galadriel resistiu à tentação, recusando o poder do Anel e aceitando seu destino, que implicava em diminuir e deixar a Terra-média para retornar a Valinor.

Ao final de sua história, Galadriel se torna uma figura de sabedoria e sacrifício, resistindo ao poder corruptor do Um Anel e contribuindo decisivamente para a derrota de Sauron.
  </Text>

</View>


{/* CARD DA ÉOWYN */}

<View style={styles.card}>

  <Image 
    source={require('../../assets/eowyn.jpg')}
    style={styles.avatar}
  />

  <Text style={styles.name}>Éowyn, Senhora de Rohan</Text>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Raça:</Text>
    <Text style={styles.value}>Humana (Rohan)</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Afiliação:</Text>
    <Text style={styles.value}>Rohan / Casa de Eorl</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Papel/Profissão:</Text>
    <Text style={styles.value}>Senhora de Rohan / Guerreira</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Família:</Text>
    <Text style={styles.value}>Théoden (tio), Théodred (primo), Éomer (irmão)</Text>
  </View>

  <Text style={styles.section}>História</Text>
  <Text style={styles.story}>
    Éowyn é uma das figuras mais fortes e corajosas do universo de *O Senhor dos Anéis*. Nascida na Casa de Eorl, ela era filha de Éomund e Théodwyn, e sobrinha do Rei Théoden de Rohan. Desde jovem, Éowyn demonstrou grande habilidade com armas e um espírito indomável, mas também se viu limitada pelas expectativas de sua sociedade, que não via as mulheres como guerreiras.

    Quando Rohan enfrentou a ameaça de Saruman e as forças de Sauron, Éowyn ficou devastada ao ver seu tio, o Rei Théoden, tomado pela influência de Saruman. Junto com seu irmão Éomer, ela lutou para libertar Rohan e restabelecer a honra de sua terra. Mas, em sua busca por uma causa maior, Éowyn disfarçou-se de homem e se uniu à luta na Batalha dos Campos de Pelennor, onde desempenhou um papel crucial.

    Durante a batalha, Éowyn teve um confronto decisivo com o Rei Bruxo de Angmar, o Senhor dos Nazgûl, e com grande coragem e força, conseguiu derrotá-lo, quebrando a maldição de Sauron que o tornava invencível para os homens. Ela foi a única pessoa a derrotar o Rei Bruxo, cumprindo uma profecia que dizia que ele não morreria por mãos de homem.

    Após a guerra, Éowyn teve um longo período de cura, tanto física quanto emocional, e se afastou da vida militar. Ela encontrou amor e consolo no Norte, casando-se com Faramir, o Capitão de Gondor, e juntos governaram a região de Ithilien, trazendo paz e prosperidade para a terra.

    Ao final de sua jornada, Éowyn se torna uma figura de grande honra e coragem, conhecida por sua bravura em batalha e por sua luta contra as limitações impostas a ela pela sociedade, mostrando que, mesmo sendo mulher, ela poderia ser uma heroína em sua própria história.
  </Text>

</View>


{/* CARD DO ELROND */}

<View style={styles.card}>

  <Image 
    source={require('../../assets/elrond.jpg')}
    style={styles.avatar}
  />

  <Text style={styles.name}>Elrond, Senhor de Rivendell</Text>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Raça:</Text>
    <Text style={styles.value}>Meio-Elfo</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Afiliação:</Text>
    <Text style={styles.value}>Rivendell / Conselho Branco</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Papel/Profissão:</Text>
    <Text style={styles.value}>Senhor de Rivendell / Conselheiro</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Família:</Text>
    <Text style={styles.value}>Eärendil (pai), Elwing (mãe), Arwen (filha), Elladan (filho), Elrohir (filho)</Text>
  </View>

  <Text style={styles.section}>História</Text>
  <Text style={styles.story}>
    Elrond é um dos personagens mais importantes da Terra-média, sendo uma figura de grande sabedoria, liderança e compaixão. Nascido no final da Primeira Era, Elrond é um Meio-Elfo, filho de Eärendil, o grande marinheiro e herói, e Elwing, uma descendente dos Elfos de Doriath. Elrond, juntamente com seu irmão Elros, teve a escolha de tomar a vida mortal ou imortal, e escolheu a imortalidade, tornando-se um Elfo.

    Elrond fundou e governou Rivendell, um refúgio para os Elfos, Homens e outras raças livres da Terra-média. Ele foi um dos mais sábios e poderosos Elfos da Segunda e Terceira Eras, e desempenhou um papel fundamental em muitas decisões políticas e estratégicas ao longo da história da Terra-média.

    Durante a Segunda Era, Elrond foi um dos líderes do Conselho Branco, formado para enfrentar a ameaça crescente de Sauron. Ele também desempenhou um papel crucial na formação da Sociedade do Anel, oferecendo seu apoio a Frodo Bolseiro e aos outros membros da Sociedade. Ele foi um dos primeiros a perceber a grande ameaça representada pelo Um Anel e trabalhou ao lado de Gandalf, Galadriel e outros para derrotar Sauron.

    Elrond é também o pai de **Arwen Undómiel**, uma das personagens centrais em *O Senhor dos Anéis*, e de seus filhos gêmeos **Elladan** e **Elrohir**. Ele teve um relacionamento próximo com Aragorn, que se casaria com sua filha, e apoiou sua ascensão como o Rei de Gondor.

    Ao longo de sua longa vida, Elrond acumulou grande sabedoria e foi essencial na luta contra Sauron, liderando o Conselho Branco e oferecendo seu abrigo a muitas figuras-chave. Sua decisão de viver a vida imortal, em contraste com seu irmão Elros, que optou pela mortalidade, moldou muito de sua visão da Terra-média e de seu papel como um guardião da história e do conhecimento.

    Após a derrota de Sauron e o fim da Terceira Era, Elrond permaneceu em Rivendell, onde suas contribuições para a preservação da paz na Terra-média foram essenciais, até que, eventualmente, seguiu para Valinor, em um ato simbólico de deixar a Terra-média para os Homens.
  </Text>

</View>

{/* CARD DA ARWEN */}

<View style={styles.card}>

  <Image 
    source={require('../../assets/arwen.jpg')}
    style={styles.avatar}
  />

  <Text style={styles.name}>Arwen Undómiel, a Estrela da Manhã</Text>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Raça:</Text>
    <Text style={styles.value}>Elfa (Meio-Elfa)</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Afiliação:</Text>
    <Text style={styles.value}>Rivendell / Casa de Elrond</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Papel/Profissão:</Text>
    <Text style={styles.value}>Princesa de Rivendell / Guerreira</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Família:</Text>
    <Text style={styles.value}>Elrond (pai), Celebrían (mãe), Elladan (irmão), Elrohir (irmão), Aragorn (marido)</Text>
  </View>

  <Text style={styles.section}>História</Text>
  <Text style={styles.story}>
    Arwen Undómiel, filha de Elrond e Celebrían, é uma das Elfas mais importantes da Terra-média e uma figura central na história de *O Senhor dos Anéis*. Como filha de Elrond, Arwen é de linhagem nobre, sendo descendente tanto dos Elfos como dos Homens. Ela é um dos mais notáveis membros da Casa de Elrond, uma das casas mais antigas e respeitadas da Terra-média.

    Ao longo da história, Arwen se destaca por sua beleza, sabedoria e força interior, mas é especialmente conhecida por sua relação com **Aragorn**, o herói de Gondor. Arwen e Aragorn se apaixonaram, mas sua união era difícil devido à diferença de suas naturezas: Arwen, como Elfa, possuía a imortalidade, enquanto Aragorn, como Homem, era mortal. O amor deles, no entanto, tornou-se um dos pilares da história da Terra-média, com Arwen escolhendo a mortalidade para ficar com Aragorn, demonstrando seu compromisso e sacrifício.

    Durante a Guerra do Anel, Arwen desempenha um papel crucial. Ela não só apoiou Aragorn, como também ajudou a proteger Frodo Bolseiro. Uma de suas maiores contribuições foi ao levar Frodo através da Floresta de Rivendell, depois que ele foi ferido por uma lâmina de Morgul, até Rivendell, onde ele poderia ser curado.

    Além de seu papel como conselheira e suporte para Aragorn, Arwen também se destacou por sua habilidade em combate e seu forte espírito. Ao contrário de outras mulheres da Terra-média, ela não se limitou ao papel tradicional de dama, mas lutou por aquilo em que acreditava.

    Ao final da Guerra do Anel, quando Aragorn se torna o Rei de Gondor, Arwen escolhe permanecer ao lado dele e viver como uma mortal, compartilhando sua vida e destino, enquanto os Elfos começam a se retirar para Valinor. Sua história é uma de amor, sacrifício e a escolha do destino, um reflexo da união entre os Elfos e os Homens.

    Arwen, a "Estrela da Manhã", não é apenas um símbolo de beleza e graça, mas também de força e determinação, representando a ponte entre os Elfos e os Homens, e o poder do amor verdadeiro.
  </Text>

</View>


{/* CARD DO GANDALF */}

<View style={styles.card}>

  <Image 
    source={require('../../assets/gandalf.jpg')}
    style={styles.avatar}
  />

  <Text style={styles.name}>Gandalf, o Cinzento (ou o Branco)</Text>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Raça:</Text>
    <Text style={styles.value}>Maiar (Espírito de Fogo)</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Afiliação:</Text>
    <Text style={styles.value}>Conselho Branco / Povos Livres da Terra-média</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Papel/Profissão:</Text>
    <Text style={styles.value}>Mago / Conselheiro</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Família:</Text>
    <Text style={styles.value}>Não possui uma família tradicional, mas é um dos Maiar, uma das ordens espirituais de Valinor.</Text>
  </View>

  <Text style={styles.section}>História</Text>
  <Text style={styles.story}>
    Gandalf, originalmente conhecido como Olórin, é um dos Maiar, espíritos poderosos que servem aos Valar, enviados à Terra-média para ajudar os Povos Livres a combater o mal crescente de Sauron. Ele é um dos cinco Magos (Istari) enviados pelos Valar no início da Terceira Era, e sua missão era guiar e aconselhar, não liderar diretamente.

    Ao longo de sua jornada, Gandalf assumiu a forma de um homem idoso e sábio, conhecido como "Gandalf o Cinzento". Sua sabedoria e poder são imensos, mas sua verdadeira força vem de sua habilidade em inspirar, aconselhar e unir os povos da Terra-média. Ele foi uma das principais figuras por trás da formação da **Sociedade do Anel**, ajudando a proteger Frodo Bolseiro em sua missão de destruir o Um Anel.

    Durante sua jornada, Gandalf enfrentou inúmeras ameaças. Ele foi capturado por Sauron e preso na Torre de Orthanc, mas escapou com a ajuda de seus aliados. Mais tarde, após a destruição de seu corpo físico durante a Batalha de Moria, Gandalf foi enviado de volta à Terra-média pelos Valar como **Gandalf, o Branco**, assumindo o papel de líder do Conselho Branco e da resistência contra Sauron.

    Como Gandalf o Branco, ele liderou os exércitos dos Povos Livres na luta contra Sauron e seus servos. Ele desempenhou um papel crucial na defesa de Gondor durante a Batalha dos Campos de Pelennor, onde ajudou a virar a maré da batalha e garantiu a vitória contra as forças de Sauron. Ele também foi fundamental para a vitória final sobre Sauron, orientando Frodo e Sam durante sua missão em Mordor.

    Gandalf também teve uma relação próxima com muitos dos principais heróis de *O Senhor dos Anéis*, incluindo Aragorn, Frodo, e Bilbo. Sua sabedoria e bondade influenciaram profundamente todos ao seu redor, e sua liderança foi essencial para a queda de Sauron e o restabelecimento da paz na Terra-média.

    Após a derrota de Sauron e o fim da Terceira Era, Gandalf partiu para o Oeste com os outros Elfos, sendo um dos últimos a deixar a Terra-média. Sua missão estava cumprida, e ele retornou a Valinor, onde poderia descansar após suas longas e difíceis tarefas na Terra-média.

    Gandalf não é apenas um mago, mas uma figura de grande sabedoria, compaixão e coragem. Ele representa o poder da amizade, da paciência e do sacrifício, sendo uma das figuras mais queridas e influentes da Terra-média.
  </Text>

</View>

{/* CARD DO SAURON */}

<View style={styles.card}>

  <Image 
    source={require('../../assets/sauron.jpg')}
    style={styles.avatar}
  />

  <Text style={styles.name}>Sauron, o Senhor do Escuro</Text>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Raça:</Text>
    <Text style={styles.value}>Maiar (Espírito Corrompido)</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Afiliação:</Text>
    <Text style={styles.value}>Mordor / Exército de Morgoth</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Papel/Profissão:</Text>
    <Text style={styles.value}>Senhor do Escuro / Criador do Um Anel</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Família:</Text>
    <Text style={styles.value}>Nenhuma (Maiar, antigo servo de Aulë e depois de Morgoth)</Text>
  </View>

  <Text style={styles.section}>História</Text>
  <Text style={styles.story}>
    Sauron, originalmente chamado Mairon, era um dos Maiar mais talentosos, servindo inicialmente ao Vala Aulë. Ambicioso e fascinado pela ordem e pela dominação, ele foi corrompido por Morgoth durante a Primeira Era, tornando-se seu mais poderoso e leal tenente.

    Após a queda de Morgoth, Sauron fugiu e assumiu gradualmente sua posição como o novo Senhor do Escuro, buscando subjugar toda a Terra-média. Durante a Segunda Era, ele seduziu os ferreiros élficos de Eregion na forma de Annatar, o "Senhor dos Presentes", e os guiou na criação dos Anéis de Poder. Em segredo, forjou o **Um Anel**, no qual vinculou grande parte de seu poder e de sua vontade, tornando-se uma ameaça terrível.

    Após sua derrota na Guerra da Última Aliança, Sauron perdeu sua forma física quando o Um Anel foi cortado de sua mão por Isildur. Mas, como sua alma estava presa ao Anel, ele continuou existindo como uma sombra maléfica, reconstruindo lentamente seu poder.

    Durante a Terceira Era, Sauron estabeleceu-se em Mordor e ergueu novamente a Torre de Barad-dûr. Ele enviou seus Nazgûl atrás do Anel e conduziu guerras devastadoras contra Gondor e Rohan. Contudo, sua ruína final veio quando Frodo Bolseiro levou o Anel até a Montanha da Perdição, onde ele foi destruído.

    A queda do Um Anel significou a queda definitiva de Sauron, cujo espírito maligno finalmente se dissipou, incapaz de assumir qualquer forma novamente.
  </Text>

</View>

{/* CARD DO SARUMAN */}

<View style={styles.card}>

  <Image 
    source={require('../../assets/saruman.jpg')}
    style={styles.avatar}
  />

  <Text style={styles.name}>Saruman, o Branco</Text>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Raça:</Text>
    <Text style={styles.value}>Maiar (Istari)</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Afiliação:</Text>
    <Text style={styles.value}>Conselho Branco / Mais tarde: Isengard</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Papel/Profissão:</Text>
    <Text style={styles.value}>Mago / Líder dos Istari / Traidor</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Família:</Text>
    <Text style={styles.value}>Nenhuma (Maiar — espírito enviado pelos Valar)</Text>
  </View>

  <Text style={styles.section}>História</Text>
  <Text style={styles.story}>
    Saruman, originalmente chamado Curumo, era um dos mais poderosos entre os Maiar enviados à Terra-média pelos Valar como parte da ordem dos Istari. Ao chegar, recebeu o título de **Saruman, o Branco**, tornando-se líder dos Magos e do Conselho Branco.

    Erudito e extremamente inteligente, Saruman dedicou-se ao estudo profundo dos poderes de Sauron, dos Anéis de Poder e da própria magia. Contudo, esse conhecimento o levou à corrupção: ele passou a ambicionar o Um Anel e a acreditar que poderia dominar Sauron usando suas próprias armas.

    Gradualmente, Saruman abandonou sua missão original e estabeleceu-se em Isengard, onde construiu um grande exército de Orcs e Uruk-hai, alimentando a guerra contra Rohan e traindo a confiança dos Povos Livres.

    Influenciado pelo uso constante do palantír, Saruman caiu sob a dominação de Sauron, apesar de acreditar estar agindo por conta própria. Seus planos desmoronaram quando o ataque a Helm's Deep falhou e os Ents, liderados por Bárbol, destruíram Isengard e aprisionaram-no na torre de Orthanc.

    Despojado de seus poderes por Gandalf, agora o Branco, Saruman perdeu sua autoridade e vagou pela Terra-média até seu fim miserável na Comarca, onde foi morto por Gríma, seu servo humilhado.

    Sua história é um exemplo trágico de orgulho, queda e corrupção: um grande sábio que, ao tentar se igualar ao mal, acabou destruído por ele.
  </Text>

</View>

{/* CARD DO GOLLUM */}

<View style={styles.card}>

  <Image 
    source={require('../../assets/gollum.jpg')}
    style={styles.avatar}
  />

  <Text style={styles.name}>Gollum (Sméagol)</Text>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Raça:</Text>
    <Text style={styles.value}>Hobbit (Povo do Anduin)</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Afiliação:</Text>
    <Text style={styles.value}>Nenhuma (seguidor obsessivo do Um Anel)</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Papel/Profissão:</Text>
    <Text style={styles.value}>Antigo portador do Um Anel / Guia de Frodo</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Família:</Text>
    <Text style={styles.value}>Sméagol (nome original), Déagol (primo)</Text>
  </View>

  <Text style={styles.section}>História</Text>
  <Text style={styles.story}>
    Gollum, originalmente chamado Sméagol, era um hobbit do Povo do Anduin. Sua vida mudou para sempre no momento em que seu primo Déagol encontrou o Um Anel no fundo do rio Anduin. Dominado pela influência do Anel, Sméagol matou Déagol e reivindicou o artefato como seu “preciosssso”.

    A corrupção do Anel transformou seu corpo e sua mente ao longo dos séculos. Expulso de sua comunidade, ele se refugiou nas Montanhas Sombrias, onde viveu por quase 500 anos, desenvolvendo a dupla personalidade entre o frágil Sméagol e o monstruoso Gollum.

    Quando Bilbo Bolseiro encontrou o Anel, Gollum iniciou uma longa perseguição para recuperá-lo. Essa obsessão o levou até Mordor e, mais tarde, a capturar e seguir Frodo e Sam durante a Guerra do Anel.

    Apesar de sua natureza corrompida, Gollum guiou Frodo pela Terra-média, oscilando entre lealdade e traição. Sua luta interna entre Sméagol (que desejava bondade) e Gollum (que queria apenas o Anel) moldou sua trágica trajetória.

    No Monte da Perdição, ele finalmente conseguiu recuperar o “preciosso”, mas sua alegria durou pouco: ao tropeçar, caiu nas chamas, destruindo o Um Anel e, consequentemente, a si mesmo. Sua morte, embora acidental, foi crucial para a derrota de Sauron.

    Gollum é uma das figuras mais trágicas da Terra-média: uma vítima e um vilão, moldado pelo poder sedutor do Anel e lembrado por sua profunda dualidade entre luz e escuridão.
  </Text>

</View>

{/* CARD DO THÉODEN */}

<View style={styles.card}>

  <Image 
    source={require('../../assets/theoden.png')}
    style={styles.avatar}
  />

  <Text style={styles.name}>Théoden, Rei de Rohan</Text>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Raça:</Text>
    <Text style={styles.value}>Humano (Rohan)</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Afiliação:</Text>
    <Text style={styles.value}>Rohan / Casa de Eorl</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Papel/Profissão:</Text>
    <Text style={styles.value}>Rei de Rohan / Senhor dos Cavaleiros do Mark</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Família:</Text>
    <Text style={styles.value}>Thengel (pai), Elfhild (esposa falecida), Théodred (filho), Éowyn e Éomer (sobrinhos)</Text>
  </View>

  <Text style={styles.section}>História</Text>
  <Text style={styles.story}>
    Théoden, filho de Thengel, foi o 17º Rei de Rohan e governou em um dos períodos mais sombrios da história de seu povo. Embora tenha sido um governante justo e respeitado, Théoden acabou sendo enfraquecido pela influência maligna de Saruman, que operava através de Gríma Língua de Cobra, seu conselheiro corrupto.

    Com o avanço das forças de Isengard, Rohan mergulhou em tempos de medo e incerteza. Porém, graças à intervenção de Gandalf, Théoden recuperou sua força e clareza, expulsando Gríma e retornando ao seu papel como líder valente de seu povo.

    Théoden protegeu seus súditos conduzindo-os até o Abismo de Helm, onde liderou a defesa heroica contra o enorme exército de Saruman. Sua coragem inspirou os Rohirrim, que resistiram até a chegada de Gandalf e dos Cavaleiros do Oeste.

    Na Guerra do Anel, Théoden liderou pessoalmente seus exércitos na Batalha dos Campos de Pelennor, lutando com honra e bravura. Lá, enfrentou o Senhor dos Nazgûl e acabou mortalmente ferido quando seu cavalo caiu sobre ele. Seus últimos momentos foram de orgulho, ao saber que seu sobrinho Éomer assumiria a liderança de Rohan.

    Théoden é lembrado como um dos maiores reis de Rohan: justo, corajoso, e renascido das sombras para conduzir seu povo à vitória contra as forças das trevas.
  </Text>

</View>

{/* CARD DO ÉOMER */}

<View style={styles.card}>

  <Image 
    source={require('../../assets/eomer.jpg')}
    style={styles.avatar}
  />

  <Text style={styles.name}>Éomer, Rei dos Rohirrim</Text>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Raça:</Text>
    <Text style={styles.value}>Humano (Rohan)</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Afiliação:</Text>
    <Text style={styles.value}>Rohan / Casa de Eorl / Cavaleiros do Riddermark</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Papel/Profissão:</Text>
    <Text style={styles.value}>Cavaleiro / Marechal do Mark / Rei de Rohan</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Família:</Text>
    <Text style={styles.value}>Éomund (pai), Théodwyn (mãe), Éowyn (irmã), Théoden (tio)</Text>
  </View>

  <Text style={styles.section}>História</Text>
  <Text style={styles.story}>
    Éomer, filho de Éomund e Théodwyn, foi um dos mais bravos guerreiros da história de Rohan. Criado como sobrinho do Rei Théoden, ele cresceu com forte senso de honra e dedicação ao povo dos Cavaleiros do Mark.

    Como Marechal da Marca, Éomer liderava as patrulhas de cavalaria responsáveis por defender as fronteiras de Rohan. Sua lealdade absoluta a Théoden e sua determinação em resistir às forças de Saruman o colocaram em conflito direto com Gríma Língua de Cobra, que tentou bani-lo por descobrir as traições do conselheiro.

    Mesmo exilado, Éomer permaneceu fiel a Rohan e retornou para lutar ao lado de Théoden na defesa do Abismo de Helm, onde mostrou grande liderança e coragem.

    Durante a Guerra do Anel, ele teve papel decisivo na Batalha dos Campos de Pelennor. Após a morte de Théoden, Éomer assumiu o comando dos Rohirrim e conduziu sua cavalaria com força devastadora contra as forças de Sauron, sendo fundamental para a vitória em Minas Tirith.

    Com o fim da guerra, Éomer foi coroado como o 18º Rei de Rohan e governou em paz durante muitos anos, mantendo sempre uma forte aliança com Aragorn, agora Rei de Gondor. Seu reinado simbolizou a união e a prosperidade renovada entre os dois grandes reinos dos Homens.

    Éomer é lembrado como um líder guerreiro, feroz em batalha, mas justo e leal em coração — o legítimo herdeiro do espírito dos Cavaleiros do Riddermark.
  </Text>

</View>

{/* CARD DO DENETHOR */}

<View style={styles.card}>

  <Image 
    source={require('../../assets/denethor.jpg')}
    style={styles.avatar}
  />

  <Text style={styles.name}>Denethor II, Senescal de Gondor</Text>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Raça:</Text>
    <Text style={styles.value}>Humano (Dúnadan de Gondor)</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Afiliação:</Text>
    <Text style={styles.value}>Gondor / Casa de Stewards</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Papel/Profissão:</Text>
    <Text style={styles.value}>Senescal de Gondor / Governante interino</Text>
  </View>

  <View style={styles.infoBox}>
    <Text style={styles.label}>Família:</Text>
    <Text style={styles.value}>Eärien (mãe), Denethor I (pai), Boromir e Faramir (filhos)</Text>
  </View>

  <Text style={styles.section}>História</Text>
  <Text style={styles.story}>
    Denethor II foi o Senescal de Gondor durante a Terceira Era, governando em nome do rei ausente. Filósofo e estrategista habilidoso, ele era conhecido por sua inteligência, mas também por seu orgulho e temperamento tempestuoso. Como líder, Denethor buscava proteger Gondor das forças de Sauron, mas sua visão estratégica era frequentemente obscurecida pelo desespero e pelo medo do destino de seu reino.

    Ele teve dois filhos: Boromir, o guerreiro nobre que buscou defender Gondor, e Faramir, mais sensato e compassivo. Denethor favorecia Boromir, e sua preferência contribuiu para tensões familiares e decisões precipitadas durante a Guerra do Anel.

    Denethor também possuía um Palantír, a pedra vidente de Gondor, que usava para vigiar Sauron e os exércitos inimigos. Porém, o Palantír foi manipulado por Sauron, aumentando o desespero e a paranoia de Denethor. Ele passou a acreditar que a derrota era inevitável, o que o levou a tomar decisões desesperadas.

    Durante a invasão de Minas Tirith, Denethor perdeu a esperança quando acreditou que Faramir estava morto. Em um ato final de desespero, tentou se suicidar pelo fogo, levando Faramir quase junto. Ele acabou morrendo, consumido pelo próprio orgulho e pelo desespero, enquanto o povo de Gondor era salvo pelos esforços dos heróis restantes, incluindo Gandalf e Aragorn.

    Denethor é lembrado como um homem brilhante, mas tragicamente falho: sua sabedoria não foi suficiente para superar o medo, e seu orgulho contribuiu para sua ruína. Sua história destaca o peso da liderança, o perigo da desesperança e a importância da esperança mesmo nos tempos mais sombrios.
  </Text>

</View>



    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#1f2d16",
  },

  card: {
    backgroundColor: "#f5e6c8",
    padding: 30,
    borderRadius: 20,
    width: "90%",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#b48a4f",
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 8,
    marginBottom: 40, // espaço entre os cards
  },

  avatar: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 4,
    borderColor: "#b48a4f",
    marginBottom: 20,
  },

  name: {
    fontSize: 32,
    fontFamily: "medieval",
    color: "#4a3b19",
    marginBottom: 20,
    textAlign: "center",
  },

  infoBox: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 10,
  },

  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4a3b19",
    width: "40%",
  },

  value: {
    fontSize: 18,
    color: "#6c5a2e",
    width: "60%",
  },

  section: {
    fontSize: 22,
    fontFamily: "medieval",
    marginTop: 20,
    marginBottom: 10,
    color: "#4a3b19",
  },

  story: {
    fontSize: 16,
    color: "#6c5a2e",
    textAlign: "justify",
    lineHeight: 22,
  },
});
