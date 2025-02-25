document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.querySelector('.projects-container');
    const projects = [
        {
            title: ' 2 in 1 ',
            description: 'This Java project manages user registration, login, and game participation with a coin-based system. It includes "Guess the Number" and "Rock, Paper, Scissors," where players earn or lose coins based on performance, enhancing engagement.',
            githubLink: 'https://github.com/GARALAJEET/2in1-Game.git'
        },
        {
            title: 'Studpal CLI',
            description: 'StudPal is a Java-based student management system designed to help students manage their schedules, track expenses, and maintain a personal wallet. It includes features for timetable management, authentication, expense tracking, and wallet management, all backed by a MySQL database.',
          
            githubLink: 'https://github.com/GARALAJEET/studpal.git'
        },
        {
            title: 'The Task Tracker CLI',
            description: 'The Task Tracker CLI is a simple command-line interface (CLI) application built using Java Spring Boot. This project allows users to track tasks efficiently by performing CRUD operations such as adding, updating, deleting, and displaying tasks. The task list is stored in a MySQL database, and tasks are categorized into different statuses: To-Do, In-Progress, and Done.',
            // technologies: ['Spring boot', 'Hibernate', 'Mysql'],
        
            githubLink: 'https://github.com/GARALAJEET/Task-Tracker-CLI'
        }, {
            title: 'Studpal UI',
            description: 'The StudPal UI will feature a simple and intuitive design focused on student productivity. It will provide easy navigation for managing daily schedules, tracking finances, and organizing academic tasks. The interface will include a dashboard displaying upcoming classes, reminders, and wallet balance. A minimalistic yet effective layout will ensure smooth user interaction, with essential features accessible through a structured menu.',
            // technologies: ['Spring boot', 'Hibernate', 'Mysql'],
        
            githubLink: 'https://github.com/GARALAJEET/Studpal-UI.githttps://github.com/GARALAJEET/Studpal-UI.git'
        },
        {
            title: 'tech Burger ',
            description: 'Tech Burger offers a seamless online ordering experience with a simple and interactive UI. Customers can browse the menu, customize their orders, and check out effortlessly. Shop owners can manage orders through a secure login system. The website ensures smooth navigation, clear categorization of burgers, sides, and drinks, and highlights special combo offers for an engaging user experience.',
            // technologies: ['Spring boot', 'Hibernate', 'Mysql'],
        
            githubLink: 'https://github.com/GARALAJEET/tech-Burger.git'
        }
    ];

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        projectCard.innerHTML = `
            <div class="project-details">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-links">
                    <a href="${project.githubLink}" class="project-link" target="_blank">GitHub</a>
                </div>
            </div>
        `;

        projectsContainer.appendChild(projectCard);
    });

    // Optional: Add project image lightbox
    const lightbox = GLightbox({
        selector: '.project-image',
        title: true
    });
});