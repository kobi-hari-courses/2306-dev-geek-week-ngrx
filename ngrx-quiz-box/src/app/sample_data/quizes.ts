import { Quiz } from '../models/quiz.model';

export const SAMPLE_QUIZES: Quiz[] = [
  {
    id: '120ab33bcd41',
    caption: 'RGB Colors Mixing',
    imageUrl: 'https://cdn.britannica.com/70/191970-050-1EC34EBE/Color-wheel-light-color-spectrum.jpg',
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
  {
    id: '11dbac1231',
    caption: 'World Capitals',
    imageUrl: 'https://img.freepik.com/free-vector/planet-earth_1308-82523.jpg?size=626&ext=jpg',
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
  {
    id: '6642341ffccdde',
    caption: 'Multiplication Basics', 
    imageUrl: 'https://www.pngitem.com/pimgs/m/21-212871_body-math-signs-maths-icon-png-transparent-png.png',
    questions: [
      {
        caption: 'How much is 4 * 3', 
        answers: ['12', '10', '8', '11'], 
        correctAnswer: 0
  
      },
      {
        caption: 'How much is 5 * 6', 
        answers: ['24', '19', '30', '16'], 
        correctAnswer: 2
  
      },
      {
        caption: 'How much is 7 * 6', 
        answers: ['10', '49', '48', '42'], 
        correctAnswer: 3
  
      },
      {
        caption: 'How much is 8 * 7', 
        answers: ['48', '63', '64', '56'], 
        correctAnswer: 3
  
      },
      {
        caption: 'How much is 8 * 6', 
        answers: ['44', '42', '48', '46'], 
        correctAnswer: 2
  
      },
      {
        caption: 'How much is 5 * 7', 
        answers: ['35', '25', '30', '40'], 
        correctAnswer: 0
  
      },
      {
        caption: 'How much is 9 * 8', 
        answers: ['63', '72', '68', '76'], 
        correctAnswer: 1
  
      },
      {
        caption: 'How much is 9 * 7 ', 
        answers: ['72', '63', '68', '67'], 
        correctAnswer: 1
  
      },
      {
        caption: 'How much is 8 * 8', 
        answers: ['64', '70', '72', '56'], 
        correctAnswer: 0
  
      },
      {
        caption: 'How much is 7 * 7', 
        answers: ['46', '47', '49', '51'], 
        correctAnswer: 2
  
      },
    ]
  }
];
