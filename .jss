document.addEventListener("DOMContentLoaded", () => {
    // Clock
    function updateClock() {
        const clock = document.getElementById('currentClock');
        if (clock) clock.innerText = new Date().toLocaleTimeString();
    }
    setInterval(updateClock, 1000);
    updateClock();

    // Date default settings
    const dateInput = document.getElementById('journeyDate');
    const todayStr = new Date().toISOString().split('T')[0];
    if (dateInput) {
        dateInput.value = todayStr;
        dateInput.min = todayStr;
    }

    // Top Utility Buttons
    document.getElementById('askDishaBtn').addEventListener('click', () => {
        alert('Connecting to Ask Disha AI Assistant...');
    });
    document.getElementById('contactUsBtn').addEventListener('click', () => {
        alert('Contact Support: 14646 | care@irctc.co.in');
    });
    document.getElementById('hindiBtn').addEventListener('click', () => {
        alert('Switched interface language to Hindi.');
    });

    // Modals Control
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');

    document.getElementById('loginBtn').addEventListener('click', () => {
        loginModal.style.display = 'flex';
    });
    document.getElementById('registerBtn').addEventListener('click', () => {
        registerModal.style.display = 'flex';
    });
    document.getElementById('closeLogin').addEventListener('click', () => {
        loginModal.style.display = 'none';
    });
    document.getElementById('closeRegister').addEventListener('click', () => {
        registerModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === loginModal) loginModal.style.display = 'none';
        if (e.target === registerModal) registerModal.style.display = 'none';
    });

    // Login & Register Form Submissions
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Logged in successfully!');
        loginModal.style.display = 'none';
    });
    document.getElementById('registerForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Registration successful!');
        registerModal.style.display = 'none';
    });

    // Navigation Switcher
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            
            document.getElementById('trainsSection').style.display = 'none';
            document.getElementById('flightsSection').style.display = 'none';
            document.getElementById('hotelsSection').style.display = 'none';
            document.getElementById('drishtiSection').style.display = 'none';
            document.getElementById('contactSection').style.display = 'none';

            if (sectionId === 'trains') document.getElementById('trainsSection').style.display = 'block';
            if (sectionId === 'flights') document.getElementById('flightsSection').style.display = 'block';
            if (sectionId === 'hotels') document.getElementById('hotelsSection').style.display = 'block';
            if (sectionId === 'drishti') document.getElementById('drishtiSection').style.display = 'block';
            if (sectionId === 'contact') document.getElementById('contactSection').style.display = 'block';

            navLinks.forEach(a => a.classList.remove('active'));
            this.classList.add('active');
        });
    });

    document.getElementById('brandHome').addEventListener('click', () => {
        document.getElementById('trainsSection').style.display = 'block';
        document.getElementById('flightsSection').style.display = 'none';
        document.getElementById('hotelsSection').style.display = 'none';
        document.getElementById('drishtiSection').style.display = 'none';
        document.getElementById('contactSection').style.display = 'none';
        navLinks.forEach(a => a.classList.remove('active'));
        navLinks[0].classList.add('active');
    });

    // Tabs Switcher (Book, PNR, Charts)
    const tabs = document.querySelectorAll('.service-tabs .tab-item');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            
            document.getElementById('bookTabContent').style.display = 'none';
            document.getElementById('pnrTabContent').style.display = 'none';
            document.getElementById('chartsTabContent').style.display = 'none';

            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            if (tabName === 'book') document.getElementById('bookTabContent').style.display = 'block';
            if (tabName === 'pnr') document.getElementById('pnrTabContent').style.display = 'block';
            if (tabName === 'charts') document.getElementById('chartsTabContent').style.display = 'block';
        });
    });

    document.getElementById('goToPnrLink').addEventListener('click', () => {
        tabs[1].click();
    });

    // Form Submissions & Results
    document.getElementById('irctcSearchForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const fromVal = document.getElementById('fromStation').value;
        const toVal = document.getElementById('toStation').value;
        document.getElementById('resultsRouteHeading').innerText = `Trains: ${fromVal} ➔ ${toVal}`;
        const resultsSection = document.getElementById('resultsSection');
        resultsSection.style.display = 'block';
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('closeResultsBtn').addEventListener('click', () => {
        document.getElementById('resultsSection').style.display = 'none';
    });

    document.getElementById('pnrForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Fetching PNR status...');
    });
    document.getElementById('chartForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Loading charts...');
    });
    document.getElementById('flightForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Flight search simulated successfully!');
    });
    document.getElementById('hotelForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Hotel search simulated successfully!');
    });
    document.getElementById('trainBadge').addEventListener('click', () => {
        alert('Proceeding to booking...');
    });
});
