import { useRef } from "react";

export default function Answers({answers, selectedAnswer, answerState, onSelect}) {
    const suffledAnswers = useRef();

    if (!suffledAnswers.current) {
        suffledAnswers.current = [...answers];
        suffledAnswers.current.sort(() => Math.random() - 0.5); // Math.random gives us value between 0 to 1
    }
    
    return (
        <ul id="answers"> 
            {suffledAnswers.current.map((answer) => {
                const isSelected = selectedAnswer === answer;
                let cssClass = '';
                if (answerState === 'answered' && isSelected) {
                    cssClass = 'selected';
                }
                if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
                    cssClass = answerState;
                }
                return (
                    <li key={answer} className="answer">
                    <button onClick={() => onSelect(answer)} className={cssClass}>
                        {answer}
                        </button>
                </li>
                );
            }
            )}
        </ul>
    )
}