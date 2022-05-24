// Limpa valores do formulário de cep.
const limpaFormCep = () => {
  $("#rua").val("");
  $("#bairro").val("");
  $("#cidade").val("");
  $("#uf").val("");
}

//Atualiza os campos com os valores da consulta ao API
const preencheFormCep = (endereco) => {
  $("#rua").val(endereco.rua);
  $("#bairro").val(endereco.bairro);
  $("#cidade").val(endereco.cidade);
  $("#uf").val(endereco.uf);
}



