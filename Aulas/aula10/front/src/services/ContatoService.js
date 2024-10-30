import axios from "axios";

const url = import.meta.env.VITE_URL_API;

function carregarContatos() {
  const dados = [];
  return axios
    .get(url)
    .then((response) => {
      return { sucesso: true, dados: response.data };
    })
    .catch((error) => {
      return { sucesso: false, mensagem: error.message };
    });
}

function criarContato(contato) {
  return axios
    .post(url, contato)
    .then((response) => {
      return { sucesso: true, dados: response.data };
    })
    .catch((error) => {
      return { sucesso: false, mensagem: error.message };
    });
}

function atualizarContato(contato) {
  return axios
    .put(`${url}/${contato.id}`, {
      nome: contato.nome,
      telefone: contato.telefone,
    })
    .then(response => {return {sucesso: true, dados: response.data}})
    .catch(error => {return {sucesso:false, mensagem: error.message}});
}

function removerContato(id) {
  return axios
    .delete(`${url}/${id}`)
    .then((response) => {
      return { sucesso: true, dados: response.data };
    })
    .catch((error) => {
      return { sucesso: false, mensagem: error.message };
    });
}

function obterContato(id) {
  return axios
    .get(`${url}/${id}`)
    .then((response) => {
      return { sucesso: true, dados: response.data };
    })
    .catch((error) => {
      return { suceso: false, mensagem: error.message };
    });
}

export { carregarContatos, criarContato, removerContato, obterContato, atualizarContato };
