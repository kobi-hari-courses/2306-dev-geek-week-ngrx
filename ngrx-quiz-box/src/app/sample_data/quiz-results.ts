import { QuizResult } from "../models/quiz-result.model";

const QUIZ_RESULT_SAMPLES: QuizResult[] = [
    {
        uid: '124124bbccdd', 
        userName: 'Kobi Hari', 
        quiz:   {
            id: '120ab33bcd41',
            caption: 'RGB Colors Mixing',
            questions: [
              {
                caption: 'What do you get when you add Red to Green and Blue?',
                answers: ['Black', 'Gray', 'White', 'Brown'],
                correctAnswer: 2,
              },
              {
                caption: 'What do you get when you add Red to Black?',
                answers: ['Dark Red', 'Red', 'Black', 'Gray'],
                correctAnswer: 1,
              },
              {
                caption: 'What do you get when you add Blue to Red?',
                answers: ['Magenta', 'Cyan', 'Purple', 'White'],
                correctAnswer: 0,
              },
              {
                caption: 'What do you get when you add Blue to Green?',
                answers: ['Magenta', 'Cyan', 'White', 'Teal'],
                correctAnswer: 1,
              },
              {
                caption: 'What do you get when you add Red to Green?',
                answers: ['Brown', 'White', 'Orange', 'Yellow'],
                correctAnswer: 3,
              },
              {
                caption: 'What do you get when you add Red to Cyan?',
                answers: ['Magenta', 'Blue', 'White', 'Purple'],
                correctAnswer: 2,
              },
              {
                caption: 'What do you get when you add Yellow to Blue?',
                answers: ['Green', 'Cyan', 'White', 'Lime'],
                correctAnswer: 2,
              },
              {
                caption: 'What do you get when you add Green to Magenta?',
                answers: ['Brown', 'Yellow', 'White', 'Orange'],
                correctAnswer: 2,
              },
              {
                caption:
                  'What do you get when you add 30% Green to 30% Blue and 30% Red?',
                answers: ['Black', '30% Gray', '90% Gray', 'White'],
                correctAnswer: 1,
              },
              {
                caption: 'What do you need to do, to get from Yellow to Green?',
                answers: ['Add Green', 'Subtract Red', 'Add Blue', 'Nothing'],
                correctAnswer: 1,
              },
            ],
          },
        answers: [1, 0, 3, 2, 1, 1, 2, 3, 3, 1]        
    }, 
    {
        uid: 'ddac3412131', 
        userName: 'John Smith', 
        quiz: {
            id: '120ab33bcd41',
            caption: 'RGB Colors Mixing',
            questions: [
              {
                caption: 'What do you get when you add Red to Green and Blue?',
                answers: ['Black', 'Gray', 'White', 'Brown'],
                correctAnswer: 2,
              },
              {
                caption: 'What do you get when you add Red to Black?',
                answers: ['Dark Red', 'Red', 'Black', 'Gray'],
                correctAnswer: 1,
              },
              {
                caption: 'What do you get when you add Blue to Red?',
                answers: ['Magenta', 'Cyan', 'Purple', 'White'],
                correctAnswer: 0,
              },
              {
                caption: 'What do you get when you add Blue to Green?',
                answers: ['Magenta', 'Cyan', 'White', 'Teal'],
                correctAnswer: 1,
              },
              {
                caption: 'What do you get when you add Red to Green?',
                answers: ['Brown', 'White', 'Orange', 'Yellow'],
                correctAnswer: 3,
              },
              {
                caption: 'What do you get when you add Red to Cyan?',
                answers: ['Magenta', 'Blue', 'White', 'Purple'],
                correctAnswer: 2,
              },
              {
                caption: 'What do you get when you add Yellow to Blue?',
                answers: ['Green', 'Cyan', 'White', 'Lime'],
                correctAnswer: 2,
              },
              {
                caption: 'What do you get when you add Green to Magenta?',
                answers: ['Brown', 'Yellow', 'White', 'Orange'],
                correctAnswer: 2,
              },
              {
                caption:
                  'What do you get when you add 30% Green to 30% Blue and 30% Red?',
                answers: ['Black', '30% Gray', '90% Gray', 'White'],
                correctAnswer: 1,
              },
              {
                caption: 'What do you need to do, to get from Yellow to Green?',
                answers: ['Add Green', 'Subtract Red', 'Add Blue', 'Nothing'],
                correctAnswer: 1,
              },
            ],
          }, 
        answers: [0, 0, 1, 1, 2, 2, 3, 3, 0, 0]
    }, 
    {
        uid: 'b13b113c2123a', 
        userName: 'Kobi Hari', 
        quiz:   {
            id: '11dbac1231',
            caption: 'World Capitals',
            questions: [
              {
                caption: 'What is the capital city of Hong Kong',
                answers: ['Santaf', 'Toskent', 'Victoria', 'Funafuti'],
                correctAnswer: 2,
              },
              {
                caption: 'What is the capital city of Uganda',
                answers: ['Hanoi', 'Kampala', 'Sanaa', 'Kyiv'],
                correctAnswer: 1,
              },
              {
                caption: 'What is the capital city of Zimbabwe',
                answers: ['Harare', 'Lusaka', 'Caracas', 'Tunis'],
                correctAnswer: 0,
              },
              {
                caption: 'What is the capital city of Vietnam',
                answers: ['Suva', 'Tórshavn', 'Cardiff', 'Hanoi'],
                correctAnswer: 3,
              },
              {
                caption: 'What is the capital city of Denmark',
                answers: ['Asmara', 'Roseau', 'Copenhagen', 'Dili'],
                correctAnswer: 2,
              },
              {
                caption: 'What is the capital city of Georgia',
                answers: ['Nuuk', 'Tbilisi', 'Accra', 'Conakry'],
                correctAnswer: 1,
              },
              {
                caption: 'What is the capital city of Guinea',
                answers: ['Conakry', 'Haiti', 'Citt', 'Jakarta'],
                correctAnswer: 0,
              },
              {
                caption: 'What is the capital city of Iran',
                answers: ['Tokyo', 'Tehran', 'Amman', 'Bairiki'],
                correctAnswer: 1,
              },
              {
                caption: 'What is the capital city of Liberia',
                answers: ['Male', 'Macao', 'Vaduz', 'Monrovia'],
                correctAnswer: 3,
              },
              {
                caption: 'What is the capital city of Moldova',
                answers: ['Abuja', 'Yaren', 'Podgorica', 'Chisinau'],
                correctAnswer: 3,
              },
            ],
          },
        answers: [1, 1, 2, 2, 3, 3, 1, 2, 3, 0]
    }
]