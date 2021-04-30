## Projeto

Teste desenvolvido para a [Sunne](https://www.sunne.com.br/). <br />

## Tecnologias utilizadas 🚀

<ul>
    <li><a href="https://reactjs.org/" target="_blank">React.js</a></li>
    <li><a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a></li>
    <li><a href="https://nextjs.org/" target="_blank">Next.Js</a></li>
    <li><a href="https://sass-lang.com/" target="_blank">Sass</a></li>
</ul>


<br />
<img src="./public/dash.png" alt="print" height=400 width=800/>


## Executar a aplicação

Em caso de download do projeto você precisará baixar as dependências:

**Necessário:** Yarn , utilize Yarn install

<ul>
 <li>Para iniciar o projeto, siga os passos abaixo:</li>
</ul>

```
1 - Primeiro abra no terminal a pasta do backend e execute yarn dev
2 - Dentro desta aplicação frontend execurte yarn dev
```

## Usuário: marcelo@gmail.com
## Senha: 123456

## Estrutura Next.Js

<p>1 - Escolhi o Next.Js para fazer o teste é uma ferramenta nova que aprendi e estou gostando bastante juntamente com Typescript</p>
<p>2 - Na Pasta Public está todas as imagens da aplicação, no Next tudo que está na pasta public acessivel para todas a aplicação</p>
<p>3 - Dentro de Src está todas as paginas, componentes, configuração de acesso a api, estilos</p>
<p>3 - Cada componete dentro da Pages no Next é uma rota da aplicação</p>
<p>
4 - A aplicação toda é baseado no CSS Modules do Next.js que é uma forma de isolar as classes css<br/>
para que não entre em confilto se houver classes repetidas, a classe so é visivel aonde é referenciada <br/>
para isso é necessario apos o nome do aquivo e antes da extensão .css no casdo aqui .scss tulizar modules.
</p>
<p>
5 - Dentro styles tem os estilos globais da aplicação, variaveis css, calculo de responsividade ref a tamanhos de fonte, fonte poppins.
</p>

## Paginas

<p>
1 - Login: Na página de login eu tenho uma imagem no canto direto que vai ser ajustando conforme as dimnensões na tela,<br/>
tem um formulario que está submetido a um funcão que manda um post para api com email e senha pega a resposta e seta os<br/>
dados no cookies para autenticação, o formulario importa o componete de input que geralmente eu utilizo esse modelo de input<br/>
que aprendi , as tipagens as propriedades que ele recebe, costumo usar como modelo, tem um Sweetalert caso senha ou email for<br/>
digitado errado. Os cookies são verificados nas páginas atraves da função getInitialProps()
</p>
<br/>

<p>
2 - A página Select User é bem simples ela apenas serve pro usuario informa qual o perfil dele.
</p>
<br/>

<p>
3 - Ao lado das proximas telas tem o componente sideBar que quando as dimensões da tela são referente <br/>
a mobile se transforma em um Header.
</p>
<br/>

<p>
4 - Temos a página home que é o Dashbord que tem a sidebar explicado acima, importa os componentes cards <br/>
importa o componente de tabela, importa o grafica que utilizei a bibliote indica o chart.Js um grafico <br/>
bem simples igual o exemplo da documnetação alterei apenas o estilo.
</p>
<br/>

<p>
5 - Temos a página register que é a tela que cadastro de usuario, tem a side Sidebar, importa os inputs, <br/>
checkbox e dois botões
</p>
<br/>

## Usuário: marcelo@gmail.com
## Senha: 123456




