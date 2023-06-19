import { createFeature, createSelector } from '@ngrx/store';
import { appReducer } from './app.reducer';

export const appFeature = createFeature({
  name: 'app',
  reducer: appReducer,
  extraSelectors: ({ selectQuizes }) => {
    const selectQuizById = (id: string) =>
      createSelector(selectQuizes, (all) => all.find((q) => q.id === id));

    return {
      selectQuizesCount: createSelector(selectQuizes, (x) => x.length),
      selectQuizById,
      selectQuizNameById: (id: string) => createSelector(selectQuizById(id), q => q?.caption ?? ''), 
      selectQuizQuestionsById: (id: string) => createSelector(selectQuizById(id), q => q?.questions ?? []),
      selectAllQuestions: createSelector(selectQuizes, quizes => quizes.flatMap(q => q.questions))
    };
  },
});
