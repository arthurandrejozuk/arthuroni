# Arthuroni 

Um restaurante de massas, feito em React.js e SCSS


## Resumo

    Um restaurante de massas, com muitas opções de filtro, ordenar em preços, porção,   
    tipos e etc. Com o foco em aprender mais sobre o useState e os estados de componentes e
    um projeto mais organizado na sua estrutura. 

## Página Principal

 - [Cardápio](https://github.com/arthurandrejozuk/arthuroni/blob/master/arthuroni/src/pages/Cardapio/index.tsx) - Página principal


## Componentes principais

 - [Buscador](https://github.com/arthurandrejozuk/arthuroni/blob/master/arthuroni/src/componentes/Buscador/index.tsx) - Cria um componente para filtrar pratos conforme o nome
 - [Filtro](https://github.com/arthurandrejozuk/arthuroni/blob/master/arthuroni/src/componentes/Filtros/index.tsx) - Possui um JSON com os tipos de filtros, organiza-os e seleciona o filtro pelo id
 - [Ordenador](https://github.com/arthurandrejozuk/arthuroni/tree/master/arthuroni/src/componentes/Ordenador) - Ordena os pratos de acordo com a preferência  ~
 - [Item](https://github.com/arthurandrejozuk/arthuroni/blob/master/arthuroni/src/componentes/item/index.tsx) - São os pratos, aqui eles estão em um arquivo JSON, porém ajustado para o componente Item
- [Itens](https://github.com/arthurandrejozuk/arthuroni/blob/master/arthuroni/src/componentes/itens/index.tsx) - A lista de itens passam pelos filtros, que atualizam com a mudança no useEffect
# Main

Todos se unem em [Main](https://github.com/arthurandrejozuk/arthuroni/blob/master/arthuroni/src/componentes/Main/index.tsx)
