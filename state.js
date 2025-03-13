const getRandomDate = () => {
    const start = new Date(2020, 0, 1);
    const end = new Date();
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

const getRandomId = () =>  Math.round(Math.random() * 1000000);


const KANBAN_BOARD_STATE = [
    {
        id: getRandomId(),
        title: "To Do",
        tasks: [
            {
                title: "Design homepage",
                description: "Create the initial design for the homepage",
                priority: "high",
                createdAt: getRandomDate(),
                order: 1,
            },
            {
                title: "Set up database",
                description: "Install and configure the database",
                priority: "medium",
                createdAt: getRandomDate(),
                order: 2,
            },
            {
                title: "Write documentation",
                description: "Document the API endpoints",
                priority: "low",
                createdAt: getRandomDate(),
                order: 3,
            },
            {
                title: "Research competitors",
                description: "Analyze the features of competitor products",
                createdAt: getRandomDate(),
                order: 4,
            },
        ],
    },
    {
        id: getRandomId(),
        title: "In Progress",
        tasks: [
            {
                title: "Develop login feature",
                description: "Implement user authentication",
                priority: "high",
                createdAt: getRandomDate(),
                order: 1,
            },
            {
                title: "Create user profile page",
                description: "Develop the user profile page",
                priority: "medium",
                createdAt: getRandomDate(),
                order: 2,
            },
            {
                title: "Set up CI/CD pipeline",
                description: "Configure continuous integration and deployment",
                priority: "high",
                createdAt: getRandomDate(),
                order: 3,
            },
            {
                title: "Optimize images",
                description: "Reduce the size of images for faster loading",
                priority: "low",
                createdAt: getRandomDate(),
                order: 4,
            },
        ],
    },
    {
        id: getRandomId(),
        title: "Done",
        tasks: [
            {
                title: "Initial project setup",
                description: "Set up the project repository and initial files",
                priority: "high",
                createdAt: getRandomDate(),
                order: 1,
            },
            {
                title: "Create wireframes",
                description: "Design wireframes for the main pages",
                priority: "medium",
                createdAt: getRandomDate(),
                order: 2,
            },
            {
                title: "Set up version control",
                description: "Initialize Git and create the repository",
                priority: "high",
                createdAt: getRandomDate(),
                order: 3,
            },
            {
                title: "Team meeting",
                description: "Discuss project requirements and milestones",
                priority: "low",
                createdAt: getRandomDate(),
                order: 4,
            },
        ],
    },
];
