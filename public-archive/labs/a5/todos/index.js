import TodoList from "./TodoList.js"

// alert('Hello World!');

$('#wd-todo').append(`
   <div class="container ms-0">
       <h1>Todo example</h1>
       ${TodoList()}
   </div>
`);
