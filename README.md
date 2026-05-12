# devCard - atividade prática IA2.1

aplicativo desenvolvido cartão de um desenvolvedor mobile, utilizando React Native e Expo Router.

**Autor:** João Pedro F. Chiroli

## estrutura do aplicativo

O aplicativo possui 4 telas conectadas utilizando os métodos de roteamento do Expo Router:

1. **Boas-vindas (`/`)**: Tela inicial de apresentação.
2. **Cadastro (`/cadastro`)**: Formulário com validação de estado para inserção dos dados do desenvolvedor.
3. **Preview (`/preview`)**: Renderização dinâmica do cartão utilizando `useLocalSearchParams`, aplicando lógica condicional para nível de experiência e tema do cartão.
4. **Sucesso (`/sucesso`)**: Tela de finalização do fluxo.

## tecnologias e conceitos aplicados
* react native
* expo router (`push`, `back`, `replace`)
* typeScript
* hook `useState` para controle de formulários
* flexbox layout
* lógica condicional e passagem de parâmetros nas rotas

## Telas (prints)

- [imagem da tela de boas-vindas] (file:///Users/joaopedrochiroli/Downloads/tela-inicial.jpeg)
- [imagem da tela de cadastro] (file:///Users/joaopedrochiroli/Downloads/tela-cadastro.jpeg)
- [imagem da tela de preview] (file:///Users/joaopedrochiroli/Downloads/tela-cartao.jpeg)
- [imagem da tela de sucesso] (file:///Users/joaopedrochiroli/Downloads/tela-sucesso.jpeg)

## como rodar o projeto

```bash
npm install
npx expo start -c
