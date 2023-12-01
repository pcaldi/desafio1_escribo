# Primeiro Desafio Técnico Escribo

## Projeto de Somatório de Números Divisíveis por 3 ou 5 em JavaScript

Este projeto contém uma função em JavaScript que calcula o somatório de todos os valores inteiros divisíveis por 3 ou 5 abaixo de um número fornecido.

### Como Usar

1. Clone este repositório:

```bash
git clone https://github.com/pcaldi/desafio1_escribo.git
```

### Navegue até o diretório do projeto:
```bash
cd desafio1_escribo
```
### Execute o script usando Node.js:
````bash
node main.js
````

### Exemplo de uso

```bash
function divisiveis3e5(numero) {
    let somatorio = 0;
    for (let i = 0; i < numero; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            somatorio += i;
        }
    }
    return somatorio;
}

const numeroInformado = 10; <--- Aqui deve ser informado o número desejado
const resultado = divisiveis3e5(numeroInformado);
console.log(`O somatório dos números divisíveis por 3 ou 5 abaixo de ${numeroInformado} é: ${resultado}`);
```
