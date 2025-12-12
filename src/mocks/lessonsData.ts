// Tipos para as perguntas
export interface Question {
  id: string
  question: string
  options?: string[]
  correctAnswer: string | number
  explanation?: string
}

// Tipo para uma lição
export interface Lesson {
  id: string
  unitId: number
  unit: number
  title: string
  description: string
  questions: Question[]
  xpReward: number
}

// Dados das lições — Beginner JavaScript
export const lessonsData: Lesson[] = [
  {
    id: 'js-beginner-1',
    unitId: 1,
    unit: 1,
    title: 'Variáveis e tipos',
    description: 'Entenda como declarar variáveis e tipos básicos',
    xpReward: 10,
    questions: [
      {
        id: 'q1',
        question: 'Qual palavra-chave cria uma variável que NÃO pode ser reatribuída?',
        options: ['let', 'var', 'const', 'static'],
        correctAnswer: 2,
        explanation: 'const impede a reatribuição do valor.',
      },
      {
        id: 'q2',
        question: 'Qual tipo representa um valor verdadeiro ou falso?',
        options: ['string', 'number', 'boolean', 'object'],
        correctAnswer: 2,
        explanation: 'boolean representa true ou false.',
      },
      {
        id: 'q3',
        question: 'Qual tipo é usado para armazenar textos?',
        options: ['number', 'boolean', 'string', 'array'],
        correctAnswer: 2,
        explanation: 'string armazena textos.',
      },
    ],
  },

  {
    id: 'js-beginner-2',
    unitId: 2,
    unit: 2,
    title: 'Funções',
    description: 'Aprenda a criar e reutilizar funções',
    xpReward: 10,
    questions: [
      {
        id: 'q1',
        question: 'Qual símbolo indica os parâmetros de uma função?',
        options: ['{}', '[]', '()', '<>'],
        correctAnswer: 2,
        explanation: 'Parâmetros ficam entre parênteses ().',
      },
      {
        id: 'q2',
        question: 'O que uma função pode retornar?',
        options: ['Apenas números', 'Apenas strings', 'Qualquer valor', 'Nada'],
        correctAnswer: 2,
        explanation: 'Funções podem retornar qualquer tipo.',
      },
      {
        id: 'q3',
        question: 'Qual dessas é uma função válida em JavaScript?',
        options: [
          'function soma(a, b) {}',
          'func soma(a, b)',
          'def soma(a, b)',
          'create soma(a, b)',
        ],
        correctAnswer: 0,
        explanation: 'function é a sintaxe correta.',
      },
    ],
  },

  {
    id: 'js-beginner-3',
    unitId: 3,
    unit: 3,
    title: 'Arrays',
    description: 'Manipule listas de dados',
    xpReward: 10,
    questions: [
      {
        id: 'q1',
        question: 'Qual método remove o último elemento de um array?',
        options: ['pop()', 'shift()', 'remove()', 'delete()'],
        correctAnswer: 0,
        explanation: 'pop() remove o último elemento.',
      },
      {
        id: 'q2',
        question: 'Qual método adiciona um elemento no início do array?',
        options: ['push()', 'unshift()', 'insert()', 'add()'],
        correctAnswer: 1,
        explanation: 'unshift() adiciona no início.',
      },
      {
        id: 'q3',
        question: 'Arrays são definidos usando:',
        options: ['{}', '()', '[]', '<>'],
        correctAnswer: 2,
        explanation: 'Arrays usam colchetes [].',
      },
    ],
  },

  {
    id: 'js-beginner-4',
    unitId: 4,
    unit: 4,
    title: 'Objetos',
    description: 'Armazene dados estruturados',
    xpReward: 10,
    questions: [
      {
        id: 'q1',
        question: 'Objetos armazenam dados no formato:',
        options: ['Listas', 'Funções', 'Chave e valor', 'Sequências'],
        correctAnswer: 2,
        explanation: 'Objetos usam pares chave: valor.',
      },
      {
        id: 'q2',
        question: 'Qual sintaxe acessa a propriedade "nome" de um objeto?',
        options: ['obj["nome"]', 'obj->nome', 'obj::nome', 'obj@nome'],
        correctAnswer: 0,
        explanation: 'A notação com colchetes é válida.',
      },
      {
        id: 'q3',
        question: 'Qual é o tipo de um objeto em JavaScript?',
        options: ['primitive', 'object', 'function', 'array'],
        correctAnswer: 1,
        explanation: 'Objetos pertencem ao tipo object.',
      },
    ],
  },

  {
    id: 'js-beginner-5',
    unitId: 5,
    unit: 5,
    title: 'Condicionais',
    description: 'Controle o fluxo do código',
    xpReward: 10,
    questions: [
      {
        id: 'q1',
        question: 'Qual operador significa "diferente de"?',
        options: ['==', '!=', '===', '='],
        correctAnswer: 1,
        explanation: '!= verifica se os valores são diferentes.',
      },
      {
        id: 'q2',
        question: 'Qual estrutura repete código enquanto a condição for verdadeira?',
        options: ['if', 'switch', 'while', 'case'],
        correctAnswer: 2,
        explanation: 'while executa enquanto a condição for true.',
      },
      {
        id: 'q3',
        question: 'Qual palavra-chave inicia uma condição?',
        options: ['when', 'if', 'case', 'then'],
        correctAnswer: 1,
        explanation: 'if inicia uma estrutura condicional.',
      },
    ],
  },
]
