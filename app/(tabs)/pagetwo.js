import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

export default function CharacterPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* ======================= */}
      {/* CARD DO FRODO */}
      {/* ======================= */}
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


      {/* ======================= */}
      {/* CARD DO SAMWISE */}
      {/* ======================= */}
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

      {/* ======================= */}
      {/* CARD DO MERRY */}
      {/* ======================= */}
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

{/* ======================= */}
{/* CARD DO PIPPIN */}
{/* ======================= */}
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

{/* ======================= */}
{/* CARD DO ARAGORN */}
{/* ======================= */}
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

{/* ======================= */}
{/* CARD DO LEGOLAS */}
{/* ======================= */}
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

{/* ======================= */}
{/* CARD DO GIMLI */}
{/* ======================= */}
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

{/* ======================= */}
{/* CARD DO BOROMIR */}
{/* ======================= */}
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
