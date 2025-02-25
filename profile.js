
    const skillsContainer = document.querySelector('.skills-container');
    const skills = [
        'Web Development',
        'JavaScript',
        'React',
        'Java',
        ' spring',
        'Spring boot',
        'Hibernate',
        'Spring Data JPA',
        'Mysql',
        'Database Management',
    ];

    skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.classList.add('skill-badge');
        skillElement.textContent = skill;
        skillsContainer.appendChild(skillElement);
    });


    const cvDownload = document.getElementById('cv-download');
    const githubLink = document.getElementById('github-link');

    cvDownload.href = 'path/to/your/cv.pdf';
    githubLink.href = 'https://github.com/yourusername';

    