import React, {createContext} from 'react';
import './App.css';
import {ConteudoForm} from "./components/ConteudoForm/ConteudoForm";
import {IConteudo} from "./models/IConteudo";
import {MainTab} from "./components/MainTab/MainTab";
import {useConteudo} from "./hooks/conteudo-hook";

const ConteudosContext = createContext<IConteudo[]>([])

// function QuestionList() {
//   const qstList = useContext(QuestionsContext)
//   return <div>
//     { qstList.map(qst => <Question {...qst} />) }
//   </div>
// }

function App() {
    const {conteudos, addConteudo } = useConteudo()
    // const { questions, createQuestion, deleteQuestion } = useQuestions()
    // const [question, setQuestion] = useState(emptyQuestion)

    function onSubmit(conteudosEnviados: IConteudo[]) {
        addConteudo(conteudosEnviados)
    }

    // const questionList = questions.map(qst => <Question {...qst} />)



    return (
        <ConteudosContext.Provider value={conteudos}>
            <ConteudoForm onSubmit={onSubmit} />
            <MainTab conteudos={conteudos}></MainTab>
        </ConteudosContext.Provider>

        // <QuestionsContext.Provider value={questions}>
        //   <QuestionForm onSubmit={updateQuestion} />
        //   <QuestionList />
        // </QuestionsContext.Provider>
    )
}

export default App;
