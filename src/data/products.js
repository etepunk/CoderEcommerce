const produtos = [
  { id: "1", nome: "Soluções em Banco de Dados", categoria: "DBA", preco: 2000.00 },
  { id: "2", nome: "Desenvolvimento em Python", categoria: "Programação", preco: 3000.00 },
  { id: "3", nome: "Infraestrutura de TI", categoria: "InfraEstrutura", preco: 5000.00 },
  { id: "4", nome: "Soluções em AWS", categoria: "AWS", preco: 6500.00 }
];

export const getProdutos = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(produtos), 1000);
  });

export const getProdutoPorId = (id) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(produtos.find(p => p.id === id)), 1000);
  });

export const getProdutosPorCategoria = (categoriaId) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(produtos.filter(p => p.categoria === categoriaId)), 1000);
  });
