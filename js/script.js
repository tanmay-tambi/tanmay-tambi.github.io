// Initialize Lucide icons
lucide.createIcons();

// DOM Elements
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Mobile Navigation Toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger bars
    const bars = navToggle.querySelectorAll('.bar');
    if (navMenu.classList.contains('active')) {
        bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
    } else {
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking on nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const bars = navToggle.querySelectorAll('.bar');
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

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

// Projects data
const projectsData = [
    {
        icon: 'briefcase',
        title: 'Business Strategy',
        description: 'Strategic planning and business development for startups and small enterprises, focusing on market analysis and growth opportunities.',
        skills: ['Market Research', 'Business Planning', 'Financial Analysis']
    },
    {
        icon: 'users',
        title: 'Team Leadership',
        description: 'Leading teams and organizing events at school level, managing resources and coordinating with various stakeholders.',
        skills: ['Leadership', 'Project Management', 'Communication']
    },
    {
        icon: 'lightbulb',
        title: 'Innovation Consulting',
        description: 'Developing innovative solutions for business challenges through creative thinking and strategic problem-solving.',
        skills: ['Creative Thinking', 'Problem Solving', 'Innovation']
    },
    {
        icon: 'target',
        title: 'Competition Winner',
        description: 'Proven track record in business competitions including Shark Tank events and entrepreneurship challenges.',
        skills: ['Pitching', 'Presentation', 'Business Modeling']
    },
    {
        icon: 'book-open',
        title: 'Academic Excellence',
        description: 'Maintaining high academic standards while pursuing entrepreneurial interests and completing certified courses.',
        skills: ['Time Management', 'Research', 'Academic Writing']
    },
    {
        icon: 'award',
        title: 'Event Organization',
        description: 'Successfully organizing and managing school events, coordinating with teams and ensuring smooth execution.',
        skills: ['Event Planning', 'Coordination', 'Resource Management']
    }
];

// Achievements data
const achievementsData = [
    {
        icon: 'trophy',
        text: 'Won multiple Shark Tank competitions at school and regional level, demonstrating strong entrepreneurial skills and innovative thinking.'
    },
    {
        icon: 'graduation-cap',
        text: 'Completed courses certified by Brown University, gaining valuable knowledge in business and entrepreneurship.'
    },
    {
        icon: 'briefcase',
        text: 'Successfully completed internship at Emertxe Information Technologies Pvt Ltd in 2023, gaining practical business experience.'
    },
    {
        icon: 'users',
        text: 'Organized multiple school events and activities, demonstrating strong leadership and project management capabilities.'
    },
    {
        icon: 'star',
        text: 'Maintained excellent academic performance while actively pursuing entrepreneurial ventures and extracurricular activities.'
    },
    {
        icon: 'target',
        text: 'Preparing for IPMAT with dedication while building entrepreneurial experience and business acumen.'
    }
];

// Load projects
function loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;

    projectsGrid.innerHTML = projectsData.map(project => `
        <div class="project-card">
            <div class="project-icon">
                <i data-lucide="${project.icon}"></i>
            </div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-skills">
                ${project.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        </div>
    `).join('');

    // Re-initialize Lucide icons for dynamically added content
    lucide.createIcons();
}

// Load achievements
function loadAchievements() {
    const achievementsList = document.getElementById('achievements-list');
    if (!achievementsList) return;

    achievementsList.innerHTML = achievementsData.map(achievement => `
        <div class="achievement-item">
            <div class="achievement-icon">
                <i data-lucide="${achievement.icon}"></i>
            </div>
            <div class="achievement-text">${achievement.text}</div>
        </div>
    `).join('');

    // Re-initialize Lucide icons for dynamically added content
    lucide.createIcons();
}

// Resume functions
function downloadResume() {
    // Create a link to download the resume
    const link = document.createElement('a');
    link.href = 'public/assets/documents/final_resume.pdf';
    link.download = 'Tanmay_Tambi_Resume.pdf';
    link.click();
}

function viewResume() {
    // Open resume in new tab
    window.open('public/assets/documents/final_resume.pdf', '_blank');
}

// WhatsApp function
function openWhatsApp() {
    const phoneNumber = '918296807190';
    const message = encodeURIComponent('Hello Tanmay! I found your portfolio and would like to connect with you.');
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
}

// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Create email subject and body
            const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
            
            // Open email client
            window.location.href = `mailto:tanmaytambiji@gmail.com?subject=${subject}&body=${body}`;
            
            // Show success message
            alert('Thank you for your message! Your email client should open now.');
            
            // Reset form
            contactForm.reset();
        });
    }
});

// Intersection Observer for animations
function createObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.project-card, .achievement-item, .about-content');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
    loadAchievements();
    createObserver();
    
    // Initialize Lucide icons again to catch any missed icons
    setTimeout(() => {
        lucide.createIcons();
    }, 100);
});

// Scroll to top function (optional)
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button (optional)
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 500) {
        if (!document.querySelector('.scroll-top-btn')) {
            const scrollBtn = document.createElement('button');
            scrollBtn.className = 'scroll-top-btn';
            scrollBtn.innerHTML = '<i data-lucide="arrow-up"></i>';
            scrollBtn.style.cssText = `
                position: fixed;
                bottom: 2rem;
                right: 2rem;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background: #2563eb;
                color: white;
                border: none;
                cursor: pointer;
                box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
                transition: all 0.3s ease;
                z-index: 1000;
            `;
            scrollBtn.addEventListener('click', scrollToTop);
            scrollBtn.addEventListener('mouseenter', () => {
                scrollBtn.style.transform = 'translateY(-2px)';
                scrollBtn.style.boxShadow = '0 6px 16px rgba(37, 99, 235, 0.4)';
            });
            scrollBtn.addEventListener('mouseleave', () => {
                scrollBtn.style.transform = 'translateY(0)';
                scrollBtn.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.3)';
            });
            document.body.appendChild(scrollBtn);
            lucide.createIcons();
        }
    } else {
        const scrollBtn = document.querySelector('.scroll-top-btn');
        if (scrollBtn) {
            scrollBtn.remove();
        }
    }
});