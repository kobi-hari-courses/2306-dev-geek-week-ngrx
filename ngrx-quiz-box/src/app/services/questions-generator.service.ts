import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';
import { CAPITALS } from '../sample_data/capitals';
import { CountryCapital } from '../models/country-capital.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsGeneratorService {

  constructor() { }

  private randomInt(min: number, max: number): number {
    const range = max - min;
    return Math.floor(Math.random() * range) + min;
  }

  private generateCapitalQuestion(): Question {
    const all = [...CAPITALS];
    const picked: CountryCapital[] = [];

    for (let index = 0; index < 4; index++) {
      const randIndex = this.randomInt(0, all.length);
      picked.push(all[randIndex]);
      all.splice(randIndex, 1);
    }

    const correctIndex = this.randomInt(0, 4);
    const question: Question = {
      caption: `What is the capital of ${picked[correctIndex].country}`, 
      answers: picked.map(x => x.city), 
      correctAnswer: correctIndex
    }

    return question;
  }

  private generateMathQuestion(): Question {
    const op1 = this.randomInt(1, 10);
    const op2 = this.randomInt(1, 10);

    const operators = ['*', '+', '-', '%'];
    const operator = operators[this.randomInt(0, 4)];
    const expr = `${op1} ${operator} ${op2}`;
    const res = eval(expr) as number;

    const answers: number[] = [];
    const correctIndex = this.randomInt(0, 4);
    const difference = this.randomInt(1, 10);
    for (let index = 0; index < 4; index++) {
      answers.push(res + (index - correctIndex) * difference);
    }

    const question: Question = {
      caption: `How much is ${op1} ${operator} ${op2}`, 
      answers: answers.map(a => a.toString()), 
      correctAnswer: correctIndex
    }

    return question;

    
  }

  public generate(type: 'captial' | 'math'): Observable<Question> {
    return new Observable(observer => {
      const timer = setTimeout(() => {
        const res = type === 'captial' ? this.generateCapitalQuestion() : this.generateMathQuestion();
        observer.next(res);
      }, 4000);

      return () => clearTimeout(timer);
    }); 
  }
}
