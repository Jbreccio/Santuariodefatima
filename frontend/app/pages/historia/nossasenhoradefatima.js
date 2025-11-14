// pages/historia/nossasenhoradefatima.js
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function NossaSenhoraDeFatima() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
    }}>
      <Header />
      
      {/* Banner Hero */}
      <section style={{ 
        background: 'linear-gradient(135deg, #1e3a8a 0%, #2d4ba0 100%)', 
        color: 'white', 
        padding: '80px 20px', 
        textAlign: 'center' 
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Nossa Senhora de Fátima</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          As aparições que marcaram a história da Igreja e continuam a inspirar milhões de fiéis
        </p>
      </section>

      {/* Conteúdo Principal */}
      <section style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Container Principal */}
        <div style={{ 
          background: 'white', 
          padding: '3rem', 
          borderRadius: '10px', 
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          lineHeight: '1.8',
          fontSize: '1.1rem'
        }}>
          
          {/* Introdução */}
          <h2 style={{ color: '#1e3a8a', marginBottom: '2rem', textAlign: 'center' }}>
            Conheça a história de Nossa Senhora de Fátima
          </h2>
          
          <p style={{ marginBottom: '1.5rem' }}>
            As aparições de Nossa Senhora de Fátima aos Pastorinhos a 13 de maio de 1917 foram 
            precedidas por três aparições do Anjo de Portugal. Ele preparou as crianças para 
            receberem a mensagem da Virgem, ensinando-as a rezar e pedindo que fizessem penitência.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            Quando a Virgem apareceu-lhes a primeira vez, na Cova da Iria, pediu que eles 
            voltassem a esse mesmo lugar durante seis meses seguidos, no dia 13 e naquela mesma 
            hora. Ela insistiu que eles rezassem muitos terços e os convidou a suportar os 
            sofrimentos que Deus os enviasse como um ato de reparação pelos pecados com que 
            Ele é ofendido.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            As três crianças responderam de forma positiva aos apelos da Senhora do Céu. E, a 
            cada aparição, a Virgem insistia na importância de rezar o terço todos os dias para 
            a conversão dos pecadores, bem como para alcançarem a paz no mundo e o fim da guerra.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            Logo o fato começou a se espalhar e muitas pessoas — devotos e curiosos — começaram 
            a acompanhar os pastorinhos todo dia 13 de cada mês. No entanto, muitas foram as 
            dificuldades de Lúcia, Jacinta e Francisco, pois suas famílias e, sobretudo, o 
            prefeito e o pároco do local duvidavam na veracidade de suas narrações e tentavam 
            de todas as formas fazê-los esquecer do acontecido e não mais comparecer à Cova da Iria.
          </p>

          <p style={{ marginBottom: '2rem' }}>
            No entanto, mesmo sofrendo perseguições e ameaças, os três permaneciam firmes na fé. 
            Então, a Virgem lhes mostrou a visão do inferno e revelou-lhes um segredo. Além disso, 
            ensinou-os uma oração e prometeu que na última aparição realizaria um prodígio, a fim 
            de que todos acreditassem. E assim aconteceu: com o Milagre do Sol, muitos se 
            converteram e foram curados de suas enfermidades.
          </p>

          {/* Os Três Pastorinhos */}
          <div style={{ marginBottom: '3rem', padding: '2rem', background: '#f8f9fa', borderRadius: '8px' }}>
            <h3 style={{ color: '#1e3a8a', marginBottom: '1.5rem', textAlign: 'center' }}>
              Os Três Pastorinhos
            </h3>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ color: '#333', marginBottom: '1rem' }}>Jacinta Marto e Francisco Marto</h4>
              <p style={{ marginBottom: '1rem' }}>
                Jacinta Marto nasceu a 11 de março de 1910, em Aljustrel, a 2 km da freguesia de 
                Fátima. Ela, desde criança, trabalhava junto com seu irmão, também vidente de 
                Fátima, Francisco Marto, nascido em 11 de junho de 1908. Ambos pastoreavam o 
                rebanho do pai. Jacinta tinha 7 anos quando as aparições começaram, e Francisco 9. 
                Apesar da pouca idade, a menina ficou profundamente tocada com a visão que Nossa 
                Senhora revelou a respeito das pobres almas que iam para o inferno sem ter quem 
                rezasse por elas.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                "De modo particular, a beata Jacinta mostrava-se incansável na partilha com os 
                pobres e no sacrifício pela conversão dos pecadores." Jacinta via Nossa Senhora 
                e também a ouvia, enquanto Francisco somente via, mas não a podia ouvir. "O 
                Francisco assume uma vida de contemplação, comprometido com a consolação de Deus 
                que lhe parece estar «tão triste». A Senhora recomendara que ele rezasse muitos 
                terços. E muito rezará o Francisco, procurando a solidão do monte ou a companhia 
                do Jesus escondido no sacrário da Igreja paroquial para «pensar em Deus»."
              </p>
              <p style={{ marginBottom: '1rem' }}>
                Logo na segunda aparição, a Virgem revela que levaria os dois irmãos em breve. 
                Mas no tempo de vida terrena que tiveram, souberam atender aos apelos de Nossa 
                Senhora, rezando muitos terços e oferecendo sacrifícios pelos pecadores. Francisco 
                morreu em 4 de abril de 1919, atingido pela febre espanhola. Jacinta, também 
                doente, depois de muito padecer, oferecendo seus sofrimentos pelos pecadores, 
                pela paz no mundo e pelo Papa, morre em um hospital de Lisboa, em 20 de fevereiro 
                de 1920.
              </p>
              <p>
                Jacinta e Francisco foram as primeiras crianças não-mártires a serem proclamadas 
                santas. O Papa Francisco canonizou estes dois pastorinhos de Fátima a 13 de maio 
                de 2017 — há 100 anos do início das aparições.
              </p>
            </div>

            <div>
              <h4 style={{ color: '#333', marginBottom: '1rem' }}>Lúcia de Jesus (Irmã Lúcia)</h4>
              <p style={{ marginBottom: '1rem' }}>
                Lúcia de Jesus nasceu em Aljustrel, a 28 de março de 1907. Era prima dos outros 
                dois pastorinhos, Jacinta e Francisco. Ela tinha 10 anos quando Nossa Senhora 
                apareceu aos três na Cova da Iria. Era Lúcia quem conversava com a Virgem, além 
                de vê-la e ouvi-la. Inclusive, foi Lúcia destinada a ficar mais tempo na sua 
                vida terrena, enquanto seus primos iriam para o Céu em breve.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                "Mas tu ficas cá mais algum tempo. Jesus quer servir-Se de ti para me fazer 
                conhecer e amar. Ele quer estabelecer no mundo a devoção ao meu Imaculado 
                Coração" foi o que a Virgem disse a Lúcia. E acrescentou que não desanimasse 
                nos sofrimentos, pois o Seu Imaculado Coração lhe seria refúgio e lhe mostraria 
                o caminha para Deus.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                Sendo assim, Lúcia, que aprendeu a ler e a escrever a pedido da Virgem, deixou 
                muitos escritos, especialmente relatando as memórias das aparições. Em 1921, 
                ela entrou para a Comunidade das Irmãs de Santa Doroteia; passados cerca de dez 
                anos de seus votos perpétuos, ingressou no Mosteiro Carmelita de Coimbra. Em 
                1949 adota o nome de Irmã Maria Lúcia de Jesus e do Coração Imaculado, após a 
                profissão solene.
              </p>
              <p>
                Lúcia presencia a beatificação de seus primos, Jacinta e Francisco Marto, pelo 
                Papa João Paulo II a 13 de maio de 2000, em Fátima. E depois de uma vida entregue 
                a Deus e a serviço da Igreja, a divulgar a Mensagem de Fátima e propagar a 
                devoção ao Imaculado Coração de Maria, a última pastorinha morre em 13 de fevereiro 
                de 2005, no Carmelo de Coimbra. Neste lugar ficou sepultada um ano, como desejava, 
                e depois foi trasladada para a Basílica de Fátima, junto ao túmulo de Jacinta.
              </p>
            </div>
          </div>

          {/* Aparições do Anjo */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: '#1e3a8a', marginBottom: '1.5rem' }}>Aparições do Anjo</h3>
            <p style={{ marginBottom: '1.5rem' }}>
              Assim como o Arcanjo São Gabriel foi enviado para anunciar o nascimento de Jesus, 
              também foi enviado um anjo para os pastorinhos antes da primeira aparição da Virgem. 
              Após as aparições do Anjo, os pastorinhos intensificaram as suas orações e 
              penitências pelos pecadores, como lhes foi pedido.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              A primeira aparição do anjo aconteceu na Loca do Cabeço, em Valinhos, lugar onde 
              os pastorinhos costumavam brincar, rezar e proteger-se do sol e da chuva. Foi na 
              primavera de 1916 e, de acordo com as Memórias da Irmã Lúcia, ele disse às crianças 
              que não temessem e as ensinou a rezar a seguinte oração: "Meu Deus, eu creio, adoro, 
              espero e amo-vos. Peço-vos perdão para os que não crêem, não adoram, não esperam, 
              e não vos amam." Depois de repetir isto três vezes, ergueu-se e disse: "Orai assim. 
              Os corações de Jesus e Maria estão atentos à voz das vossas súplicas."
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              A segunda aparição do Anjo foi no verão de 1916 e se deu no Quintal da casa de 
              Lúcia, junto ao Poço do Arneiro. Lúcia pergunta como eles poderiam oferecer 
              sacrifícios e o anjo responde "De tudo que puderdes, oferecei um sacrifício em 
              acto de reparação pelos pecados com que Ele é ofendido [...] aceitai e suportai 
              com submissão o sofrimento que o Senhor vos enviar."
            </p>
            <p>
              A terceira e última aparição do Anjo, antes da Virgem, torna a ser na Loca do 
              Cabeço. Conforme as memórias de Lúcia, ela aconteceu no outono de 1916. Nessa 
              ocasião, o anjo ensinou-os a rezar e deu a eles a Eucaristia. "Tomai e bebei o 
              Corpo e o Sangue de Jesus Cristo horrivelmente ultrajado pelos homens ingratos. 
              Reparai os seus crimes e consolai o vosso Deus." De novo se prostrou em terra e 
              repetiu conosco mais três vezes a mesma oração.
            </p>
          </div>

          {/* Continua com as outras seções... */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: '#1e3a8a', marginBottom: '1.5rem' }}>Aparições de Nossa Senhora</h3>
            
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ color: '#333', marginBottom: '1rem' }}>Primeira aparição, Cova da Iria, 13 de maio de 1917</h4>
              <p style={{ marginBottom: '1rem' }}>
                Desde o primeiro dia da aparição, a Virgem pede que eles voltem à Cova da Iria 
                durante seis meses seguidos, todo dia 13, naquela mesma hora. Ela insiste também 
                que rezem o Terço todos os dias, a fim de alcançarem a paz para o mundo e o fim da guerra.
              </p>
              <p>
                "– Quereis oferecer-vos a Deus para suportar todos os sofrimentos que Ele quiser 
                enviar-vos, em acto de reparação pelos pecados com que Ele é ofendido e de súplica 
                pela conversão dos pecadores? – Sim, queremos! – Ides, pois, ter muito que sofrer, 
                mas a graça de Deus será o vosso conforto."
              </p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ color: '#333', marginBottom: '1rem' }}>Segunda aparição, Cova da Iria, 13 de junho de 1917</h4>
              <p style={{ marginBottom: '1rem' }}>
                Na segunda aparição, Nossa Senhora pede que eles aprendam a ler. Ela também revela 
                que em breve levará Jacinta e Francisco, mas Lúcia ficará por mais tempo para 
                sofrer pelos pecadores e propagar a devoção ao Imaculado Coração de Maria.
              </p>
              <p>
                "À frente da palma da mão direita de Nossa Senhora, estava um coração cercado de 
                espinhos que pareciam estarem-lhe cravados. Compreendemos que era o Imaculado 
                Coração de Maria, ultrajado pelos pecados da humanidade, que queria reparação."
              </p>
            </div>

            {/* Continue com as outras aparições seguindo o mesmo padrão... */}
            
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ color: '#333', marginBottom: '1rem' }}>Sexta aparição, Cova da Iria, 13 de outubro de 1917: o Milagre do Sol</h4>
              <p style={{ marginBottom: '1rem' }}>
                Em 13 de outubro de 1917, acontece o milagre prometido por Nossa Senhora. Cerca 
                de 70 mil pessoas se encontravam no local, entre elas jornalistas, fotógrafos e 
                a imprensa internacional. Depois de uma chuva torrencial, acontece a "dança do sol", 
                nome popular dado ao milagre.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                "O astro assumiu várias cores, pôde ser visto a olho nu e começou a girar em 
                torno de si mesmo, parecendo aproximar-se da Terra. Quando este acontecimento 
                extraordinário cessou, as roupas das pessoas, que antes estavam ensopadas, se secaram."
              </p>
              <p>
                Dessa forma, muitas pessoas que ali estavam creram e foram curadas de enfermidades 
                graves. Nessa ocasião, Nossa Senhora também insiste na oração do Terço todos os 
                dias e pede que Nosso Senhor não seja mais ofendido. Além disso, a Virgem faz 
                outro pedido a Lúcia: "Quero dizer-te que façam aqui uma capela em Minha honra, 
                que sou a Senhora do Rosário, que continuem sempre a rezar o Terço todos os dias"
              </p>
            </div>
          </div>

          {/* Adicione as demais seções seguindo o mesmo padrão... */}

        </div>
      </section>

      <Footer />
    </div>
  );
}