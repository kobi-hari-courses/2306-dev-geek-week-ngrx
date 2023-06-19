import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { ResultViewModel } from './result.vm';
import { materialModules } from 'src/app/shared/material-modules';
import { SAMPLE_QUIZES } from 'src/app/sample_data/quizes';

@Component({
  selector: 'app-results-list',
  standalone: true,
  imports: [CommonModule, materialModules],
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss']
})
export class ResultsListComponent {
  results$: Observable<ResultViewModel[]> = of([
    {
      caption: SAMPLE_QUIZES[0].caption, 
      imageUrl: SAMPLE_QUIZES[0].imageUrl,
      user: 'Kobi Hari', 
      correct: 8, 
      wrong: 2
    },
    {
      caption: SAMPLE_QUIZES[1].caption, 
      imageUrl: SAMPLE_QUIZES[1].imageUrl,
      user: 'Kobi Hari', 
      correct: 7, 
      wrong: 3
    },
    {
      caption: SAMPLE_QUIZES[2].caption, 
      imageUrl: SAMPLE_QUIZES[2].imageUrl,
      user: 'Kobi Hari', 
      correct: 9, 
      wrong: 1
    },
  ]);

}
