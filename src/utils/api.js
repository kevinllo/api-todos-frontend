import axios from "axios"

export async function getTodos(){
    try{
        const {
        data: {todos}
    } = await axios.get("http://localhost:3000/api/v1/to-dos")

        return todos;
    }catch(error){
        console.error(error.message)
        return [];
    }
}

export async function patchTodo (todoId, newValues){
    try{ 
        axios.patch(`http://localhost:3000/api/v1/to-dos/${todoId}`, {
        ...newValues,
        title: newValues.text,
    })
    }catch(error){
        console.error(error.message)
    }
}