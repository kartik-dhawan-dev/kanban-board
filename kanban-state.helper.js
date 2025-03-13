const getLocalStorageBoards = () => {
  const boards = localStorage.getItem(KANBAN_BOARD_LOCAL_STORAGE_KEY);
  return boards ? JSON.parse(boards) : [];
};

const setLocalStorageBoards = (boards) => {
  localStorage.setItem(KANBAN_BOARD_LOCAL_STORAGE_KEY, JSON.stringify(boards));
};

const syncWithLocalStorage = () => {
  setLocalStorageBoards(KANBAN_BOARD_STATE);
};

const addBoard = (board) => {
  KANBAN_BOARD_STATE.push(board);
  syncWithLocalStorage();
};

const removeBoard = (boardId) => {
  const index = KANBAN_BOARD_STATE.findIndex((board) => board.id === boardId);
  if (index >= 0) {
    KANBAN_BOARD_STATE.splice(index, 1);
    syncWithLocalStorage();
  }
};

const updateBoard = (boardId, updatedBoard) => {
  const index = KANBAN_BOARD_STATE.findIndex((board) => board.id === boardId);
  if (index >= 0) {
    KANBAN_BOARD_STATE[index] = { ...updatedBoard };
    syncWithLocalStorage();
  }
};

const initKanbanBoards = () => {
  const localStorageBoards = getLocalStorageBoards();
  if (localStorageBoards.length > 0) {
    KANBAN_BOARD_STATE = localStorageBoards;
  }
};

const addTaskToBoard = (board, task) => {
  board.tasks.push(task);
  syncWithLocalStorage();
};
