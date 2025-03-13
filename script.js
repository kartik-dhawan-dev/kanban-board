const renderKanbanBoard = () => {
  const kanbanBoardContainer = document.querySelector(
    getIdSelector(KANBAN_BOARD_CONTAINER_ID)
  );

  if (!kanbanBoardContainer) {
    console.error(`Element with ID ${KANBAN_BOARD_CONTAINER_ID} not found.`);
    return;
  }

  kanbanBoardContainer.innerHTML = "";
  kanbanBoardContainer.classList.add(
    ...KANBAN_BOARD_CONTAINER_DEFAULT_STYLE_CLASSES
  );

  if (!KANBAN_BOARD_STATE || KANBAN_BOARD_STATE.length === 0) {
    const emptyStateMessage = document.createElement("div");

    emptyStateMessage.innerText =
      "No boards available. Please add a new board to get started!";

    emptyStateMessage.classList.add(
      ...KANBAN_BOARD_CONTAINER_EMPTY_STATE_STYLE_CLASSES
    );

    kanbanBoardContainer.appendChild(emptyStateMessage);
    return;
  }

  kanbanBoardContainer.classList.add(
    ...KANBAN_BOARD_CONTAINER_WITH_BOARD_STYLE_CLASSES
  );
  KANBAN_BOARD_STATE.forEach((board) =>
    kanbanBoardContainer.appendChild(createKanbanBoard(board))
  );

  const addTaskButtons = document.querySelectorAll(
    getClassSelector(ADD_TASK_BUTTON_CLASS)
  );

  addTaskButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const boardId = this.id;

      const buttonBoard = KANBAN_BOARD_STATE.find(
        (board) => board.id == boardId
      );

      createAddTaskModal(buttonBoard);
    });
  });
};

const addBoardButton = document.querySelector(
  getIdSelector(ADD_BOARD_BUTTON_ID)
);

addBoardButton.addEventListener("click", () => {
  const boardTitle = prompt("Enter board title:");

  if (!boardTitle) {
    return;
  }

  addBoard({
    id: getRandomId(),
    title: boardTitle,
    tasks: [],
  });

  renderKanbanBoard();
});

initKanbanBoards();
renderKanbanBoard();
