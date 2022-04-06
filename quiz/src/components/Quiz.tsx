import React, { useState } from 'react';
import { Question } from './Question';
import { Results } from './Results';
import './Question.css'

const questions = [
  {
    statement: 'Enunciado da 1ª questão',
    options: ['Opção 1.1', 'Opção 1.2', 'Opção 1.3', 'Opção 1.4']
  },
  {
    statement: 'Enunciado da 2ª questão',
    options: ['Opção 2.1', 'Opção 2.2', 'Opção 2.3', 'Opção 2.4']
  },
]

export function Quiz() {
  const [showResults, setShowResults] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  
  function confirm() {
    console.log('Confirma resposta')
    if (currentQuestion < questions.length -1) {
      setCurrentQuestion(currentQuestion + 1)
    } 
    else {
      setShowResults(true)
    }
    
  }
  
  function select(optionIndex: number) {
    console.log(`Selecionou a opção ${optionIndex}`)
    const ans = [...answers]
    ans[currentQuestion] = optionIndex
    setAnswers(ans)

    
  }

  if (showResults) {
    console.log(answers)
    cosnt ans = answers.map((option, questionIndex) => questions[questionIndex] = option)
    return <Results answers={ ans }/>
  }
  else {
    return <div>
      Opção selecionada: {answers}
      <Question
      statement={ questions[currentQuestion].statement }
      options={ questions[currentQuestion].options }
      />
      <button onClick={ confirm }>Confirma resposta</button>
    </div>
  }
}