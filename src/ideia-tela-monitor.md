# Ideia da tela de análise do monitor

Fluxo: **Curso → módulo → clica na atividade → tela de análise** (não o quiz do aluno).

## Resumo no topo

- Título da atividade, quantidade de questões e XP total
- Quantos alunos enviaram (ex.: 18 de 24)
- Média de acertos da turma

## Por questão

O monitor vê o **enunciado** e as **alternativas**, com a correta destacada.

Para cada questão, uma barra mostra quantos alunos marcaram cada opção. Assim dá para ver a dificuldade sem um campo extra no diagrama: se pouca gente acerta, ou se uma alternativa errada concentra muitos votos, a questão está difícil ou o enunciado está ambíguo.

Exemplo ilustrativo (Q2 — derivada do produto, 18 envios):

| Alternativa | Alunos | Situação |
| --- | --- | --- |
| sen(x) + x·cos(x) | 5 | correta |
| x·cos(x) | 8 | distratora mais marcada |
| sen(x) · cos(x) | 4 | |
| cos(x) | 1 | |

## Lista por aluno na mesma tela

| Aluno | Q1 | Q2 | Q3 | Q4 | Q5 | Pontos |
| --- | --- | --- | --- | --- | --- | --- |
| Ana Souza | A | A | C | B | A | 12 |
| Bruno Lima | A | B | C | B | D | 6 |
| Carla Nunes | A | A | A | B | A | 15 |

Cada célula é a alternativa marcada. Clicar no nome abre o detalhe da tentativa: enunciado, o que ele marcou e o gabarito lado a lado.

## De onde vêm os dados

- Enunciado e alternativas: classes `Questao` e `Alternativa`
- Quem fez a atividade: classe `Tentativa`
- O que cada um marcou: classe `Resposta`

O monitor não precisa de ligação direta com o aluno. Ele chega pelo curso e, na atividade, pelas tentativas.
