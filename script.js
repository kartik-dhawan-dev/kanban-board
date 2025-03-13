const renderKanbanBoard = () => {
  const kanbanBoardContainer = document.querySelector(
    getIdSelector(KANBAN_BOARD_CONTAINER_ID)
  );

  if (!kanbanBoardContainer) {
    console.error(`Element with ID ${KANBAN_BOARD_CONTAINER_ID} not found.`);
    return;
  }

  kanbanBoardContainer.innerHTML = "";

  if (!KANBAN_BOARD_STATE || KANBAN_BOARD_STATE.length === 0) {
    console.error("KANBAN_BOARD_STATE is empty or not defined.");
    return;
  }

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

  KANBAN_BOARD_STATE.push({
    title: boardTitle,
    tasks: [],
  });

  renderKanbanBoard();
});

renderKanbanBoard();
