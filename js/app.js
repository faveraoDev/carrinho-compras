let somaCompra;
limpar();

function adicionar() {
  //Resgatar o nome do produto e seu valor unitário
  let produto = document.getElementById('produto').value;
  let nomeProduto = produto.split('-')[0];
  let valorUnitario = produto.split('$')[1];

  // Resgatar a quantidade de produtos e calcular o preço
  let quantidade = document.getElementById('quantidade').value;
  let preco = valorUnitario * quantidade;
  
  // Verificar se o produto selecionado é válido
  if (!produto || produto.trim() === "") {
    alert("Selecione um produto válido.");
    return;
  }

  // Verificar se a quantidade inserida é válida
  if (isNaN(quantidade) || quantidade <= 0 || quantidade > 100) {
      alert("Insira uma quantidade válida.");
      return;
  }

  // Atualizar o carrinho de compras
  let carrinho = document.getElementById('lista-produtos');
  carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
  <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">${preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
  </section>`;

  // Atualizar o total da compra e limpar o input quantidade
  let valorTotalCompra = document.getElementById('valor-total');
  somaCompra = somaCompra + preco
  valorTotalCompra.textContent = `${somaCompra.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`;
  document.getElementById('quantidade').value = '';
}

function limpar() {
  somaCompra = 0;
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById('valor-total').textContent = 'R$ 0,00';
}