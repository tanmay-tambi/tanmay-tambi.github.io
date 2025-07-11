// Projects Data
const projects = [
    {
        title: "Internship at Emertxe Information Technologies",
        description: "Responsible for Telegram marketing initiative, delving into marketing fundamentals, color psychology, content strategies and team communication.",
        skills: ["Digital Marketing", "Content Strategy", "Team Communication"],
        icon: "briefcase"
    },
    {
        title: "Jr. CEO Course by Clever Harvey (Brown University)",
        description: "Intensive 2-week business coaching program. Pitched 'Groomers' startup with detailed market survey, financial modeling & GTM strategy.",
        skills: ["Business Planning", "Financial Modeling", "Market Research"],
        icon: "award"
    },
    {
        title: "Tinkerpreneur Program (Government of India)",
        description: "Two-month entrepreneurship journey. Created 'Furn-Tech' business proposal using augmented reality for furniture shopping.",
        skills: ["Entrepreneurship", "AR Technology", "Business Development"],
        icon: "code"
    },
    {
        title: "Shark Tank Winner & Organizer",
        description: "Won 1st prize at DPS South Shark Tank across 12 teams. Later organized the first-ever Shark Tank event at DPS North.",
        skills: ["Pitching", "Event Management", "Leadership"],
        icon: "trophy"
    },
    {
        title: "Binge Healthy Sales Initiative",
        description: "Created marketing materials and achieved Rs 50K sales in one day during school event to support NIOS children's projects.",
        skills: ["Sales", "Marketing", "Social Impact"],
        icon: "users"
    },
    {
        title: "Residential Society Events",
        description: "Set up games and food stalls in residential society, gaining hands-on sales and customer engagement experience.",
        skills: ["Sales Experience", "Customer Engagement", "Event Setup"],
        icon: "home"
    }
];

// Achievements Data
const achievements = [
    "Won 1st Prize in Interschool Shark Tank Event - Competed across 4 rounds (quiz, elevator pitch, business presentation, PR) against 12 teams",
    "Jr. CEO Certificate from Brown University - Youngest in cohort, appreciated for detailed market survey and financial modeling",
    "Lead Organizer of First-Ever Shark Tank at DPS North - Conceptualized and executed during prestigious school fest 'Impressions'",
    "Tinkerpreneur Program Graduate - Government of India initiative, developed 'Furn-Tech' AR furniture shopping concept",
    "Sales Achievement - Generated Rs 50K sales in one day through 'Binge Healthy' initiative supporting NIOS children",
    "Digital Marketing Success - Strategized Telegram channel activities for enhanced customer engagement at Emertxe",
    "Badminton Enthusiast - Active sports participation showcasing discipline and teamwork skills",
    "IPMAT Aspirant - Preparing for prestigious management entrance exam with focus on commerce and entrepreneurship"
];

// DOM Elements
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const projectsGrid = document.getElementById('projects-grid');
const achievementsList = document.getElementById('achievements-list');
const contactForm = document.getElementById('contact-form');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Load projects
    loadProjects();
    
    // Load achievements
    loadAchievements();
    
    // Setup event listeners
    setupEventListeners();
});

// Load Projects
function loadProjects() {
    projectsGrid.innerHTML = '';
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        const skillsHTML = project.skills.map(skill => 
            `<span class="skill-tag">${skill}</span>`
        ).join('');
        
        projectCard.innerHTML = `
            <div class="project-header">
                <div class="project-icon">
                    <i data-lucide="${project.icon}"></i>
                </div>
                <h3 class="project-title">${project.title}</h3>
            </div>
            <p class="project-description">${project.description}</p>
            <div class="project-skills">
                ${skillsHTML}
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
    
    // Re-initialize icons for new elements
    lucide.createIcons();
}

// Load Achievements
function loadAchievements() {
    achievementsList.innerHTML = '';
    
    achievements.forEach(achievement => {
        const achievementItem = document.createElement('div');
        achievementItem.className = 'achievement-item';
        
        achievementItem.innerHTML = `
            <div class="achievement-icon">
                <i data-lucide="star"></i>
            </div>
            <p class="achievement-text">${achievement}</p>
        `;
        
        achievementsList.appendChild(achievementItem);
    });
    
    // Re-initialize icons for new elements
    lucide.createIcons();
}

// Setup Event Listeners
function setupEventListeners() {
    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Contact form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Create mailto link
        const subject = encodeURIComponent('Portfolio Contact from ' + name);
        const body = encodeURIComponent(`Hi Tanmay,\n\nI visited your portfolio and would like to connect.\n\nFrom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        
        window.open(`mailto:tanmaytambiji@gmail.com?subject=${subject}&body=${body}`);
        
        // Reset form
        contactForm.reset();
        alert('Thank you for your message! Your email client should open with a pre-filled email.');
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

// Smooth scrolling function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Resume download function
function downloadResume() {
    const link = document.createElement('a');
    link.href = 'public/assets/documents/final_resume.pdf';
    link.download = 'Tanmay_Tambi_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// View resume function
function viewResume() {
    window.open('public/assets/documents/final_resume.pdf', '_blank');
}

// Add scroll animations
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections
    document.querySelectorAll('.project-card, .achievement-item, .about-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize scroll animations after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(addScrollAnimations, 100);
});

// Add typing effect to hero subtitle
function addTypingEffect() {
    const subtitle = document.querySelector('.hero-subtitle');
    const text = subtitle.textContent;
    subtitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    };
    
    setTimeout(typeWriter, 1000);
}

// Initialize typing effect
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(addTypingEffect, 500);
});