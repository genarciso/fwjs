import {NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms'
import {BrowserModule} from '@angular/platform-browser'

import {AppComponent} from './app.component'
import {QuestionFormComponent} from './components/question-form/question-form.component'
import {QuestionListComponent} from './components/question-list.component'
import {QuestionComponent} from './components/question.component'
import {QuizComponent} from './components/quiz.component'
import {ResultsComponent} from './components/results.component'
import {MainComponent} from "./components/main/main.component";
import {PainelComponent} from "./components/painel/painel.component";
import {MenuComponent} from "./components/menu/menu.component";
import {ConteudoFormComponent} from './components/conteudo-form/conteudo-form.component';

@NgModule({
    declarations: [
        AppComponent,
        QuizComponent,
        QuestionComponent,
        ResultsComponent,
        QuestionFormComponent,
        QuestionListComponent,
        MainComponent,
        PainelComponent,
        MenuComponent,
        ConteudoFormComponent
    ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
