import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

axios.get(url).then((response) => {
  const todo = response.data;

  // const id = todo.id;
  // const title = todo.title;
  // const completed = title.completed;

  const { id, Title, completed } = todo;

  console.log(`
  The Todo with ID: ${id}
  Has a title of: ${Title}
  Is it finished? ${completed}
  `);
});
