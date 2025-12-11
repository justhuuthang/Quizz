import React from 'react';

const AnswerOptions = ({ question, isChecked, handleAnswerChange, handleCheckBoxChange }) => {
    if (!question) {
        return <div> No question available</div>
    }

    const { id, questionType, choices } = question

    if (questionType === 'single') {
        return (
            <div>
                {choices.sort().map((choice, index) => (
                    <div>
                    </div>
                ))}
            </div>
        )

    }

}
export default AnswerOptions;