
# Recuperação Atividade Avaliativa III - Prática

- Curso - Desenvolvimento de Sistemas
- Unidade Curricular - Lógica de Programação
- Docente - Gustavo Roberto de Souza

## Orientações Gerais
- A avaliação deverá ser realizada individualmente.
- Não é permitido o uso do celular durante a realização da atividade.
- Cada questão vale 2 pontos.
- Conceitos de entrada e saída de dados, variáveis, operadores e estruturas condicionais.
- A entrega deverá ser feita no AVA, enviando apenas o link do repositório do github.

## Passo-a-Passo (Clonar e Entrega)
1. Você deve fazer um fork desse repositório, na parte superior dessa página clique na botão de fork. 
2. Depois disso, você deve clonar o repositório para o seu computador, usando o seguinte comando.
   1. Selecione uma pasta no computador.
   2. Abra o CMD (Terminal).
   3. Execute o seguinte comando `git clone <url_do_repositório>`
3. Abra no seu VS Code a pasta do projeto.
4. Desenvolva os exercícios.
5. Ao finalizar você precisa comittar e enviar novamente para o github suas modificações.
   1. Primeiro precisamos adicionar as alterações ao stage, usando o comando  `git add .`.
   2.  Depois disso, você vai de fato commitar, usando o comando `git commit -m "sua mensagem"`.
   3.  Por fim, você precisa fazer push para o github, com o comando `git push origin master`.
6. Por fim, você deve copiar o link do seu repositório e fazer o envio no AVA. 
   1. Você deve adicionar como comentário na entrega do AVA.

## Questões

### Questão 01
Escreva um algoritmo que recebe três números inteiros e após isso, mostre-os em ordem crescente (do menor para o maior).
Por exemplo, caso os tres números sejam 5,7,2. O algoritmo deve apresentar 2,5,7.

---

### Questão 02
Você foi contratado para desenvolver o sistema de notas do carnaval 2025. Você precisa receber 6 notas de 0 à 10. Dessas notas, 
devem ser desconsideradas duas notas, a maior e a menor. Ao final, o algoritmo deve apresentar a média com as outras 4 notas
restantes.

---

### Questão 03
Você precisa desenvolver um algoritmo para calcular a pontuação de um jogador em um jogo de futebol. Nesse momento será analisada
apenas a quantidade de gols, passes certos e passes errados. 
- Cada Gol: 50 Pontos
- Cada Passe Certo: 10 Pontos
- Cada Passe Errado: -5 Pontos
  
Você deve solicitar essas informações ao usuário e após isso, o algoritmo deve calcular a pontuação do jogador e informar se o jogador
foi bem ou mal na partida, levando como base a seguinte tabela.
- Pontuação < 50 - Péssima partida.
- Pontuação de 50 até 100 - Partida ruim.
- Pontuação de 100 até 150 - Fez o básico
- Pontuação de 150 até 200 - Foi bem na partida
- Pontuação acima de 200 - Jogou demais

---

### Questão 04
Crie um algoritmo para um calcular o valor de uma hospedagem. Você deve solicitar ao usuário a quantidade de diárias e também a idade
do hospede. Com essas informações você calcular o valor total da diária com base na tabela de preço abaixo. Além disso, você deve levar 
em consideração que caso a pessoa tenha mais de 60 anos, ela terá um desconto de 20%. Ao final o algoritmo deve informar o valor total
da hospedagem.
- Menor ou igual a 5 dias - R$100,00 a diária
- De 6 até 10 dias - R$90,00 a diária
- A partir de 11 dias - R$80,00 a diária

---

### Questão 05
Você deve desenvolver um algoritmo para conversão de temperaturas. Você deve solicitar ao usuário a unidade de medida de origem, a 
temperatura, e a unidade de medida para qual deseja fazer a conversão. Nesse momento você deve levar em consideração apenas 3 unidades
de medida Celsius, Kelvin e Fahrenheit. No final o algoritmo deve informar a temperatura na unidade de medida escolhida.

Celsius para Fahrenheit  = `F = (C * 1.8) + 32`
Fahrenheit para Celsius  = `C = (F - 32) * (5/9)`

Celsius para Kelvin = `K = C + 273.15`
Kelvin para Celsius = `C = K - 273.15`

Celsius para Kelvin = `K = (F - 32) * (5/9) + 273.15`
Kelvin para Fahrenheit = `F = (K - 273.15) * 1.8 + 32`

---
