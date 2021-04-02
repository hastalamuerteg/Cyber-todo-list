$(document).ready(function() {
    
    const toDos = [];

    const createTodoTitle = $('.todo__create--title');
    const createTodoDescrition  = $('.todo__create--description');

    const todoTitleValue = $('.todo__item--title');
    const todoDescriptionValue = $('.todo__item--title');

    const todoContainer = $('.todo__items');
    
    const createTodoBtn = $('.todo__button--create');
    const updateTodoBtn = $('.todo__button--update');
    const deleteTodoBtn = $('.todo__button--delete');


    const createTodoItem = function(title, description) {
        createTodoTitle.change((e) => title = (e.target.value));
        createTodoDescrition.change((e) => description = (e.target.value));
        
        let todosID = 1;
        createTodoBtn.click(function() {
            toDos.push({
                id: todosID++,
                title:  title,
                description: description
            });

            todoContainer.html('');   
        
            toDos.forEach((todo) => todoContainer.prepend(
                `<div class="todo__item">
            <h3 class="todo__item--title">${todo.title}</h3>
            <div class="todo__item--box">
                <p class="todo__item--description">${todo.description}</p>
                <div class="todo__button">
                    <button class="todo__button--update">Update</button>
                    <button class="todo__button--delete">Delete</button>
                    </div>
                </div>
            </div> `
            ));
        })
    }

    createTodoItem();

})