import React from 'react';

interface ResultsProp {
  answers: string[]
}

// export const Results = () => <h1>Resultados</h1>
export function Results(props: ResultsProp) {
  const answersList = props.answers.map( txt => <li key={ txt }>{ txt }</li>)
  return (<div>
    <h1>Resultados</h1>
    <ul>
      {answersList}
    </ul>
  </div> )

}