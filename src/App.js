import './App.css';
import Question from './question'
import questions from './data'

function App() {
  return (
    <div className="App">
        <div className="question">
          <h1>Questions and Answers About login</h1> 
        </div>
           <section>
             {questions.map((question) =>{
               return <Question key={question.id} info={question.info} title={question.title}></Question>
             })}
           </section>
      
    </div>
  );
}

export default App;
