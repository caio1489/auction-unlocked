# Remix of Auction Masterclass

obs ta todos os prompts escritos com o que quero, mas tambem vou deixar aqui o URL da pagina para voce comparar detalhe a detalhe pq quero uma pagina exatamente igual a essa que vou mandar mas eu quero tambem! que voce deixe o mesmo design mas com minha id visual que e o que deixei mencionado aqui abaixo!!!! segue o url e logo em seguida o prompt:

Url da pagina:

https://meuprimeirolow.com.br/?utm_source=Instagram&utm_medium=Vendas&utm_id=Bio

Prompt:

PROMPT MESTRE PARA O LOVABLE

Objetivo do projeto

Crie uma landing page de venda direta, altamente profissional, responsiva e orientada à conversão para o produto Mega Aulão ao Vivo sobre Leilões, usando como referência estrutural a engenharia reversa incluída no ZIP e utilizando exclusivamente os ativos visuais fornecidos na pasta.

A página deve preservar a lógica narrativa, o nível de impacto visual, a cadência de espaçamento, a hierarquia tipográfica e a experiência de conversão da página de referência, mas deve ser uma nova página com identidade, copy, imagens e oferta próprias para o nicho de leilões.

O ZIP anexado contém três documentos de engenharia da página, a copy completa em PDF, a paleta de cores e todas as imagens. Antes de implementar, leia os três documentos existentes dentro de:

Arquivos pagina/Auditoria da pagina que queremos/

Leia especificamente:

engenharia_reversa_meu_primeiro_low.md

resultado_html.md

auditoria_css.md

Leia também:

Arquivos pagina/Copy da pagina/Documento sem título.pdf

Arquivos pagina/Paleta de cores/Paleta de cores.docx

Não edite, renomeie, apague ou substitua os documentos do ZIP. Eles devem ser usados apenas como especificação de design e conteúdo.

Regra principal sobre os ativos

Use as imagens fornecidas no ZIP. Não crie imagens novas por IA, não substitua os ativos por stock photos, não invente URLs e não use placeholders visuais quando existir um ficheiro correspondente na pasta.

Durante a implementação, procure os ficheiros pelos nomes literais abaixo. Caso o Lovable precise copiar os ficheiros para a pasta pública do projeto, preserve os nomes dos ficheiros ou crie uma tabela interna de mapeamento que mantenha o nome original como referência.

Mapa geral de localização

Função

Localização no ZIP

Ficheiro

Logo

Arquivos pagina/Fotos Pagina de venda/

Logo sem fundo da pagina.png

Imagem principal do hero

Arquivos pagina/Fotos Pagina de venda/

Foto que vai no lugar do celular no topo.png

Retrato do expert 1

Arquivos pagina/Fotos Pagina de venda/Foto do expert/

Foto do expert 1.jpg

Retrato do expert 2

Arquivos pagina/Fotos Pagina de venda/Foto do expert/

Foto do expert 2.jpg

Retrato do expert 3

Arquivos pagina/Fotos Pagina de venda/Foto do expert/

Foto do expert 3.jpg

Retrato do expert 4

Arquivos pagina/Fotos Pagina de venda/Foto do expert/

Foto do expert 4.jpg

Resultado 1

Arquivos pagina/Fotos Pagina de venda/Fotos dos itens arrematados Resultado/

Gol.webp

Resultado 2

Arquivos pagina/Fotos Pagina de venda/Fotos dos itens arrematados Resultado/

apto jardim paulista.webp

Resultado 3

Arquivos pagina/Fotos Pagina de venda/Fotos dos itens arrematados Resultado/

apto ribeirao preto.webp

Resultado 4

Arquivos pagina/Fotos Pagina de venda/Fotos dos itens arrematados Resultado/

bmw.webp

Entregável 1

Arquivos pagina/Fotos Pagina de venda/Foto entregaveis/

entregavel-10-sites-titulo.png

Entregável 2

Arquivos pagina/Fotos Pagina de venda/Foto entregaveis/

entregavel-guia-titulo.png

Entregável 3

Arquivos pagina/Fotos Pagina de venda/Foto entregaveis/

0SIWZnkc3Wu6WzlGdePSEF-img-1_1786639691000_na1fn_ZW50cmVnYXZlbC1jb21wcmFyLXBhcmNlbGFkby1ib2xldG8tbGVpbGFv.webp

Entregável 4

Arquivos pagina/Fotos Pagina de venda/Foto entregaveis/

entregavel-como-identificar-leilao-falso-3-linhas.png

Entregável 5

Arquivos pagina/Fotos Pagina de venda/Foto entregaveis/

entregavel-carros-titulo.png

Entregável 6

Arquivos pagina/Fotos Pagina de venda/Foto entregaveis/

entregavel-comprar-imoveis-desocupados-verde.png

Imagem geral dos entregáveis

Arquivos pagina/Fotos Pagina de venda/

foto com todos entregaveis .png

Direção visual

A identidade visual deve ser sofisticada, forte, limpa e profissional, misturando autoridade jurídica/financeira com impacto de página de vendas. A estética deve usar fundos escuros, superfícies cinza-claro, textos de alto contraste, verde de destaque e imagens com composição premium.

Não faça uma página genérica de template. A página precisa parecer uma oferta digital premium para arrematação em leilões, com hierarquia clara, ritmo visual, blocos de prova, cartões de entregáveis e uma narrativa que conduza o visitante até o CTA.

Paleta obrigatória

Use estes valores HEX como tokens globais:

CSS

:root { --color-dark: #232222; --color-dark-2: #252323; --color-light: #f3f3f3; --color-accent: #2f9e33; --color-text-on-light: #252323; --color-text-on-dark: #FDFDFD; --color-border-soft: #DBD8D8; }

O verde #2f9e33 deve substituir completamente a função visual do laranja/coral da página de referência. Use-o em faixas, botões, números de destaque, palavras-chave, ícones, marcadores, linhas de foco, badges, separadores e estados ativos.

Não use laranja, vermelho ou roxo em CSS. Um ativo de imagem pode conter cores próprias, mas a interface não deve introduzir outras cores fortes fora dos ativos fornecidos.

Tipografia obrigatória

Use DM Sans como fonte principal, com fallback Arial, sans-serif. A tipografia deve ser pesada e moderna, com títulos bold, line-height compacto na primeira dobra e corpo de texto confortável nas secções longas.

Use, como orientação inicial:

CSS

body { font-family: 'DM Sans', Arial, sans-serif; color: #252323; background: #f3f3f3; } h1, h2, h3 { font-family: 'DM Sans', Arial, sans-serif; font-weight: 700; letter-spacing: -0.025em; }

Ajuste os tamanhos responsivamente usando clamp(). A headline do hero deve ser grande no desktop e continuar impactante no mobile sem ficar ilegível.

Arquitetura da página

Implemente a página numa única rota de landing page com scroll vertical. Divida a interface em componentes reutilizáveis e bem organizados:

HeaderLogo

UrgencyBanner

HeroSection

ResultsProofSection

PainAgitationSection

SolutionBridgeSection

BenefitsSection

DeliverablesSection

DeliverablesSummarySection

AudienceFitSection

OfferStackSection

AccessStepsSection

ChoiceSection

AuthoritySection

FinalOfferSection

FaqSection

LegalFooter

Cada secção deve ter separação vertical generosa. Utilize contentor máximo aproximado de 1120 px para secções largas e 800 px para copy central. Em mobile, utilize padding lateral de aproximadamente 24 px.

Secção 1 — Logo e faixa de impacto

No topo, centralize o ficheiro:

Arquivos pagina/Fotos Pagina de venda/Logo sem fundo da pagina.png

Use o logo com uma largura responsiva controlada. Não o estique, não o recorte e não o coloque demasiado pequeno.

Logo abaixo, crie uma faixa horizontal de impacto com fundo #2f9e33 e texto #FDFDFD:

Aula ao vivo

Hoje 20h01

A faixa deve ser forte, limpa e ocupar toda a largura da viewport. Pode utilizar duas linhas no mobile.

Secção 2 — Hero principal

Crie uma primeira dobra centralizada com fundo #f3f3f3.

Use a seguinte pergunta de dor:

Você está travado para arrematar no leilão?

Use a headline exatamente nesta ideia, mantendo a copy em português e a estrutura visual de destaque:

Copie minha estratégia para comprar imóveis e veículos com 25% de entrada + 60x no boleto, sem juros e com 60% de desconto no leilão.

Destaque em verde #2f9e33 as expressões:

25% de entrada

60x no boleto

60% de desconto

Abaixo da headline, apresente uma pill branca ou quase branca com borda subtil e texto:

Sua primeira arrematação ainda essa semana

O ativo hero obrigatório é:

Arquivos pagina/Fotos Pagina de venda/Foto que vai no lugar do celular no topo.png

Esta imagem deve substituir completamente o smartphone da página de referência. Ela mostra um MacBook com o expert no ecrã. Centralize-a no hero, mantenha a proporção original e reserve o espaço da imagem para evitar layout shift.

No desktop, o MacBook deve ter largura controlada e presença central. No mobile, deve ocupar quase toda a largura útil com margens laterais, sem distorção e sem crop que elimine o MacBook ou o expert.

Secção 3 — Prova de resultados reais

Crie uma secção com o título:

Veja resultados reais de quem já aplicou esse método e comprou parcelado no leilão.

Use como subtítulo:

4 exemplos — com tabela, lance, entrada e desconto.

Crie quatro blocos de prova, cada um com imagem, título “RESULTADO 01”, “RESULTADO 02”, “RESULTADO 03” ou “RESULTADO 04”, e espaço visual para informações de lance, entrada e desconto.

Associe os ativos nesta ordem:

1.Arquivos pagina/Fotos Pagina de venda/Fotos dos itens arrematados Resultado/Gol.webp

2.Arquivos pagina/Fotos Pagina de venda/Fotos dos itens arrematados Resultado/apto jardim paulista.webp

3.Arquivos pagina/Fotos Pagina de venda/Fotos dos itens arrematados Resultado/apto ribeirao preto.webp

4.Arquivos pagina/Fotos Pagina de venda/Fotos dos itens arrematados Resultado/bmw.webp

Desktop: utilize uma composição elegante em grid ou blocos alternados. Mobile: empilhe os quatro resultados verticalmente para garantir leitura das tabelas e dos textos.

Secção 4 — Agitação da dor

Crie uma secção de contraste, preferencialmente com fundo #232222, títulos claros e marcadores verdes.

Use:

Fala a verdade…

Depois:

Você já quis fazer sua primeira arrematação, mas trava na hora de dar o lance!

Apresente visualmente as quatro objeções:

•Não sei se esse leilão é falso.

•Será que meu dinheiro vai ficar travado durante meses?

•E se o imóvel estiver ocupado?

•Será que o carro tem problemas mecânicos?

O ativo disponível mais próximo da imagem de uma pessoa com cabeça baixa é:

Arquivos pagina/Fotos Pagina de venda/Foto do expert/Foto do expert 2.jpg

Use esse retrato como imagem visual da agitação, caso não exista no ZIP um ficheiro separado com o nome explícito de homem de cabeça baixa. Coloque os quatro tópicos ao lado da imagem no desktop e abaixo/ao lado de forma responsiva no mobile. Os tópicos devem ser elementos HTML reais, não texto rasterizado, para manter acessibilidade e responsividade.

Não invente uma nova imagem e não use stock photo.

Secção 5 — Ponte para a solução

Use a copy:

Você quer fazer sua primeira arrematação no leilão, mas toda vez que tenta arrematar, você trava. E aí passa mais um mês, mais dois, mais seis… e você nunca sai do lugar.

Depois:

Mas e se você pudesse copiar a minha estratégia e arrematar ainda essa semana, sem precisar garimpar, analisar ou pesquisar do zero, e começar a achar oportunidades com até 70% de desconto e parcelado, isso te ajudaria?

Destaque em verde as expressões de resultado, desconto e velocidade.

Secção 6 — Benefícios do aulão

Use o título:

Com um aulão ao vivo você vai

Apresente quatro benefícios em cards ou blocos de alto contraste:

1.Destravar a sua primeira arrematação de uma vez por todas

2.Encontrar imóveis reais desocupados com grandes descontos

3.Comprar carros com até 70% de desconto e sem batida

4.Parar de adiar e finalmente começar a lucrar no mundo dos leilões

Utilize marcadores, checks ou ícones em #2f9e33.

Secção 7 — Entregáveis

Use:

E tem mais…

Veja tudo que você vai receber ao vivo

Crie seis cards ou blocos de entregáveis. Cada card precisa ter a imagem correta, título, descrição e uma hierarquia clara.

Entregável 1

Imagem:

Arquivos pagina/Fotos Pagina de venda/Foto entregaveis/entregavel-10-sites-titulo.png

Título:

10 sites de leilão: na sua mão

Descrição:

Analisados e validados por advogados para você não ter dor de cabeça.

Entregável 2

Imagem:

Arquivos pagina/Fotos Pagina de venda/Foto entregaveis/entregavel-guia-titulo.png

Título:

Guia para identificar boas oportunidades

Descrição:

Você receberá o guia completo da lógica usada por Paulo Machado para identificar boas oportunidades.

Entregável 3

Imagem:

Arquivos pagina/Fotos Pagina de venda/Foto entregaveis/0SIWZnkc3Wu6WzlGdePSEF-img-1_1786639691000_na1fn_ZW50cmVnYXZlbC1jb21wcmFyLXBhcmNlbGFkby1ib2xldG8tbGVpbGFv.webp

Título:

Como comprar parcelado no leilão

Descrição:

Descubra uma estratégia validada para comprar dando 25% de entrada e mais 60x no boleto.

Entregável 4

Imagem:

Arquivos pagina/Fotos Pagina de venda/Foto entregaveis/entregavel-como-identificar-leilao-falso-3-linhas.png

Título:

Como identificar se um leilão é real ou falso

Descrição:

Descubra como analisar sozinho se um leiloeiro é real ou falso em menos de 5 minutos.

Entregável 5

Imagem:

Arquivos pagina/Fotos Pagina de venda/Foto entregaveis/entregavel-carros-titulo.png

Título:

Como comprar carros sem batida

Descrição:

Entenda como comprar carros que vão lhe evitar dor de cabeça e problemas após a compra.

Entregável 6

Imagem:

Arquivos pagina/Fotos Pagina de venda/Foto entregaveis/entregavel-comprar-imoveis-desocupados-verde.png

Título:

Como comprar imóveis desocupados

Descrição:

Você receberá um guia personalizado para identificar se um imóvel está desocupado ou ocupado para evitar problemas.

Desktop: utilize grid de duas colunas ou alternância sofisticada entre imagem e texto. Mobile: use uma coluna, sempre na sequência imagem → título → descrição.

Secção 8 — Imagem geral dos entregáveis

Use o título:

Ainda não acabou!

Você também vai receber:

Use o ficheiro:

Arquivos pagina/Fotos Pagina de venda/foto com todos entregaveis .png

Esta é a imagem final com todos os entregáveis. Ela deve aparecer em dois locais narrativos equivalentes aos dois locais em que a imagem final era repetida na página de referência. Reutilize exatamente o mesmo ativo nos dois lugares. Não duplique o ficheiro com outro nome e não invente uma segunda imagem.

Secção 9 — Público ideal

Use:

Esse aulão ao vivo é para você que:

Apresente estes pontos:

•Quer fazer sua primeira arrematação ainda esse mês

•Trava na hora de arrematar e nunca dá o lance no dia do leilão

•Não sabe diferenciar os leilões verdadeiros dos falsos

•Já comprou outros cursos sobre leilão e continua sem arrematar

•Quer comprar imóveis ou veículos parcelado no leilão

•Não tem tempo nem cabeça para comprar carros batidos de leilão e reformar

Depois use:

Enfim…

Se você quer destravar sua primeira arrematação ainda esse mês, esse aulão ao vivo é pra você.

Secção 10 — Recapitulação e ancoragem de preço

Use:

Recapitulando tudo que você vai receber com o aulão ao vivo sobre leilão

Apresente os itens com os valores:

Item

Valor

10 sites de leilão: na sua mão

R$ 47

Guia para identificar boas oportunidades

R$ 67

Combo: 2 estratégias para ter renda passiva com leilões

R$ 97

Como identificar se um leilão é falso

R$ 47

Como comprar carros sem batida

R$ 97

Como comprar imóveis desocupados

R$ 77

Tudo isso deveria custar

R$ 432

Use o efeito visual de ancoragem: valores individuais mais discretos, total de R$ 432 destacado como valor acumulado e oferta final muito mais forte.

Secção 11 — Oferta principal

Use:

Mas, somente hoje, você pode ter acesso ao mega aulão sobre leilões por um valor muito mais acessível:

Depois apresente:

Mega aulão ao vivo

R$ 29,90

Crie um botão grande e destacado:

Quero reservar minha vaga

O botão deve usar:

CSS

background: #2f9e33; color: #FDFDFD; border: none; border-radius: 999px; font-weight: 700; min-height: 56px; padding-inline: 32px;

O botão deve ter hover subtil, foco acessível e boa área de toque no mobile. Não ligar o botão a um checkout inventado. Use um placeholder de configuração claramente identificável, por exemplo CHECKOUT_URL_A_DEFINIR, ou deixe o href configurável num único local do código.

Abaixo do botão:

Compre agora e receba seu acesso no e-mail imediatamente.

Secção 12 — Processo de acesso

Crie três passos visualmente claros:

Acesse seu e-mail

Assim que finalizar a compra, você vai receber seu acesso no e-mail.

Acesso ao produto

Você vai receber todos os entregáveis imediatamente.

Tudo pronto!

Agora é só copiar e ter sua primeira arrematação pronta ainda esse mês.

Use cards ou uma sequência horizontal no desktop e uma coluna vertical no mobile. Ícones podem ser criados em CSS ou com ícones de interface simples; não invente novos ficheiros de imagem.

Secção 13 — Duas escolhas

Use o título:

Agora você tem duas escolhas:

Opção 1

Não comprar seu carro de leilão nunca

Continuar travado, adiando a sua primeira arrematação pra semana que vem, pro próximo mês, pra “quando der tempo”.

Opção 2

Copiar e colar o modelo validado

Acessar o aulão ao vivo e fazer sua primeira arrematação ainda esse mês.

Finalize com:

Eu sei (e você também sabe): a opção 2 é a mais inteligente.

Depois inclua um CTA repetido para a oferta:

Então clique no botão abaixo e acesse agora mesmo o Mega Aulão ao Vivo sobre Leilões.

Visualmente, a Opção 1 pode usar um tratamento mais neutro/escuro e a Opção 2 deve receber maior destaque verde, sem exagerar em efeitos.

Secção 14 — Autoridade do expert

Use o título:

O criador do aulão ao vivo é Paulo Machado

Subtítulo:

De R$ 1 milhão em dívidas a 7 negócios milionários

Copy:

Paulo Machado foi de R1milha~oemdıˊvidaspara7negoˊciosmilionaˊrios.HojeeˊarrematanteprofissionalcommaisdeR 1 milhão em dívidas para 7 negócios milionários. Hoje é arrematante profissional com mais de R1milha~oemdıˊvidaspara7negoˊciosmilionaˊrios.HojeeˊarrematanteprofissionalcommaisdeR 100 milhões em arremates.

Foi aprovado 14 vezes em 14 estados na prova objetiva do concurso mais concorrido e cobiçado do Brasil.

Advogado pela OAB/DF. Pós-graduado em Direito Constitucional, Administrativo, Civil e Processo Civil.

Foi Tabelião de Notas e Protesto e Registrador de Imóveis, Títulos e Documentos, Pessoas Jurídicas e Pessoas Naturais.

Escritor de 5 livros jurídicos e 2 livros de desenvolvimento pessoal. Construtor e Incorporador, criador do maior centro de eventos de Alphaville-SP. Embaixador de Cristo.

Use um retrato da pasta:

Arquivos pagina/Fotos Pagina de venda/Foto do expert/Foto do expert 1.jpg

Como variações disponíveis, mantenha também:

Foto do expert 2.jpg

Foto do expert 3.jpg

Foto do expert 4.jpg

Se necessário, use o retrato 1 como principal na autoridade e o retrato 2 na secção de agitação. Não misture o papel dos retratos com as imagens dos entregáveis.

Secção 15 — CTA final

Repita a oferta:

Mega aulão ao vivo sobre leilões

R$ 29,90

Botão:

Quero participar

Use o mesmo estilo do botão principal, com fundo #2f9e33 e texto #FDFDFD.

Secção 16 — Perguntas frequentes

Crie um accordion acessível com quatro perguntas:

Qual é a forma de pagamento?

Você pode fazer o pagamento pelo PIX ou cartão de crédito.

O pagamento é seguro?

Sim, o pagamento é 100% seguro, onde utilizamos uma das maiores plataformas de vendas do mundo, a Kiwify.

Funciona pra mim?

Sim, o aulão ao vivo funciona para qualquer pessoa.

Como vou acessar o mini curso?

Assim que o seu pagamento for concluído, enviaremos um e-mail com todos os dados de login para você acessar o produto junto com todos os bônus.

O accordion deve funcionar por teclado, apresentar estado aberto/fechado claro e não causar overflow horizontal.

Responsividade obrigatória

A página precisa ser criada mobile-first e validada em pelo menos 390 px, 430 px, 768 px, 1024 px e 1440 px.

Regras mobile

Use uma coluna única, padding horizontal de 24 px, cards empilhados e botões quase à largura total. O logo deve continuar centralizado. A headline pode ter quatro ou mais linhas, mas precisa permanecer legível. O MacBook deve ocupar quase toda a largura do contentor sem deformação. Os quatro resultados devem ser empilhados. Os entregáveis devem aparecer na sequência imagem → título → descrição. O bloco do expert deve colocar a imagem acima ou ao lado da copy, conforme a largura disponível.

Não permitir scroll horizontal. Não usar textos com largura fixa que causem overflow. Não reduzir os botões a uma área de toque pequena. Não esconder a informação essencial da oferta no mobile.

Regras desktop

Use contentor máximo de aproximadamente 1120 px, copy central de aproximadamente 800 px, grids de duas colunas quando houver espaço e imagens grandes com largura controlada. Preserve bastante respiro vertical entre as grandes secções. O hero deve continuar sendo o foco visual da primeira dobra.

Performance e acessibilidade

Use loading="eager" ou prioridade equivalente para logo e imagem hero. Use lazy loading nos resultados, entregáveis e retratos abaixo da primeira dobra. Defina dimensões, aspect-ratio ou contentores reservados para evitar layout shift.

Todos os ativos precisam de alt descritivo. Exemplos:

Logo Mega Aulão ao Vivo sobre Leilões

MacBook com apresentação do expert Paulo Machado

Volkswagen Gol arrematado em leilão

BMW arrematada em leilão

Entregável sobre compra de carros sem batida

Paulo Machado em retrato profissional

Use headings sem saltos de hierarquia. O accordion deve ser acessível. Os botões e links devem ter foco visível. Respeite prefers-reduced-motion se adicionar animações.

Requisitos técnicos de implementação

Use componentes limpos, reutilizáveis e fáceis de editar. Centralize a configuração da oferta num único objeto ou ficheiro, incluindo preço, textos dos CTAs e CHECKOUT_URL_A_DEFINIR, para que o checkout possa ser ligado mais tarde sem procurar em vários componentes.

Não implemente autenticação, área de membros, carrinho, checkout interno ou processamento de pagamento. A página apenas apresenta a oferta e encaminha o CTA para o checkout externo quando o URL real for fornecido.

Não invente depoimentos, números adicionais, nomes de alunos ou promessas além da copy fornecida. Não altere os valores da oferta. Não substitua Kiwify por Hotmart. Não use a copy da página de referência sobre low ticket; use apenas a copy de leilões deste prompt e do PDF.

Checklist final de aceite

Antes de considerar a página concluída, confirme:

1.A página é uma landing page longa, visualmente premium e responsiva.

2.O logo correto aparece no topo.

3.O verde usado pela interface é exatamente #2f9e33.

4.O MacBook substitui o smartphone no hero.

5.Os quatro resultados usam Gol.webp, apto jardim paulista.webp, apto ribeirao preto.webp e bmw.webp.

6.Os seis entregáveis estão associados aos seis ficheiros corretos.

7.foto com todos entregaveis .png aparece nos dois locais finais equivalentes.

8.A secção de agitação utiliza Foto do expert 2.jpg como retrato disponível mais próximo da pessoa com cabeça baixa, com os quatro tópicos em HTML ao lado/abaixo.

9.A autoridade utiliza Foto do expert 1.jpg como retrato principal e mantém as restantes opções disponíveis.

10.A copy apresenta a ancoragem de R432eaofertafinaldeR 432 e a oferta final de R432eaofertafinaldeR 29,90.

11.Os CTAs são “Quero reservar minha vaga” e “Quero participar”.

12.O pagamento é descrito como PIX/cartão pela Kiwify, sem checkout inventado.

13.A FAQ contém as quatro perguntas e respostas definidas.

14.A versão mobile não apresenta overflow horizontal.

15.Os documentos do ZIP não foram alterados.

16.Não foram criados links de imagem inventados.

17.Nenhuma imagem foi substituída por stock photo ou imagem gerada.

18.O resultado final é visualmente mais refinado que um template genérico e mantém a clareza de conversão da referência.

OBS: Mandei o prompt em .md tambem para voce ter nocao de detalhes

segue o link do arquivo ZIP, para voce fazer download e puxar os detahes:

https://drive.google.com/file/d/1e-vMxaw5a1smwOaLmC87_4al9IrC6eqe/view?usp=sharing



Quero que tu execute tudo isso, compare com o url da pagina la em cima e re-compare com o url mobile e desktop para manter tudo fiel so que para nosso nicho com base nas infos que mandei aqui, ok... execute

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://auction-unlocked.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c1a58e92-c6dc-493d-aa20-11ef222b19f1).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
