import React, { useState } from 'react';
import './questions.css'


const Question = ( {name}) => {
	const user = localStorage.getItem('userName') ;
// console.log(user)
	const [currentQuestion, setCurrentQuestion] = useState(0);
	
	const [showScore, setShowScore] = useState(false);

	const [score, setScore] = useState(0)

    const handleAnswerButtonClick = (isCorrect) => {
		if (isCorrect) { 
			setScore (score + 1);
		}
        const nextQuestion = currentQuestion + 1;
        setCurrentQuestion(nextQuestion);

        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
			setShowScore(true)
        }

    };
    

    const questions = [
		{
			questionText: 'What is my middle name?',
			answerOptions: [
				{ answerText: 'Dolma', isCorrect: false },
				{ answerText: 'Sonam', isCorrect: false },
				{ answerText: 'Yangchan', isCorrect: true },
				{ answerText: 'Wangdi', isCorrect: false },
			],
		},
		{
			questionText: 'How many teeths do I have?',
			answerOptions: [
				{ answerText: '28', isCorrect: false },
				{ answerText: '32', isCorrect: true },
				{ answerText: '30', isCorrect: false },
				{ answerText: '29', isCorrect: false },
			],
		},
		{
			questionText: 'What is my zodiac sign?',
			answerOptions: [
				{ answerText: 'Gemini', isCorrect: true },
				{ answerText: 'Cancer', isCorrect: false },
				{ answerText: 'Taurus', isCorrect: false },
				{ answerText: 'Leo', isCorrect: false },
			],
		},
		{
			questionText: 'What is my birth month?',
			answerOptions: [
				{ answerText: 'April', isCorrect: false },
				{ answerText: 'January', isCorrect: false },
				{ answerText: 'August', isCorrect: false },
				{ answerText: 'March', isCorrect: true },
			],
		},
		{
			questionText: 'What do I love eating the most?',
			answerOptions: [
				{ answerText: 'Burger', isCorrect: false },
				{ answerText: 'Pizza', isCorrect: false },
				{ answerText: 'Salat', isCorrect: false },
				{ answerText: 'Dumpling', isCorrect: true },
			],
		},
		{
			questionText: 'What is my favorite Color?',
			answerOptions: [
				{ answerText: 'Pink', isCorrect: false },
				{ answerText: 'Black', isCorrect: false },
				{ answerText: 'Red', isCorrect: false },
				{ answerText: 'Sky Blue', isCorrect: true },
			],
		},
		{
			questionText: 'What is my favorite Activity?',
			answerOptions: [
				{ answerText: 'Walking', isCorrect: false },
				{ answerText: 'Reading', isCorrect: false },
				{ answerText: 'Swimming', isCorrect: true},
				{ answerText: 'Cycling', isCorrect: false },
			],
		},
	];

    return ( 
		<>
		<div>
		<h1>Good Luck {name}!</h1>
        <div className='app'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{showScore ? (
				<div className='score-section'> 
				{ score == 1 && <p> You don't know me well 😢 </p> }
				{ score == 2 && <p> You don't know me well 😢 </p> }
				{ score == 3 && <p> You don't know me well 😢 </p> }
				{ score == 4 && <p> You need to know me some more  😉 </p> }
				{ score == 5 && <p> You know me well 😊 </p> }
				{ score == 6 && <p> You know me well 😊 </p> }
				{ score == questions.length && <p> You have my heart ❤️</p> }


				
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span className='ques'>Question {currentQuestion+ 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
                    {questions[currentQuestion].answerOptions.map((answerOption, index) => (
		<button className='btns' onClick={ () => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
	))}
					</div>
				</>
			)}
		</div>
		</div>
		</>

      );
}
 
export default Question;