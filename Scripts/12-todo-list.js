const todolist = [
    { name: "make dinner", dueDate: "2024-07-18" },
    {
      name: "wash dishes",
      dueDate: "2024-07-18",
    },
  ];
  rendertodolist();
  
  function rendertodolist() {
    let todolistHtml = "";
  
    todolist.forEach((todoobject,index)=>{
      const { name, dueDate } = todoobject;
      const html = `
      <div>${name}</div>
        <div>${dueDate}</div>  
        <button class="delete-todo-button js-delete-todo-button">Delete</button>`;
      todolistHtml += html;  
    })

    document.querySelector(".js-todo-list").innerHTML = todolistHtml;

    document.querySelectorAll('.js-delete-todo-button').forEach((deltebtn,index)=>{
      deltebtn.addEventListener('click',()=>{
        todolist.splice(index,1);
        rendertodolist();
      })
    })
  }

document.querySelector('.js-add-todo-button').addEventListener('click',()=>{
  addTodo()
})

  function addTodo() {
    const inputElemnt = document.querySelector(".js-name-input");
    const name = inputElemnt.value;
  
    const dateinputElement = document.querySelector(".js-due-date-input");
  
    const dueDate = dateinputElement.value;
  
    todolist.push({ name, dueDate });
  
    inputElemnt.value = "";
    rendertodolist();
  }
  
  /*
  const todolist= [
    'make dinner',
    'wash dishes',
    'Watch Youtube'
  ]
  
  for(let i=0; i<todolist.length; i++){
    console.log(todolist[i])
  }
  */
  
  /*
  const nums = [1, 3, 3];
  let value = 0;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    value += num;
  }
  console.log(value);
  */
  /*
  const nums = [1,3,3]
  
  for(let i=0; i<nums.length; i++){
    nums[i] += nums[i]
  }
  
  console.log(nums);
  
  const numsDouble = [];
  
  for(let i=0; i<nums.length; i++){
    let num = nums[i]
    numsDouble.push(num*2)
  }
  
  console.log(numsDouble);
  
  */
  