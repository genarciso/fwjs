import React from 'react';

interface ResultsProp {
  answers: string[]
}

// export const Results = () => <h1>Resultados</h1>
export function Results(props: ResultsProp) {
  const answers = props.answers.map( txt, index => <li key={ index }>{ txt }</li>)
  return (<div>
    <h1>Resultados</h1>
    <ul>
      {answers}
    </ul>
  </div> )
}