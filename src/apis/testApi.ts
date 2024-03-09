import axios, { AxiosResponse } from "axios";

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export async function getTodo(): Promise<Todo[]> {
  try {
    const response: AxiosResponse<Todo[]> = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
