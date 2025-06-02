import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './main.css'
export default function QuizGame({dataJSON}) {
    const [data, setData] = useState(null);
    const [stackQuestions, setStackQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [correctAnswerIndex, setCorrectAnswerIndex] = useState(0);
    const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0);
    const [percentage, setPercentage] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [results, setResults] = useState([]);

    const navigate = useNavigate();

    // ⚡️ Cargar JSON al montar el componente
    useEffect(() => {
        fetch(dataJSON)
            .then((response) => response.json())
            .then((jsonData) => {
                setData(jsonData);
                const shuffled = shuffle(jsonData.q);
                setStackQuestions(shuffled);
            })
            .catch((error) => console.error('Error cargando JSON', error));
    }, []);

    // ⚡️ Crear la pregunta cuando cambie currentIndex o stackQuestions
    useEffect(() => {
        if (stackQuestions.length > 0 && currentIndex < stackQuestions.length) {
            createQuestion();
        }
    }, [currentIndex, stackQuestions]);

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === '1') clickOnAnswer(1);
            else if (event.key === '2') clickOnAnswer(2);
            else if (event.key === '3') clickOnAnswer(3);
            else if (event.key === '4') clickOnAnswer(4);
        };
        window.addEventListener('keypress', handleKeyPress);
        return () => window.removeEventListener('keypress', handleKeyPress);
    }, [answers, correctAnswerIndex, currentIndex]);

    const shuffle = (array) => {
        let currentIndex = array.length;
        let tempValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            tempValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = tempValue;
        }
        return array;
    };

    const getNextCandidate = (listCandidates, correctAnswer) => {
        let found = false;
        let nextCandidate = '';
        while (!found) {
            let randomIndex = Math.floor(Math.random() * data.q.length);
            nextCandidate = data.q[randomIndex].a;
            if (nextCandidate !== correctAnswer && !listCandidates.includes(nextCandidate)) {
                found = true;
                listCandidates.push(nextCandidate);
            }
        }
        return nextCandidate;
    };

    const createQuestion = () => {
        const selectedQuestion = stackQuestions[currentIndex];
        const listCandidates = [];
        const correctIndex = Math.floor(Math.random() * 4) + 1;
        setCorrectAnswerIndex(correctIndex);
        console.log('selectedQuestion', selectedQuestion.a)
        const tempAnswers = [];
        for (let i = 1; i <= 4; ++i) {
            if (i === correctIndex) {
                tempAnswers.push(selectedQuestion.a);
            } else {
                tempAnswers.push(getNextCandidate(listCandidates, selectedQuestion.a));
            }
        }
        setAnswers(tempAnswers);
    };

    const clickOnAnswer = (clickedIndex) => {
        const isCorrect = correctAnswerIndex === clickedIndex;
        const selectedQuestion = stackQuestions[currentIndex];

        const text = `${currentIndex + 1}. ${isCorrect ? selectedQuestion.a : answers[clickedIndex - 1]
            }`;
        setResults((prevResults) => [
            ...prevResults,
            { text, isCorrect },
        ]);

        if (isCorrect) {
            setNumberOfCorrectAnswers((prev) => prev + 1);
        }

        const nextIndex = currentIndex + 1;
        setCurrentIndex(nextIndex);

        const newPercentage = ((numberOfCorrectAnswers + (isCorrect ? 1 : 0)) / nextIndex) * 100;
        setPercentage(Math.round(newPercentage * 100) / 100);
    };

    if (!data || currentIndex >= stackQuestions.length) {
        return <div>Loading or game over!</div>;
    }

    const currentQuestion = stackQuestions[currentIndex];

    return (
        <div>
            <button onClick={() => navigate('/')}>🏠</button>

            <h1>Quiz</h1>
            <img
                id="imgQuestion"
                src={currentQuestion.q}
                alt="Pregunta"
                style={{ width: '300px' }}
            />
            <div>
                {answers.map((answer, index) => (
                    <button
                        key={index}
                        onClick={() => clickOnAnswer(index + 1)}
                        style={{ margin: '5px' }}
                    >
                        {answer}
                    </button>
                ))}
            </div>
            <div id="divResultsSpan" style={{ marginTop: '10px' }}>
                {results.map((result, idx) => (
                    <span
                        key={idx}
                        className={result.isCorrect ? 'correctAnswer' : 'incorrectAnswer'}
                        style={{ margin: '0 5px' }}
                    >
                        {result.text}
                    </span>
                ))}
            </div>
            <div id="idResultsPercentage" style={{ marginTop: '10px' }}>
                Results: {percentage}%
            </div>
        </div>
    );
}