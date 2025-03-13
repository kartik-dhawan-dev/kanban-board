const createKanbanBoard = (board) => {
  const kanbanBoard = document.createElement("div");
  kanbanBoard.classList.add(KANBAN_BOARD_CLASS, ...KANBAN_BOARD_STYLE_CLASSES);

  kanbanBoard.appendChild(createKanbanBoardHeader(board));
  kanbanBoard.appendChild(createKanbanBoardTaskContainer(board.tasks));

  return kanbanBoard;
};

const createKanbanBoardHeader = (board) => {
  const kanbanBoardHeader = document.createElement("div");
  kanbanBoardHeader.classList.add(...KANBAN_BOARD_HEADER_STYLE_CLASSES);

  const kanbanBoardTitle = createKanbanBoardTitle(board);
  const addTaskButton = createAddTaskButton();

  kanbanBoardHeader.appendChild(kanbanBoardTitle);
  kanbanBoardHeader.appendChild(addTaskButton);

  return kanbanBoardHeader;
};

const createKanbanBoardTitle = (board) => {
  const kanbanBoardTitle = document.createElement("h2");
  kanbanBoardTitle.classList.add(...KANBAN_BOARD_HEADER_TITLE_STYLE_CLASSES);
  kanbanBoardTitle.textContent = `${board.title} (${board.tasks.length})`;

  return kanbanBoardTitle;
};

const createAddTaskButton = () => {
  const addTaskButton = document.createElement("button");
  addTaskButton.classList.add(...KANBAN_BOARD_ADD_TASK_BUTTON_STYLE_CLASSES);
  addTaskButton.textContent = "ADD TASK";

  return addTaskButton;
};

const createKanbanBoardTaskContainer = (tasks) => {
  const kanbanBoardTaskContainer = document.createElement("div");
  kanbanBoardTaskContainer.classList.add(
    KANBAN_BOARD_TASK_CONTAINER,
    ...KANBAN_BOARD_TASK_CONTAINER_STYLE_CLASSES
  );

  tasks.forEach((task) =>
    kanbanBoardTaskContainer.appendChild(createKanbanBoardTask(task))
  );

  return kanbanBoardTaskContainer;
};

const createKanbanBoardTask = (task) => {
  const kanbanBoardTask = document.createElement("div");

  const priorityBasedCardStyles =
    PRIORITY_STYLE_CLASSES[task.priority] ?? NO_PRIORITY_STYLE_CLASSES;

  kanbanBoardTask.classList.add(
    KANBAN_BOARD_TASK_CLASS,
    ...KANBAN_BOARD_TASK_STYLE_CLASSES,
    ...priorityBasedCardStyles
  );

  const kanbanBoardTaskTitle = createKanbanBoardTaskTitle(task);
  const kanbanBoardTaskDescription = createKanbanBoardTaskDescription(task);

  kanbanBoardTask.appendChild(kanbanBoardTaskTitle);
  kanbanBoardTask.appendChild(kanbanBoardTaskDescription);

  return kanbanBoardTask;
};

const createKanbanBoardTaskTitle = (task) => {
  const kanbanBoardTaskTitle = document.createElement("h3");
  kanbanBoardTaskTitle.classList.add(...KANBAN_BOARD_TASK_TITLE_STYLE_CLASSES);
  kanbanBoardTaskTitle.textContent = task.title;

  return kanbanBoardTaskTitle;
};

const createKanbanBoardTaskDescription = (task) => {
  const kanbanBoardTaskDescription = document.createElement("p");
  kanbanBoardTaskDescription.classList.add(
    ...KANBAN_BOARD_TASK_DESCRIPTION_STYLE_CLASSES
  );
  kanbanBoardTaskDescription.textContent = task.description;

  return kanbanBoardTaskDescription;
};

const renderKanbanBoard = () => {
  const kanbanBoardContainer = document.querySelector(
    getIdSelector(KANBAN_BOARD_CONTAINER_ID)
  );

  if (!kanbanBoardContainer) {
    console.error(`Element with ID ${KANBAN_BOARD_CONTAINER_ID} not found.`);
    return;
  }

  if (!KANBAN_BOARD_STATE || KANBAN_BOARD_STATE.length === 0) {
    console.error("KANBAN_BOARD_STATE is empty or not defined.");
    return;
  }

  KANBAN_BOARD_STATE.forEach((board) =>
    kanbanBoardContainer.appendChild(createKanbanBoard(board))
  );
};

renderKanbanBoard();
