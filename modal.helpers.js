const createAddTaskModal = (board) => {
  const container = document.createElement("div");
  container.classList.add(...MODAL_STYLES);

  const modal = document.createElement("div");
  modal.classList.add(...MODAL_CONTENT_STYLES);

  const boardIndicator = document.createElement("div");
  boardIndicator.textContent = `New Task | ${board.title}`;
  boardIndicator.classList.add(...ADD_TASK_MODAL_BOARD_INDICATOR_STYLES);

  const titleInput = document.createElement("input");
  titleInput.placeholder = "Task Title";
  titleInput.classList.add(...ADD_TASK_TITLE_FIELD_STYLES);

  const descriptionInput = document.createElement("textarea");
  descriptionInput.placeholder = "Task Description";
  descriptionInput.classList.add(...ADD_TASK_DESCRIPTION_FIELD_STYLES);

  const prioritySelect = document.createElement("select");
  prioritySelect.classList.add(...ADD_TASK_PRIORITY_FIELD_STYLES);

  ["low", "medium", "high"].forEach((priority) => {
    const option = document.createElement("option");
    option.value = priority;
    option.textContent = priority;
    prioritySelect.appendChild(option);
  });

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add(...ADD_TASK_MODAL_ACTION_CONTAINER_STYLES);

  const okButton = document.createElement("button");
  okButton.textContent = "OK";
  okButton.classList.add(...ADD_TASK_MODAL_OK_BUTTON_STYLES);

  const cancelButton = document.createElement("button");
  cancelButton.textContent = "Cancel";
  cancelButton.classList.add(...ADD_TASK_MODAL_CANCEL_BUTTON_STYLES);

  buttonContainer.appendChild(okButton);
  buttonContainer.appendChild(cancelButton);

  modal.appendChild(boardIndicator);
  modal.appendChild(titleInput);
  modal.appendChild(descriptionInput);
  modal.appendChild(prioritySelect);
  modal.appendChild(buttonContainer);
  container.appendChild(modal);
  document.body.appendChild(container);

  okButton.addEventListener("click", () => {
    addTaskToBoard(board, {
      title: titleInput.value,
      description: descriptionInput.value,
      priority: prioritySelect.value ?? null,
      createdAt: new Date(),
      order: board.tasks.length + 1,
    });
    document.body.removeChild(container);
    renderKanbanBoard();
  });

  cancelButton.addEventListener("click", () => {
    document.body.removeChild(container);
  });
};
