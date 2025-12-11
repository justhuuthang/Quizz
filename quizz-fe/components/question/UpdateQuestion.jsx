import React from 'react';
import { getQuestionById, updateQuestion } from '../../utils/QuizzService';
import { useParams } from 'react-router-dom';

const UpdateQuestion = () => {
    const [question, setQuestion] = React.useState("")
    const [choices, setChoices] = React.useState([""])
    const [corectAnswer, setCorrectAnswer] = React.useState([""])
    const [isLoading, setIsLoading] = React.useState(true)

    const { id } = useParams();
    const fethQuestionDetails = async () => {
        try {
            const questionToUpdate = await getQuestionById(id)
            if (questionToUpdate) {
                setQuestion(questionToUpdate.question)
                setChoices(questionToUpdate.choices)
                setCorrectAnswer(questionToUpdate.correctAnswer)
            }
            setIsLoading(false)
        } catch (error) {
            console.error(error)
        }

        const handleQuestionChange = (e) => {
            setQuestion(e.target.value)
        }

        const handleChoiceChange = (index, e) => {
            const updatedChoices = [...choices]
            updatedChoices[index] = e.target.value
            setChoices(updatedChoices)
        }

        const handleCorrectAnswerChange = (e) => {
            setCorrectAnswer(e.target.value)
        }

        const handleQuestionUpdate = async (e) => {
            e.preventDefaule()
            try {
                const updateQuestion = { question, choices, correctAnswer: correctAnswer.toString().split(",").map(ans => answer.trim()) }
                await updateQuestion(id, updatedQuestion)
                /* navigative  back to  all questions page  */
            } catch (error) {
                console.error(error)
            }
        }
        if (isLoading) {
            return <div>Loading...</div>
        }

        return (
            <section className='container'>
                <h4 className='mt-5' style={{ color: 'GrayText' }}>Upadet Quizz Questions</h4>

                <div className='col-md-8'>
                    <form onSubmit={handleQuestionUpdate}>
                        <div className='form-group'>
                            <label className='text-info'>Question:</label>
                            <textarea
                                className='fornm-control'
                                rows={4}
                                value={question}
                                onChange={handleQuestionChange}>
                            </textarea>
                        </div>
                        <div className='form-group'>
                            <label className='text-info'>Choices:</label>
                            {choices.map((choice, index) => (
                                <input
                                    className='form-control'
                                    type='text'
                                    value={choice}
                                    onChange={(e) => handleChoiceChange(index, e)}>
                                </input>
                            ))}

                        </div>

                        <div className='form-group'>
                            <label className='text-info'>Correct Answer(s):</label>
                        </div>

                    </form>
                </div>
            </section>
        );
    }
}
export default UpdateQuestion;