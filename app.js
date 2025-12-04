// Application Data
const appData = {
  "scrapingJobs": [
    {
      "id": "job_001",
      "name": "E-commerce Price Monitor",
      "url": "https://example-shop.com",
      "status": "Running",
      "progress": 65,
      "recordsCollected": 1247,
      "successRate": 94.2,
      "startTime": "2025-09-13T10:30:00Z",
      "method": "JavaScript-rendered",
      "extractionRules": {
        "title": ".product-title",
        "price": ".price-current",
        "description": ".product-description",
        "image": ".product-image img"
      }
    },
    {
      "id": "job_002", 
      "name": "News Articles Scraper",
      "url": "https://news-site.com",
      "status": "Completed",
      "progress": 100,
      "recordsCollected": 2891,
      "successRate": 98.7,
      "startTime": "2025-09-13T08:00:00Z",
      "method": "Static HTML",
      "extractionRules": {
        "headline": "h1.article-title",
        "content": ".article-body",
        "author": ".author-name", 
        "publishDate": ".publish-date"
      }
    },
    {
      "id": "job_003",
      "name": "Social Media Monitor", 
      "url": "https://social-platform.com",
      "status": "Failed",
      "progress": 23,
      "recordsCollected": 156,
      "successRate": 67.3,
      "startTime": "2025-09-13T09:15:00Z",
      "method": "API endpoints",
      "extractionRules": {
        "post": ".post-content",
        "likes": ".like-count",
        "shares": ".share-count",
        "comments": ".comment-count"
      }
    }
  ],
  "statistics": {
    "totalJobs": 12,
    "activeJobs": 3,
    "totalRecords": 45823,
    "averageSuccessRate": 87.4
  },
  "proxies": [
    {
      "id": "proxy_001",
      "ip": "192.168.1.100",
      "port": "8080",
      "country": "United States",
      "status": "Active",
      "responseTime": 245,
      "successRate": 96.8
    },
    {
      "id": "proxy_002",
      "ip": "10.0.0.50",
      "port": "3128", 
      "country": "Germany",
      "status": "Active",
      "responseTime": 189,
      "successRate": 94.2
    },
    {
      "id": "proxy_003",
      "ip": "172.16.0.25",
      "port": "8888",
      "country": "Japan",
      "status": "Failed",
      "responseTime": 0,
      "successRate": 0
    }
  ],
  "extractionPatterns": [
    {
      "name": "E-commerce Product",
      "selectors": {
        "title": ".product-title, h1.title, .item-name",
        "price": ".price, .cost, .amount",
        "description": ".description, .details, .summary",
        "image": ".product-image img, .main-image",
        "rating": ".rating, .stars, .score"
      }
    },
    {
      "name": "News Article",
      "selectors": {
        "headline": "h1, .headline, .article-title",
        "content": ".article-body, .content, .story",
        "author": ".author, .byline, .writer",
        "date": ".date, .published, .timestamp"
      }
    },
    {
      "name": "Contact Information",
      "selectors": {
        "name": ".name, .contact-name, .person",
        "email": ".email, .contact-email",
        "phone": ".phone, .telephone, .contact-phone",
        "address": ".address, .location, .contact-address"
      }
    }
  ],
  "recentActivity": [
    {
      "type": "job_completed",
      "message": "News Articles Scraper completed successfully",
      "timestamp": "2025-09-13T11:45:00Z"
    },
    {
      "type": "job_started",
      "message": "E-commerce Price Monitor started",
      "timestamp": "2025-09-13T10:30:00Z"
    },
    {
      "type": "proxy_added",
      "message": "New proxy server added (Germany)",
      "timestamp": "2025-09-13T09:20:00Z"
    },
    {
      "type": "data_exported",
      "message": "2,891 records exported to CSV",
      "timestamp": "2025-09-13T08:30:00Z"
    }
  ]
};

// Application State
let currentSection = 'dashboard';
let currentTab = 'basic';
let customFieldCounter = 0;

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing app...');
    initializeNavigation();
    initializeTabs();
    initializeFormElements();
    initializeModals();
    populateData();
    startRealTimeUpdates();
});

// Navigation Functions
function initializeNavigation() {
    console.log('Initializing navigation...');
    
    // Sidebar navigation - More specific selector and event handling
    document.addEventListener('click', function(e) {
        // Handle sidebar navigation
        const navItem = e.target.closest('.nav-item[data-section]');
        if (navItem) {
            e.preventDefault();
            const section = navItem.getAttribute('data-section');
            console.log('Sidebar navigation to:', section);
            switchSection(section);
        }
        
        // Handle quick action buttons
        const actionBtn = e.target.closest('[data-action]');
        if (actionBtn) {
            e.preventDefault();
            const action = actionBtn.getAttribute('data-action');
            console.log('Quick action clicked:', action);
            switchSection(action);
        }
        
        // Handle tab navigation
        const tabBtn = e.target.closest('.tab-button[data-tab]');
        if (tabBtn) {
            e.preventDefault();
            const tabId = tabBtn.getAttribute('data-tab');
            console.log('Tab navigation to:', tabId);
            switchTab(tabId);
        }
    });
}

function switchSection(sectionId) {
    console.log('Switching to section:', sectionId);
    
    // Validate section exists
    const targetSection = document.getElementById(sectionId);
    if (!targetSection) {
        console.warn('Section not found:', sectionId);
        return;
    }
    
    // Update sidebar active state
    const sidebarNavItems = document.querySelectorAll('.nav-item[data-section]');
    sidebarNavItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-section') === sectionId) {
            item.classList.add('active');
        }
    });

    // Update content sections
    const contentSections = document.querySelectorAll('.content-section');
    contentSections.forEach(section => {
        section.classList.remove('active');
    });
    
    targetSection.classList.add('active');
    currentSection = sectionId;
    
    console.log('Successfully switched to section:', sectionId);
}

// Tab Functions
function initializeTabs() {
    console.log('Initializing tabs...');
    // Tab functionality is now handled by the global click handler
}

function switchTab(tabId) {
    console.log('Switching tab to:', tabId);
    
    // Update tab buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-tab') === tabId) {
            btn.classList.add('active');
        }
    });

    // Update tab panels
    const tabPanels = document.querySelectorAll('.tab-panel');
    tabPanels.forEach(panel => {
        panel.classList.remove('active');
        if (panel.id === tabId + '-tab') {
            panel.classList.add('active');
        }
    });

    currentTab = tabId;
}

// Form Functions
function initializeFormElements() {
    console.log('Initializing form elements...');
    
    // Range slider
    const rangeSlider = document.getElementById('request-delay');
    const rangeValue = document.querySelector('.range-value');
    
    if (rangeSlider && rangeValue) {
        rangeSlider.addEventListener('input', function() {
            rangeValue.textContent = this.value + 's';
        });
        // Initialize display
        rangeValue.textContent = rangeSlider.value + 's';
    }

    // Extraction pattern selector
    const extractionPattern = document.getElementById('extraction-pattern');
    if (extractionPattern) {
        extractionPattern.addEventListener('change', function() {
            populateExtractionFields(this.value);
        });
    }

    // Add custom field button
    document.addEventListener('click', function(e) {
        if (e.target.id === 'add-field' || e.target.closest('#add-field')) {
            e.preventDefault();
            addCustomField();
        }
        
        // Preview and Start buttons
        if (e.target.id === 'preview-config' || e.target.closest('#preview-config')) {
            e.preventDefault();
            previewConfiguration();
        }
        
        if (e.target.id === 'start-scraper' || e.target.closest('#start-scraper')) {
            e.preventDefault();
            startScrapingJob();
        }
    });
}

function populateExtractionFields(patternType) {
    console.log('Populating extraction fields for:', patternType);
    
    if (patternType === 'custom') return;

    const pattern = appData.extractionPatterns.find(p => 
        p.name.toLowerCase().includes(patternType)
    );

    if (pattern) {
        const titleSelector = document.getElementById('title-selector');
        const descSelector = document.getElementById('description-selector');
        const priceSelector = document.getElementById('price-selector');
        const imageSelector = document.getElementById('image-selector');
        const linkSelector = document.getElementById('link-selector');

        if (titleSelector) titleSelector.value = pattern.selectors.title || pattern.selectors.headline || pattern.selectors.name || '';
        if (descSelector) descSelector.value = pattern.selectors.description || pattern.selectors.content || '';
        if (priceSelector) priceSelector.value = pattern.selectors.price || '';
        if (imageSelector) imageSelector.value = pattern.selectors.image || '';
        if (linkSelector) linkSelector.value = 'a';
        
        showToast('info', 'Pattern Applied', `${pattern.name} selectors have been applied.`);
    }
}

function addCustomField() {
    customFieldCounter++;
    const container = document.getElementById('custom-fields-container');
    if (!container) return;
    
    const fieldHtml = `
        <div class="custom-field" data-field-id="${customFieldCounter}">
            <div class="form-group">
                <label class="form-label">Field Name</label>
                <input type="text" class="form-control" placeholder="field_name">
            </div>
            <div class="form-group">
                <label class="form-label">CSS Selector</label>
                <input type="text" class="form-control" placeholder=".selector">
            </div>
            <button type="button" class="remove-field" onclick="removeCustomField(${customFieldCounter})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `;
    container.insertAdjacentHTML('beforeend', fieldHtml);
    showToast('info', 'Field Added', 'Custom field has been added successfully.');
}

function removeCustomField(fieldId) {
    const field = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (field) {
        field.remove();
        showToast('info', 'Field Removed', 'Custom field has been removed.');
    }
}

function previewConfiguration() {
    const config = collectFormData();
    showToast('info', 'Configuration Preview', 'Configuration is valid and ready to use. Check console for details.');
    console.log('Configuration Preview:', config);
}

function startScrapingJob() {
    const config = collectFormData();
    
    if (!config.projectName || !config.targetUrl) {
        showToast('error', 'Validation Error', 'Please fill in Project Name and Target URL fields.');
        return;
    }

    // Simulate starting the job
    const newJob = {
        id: 'job_' + Date.now(),
        name: config.projectName,
        url: config.targetUrl,
        status: 'Running',
        progress: Math.floor(Math.random() * 15) + 5, // Start with some progress
        recordsCollected: Math.floor(Math.random() * 50) + 10,
        successRate: Math.floor(Math.random() * 20) + 80,
        startTime: new Date().toISOString(),
        method: config.scrapingMethod || 'static'
    };

    appData.scrapingJobs.unshift(newJob);
    populateJobsTable();
    updateStatistics();
    
    showToast('success', 'Job Started', `${config.projectName} has been started successfully.`);
    
    // Switch to active jobs section
    setTimeout(() => {
        switchSection('active-jobs');
    }, 1500);
}

function collectFormData() {
    const getInputValue = (id) => {
        const element = document.getElementById(id);
        return element ? element.value : '';
    };

    return {
        projectName: getInputValue('project-name'),
        targetUrl: getInputValue('target-url'),
        scrapingMethod: getInputValue('scraping-method') || 'static',
        requestDelay: getInputValue('request-delay') || '2',
        maxPages: getInputValue('max-pages') || '100',
        userAgent: getInputValue('user-agent') || 'chrome',
        extractionPattern: getInputValue('extraction-pattern') || 'custom',
        selectors: {
            title: getInputValue('title-selector'),
            description: getInputValue('description-selector'),
            price: getInputValue('price-selector'),
            image: getInputValue('image-selector'),
            link: getInputValue('link-selector')
        },
        outputFormat: getInputValue('output-format') || 'json'
    };
}

// Data Population Functions
function populateData() {
    console.log('Populating data...');
    populateStatistics();
    populateActivityFeed();
    populateJobsTable();
    populateProxyTable();
    populateDataPreview();
}

function populateStatistics() {
    const stats = appData.statistics;
    const totalJobsEl = document.getElementById('total-jobs');
    const activeJobsEl = document.getElementById('active-jobs-count');
    const totalRecordsEl = document.getElementById('total-records');
    const successRateEl = document.getElementById('success-rate');

    if (totalJobsEl) totalJobsEl.textContent = stats.totalJobs;
    if (activeJobsEl) activeJobsEl.textContent = stats.activeJobs;
    if (totalRecordsEl) totalRecordsEl.textContent = stats.totalRecords.toLocaleString();
    if (successRateEl) successRateEl.textContent = stats.averageSuccessRate + '%';
}

function populateActivityFeed() {
    const feed = document.getElementById('activity-feed');
    if (!feed) return;

    feed.innerHTML = appData.recentActivity.map(activity => {
        const icon = getActivityIcon(activity.type);
        const timeAgo = getTimeAgo(activity.timestamp);
        
        return `
            <div class="activity-item">
                <div class="activity-icon">
                    <i class="${icon}"></i>
                </div>
                <div class="activity-content">
                    <p class="activity-message">${activity.message}</p>
                    <p class="activity-time">${timeAgo}</p>
                </div>
            </div>
        `;
    }).join('');
}

function populateJobsTable() {
    const tbody = document.getElementById('jobs-table-body');
    if (!tbody) return;

    tbody.innerHTML = appData.scrapingJobs.map(job => {
        const timeAgo = getTimeAgo(job.startTime);
        
        return `
            <tr>
                <td><strong>${job.name}</strong></td>
                <td><span class="status status--${getStatusType(job.status)}">${job.status}</span></td>
                <td>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${job.progress}%"></div>
                    </div>
                    <span style="font-size: 12px; color: var(--color-text-secondary); margin-left: 8px;">${Math.round(job.progress)}%</span>
                </td>
                <td>${job.recordsCollected.toLocaleString()}</td>
                <td>${job.successRate}%</td>
                <td>${timeAgo}</td>
                <td>
                    <div class="job-actions">
                        <button class="action-btn" onclick="pauseJob('${job.id}')" title="Pause/Resume">
                            <i class="fas fa-${job.status === 'Running' ? 'pause' : 'play'}"></i>
                        </button>
                        <button class="action-btn" onclick="viewJobLogs('${job.id}')" title="View Logs">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="action-btn action-btn--danger" onclick="stopJob('${job.id}')" title="Stop Job">
                            <i class="fas fa-stop"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

function populateProxyTable() {
    const tbody = document.getElementById('proxy-table-body');
    if (!tbody) return;

    tbody.innerHTML = appData.proxies.map(proxy => {
        const statusClass = proxy.status === 'Active' ? 'status-active' : 'status-failed';
        
        return `
            <tr>
                <td>${proxy.ip}</td>
                <td>${proxy.port}</td>
                <td>${proxy.country}</td>
                <td><span class="status-indicator ${statusClass}">${proxy.status}</span></td>
                <td>${proxy.responseTime > 0 ? proxy.responseTime + 'ms' : '-'}</td>
                <td>${proxy.successRate}%</td>
                <td>
                    <div class="job-actions">
                        <button class="action-btn" onclick="testProxy('${proxy.id}')" title="Test Proxy">
                            <i class="fas fa-check"></i>
                        </button>
                        <button class="action-btn action-btn--danger" onclick="removeProxy('${proxy.id}')" title="Remove Proxy">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

function populateDataPreview() {
    const sampleData = document.querySelector('.sample-data');
    if (!sampleData) return;

    const sample = {
        "total_records": 4294,
        "last_updated": "2025-09-13T11:45:00Z",
        "sample_data": [
            {
                "title": "Premium Wireless Headphones",
                "price": "$129.99",
                "description": "High-quality wireless headphones with noise cancellation...",
                "image": "https://example.com/headphones.jpg",
                "rating": "4.5/5",
                "extracted_at": "2025-09-13T11:45:00Z"
            },
            {
                "title": "Smartphone Case Protective Cover",
                "price": "$24.99",
                "description": "Durable protection for your device with impact resistance...",
                "image": "https://example.com/phonecase.jpg",
                "rating": "4.2/5",
                "extracted_at": "2025-09-13T11:44:00Z"
            },
            {
                "title": "USB-C Charging Cable 6ft",
                "price": "$12.99",
                "description": "Fast charging cable compatible with most devices...",
                "image": "https://example.com/cable.jpg",
                "rating": "4.7/5",
                "extracted_at": "2025-09-13T11:43:00Z"
            }
        ]
    };

    sampleData.textContent = JSON.stringify(sample, null, 2);
}

// Modal Functions
function initializeModals() {
    console.log('Initializing modals...');
    
    // Use event delegation for modal buttons
    document.addEventListener('click', function(e) {
        // Add proxy button
        if (e.target.id === 'add-proxy' || e.target.closest('#add-proxy')) {
            e.preventDefault();
            showModal('add-proxy-modal');
        }
        
        // Test all proxies button
        if (e.target.id === 'test-all-proxies' || e.target.closest('#test-all-proxies')) {
            e.preventDefault();
            testAllProxies();
        }
        
        // Modal close buttons
        if (e.target.classList.contains('modal-close') || e.target.classList.contains('modal-cancel')) {
            const modal = e.target.closest('.modal');
            if (modal) {
                e.preventDefault();
                hideModal(modal.id);
            }
        }
        
        // Close modal on backdrop click
        if (e.target.classList.contains('modal')) {
            hideModal(e.target.id);
        }
    });
}

function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
    }
}

function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
    }
}

function testAllProxies() {
    showToast('info', 'Testing All Proxies', 'Starting proxy tests for all configured servers...');
    appData.proxies.forEach((proxy, index) => {
        setTimeout(() => {
            testProxy(proxy.id);
        }, index * 1000); // Stagger the tests
    });
}

// Job Action Functions
function pauseJob(jobId) {
    const job = appData.scrapingJobs.find(j => j.id === jobId);
    if (job) {
        job.status = job.status === 'Running' ? 'Paused' : 'Running';
        populateJobsTable();
        showToast('info', 'Job Status Changed', `${job.name} has been ${job.status.toLowerCase()}.`);
    }
}

function viewJobLogs(jobId) {
    const job = appData.scrapingJobs.find(j => j.id === jobId);
    if (job) {
        showToast('info', 'Job Logs', `Opening detailed logs for ${job.name}. Check browser console for sample logs.`);
        console.log(`=== LOGS FOR ${job.name.toUpperCase()} ===`);
        console.log(`Status: ${job.status}`);
        console.log(`Progress: ${job.progress}%`);
        console.log(`Records Collected: ${job.recordsCollected}`);
        console.log(`Success Rate: ${job.successRate}%`);
        console.log(`Method: ${job.method}`);
        console.log(`Started: ${job.startTime}`);
        console.log('=== END LOGS ===');
    }
}

function stopJob(jobId) {
    const job = appData.scrapingJobs.find(j => j.id === jobId);
    if (job) {
        job.status = 'Stopped';
        populateJobsTable();
        updateStatistics();
        showToast('warning', 'Job Stopped', `${job.name} has been stopped and will not continue.`);
    }
}

// Proxy Functions
function testProxy(proxyId) {
    const proxy = appData.proxies.find(p => p.id === proxyId);
    if (proxy) {
        showToast('info', 'Testing Proxy', `Testing connection to ${proxy.ip}:${proxy.port}...`);
        
        // Simulate test result after 2 seconds
        setTimeout(() => {
            const success = Math.random() > 0.3;
            proxy.status = success ? 'Active' : 'Failed';
            proxy.responseTime = success ? Math.floor(Math.random() * 300) + 100 : 0;
            proxy.successRate = success ? Math.floor(Math.random() * 20) + 80 : 0;
            populateProxyTable();
            
            showToast(
                success ? 'success' : 'error',
                'Proxy Test Complete',
                `${proxy.ip}:${proxy.port} is ${proxy.status.toLowerCase()}${success ? ` (${proxy.responseTime}ms)` : ''}`
            );
        }, 2000);
    }
}

function removeProxy(proxyId) {
    const proxyIndex = appData.proxies.findIndex(p => p.id === proxyId);
    if (proxyIndex !== -1) {
        const proxy = appData.proxies[proxyIndex];
        appData.proxies.splice(proxyIndex, 1);
        populateProxyTable();
        showToast('warning', 'Proxy Removed', `${proxy.ip}:${proxy.port} has been removed from the pool.`);
    }
}

// Utility Functions
function getActivityIcon(type) {
    const icons = {
        'job_completed': 'fas fa-check',
        'job_started': 'fas fa-play',
        'proxy_added': 'fas fa-shield-alt',
        'data_exported': 'fas fa-download',
        'job_failed': 'fas fa-exclamation-triangle'
    };
    return icons[type] || 'fas fa-info';
}

function getStatusType(status) {
    const statusMap = {
        'Running': 'info',
        'Completed': 'success',
        'Failed': 'error',
        'Paused': 'warning',
        'Stopped': 'warning'
    };
    return statusMap[status] || 'info';
}

function getTimeAgo(timestamp) {
    const now = new Date();
    const time = new Date(timestamp);
    const diffMs = now - time;
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

    if (diffMins < 60) {
        return `${diffMins}m ago`;
    } else if (diffHours < 24) {
        return `${diffHours}h ago`;
    } else {
        return time.toLocaleDateString();
    }
}

// Toast Notification System
function showToast(type, title, message) {
    const toastContainer = document.getElementById('toast-container');
    if (!toastContainer) return;
    
    const toastId = 'toast-' + Date.now();
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type} toast-enter`;
    toast.id = toastId;
    
    const iconMap = {
        'success': 'fas fa-check',
        'error': 'fas fa-times',
        'warning': 'fas fa-exclamation-triangle',
        'info': 'fas fa-info'
    };
    
    toast.innerHTML = `
        <div class="toast-icon">
            <i class="${iconMap[type]}"></i>
        </div>
        <div class="toast-content">
            <div class="toast-title">${title}</div>
            <div class="toast-message">${message}</div>
        </div>
        <button class="toast-close" onclick="closeToast('${toastId}')">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    toastContainer.appendChild(toast);
    
    // Trigger animation
    setTimeout(() => {
        toast.classList.remove('toast-enter');
    }, 10);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        closeToast(toastId);
    }, 5000);
}

function closeToast(toastId) {
    const toast = document.getElementById(toastId);
    if (toast) {
        toast.classList.add('toast-exit');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }
}

// Real-time Updates
function startRealTimeUpdates() {
    // Update progress bars and statistics every 5 seconds
    setInterval(() => {
        updateRunningJobs();
        updateStatistics();
    }, 5000);
}

function updateRunningJobs() {
    let hasUpdates = false;
    
    appData.scrapingJobs.forEach(job => {
        if (job.status === 'Running') {
            // Simulate progress
            const increment = Math.random() * 3 + 1;
            job.progress = Math.min(100, job.progress + increment);
            
            // Simulate records collection
            const newRecords = Math.floor(Math.random() * 15) + 5;
            job.recordsCollected += newRecords;
            
            // Occasionally update success rate
            if (Math.random() > 0.7) {
                job.successRate = Math.min(100, job.successRate + (Math.random() * 2 - 1));
            }
            
            hasUpdates = true;
            
            // Mark as completed if progress reaches 100%
            if (job.progress >= 100) {
                job.status = 'Completed';
                job.progress = 100;
                showToast('success', 'Job Completed', `${job.name} has finished successfully with ${job.recordsCollected.toLocaleString()} records collected.`);
                
                // Add to recent activity
                appData.recentActivity.unshift({
                    type: 'job_completed',
                    message: `${job.name} completed successfully`,
                    timestamp: new Date().toISOString()
                });
                
                // Keep only last 10 activities
                appData.recentActivity = appData.recentActivity.slice(0, 10);
                populateActivityFeed();
            }
        }
    });
    
    if (hasUpdates) {
        populateJobsTable();
    }
}

function updateStatistics() {
    const runningJobs = appData.scrapingJobs.filter(j => j.status === 'Running').length;
    const totalRecords = appData.scrapingJobs.reduce((sum, job) => sum + job.recordsCollected, 0);
    const avgSuccessRate = appData.scrapingJobs.reduce((sum, job) => sum + job.successRate, 0) / appData.scrapingJobs.length;

    appData.statistics = {
        totalJobs: appData.scrapingJobs.length,
        activeJobs: runningJobs,
        totalRecords: totalRecords,
        averageSuccessRate: Math.round(avgSuccessRate * 10) / 10
    };
    
    populateStatistics();
}

// Make functions globally available for onclick handlers
window.removeCustomField = removeCustomField;
window.pauseJob = pauseJob;
window.viewJobLogs = viewJobLogs;
window.stopJob = stopJob;
window.testProxy = testProxy;
window.removeProxy = removeProxy;
window.closeToast = closeToast;