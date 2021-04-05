$(document).ready(function() {

    let todosID = 1;
    let toDos = [{
        id: 1,
        title: 'Ex: Go shopping',
        description: 'Buy groceries at noon'
    }];

    const createTodoTitle = $('.todo__create--title');
    const createTodoDescrition  = $('.todo__create--description');

    const todoTitleValue = $('.todo__item--title');
    const todoDescriptionValue = $('.todo__item--description');

    const todoContainer = $('.todo__items');
    
    const createTodoBtn = $('.todo__button--create');
    const updateTodoBtn = $('.todo__button--update');
    const deleteTodoBtn = $('.todo__button--delete');

    
    const createTodoItem = function(title, description) {
        todoTitleValue.html(toDos[0].title);
        todoDescriptionValue.html(toDos[0].description);
        toDos = [];

        createTodoTitle.change((e) => title = (e.target.value));
        createTodoDescrition.change((e) => description = (e.target.value));
        
        createTodoBtn.click(function() {
            todoContainer.html('');
            toDos.push({
                id: todosID++,
                title:  title,
                description: description
            });

            toDos.forEach((todo) => { 
                todoContainer.append(
                `<div class="todo__item" data-id="${todo.id}">
            <h3 class="todo__item--title">${todo.title}</h3>
            <div class="todo__item--box">
                <p class="todo__item--description">${todo.description}</p>
                <div class="todo__button">
                    <button class="todo__button--update" data-update="${todo.id}">Update</button>
                    <button class="todo__button--delete" data-delete="${todo.id}">Delete</button>
                    </div>
                </div>
            </div>`)});
        
            createTodoTitle.val('');
            createTodoDescrition.val('');
            deleteTodoItem();
        })

    }
    

    const deleteTodoItem = function() {
        const allDeleteButtons = todoContainer.find('.todo__button--delete');
        allDeleteButtons.click((e) => {
            const selectedButton = e.target;
            const matchingButton = toDos.find((item) => item.id === Number(selectedButton.dataset.delete));
            const itemToDelete = selectedButton.closest('.todo__item');
            toDos.forEach((item) => {
                if (item.id === Number(itemToDelete.dataset.id) && item.id === matchingButton.id ) {
                    itemToDelete.remove();
                    toDos.splice(item, 1)
                }
            })
        });
        
    }
    
    createTodoItem();
})

