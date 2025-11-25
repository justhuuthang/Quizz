import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3306/api/quizz",

});

export const createQuestion = async(quizzQuestion) =>{
    try {
        const response = await api.post("/create-new-question", quizzQuestion);
        return response.data;
    } catch (error) {
        console.error("Error creating question:", error);
        throw error;
    }
}

export const getAllQuestions = async() =>{
    try{
        const response = await api.get("/all-questions");
        return response.data;   
    } catch (error) {
        console.error("Error fetching questions:", error);
        throw error;
    }
}

export const fetchQuizzForUser = async(number, subject) =>{
    try{
        const response = await api.get(`/fetch-question-for-user?numOFQuestions=${number}&subject=${subject})`);
        return response.data;   
    } catch (error) {
        console.error("Error fetching quizz for user:", error);
        throw error;
    }
}

export const getSubjects = async() =>{
    try{
        const response = await api.get("/subjects");
        return response.data;   
    } catch (error) {
        console.error("Error fetching subjects:", error);
        throw error;
    }
}


export const updateQuestion = async(id, question) =>{
    try {
        const response = await api.put(`/question/${id}/update`, question);
        return response.data;
    } catch (error) {
        console.error("Error updating question:", error);
        throw error;
    }           
}

export const getQuestionById = async(id) =>{
    try{
        const response = await api.get(`/question/${id}`);
        return response.data;   
    } catch (error) {
        console.error("Error fetching question by ID:", error);
        throw error;
    }       
}

export const deleteQuestion = async(id) =>{
    try {
        const response = await api.delete(`/question/${id}/delete`);       
        return response.data;
    } catch (error) {
        console.error("Error deleting question:", error);
        throw error;
    }   
}