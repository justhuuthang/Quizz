import React, { use } from 'react'

const GetAllQuizz = () => {
    const[question, setQuestion] = useState([{id: "",question:"", correctAnswer:"",choices:[]}])
    const[isQuestionDeleted, setIsQuestionDeleted] = useState(false)
    const[deleteSuccessMessage, setDeleteSuccessMessage] = useState("")

useEffect(() => {
    fetchAllQuestions()
}, [])
    const fetchAllQuestions = async () => {
        try{
            const data = await getAllQuestions()
            setQuestion(data)
            setIsLoading(false)
        } catch (error) {
            console.error("Error fetching all questions:", error);
        }   
    }
    const handleDelete = async(id) =>{
        try{
            await deleteQuestion(id)
            setQuestion(question.filter((question) => question.id !== id))
            setIsQuestionDeleted(true)  
            setDeleteSuccessMessage("Question deleted successfully.")
        } catch (error) {
            console.error("Error deleting question:", error);
        }   
        setTimeout(() => {
            setDeleteSuccessMessage("")
        }, 4000);
    }
    if(isLoading){
        return <div>Loading...</div>    
    }
    return (
        <section className="container">
            <div className='row mt-5'>
                <div className="col-md-6 mb-2 mb-mb-0" style={{color: "GrayText"}}>
                    <h4>
                        All Quizz Questions
                    </h4>
                </div>
                <div className="col-md-4 d-flex justify-content-end">
                    {/*todo: add a link to navigate to add new question form*/}

                </div>
            </div>
            <hr />
            {isQuestionDeleted && <div className="alert alert-success">{deleteSuccessMessage}</div>}

            {question.map((question, index) => (
                <div>
                    <h4 style={{color:"GrayText"}}>{`${index +1}.${question.question}`}</h4>

                    <ul>
                        {question.choices.map((choice,index) => (
                            <li key={index}>{choice}</li>
                        ))}
                    </ul>
                    <p className="text-success">Correct Answer: {question.correctAnswer}</p>
                    <div className="btn-group mb-4">
                        {/*todo: add a link to navigate to update question form*/}
                        <button 
                        className="btn btn-outline-danger btn-sm"
                        onClick={() =>(handleDelete(question.id))}>
                            Delete Question
                        </button>

                    </div>
                </div>
            ))}
        </section>
    )
}
export default GetAllQuizz