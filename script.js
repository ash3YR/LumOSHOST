document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById('downloadBtn');
    
    // Smooth scrolling for navigation anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Download Button Interaction Simulation
    if (downloadBtn) {
        downloadBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            const originalText = downloadBtn.querySelector('.btn-text').textContent;
            const originalIconHTML = downloadBtn.querySelector('.btn-icon').innerHTML;
            
            // Loading state
            downloadBtn.querySelector('.btn-text').textContent = "Preparing ISO...";
            downloadBtn.querySelector('.btn-icon').innerHTML = `
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="spin">
                    <line x1="12" y1="2" x2="12" y2="6"></line>
                    <line x1="12" y1="18" x2="12" y2="22"></line>
                    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                    <line x1="2" y1="12" x2="6" y2="12"></line>
                    <line x1="18" y1="12" x2="22" y2="12"></line>
                    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                </svg>
            `;
            
            // Add a simple spin class via inline styling for the demo
            if(!document.getElementById('spin-style')) {
                const spinAnim = document.createElement('style');
                spinAnim.id = 'spin-style';
                spinAnim.innerHTML = `
                    @keyframes spin { 100% { transform: rotate(360deg); } }
                    .spin { animation: spin 2s linear infinite; }
                `;
                document.head.appendChild(spinAnim);
            }

            // Simulate file preparation delay then "download"
            setTimeout(() => {
                downloadBtn.querySelector('.btn-text').textContent = "Downloading...";
                
                // Reset after some time to allow demonstration again
                setTimeout(() => {
                    downloadBtn.querySelector('.btn-text').textContent = originalText;
                    downloadBtn.querySelector('.btn-icon').innerHTML = originalIconHTML;
                    
                    // Trigger an actual file download simulation
                    alert("LumOS ISO download started! (Demo)");
                }, 2000);
            }, 1500);
        });
    }

    // Add scroll listener for sticky header styling
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(9, 9, 14, 0.8)';
            header.style.boxShadow = '0 10px 30px -10px rgba(0, 0, 0, 0.5)';
        } else {
            header.style.background = 'transparent';
            header.style.boxShadow = 'none';
        }
    });
});
