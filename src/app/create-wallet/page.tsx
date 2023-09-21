export default function TutorialCriarCarteira() {
  return (
    <div className="flex flex-col items-center px-[20%] gap-8 mt-[120px] mb-[50px] text-white ">
      <div className="flex flex-col gap-2">
        <h1 className=" font-Archivo text-xl font-bold tracking-wider leading-normal letter-spacing-1.5">
          O que é uma carteira criptográfica?
        </h1>
        <p className=" font-Archivo text-base tracking-wide leading-normal letter-spacing-1">
          Uma carteira criptográfica é um programa que ajuda você a comprar,
          vender e armazenar sua criptomoeda e (em muitos casos) seus NFTs.
          Pense nisso como seu endereço no blockchain - você pode enviar e
          receber itens dele, ele armazena seus itens e deseja mantê-lo
          bloqueado e seguro. Neste artigo, abordaremos os tipos de carteiras
          criptográficas e como configurar uma.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className=" font-Archivo text-xl font-bold tracking-wider leading-normal letter-spacing-1.5">
          Custodial vs. não custodial
        </h1>
        <p className=" font-Archivo text-base tracking-wide leading-normal letter-spacing-1">
          Existem dois tipos de carteiras criptográficas: carteiras de custódia
          (“hospedadas”) e carteiras sem custódia. As carteiras de custódia são
          gerenciadas por uma empresa terceirizada, enquanto uma carteira sem
          custódia não é. As carteiras de custódia são como manter seus objetos
          de valor em uma instalação de armazenamento, e as carteiras sem
          custódia são como mantê-los em seu cofre em casa. As carteiras de
          custódia, portanto, exigem menos responsabilidade, mas ficam à mercê
          de terceiros (como se o local de armazenamento fosse roubado). As
          carteiras sem custódia oferecem controle total, mas também significam
          que você deve ter muito cuidado (como não perder sua chave ou jogar
          fora acidentalmente algo valioso ao reorganizar seu armário).
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className=" font-Archivo text-xl font-bold tracking-wider leading-normal letter-spacing-1.5">
          Software versus hardware
        </h1>
        <div className="flex flex-col gap-2">
          <p className=" font-Archivo text-base tracking-wide leading-normal letter-spacing-1">
            As carteiras sem custódia incluem carteiras de software e hardware.
          </p>
          <p className=" font-Archivo text-base tracking-wide leading-normal letter-spacing-1">
            Uma carteira de software é um programa que reside no seu computador
            ou no seu navegador de internet. Isso torna as carteiras de software
            uma ótima opção para comprar, vender e transferir NFTs e
            criptomoedas de forma rápida e conveniente.
          </p>
          <p className=" font-Archivo text-base tracking-wide leading-normal letter-spacing-1">
            Uma carteira de hardware é um dispositivo físico que você conecta ao
            seu computador para usar. Como nem sempre está conectado ao seu
            computador ou navegador, é uma ótima opção para armazenamento seguro
            de longo prazo, mas é um pouco menos conveniente para transações
            rápidas ou frequentes.
          </p>
          <p className=" font-Archivo text-base tracking-wide leading-normal letter-spacing-1">
            Carteiras diferentes suportam blockchains diferentes e nem todas as
            carteiras suportam NFTs. Aqui estão algumas carteiras compatíveis
            com OpenSea:
          </p>
        </div>

        <ul className="list-disc list-inside">
          <li className="mb-2 mt-2">Metamask (Ethereum, Polygon, Klaytn)</li>
          <li>Carteira Coinbase (Ethereum, Polygon, Klaytn)</li>
        </ul>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className=" font-Archivo text-xl font-bold tracking-wider leading-normal letter-spacing-1.5">
          Como configurar uma carteira criptográfica?
        </h1>
        <p className=" font-Archivo text-base tracking-wide leading-normal letter-spacing-1">
          O processo de configuração de uma carteira criptográfica difere de
          carteira para carteira, mas, neste exemplo, vamos percorrer o fluxo de
          configuração de uma carteira Metamask. Metamask é uma carteira de
          software sem custódia popular para NFTs.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className=" font-Archivo text-xl font-bold tracking-wider leading-normal letter-spacing-1.5">
          1. Baixe a extensão do navegador da carteira
        </h1>
        <p className=" font-Archivo text-base tracking-wide leading-normal letter-spacing-1">
          Como muitas carteiras, a Metamask possui uma extensão de navegador, um
          aplicativo para iOS e um aplicativo para Android. Você só precisa da
          extensão do navegador para começar, então{" "}
          <a href="https://metamask.io/download/" className="text-blue-500">
            baixe-a
          </a>
          .
        </p>
      </div>

      <div className="w-full">
        <img
          src="/images/MetamaskExample.png"
          className="w-full h-full"
          alt=""
        />
      </div>

      <div className="flex flex-col gap-2 w-full">
        <h1 className=" font-Archivo text-xl font-bold tracking-wider leading-normal letter-spacing-1.5">
          2. Abra a extensão do navegador e siga as instruções
        </h1>
        <p className=" font-Archivo text-base tracking-wide leading-normal letter-spacing-1">
          Abra a extensão depois de instalada. Você será solicitado a começar.
          Escolha a opção de configurar uma nova carteira e siga as instruções.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className=" font-Archivo text-xl font-bold tracking-wider leading-normal letter-spacing-1.5">
          3. Crie e armazene sua frase inicial em um local seguro
        </h1>
        <p className=" font-Archivo text-base tracking-wide leading-normal letter-spacing-1">
          Durante o processo de configuração, você receberá sua frase inicial.
          Certifique-se de seguir as melhores práticas para manter sua carteira
          segura . Armazene sua frase inicial em um local seguro que ninguém
          mais poderá acessar. Nunca compartilhe sua frase-semente com ninguém.
        </p>
      </div>

      <div className="flex flex-col gap-2 w-full">
        <h1 className=" font-Archivo text-xl font-bold tracking-wider leading-normal letter-spacing-1.5">
          4. Conecte sua carteira criptográfica a Vagros
        </h1>
        <p className=" font-Archivo text-base tracking-wide leading-normal letter-spacing-1">
          Depois que sua carteira estiver configurada, você estará pronto para
          conectá-la na Vagros!
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className=" font-Archivo text-xl font-bold tracking-wider leading-normal letter-spacing-1.5">
          Transferir criptomoeda de uma troca de criptomoedas
        </h1>
        <p className=" font-Archivo text-base tracking-wide leading-normal letter-spacing-1">
          Outra opção é comprar criptomoeda usando uma bolsa como Coinbase,
          Binance ou Kraken. Normalmente, quando você compra criptomoeda usando
          uma bolsa, a criptomoeda será depositada em uma carteira de custódia
          gerenciada por essa bolsa, a maioria das quais não é compatível com
          NFTs. Portanto, para financiar sua carteira criptográfica que você
          usará para NFTs, você deve transferir a criptomoeda da carteira de
          troca de custódia para sua outra carteira. Por exemplo, se você
          comprou ETH usando Binance, precisará enviá-lo de sua carteira de
          custódia Binance para sua carteira Metamask para comprar NFTs usando
          esse ETH.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className=" font-Archivo text-xl font-bold tracking-wider leading-normal letter-spacing-1.5">
          Como proteger sua carteira criptográfica
        </h1>
        <p className=" font-Archivo text-base tracking-wide leading-normal letter-spacing-1">
          Assim como qualquer outro objeto de valor, você deve empregar algumas
          práticas recomendadas para manter sua carteira criptográfica segura.
          Aqui estão algumas dicas
        </p>
        <ul className="list-disc list-inside">
          <li className="mb-2 mt-2">
            Não reutilize senhas : certifique-se de que sua senha de carteira
            criptográfica não esteja sendo usada em nenhuma de suas outras
            contas.
          </li>

          <li className="mb-2">
            Proteja sua frase inicial : ao configurar sua carteira, armazene sua
            frase inicial em algum lugar que você não esquecerá, mas que não
            seja facilmente acessível por outras pessoas. Nunca compartilhe sua
            frase-semente com ninguém.
          </li>

          <li className="mb-2">
            Não clique em links que você não reconhece : isso é especialmente
            verdadeiro se alguém lhe enviou um link diretamente.
          </li>
        </ul>
      </div>
    </div>
  );
}
