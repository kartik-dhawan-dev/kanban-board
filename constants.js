const ADD_BOARD_BUTTON_ID = "add-board-button";
const KANBAN_BOARD_CONTAINER_ID = "kanban-board-container";

const KANBAN_BOARD_CLASS = "kanban-board";

const KANBAN_BOARD_STYLE_CLASSES = [
  "bg-[#F3F4F6]",
  "flex",
  "flex-col",
  "max-h-full",
  "min-h-[500px]",
  "min-w-[300px]",
  "w-full",
  "h-full",
  "max-w-[450px]",
  "shadow-md",
  "rounded-md",
  "pb-4",
  "pt-4",
  "m-auto",
];

const KANBAN_BOARD_TASK_CONTAINER = "kanban-board-task-container";
const KANBAN_BOARD_TASK_CONTAINER_STYLE_CLASSES = [
  "p-4",
  "w-full",
  "h-full",
  "select-none",
  "overflow-y-auto",
  "scrollbar-hide",
];

const KANBAN_BOARD_HEADER_STYLE_CLASSES = [
  "p-4",
  "flex",
  "rounded-t-md",
  "justify-between",
  "items-center",
];

const KANBAN_BOARD_HEADER_TITLE_STYLE_CLASSES = [
  "text-lg",
  "font-semibold",
  "select-none",
];

const ADD_TASK_BUTTON_CLASS = "add-task";

const KANBAN_BOARD_ADD_TASK_BUTTON_STYLE_CLASSES = [
  "btn",
  "select-none",
  "text-sm",
  "border",
  "px-2",
  "py-1",
  "border-gray-300",
  "font-semibold",
  "text-gray-600",
  "rounded-md",
  "transition",
  "cursor-pointer",
  "bg-transparent",
  "transform",
  "hover:scale-105",
  "hover:bg-gray-100",
  "hover:shadow-md",
  "shadow-sm",
];

const KANBAN_BOARD_TASK_CLASS = "kanban-board-task";

const KANBAN_BOARD_TASK_STYLE_CLASSES = [
  "p-4",
  "gap-2",
  "flex",
  "flex-col",
  "w-full",
  "mb-4",
  "bg-white",
  "shadow-md",
  "rounded-lg",
  "border-l-4",
  "transition",
  "hover:shadow-lg",
  "hover:bg-gray-100",
];

const KANBAN_BOARD_TASK_TITLE_STYLE_CLASSES = [
  "text-sm",
  "md:text-md",
  "lg:text-[16px]",
  "xl:text-lg",
  "font-semibold",
];

const KANBAN_BOARD_TASK_DESCRIPTION_STYLE_CLASSES = [
  "text-xs",
  "xl:text-sm",
  "2x:text-md",
  "text-gray-500",
];
const KANBAN_BOARD_TASK_CREATED_AT_STYLE_CLASSES = [
  "text-[10px]",
  "md:text-xs",
  "w-full",
  "italic",
  "text-gray-400",
  "italic",
  "ml-auto",
  "text-right",
];

const PRIORITY_STYLE_CLASSES = {
  high: ["border-red-400"],
  low: ["border-yellow-400"],
  medium: ["border-green-400"],
};

const NO_PRIORITY_STYLE_CLASSES = ["border-gray-300"];
