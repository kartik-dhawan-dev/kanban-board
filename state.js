const getRandomDate = () => {
  const start = new Date(2020, 0, 1);
  const end = new Date();
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

const getRandomId = () => Math.round(Math.random() * 1000000);

let KANBAN_BOARD_STATE = []