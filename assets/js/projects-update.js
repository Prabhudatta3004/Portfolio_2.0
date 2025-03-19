// Add new projects to the projects container
document.addEventListener('DOMContentLoaded', function () {
    const projectsContainer = document.querySelector('.projects-container');

    // New projects to add
    const newProjects = [
        // OS Project
        {
            category: "os",
            tag: "Operating Systems",
            title: "Reader/Writer Locks",
            description: "Implemented a synchronization mechanism that allows concurrent read access to shared resources while ensuring exclusive write access for data integrity.",
            technologies: ["C", "Synchronization", "Concurrency"],
            githubLink: "https://github.com/Prabhudatta3004/READ-WRITE-LOCKS"
        },

        // Distributed Systems Projects
        {
            category: "distributed",
            tag: "Distributed Systems",
            title: "Dead Letter Queues (DLQ)",
            description: "Developed a robust dead letter queue system for handling failed message processing in distributed applications, ensuring no data loss.",
            technologies: ["Java", "Message Queues", "Fault Handling"],
            githubLink: "https://github.com/Prabhudatta3004/DLQ"
        },
        {
            category: "distributed",
            tag: "Distributed Systems",
            title: "ADT - Distributed Hash Table",
            description: "Created a scalable distributed hash table implementation for efficient key-value storage across distributed nodes with consistent hashing.",
            technologies: ["Go", "Distributed Storage", "Consistent Hashing"],
            githubLink: "https://github.com/Prabhudatta3004/ADT"
        },
        {
            category: "distributed",
            tag: "Distributed Systems",
            title: "P2P File Sharing System",
            description: "Engineered a peer-to-peer file sharing network with distributed index maintenance and efficient file discovery mechanisms.",
            technologies: ["Java", "P2P Networks", "Distributed Index"],
            githubLink: "https://github.com/Distributed-Systems-KP/P2P_File_Sharing"
        },
        {
            category: "distributed",
            tag: "Distributed Systems",
            title: "Pub-Sub System",
            description: "Developed a publish-subscribe messaging system supporting multiple topics with guaranteed message delivery and subscriber management.",
            technologies: ["Go", "Messaging", "Event-Driven"],
            githubLink: "https://github.com/Distributed-Systems-KP/Pub-Sub-System"
        },

        // Cloud Projects
        {
            category: "cloud",
            tag: "Cloud",
            title: "Infrastructure as a Service",
            description: "Built a scalable IaaS platform for on-demand compute, storage, and networking resources with automated provisioning and management.",
            technologies: ["Terraform", "AWS", "Infrastructure Automation"],
            githubLink: "https://github.com/Prabhudatta3004/Infrastructure-as-a-Service"
        },
        {
            category: "cloud",
            tag: "Cloud",
            title: "Dynamic Load Balancer",
            description: "Constructed a hybrid Layer 4/Layer 7 load balancer with dynamic traffic management capabilities and high fault tolerance.",
            technologies: ["Golang", "Traffic Management", "Fault Tolerance"],
            githubLink: "https://github.com/Distributed-Systems-KP/Dynamic_Load_Balancer"
        },
        {
            category: "cloud",
            tag: "Cloud",
            title: "Auction Socket Programming",
            description: "Implemented a client-server architecture for a real-time auction system using socket programming with concurrent client handling.",
            technologies: ["Java", "Sockets", "Concurrency"],
            githubLink: "https://github.com/Distributed-Systems-KP/Auction_Socket_Programming"
        }
    ];

    // Create and append project cards
    newProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.setAttribute('data-category', project.category);

        projectCard.innerHTML = `
            <div class="project-front">
                <div class="project-tag">${project.tag}</div>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
                <a href="${project.githubLink}" class="project-link" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path
                            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                        </path>
                    </svg>
                    View on GitHub
                </a>
            </div>
        `;

        projectsContainer.appendChild(projectCard);
    });

    // Move the Hybrid Load Balancer from OS to Cloud section
    const hybridLoadBalancer = document.querySelector('.project-card[data-category="os"] .project-front h3:contains("Hybrid Load Balancer")');
    if (hybridLoadBalancer) {
        const hybridLoadBalancerCard = hybridLoadBalancer.closest('.project-card');
        hybridLoadBalancerCard.setAttribute('data-category', 'cloud');
        hybridLoadBalancerCard.querySelector('.project-tag').textContent = 'Cloud';
    }

    // Helper function for text-based selectors (not part of standard DOM API)
    // This will help us find the specific Hybrid Load Balancer card
    if (!Element.prototype.findElementWithText) {
        Element.prototype.findElementWithText = function (selector, text) {
            const elements = this.querySelectorAll(selector);
            return Array.from(elements).find(el => el.textContent.includes(text));
        };
    }

    // Apply the newly created selector to find and move the Hybrid Load Balancer
    const loadBalancerHeading = document.findElementWithText('h3', 'Hybrid Load Balancer');
    if (loadBalancerHeading) {
        const loadBalancerCard = loadBalancerHeading.closest('.project-card');
        loadBalancerCard.setAttribute('data-category', 'cloud');
        loadBalancerCard.querySelector('.project-tag').textContent = 'Cloud';
    }

    // Apply animation delays to the new cards
    const allCards = document.querySelectorAll('.project-card');
    allCards.forEach((card, index) => {
        card.style.animationDelay = `${(index * 0.1).toFixed(1)}s`;
    });

    // Re-initialize the filter functionality to include new projects
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            // Filter projects
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
});