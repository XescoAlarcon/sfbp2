// ===================================
// Sample Programs Database
// ===================================
const programsDatabase = [
    {
        id: 1,
        title: "5 A's Brief Intervention for Smoking Cessation",
        description: "Evidence-based clinical intervention using Ask, Advise, Assess, Assist, and Arrange framework for tobacco cessation counseling in primary care settings.",
        intervention: "cessation",
        population: "adults",
        setting: "clinical",
        evidence: "high",
        tags: ["Brief Intervention", "Clinical Protocol", "Primary Care"]
    },
    {
        id: 2,
        title: "School-Based Tobacco Prevention Curriculum",
        description: "Comprehensive prevention program for middle and high school students focusing on peer resistance skills and media literacy.",
        intervention: "prevention",
        population: "youth",
        setting: "school",
        evidence: "high",
        tags: ["Education", "Youth", "Peer Resistance"]
    },
    {
        id: 3,
        title: "Quitline Counseling Services",
        description: "Telephone-based cessation support providing personalized coaching, evidence-based strategies, and follow-up support.",
        intervention: "cessation",
        population: "adults",
        setting: "community",
        evidence: "high",
        tags: ["Telephone Counseling", "Behavioral Support", "Remote Access"]
    },
    {
        id: 4,
        title: "Smoke-Free Workplace Policy Implementation",
        description: "Comprehensive toolkit for implementing and maintaining smoke-free workplace policies with employee support programs.",
        intervention: "policy",
        population: "adults",
        setting: "workplace",
        evidence: "high",
        tags: ["Policy", "Workplace", "Environmental Change"]
    },
    {
        id: 5,
        title: "Prenatal Tobacco Cessation Program",
        description: "Specialized cessation intervention for pregnant women combining behavioral counseling with prenatal care integration.",
        intervention: "cessation",
        population: "pregnant",
        setting: "clinical",
        evidence: "high",
        tags: ["Pregnancy", "Behavioral Counseling", "Maternal Health"]
    },
    {
        id: 6,
        title: "Community-Based Secondhand Smoke Education",
        description: "Public awareness campaign and educational program reducing secondhand smoke exposure in multi-unit housing.",
        intervention: "secondhand",
        population: "adults",
        setting: "community",
        evidence: "moderate",
        tags: ["Public Education", "Housing", "Community Engagement"]
    },
    {
        id: 7,
        title: "Pharmacotherapy Protocol for Cessation",
        description: "Evidence-based guidelines for prescribing and monitoring nicotine replacement therapy and other cessation medications.",
        intervention: "cessation",
        population: "adults",
        setting: "clinical",
        evidence: "high",
        tags: ["Pharmacotherapy", "NRT", "Clinical Guidelines"]
    },
    {
        id: 8,
        title: "Youth Anti-Tobacco Media Campaign",
        description: "Multi-platform media campaign targeting youth tobacco initiation using social media, videos, and peer influencers.",
        intervention: "prevention",
        population: "youth",
        setting: "community",
        evidence: "moderate",
        tags: ["Media Campaign", "Social Marketing", "Digital Media"]
    },
    {
        id: 9,
        title: "Smoke-Free Parks and Recreation Initiative",
        description: "Policy framework and implementation guide for establishing smoke-free outdoor recreational areas.",
        intervention: "policy",
        population: "adults",
        setting: "community",
        evidence: "moderate",
        tags: ["Public Spaces", "Policy", "Outdoor Areas"]
    },
    {
        id: 10,
        title: "Hospital-Based Cessation Program",
        description: "Systematic intervention for hospitalized patients including bedside counseling, medication initiation, and post-discharge follow-up.",
        intervention: "cessation",
        population: "adults",
        setting: "clinical",
        evidence: "high",
        tags: ["Hospital", "Inpatient", "Integrated Care"]
    },
    {
        id: 11,
        title: "Mobile App for Tobacco Cessation",
        description: "Evidence-based smartphone application providing quit support, tracking, motivational messages, and coping strategies.",
        intervention: "cessation",
        population: "adults",
        setting: "community",
        evidence: "moderate",
        tags: ["Digital Health", "Mobile Technology", "Self-Management"]
    },
    {
        id: 12,
        title: "Tobacco-Free College Campus Policy",
        description: "Comprehensive framework for implementing and enforcing tobacco-free policies on college campuses with student engagement.",
        intervention: "policy",
        population: "youth",
        setting: "school",
        evidence: "moderate",
        tags: ["Higher Education", "Campus Policy", "Student Health"]
    },
    {
        id: 13,
        title: "Parent-Teen Communication Program",
        description: "Family-based prevention program enhancing parent-child communication about tobacco use risks and refusal skills.",
        intervention: "prevention",
        population: "youth",
        setting: "community",
        evidence: "moderate",
        tags: ["Family Intervention", "Communication", "Parenting"]
    },
    {
        id: 14,
        title: "Smoke-Free Home Initiative",
        description: "Community program promoting voluntary smoke-free home policies to reduce children's secondhand smoke exposure.",
        intervention: "secondhand",
        population: "adults",
        setting: "community",
        evidence: "moderate",
        tags: ["Home Environment", "Child Protection", "Voluntary Policy"]
    },
    {
        id: 15,
        title: "Tobacco Cessation for Seniors Program",
        description: "Age-appropriate cessation intervention addressing unique needs and motivations of older adults with chronic conditions.",
        intervention: "cessation",
        population: "seniors",
        setting: "clinical",
        evidence: "moderate",
        tags: ["Geriatric Care", "Chronic Disease", "Age-Specific"]
    },
    {
        id: 16,
        title: "E-Cigarette Prevention in Schools",
        description: "Educational program specifically addressing vaping and e-cigarette use among adolescents with peer-led components.",
        intervention: "prevention",
        population: "youth",
        setting: "school",
        evidence: "emerging",
        tags: ["Vaping", "E-Cigarettes", "Peer Education"]
    },
    {
        id: 17,
        title: "Motivational Interviewing for Cessation",
        description: "Training program for healthcare providers in motivational interviewing techniques for tobacco cessation counseling.",
        intervention: "cessation",
        population: "adults",
        setting: "clinical",
        evidence: "high",
        tags: ["Counseling Technique", "Provider Training", "Behavioral Change"]
    },
    {
        id: 18,
        title: "Tobacco Retail Licensing Policy",
        description: "Model policy framework for local tobacco retail licensing with compliance monitoring and enforcement guidelines.",
        intervention: "policy",
        population: "youth",
        setting: "community",
        evidence: "moderate",
        tags: ["Retail Policy", "Access Reduction", "Compliance"]
    },
    {
        id: 19,
        title: "Text Messaging Cessation Support",
        description: "Automated SMS-based cessation program delivering daily motivational messages, tips, and on-demand support.",
        intervention: "cessation",
        population: "adults",
        setting: "community",
        evidence: "moderate",
        tags: ["Text Messaging", "mHealth", "Automated Support"]
    },
    {
        id: 20,
        title: "Workplace Wellness Cessation Benefit",
        description: "Employer-sponsored cessation program covering counseling and pharmacotherapy with incentive structures.",
        intervention: "cessation",
        population: "adults",
        setting: "workplace",
        evidence: "high",
        tags: ["Employee Benefits", "Workplace Wellness", "Insurance Coverage"]
    },
    {
        id: 21,
        title: "Car Smoke-Free Zone Campaign",
        description: "Public education and policy initiative promoting smoke-free vehicles, especially when children are present.",
        intervention: "secondhand",
        population: "adults",
        setting: "community",
        evidence: "moderate",
        tags: ["Vehicle Policy", "Child Protection", "Public Awareness"]
    },
    {
        id: 22,
        title: "Peer-Led College Cessation Groups",
        description: "Student-facilitated cessation support groups on college campuses using peer support and shared experiences.",
        intervention: "cessation",
        population: "youth",
        setting: "school",
        evidence: "emerging",
        tags: ["Peer Support", "Group Counseling", "College Students"]
    },
    {
        id: 23,
        title: "Tobacco Price and Tax Policy Toolkit",
        description: "Evidence-based resources for advocating and implementing tobacco tax increases as prevention strategy.",
        intervention: "policy",
        population: "adults",
        setting: "community",
        evidence: "high",
        tags: ["Taxation", "Policy Advocacy", "Economic Intervention"]
    },
    {
        id: 24,
        title: "Elementary School Prevention Curriculum",
        description: "Age-appropriate tobacco prevention education for elementary students focusing on health effects and saying no.",
        intervention: "prevention",
        population: "youth",
        setting: "school",
        evidence: "moderate",
        tags: ["Elementary Education", "Early Prevention", "Health Literacy"]
    },
    {
        id: 25,
        title: "Integration of Cessation into Mental Health Care",
        description: "Protocol for addressing tobacco use in mental health treatment settings with coordinated care approaches.",
        intervention: "cessation",
        population: "adults",
        setting: "clinical",
        evidence: "moderate",
        tags: ["Mental Health", "Integrated Care", "Dual Diagnosis"]
    },
    {
        id: 26,
        title: "Smoke-Free Apartment Building Policy",
        description: "Implementation guide for smoke-free multi-unit housing policies with tenant education and enforcement strategies.",
        intervention: "secondhand",
        population: "adults",
        setting: "community",
        evidence: "moderate",
        tags: ["Multi-Unit Housing", "Tenant Rights", "Air Quality"]
    },
    {
        id: 27,
        title: "Faith-Based Cessation Program",
        description: "Culturally-tailored cessation intervention delivered through faith communities with spiritual support components.",
        intervention: "cessation",
        population: "adults",
        setting: "community",
        evidence: "moderate",
        tags: ["Faith Community", "Cultural Adaptation", "Community Partnership"]
    },
    {
        id: 28,
        title: "Point-of-Sale Marketing Restrictions",
        description: "Model policy restricting tobacco marketing and displays at retail locations to reduce youth exposure.",
        intervention: "policy",
        population: "youth",
        setting: "community",
        evidence: "moderate",
        tags: ["Retail Marketing", "Youth Protection", "Advertising Ban"]
    },
    {
        id: 29,
        title: "Dental Office Tobacco Screening and Referral",
        description: "Protocol for dental professionals to screen for tobacco use and provide cessation referrals during routine visits.",
        intervention: "cessation",
        population: "adults",
        setting: "clinical",
        evidence: "moderate",
        tags: ["Dental Care", "Screening", "Referral System"]
    },
    {
        id: 30,
        title: "Community Health Worker Cessation Outreach",
        description: "Program training community health workers to provide culturally-appropriate cessation support in underserved communities.",
        intervention: "cessation",
        population: "adults",
        setting: "community",
        evidence: "moderate",
        tags: ["Community Health Workers", "Outreach", "Health Equity"]
    }
];

// ===================================
// State Management
// ===================================
let currentFilters = {
    intervention: [],
    population: [],
    setting: [],
    evidence: [],
    search: ''
};

let currentSort = 'relevance';
let currentPage = 1;
const itemsPerPage = 10;

// ===================================
// DOM Elements
// ===================================
const programsGrid = document.getElementById('programsGrid');
const searchInput = document.getElementById('searchInput');
const searchForm = document.getElementById('searchForm');
const sortSelect = document.getElementById('sortSelect');
const clearFiltersBtn = document.getElementById('clearFilters');
const activeFiltersContainer = document.getElementById('activeFilters');
const resultCount = document.getElementById('resultCount');
const totalCount = document.getElementById('totalCount');
const pagination = document.getElementById('pagination');

// ===================================
// Initialization
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
    renderPrograms();
    updateResultsCount();
});

// ===================================
// Event Listeners
// ===================================
function initializeEventListeners() {
    // Search form
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        currentFilters.search = searchInput.value.trim();
        currentPage = 1;
        renderPrograms();
        updateActiveFilters();
    });

    // Sort select
    sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderPrograms();
    });

    // Filter checkboxes
    const checkboxes = document.querySelectorAll('.checkbox-label input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const filterType = e.target.name;
            const filterValue = e.target.value;
            
            if (e.target.checked) {
                if (!currentFilters[filterType].includes(filterValue)) {
                    currentFilters[filterType].push(filterValue);
                }
            } else {
                currentFilters[filterType] = currentFilters[filterType].filter(v => v !== filterValue);
            }
            
            currentPage = 1;
            renderPrograms();
            updateActiveFilters();
        });
    });

    // Clear filters
    clearFiltersBtn.addEventListener('click', () => {
        clearAllFilters();
    });

    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                
                // Close mobile menu if open
                if (navList && navList.classList.contains('active')) {
                    navList.classList.remove('active');
                }
                
                // Update active nav link
                document.querySelectorAll('.nav-list a').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
}

// ===================================
// Filter and Search Logic
// ===================================
function getFilteredPrograms() {
    let filtered = [...programsDatabase];

    // Apply search filter
    if (currentFilters.search) {
        const searchLower = currentFilters.search.toLowerCase();
        filtered = filtered.filter(program => 
            program.title.toLowerCase().includes(searchLower) ||
            program.description.toLowerCase().includes(searchLower) ||
            program.tags.some(tag => tag.toLowerCase().includes(searchLower))
        );
    }

    // Apply category filters
    Object.keys(currentFilters).forEach(filterType => {
        if (filterType !== 'search' && currentFilters[filterType].length > 0) {
            filtered = filtered.filter(program => 
                currentFilters[filterType].includes(program[filterType])
            );
        }
    });

    return filtered;
}

function sortPrograms(programs) {
    const sorted = [...programs];
    
    switch (currentSort) {
        case 'name':
            return sorted.sort((a, b) => a.title.localeCompare(b.title));
        case 'date':
            // Simulated - in real app would use actual dates
            return sorted.reverse();
        case 'evidence':
            const evidenceOrder = { 'high': 0, 'moderate': 1, 'emerging': 2 };
            return sorted.sort((a, b) => evidenceOrder[a.evidence] - evidenceOrder[b.evidence]);
        default:
            return sorted;
    }
}

// ===================================
// Render Functions
// ===================================
function renderPrograms() {
    const filtered = getFilteredPrograms();
    const sorted = sortPrograms(filtered);
    
    // Pagination
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedPrograms = sorted.slice(startIndex, endIndex);

    if (paginatedPrograms.length === 0) {
        programsGrid.innerHTML = `
            <div class="no-results" style="text-align: center; padding: 3rem; color: var(--text-medium);">
                <h3>No programs found</h3>
                <p>Try adjusting your filters or search terms</p>
            </div>
        `;
    } else {
        programsGrid.innerHTML = paginatedPrograms.map(program => createProgramCard(program)).join('');
    }

    updateResultsCount(filtered.length);
    renderPagination(filtered.length);
}

function createProgramCard(program) {
    const evidenceClass = `evidence-${program.evidence}`;
    const evidenceLabels = {
        'high': 'High Evidence',
        'moderate': 'Moderate Evidence',
        'emerging': 'Emerging Evidence'
    };

    return `
        <article class="program-card">
            <div class="program-header">
                <div class="program-title">
                    <h3>${program.title}</h3>
                </div>
                <div class="evidence-badge ${evidenceClass}">
                    ${evidenceLabels[program.evidence]}
                </div>
            </div>
            
            <div class="program-meta">
                <span>📍 ${formatLabel(program.setting)}</span>
                <span>👥 ${formatLabel(program.population)}</span>
                <span>🎯 ${formatLabel(program.intervention)}</span>
            </div>
            
            <p class="program-description">${program.description}</p>
            
            <div class="program-tags">
                ${program.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            
            <div class="program-footer">
                <a href="#" class="program-link" onclick="viewProgramDetails(${program.id}); return false;">
                    View Details →
                </a>
            </div>
        </article>
    `;
}

function formatLabel(value) {
    const labels = {
        'prevention': 'Prevention',
        'cessation': 'Cessation',
        'secondhand': 'Secondhand Smoke',
        'policy': 'Policy & Advocacy',
        'youth': 'Youth & Adolescents',
        'adults': 'Adults',
        'pregnant': 'Pregnant Women',
        'seniors': 'Seniors',
        'clinical': 'Clinical/Hospital',
        'community': 'Community',
        'school': 'School-Based',
        'workplace': 'Workplace'
    };
    return labels[value] || value;
}

function updateResultsCount(filteredCount) {
    if (filteredCount !== undefined) {
        resultCount.textContent = filteredCount;
    }
    totalCount.textContent = programsDatabase.length;
}

function updateActiveFilters() {
    const filters = [];
    
    // Add search filter
    if (currentFilters.search) {
        filters.push({
            type: 'search',
            value: currentFilters.search,
            display: `Search: "${currentFilters.search}"`
        });
    }

    // Add category filters
    Object.keys(currentFilters).forEach(filterType => {
        if (filterType !== 'search') {
            currentFilters[filterType].forEach(value => {
                filters.push({
                    type: filterType,
                    value: value,
                    display: formatLabel(value)
                });
            });
        }
    });

    if (filters.length === 0) {
        activeFiltersContainer.innerHTML = '';
        return;
    }

    activeFiltersContainer.innerHTML = filters.map(filter => `
        <span class="filter-tag">
            ${filter.display}
            <button onclick="removeFilter('${filter.type}', '${filter.value}')" aria-label="Remove filter">×</button>
        </span>
    `).join('');
}

function renderPagination(totalItems) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    
    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }

    let paginationHTML = `
        <button class="page-btn" onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>
            Previous
        </button>
        <div class="page-numbers">
    `;

    // Show page numbers (with ellipsis for many pages)
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    if (startPage > 1) {
        paginationHTML += `<button class="page-number" onclick="changePage(1)">1</button>`;
        if (startPage > 2) {
            paginationHTML += `<span style="padding: 0 0.5rem;">...</span>`;
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        paginationHTML += `
            <button class="page-number ${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">
                ${i}
            </button>
        `;
    }

    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            paginationHTML += `<span style="padding: 0 0.5rem;">...</span>`;
        }
        paginationHTML += `<button class="page-number" onclick="changePage(${totalPages})">${totalPages}</button>`;
    }

    paginationHTML += `
        </div>
        <button class="page-btn" onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>
            Next
        </button>
    `;

    pagination.innerHTML = paginationHTML;
}

// ===================================
// Helper Functions
// ===================================
function removeFilter(type, value) {
    if (type === 'search') {
        currentFilters.search = '';
        searchInput.value = '';
    } else {
        currentFilters[type] = currentFilters[type].filter(v => v !== value);
        
        // Uncheck the corresponding checkbox
        const checkbox = document.querySelector(`input[name="${type}"][value="${value}"]`);
        if (checkbox) {
            checkbox.checked = false;
        }
    }
    
    currentPage = 1;
    renderPrograms();
    updateActiveFilters();
}

function clearAllFilters() {
    // Reset filters
    currentFilters = {
        intervention: [],
        population: [],
        setting: [],
        evidence: [],
        search: ''
    };
    
    // Uncheck all checkboxes
    document.querySelectorAll('.checkbox-label input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    // Clear search input
    searchInput.value = '';
    
    currentPage = 1;
    renderPrograms();
    updateActiveFilters();
}

function changePage(page) {
    const totalPages = Math.ceil(getFilteredPrograms().length / itemsPerPage);
    
    if (page < 1 || page > totalPages) return;
    
    currentPage = page;
    renderPrograms();
    
    // Scroll to top of results
    document.getElementById('practices').scrollIntoView({ behavior: 'smooth' });
}

function viewProgramDetails(programId) {
    const program = programsDatabase.find(p => p.id === programId);
    
    if (!program) return;
    
    // In a real application, this would navigate to a detail page
    // For now, we'll show an alert with basic info
    alert(`Program: ${program.title}\n\nThis would navigate to a detailed page with:\n- Full program description\n- Implementation guidelines\n- Evidence base and research\n- Resources and materials\n- Contact information\n- Related programs`);
}

// ===================================
// Scroll Effects
// ===================================
let lastScroll = 0;
const header = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow to header when scrolled
    if (currentScroll > 10) {
        header.style.boxShadow = 'var(--shadow-lg)';
    } else {
        header.style.boxShadow = 'var(--shadow-md)';
    }
    
    lastScroll = currentScroll;
});

// ===================================
// Accessibility Enhancements
// ===================================
document.addEventListener('keydown', (e) => {
    // Escape key closes mobile menu
    if (e.key === 'Escape') {
        const navList = document.querySelector('.nav-list');
        if (navList && navList.classList.contains('active')) {
            navList.classList.remove('active');
        }
    }
});
