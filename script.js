// Navigation & Section switching
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    const heroTitle = document.getElementById('heroTitle');
    const heroSubtitle = document.getElementById('heroSubtitle');

    const sectionMeta = {
        home: { title: 'Home', subtitle: 'Let\'s connect on LinkedIn' },
        about: { title: 'About Me', subtitle: 'Specializing in intuitive, scalable, and visually engaging web applications' },
        work: { title: 'Work', subtitle: 'Experience, skills, and technologies I work with' },
        resume: { title: 'Resume', subtitle: 'Download or preview my professional resume' },
        contact: { title: 'Contact', subtitle: 'Let\'s connect — I\'m open to new opportunities' }
    };

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.dataset.section;

            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            sections.forEach(s => s.classList.remove('active'));
            document.getElementById(target).classList.add('active');

            // Update hero heading
            const meta = sectionMeta[target];
            if (meta) {
                heroTitle.textContent = meta.title;
                heroSubtitle.innerHTML = meta.subtitle;
            }
        });
    });

    // Copy button functionality
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const text = btn.getAttribute('data-copy');
            navigator.clipboard.writeText(text).then(() => {
                btn.classList.add('copied');
                const icon = btn.querySelector('i');
                icon.className = 'fas fa-check';
                setTimeout(() => {
                    btn.classList.remove('copied');
                    icon.className = 'fas fa-copy';
                }, 1500);
            });
        });
    });
    document.addEventListener('DOMContentLoaded', () => {

  // Mobile resume preview (Google Docs Viewer)
  const mobileIframe = document.querySelector('.resume-iframe-mobile');

  if (mobileIframe) {
    const pdfUrl = 'https://pavan-maddipatla.vercel.app/assets/resume.pdf';
    mobileIframe.src ='https://docs.google.com/gview?url=' + encodeURIComponent(pdfUrl) +'&embedded=true';
  }

  // Resume download button
  const downloadBtn = document.getElementById('downloadResumeBtn');

  if (downloadBtn) {
    downloadBtn.addEventListener('click', (e) => {
      e.preventDefault();

      fetch(downloadBtn.href)
        .then((res) => res.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');

          a.href = url;
          a.download = 'Pavan_Maddipatla_resume.pdf';

          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);

          URL.revokeObjectURL(url);
        })
        .catch(() => {
          window.open(downloadBtn.href, '_blank');
        });
    });
  }

});

    // Resume PDF fallback: if iframe fails to load, show fallback message
    const resumeIframe = document.querySelector('.resume-iframe');
    const resumeFallback = document.querySelector('.resume-fallback');
    if (resumeIframe && resumeFallback) {
        resumeIframe.addEventListener('error', () => {
            resumeIframe.style.display = 'none';
            resumeFallback.style.display = 'block';
        });
        // Also check after a short delay (file:// protocol won't fire error)
        setTimeout(() => {
            try {
                if (!resumeIframe.contentDocument && !resumeIframe.contentWindow) {
                    resumeIframe.style.display = 'none';
                    resumeFallback.style.display = 'block';
                }
            } catch (e) {
                // Cross-origin or file not found — show fallback
                resumeIframe.style.display = 'none';
                resumeFallback.style.display = 'block';
            }
        }, 1000);
    }
});
says // Navigation & Section switching document.addEventListener('DOMContentLoaded', () => { const navLinks = document.querySelectorAll('.nav-link'); const sections = document.querySelectorAll('.section'); const heroTitle = document.getElementById('heroTitle'); const heroSubtitle = document.getElementById('heroSubtitle'); const sectionMeta = { home: { title: 'Home', subtitle: 'Let\'s connect on LinkedIn' }, about: { title: 'About Me', subtitle: 'Specializing in intuitive, scalable, and visually engaging web applications' }, work: { title: 'Work', subtitle: 'Experience, skills, and technologies I work with' }, resume: { title: 'Resume', subtitle: 'Download or preview my professional resume' }, contact: { title: 'Contact', subtitle: 'Let\'s connect — I\'m open to new opportunities' } }; navLinks.forEach(link => { link.addEventListener('click', (e) => { e.preventDefault(); const target = link.dataset.section; navLinks.forEach(l => l.classList.remove('active')); link.classList.add('active'); sections.forEach(s => s.classList.remove('active')); document.getElementById(target).classList.add('active'); // Update hero heading const meta = sectionMeta[target]; if (meta) { heroTitle.textContent = meta.title; heroSubtitle.innerHTML = meta.subtitle; } }); }); // Copy button functionality document.querySelectorAll('.copy-btn').forEach(btn => { btn.addEventListener('click', () => { const text = btn.getAttribute('data-copy'); navigator.clipboard.writeText(text).then(() => { btn.classList.add('copied'); const icon = btn.querySelector('i'); icon.className = 'fas fa-check'; setTimeout(() => { btn.classList.remove('copied'); icon.className = 'fas fa-copy'; }, 1500); }); }); }); // Resume PDF fallback: if iframe fails to load, show fallback message const resumeIframe = document.querySelector('.resume-iframe'); const resumeFallback = document.querySelector('.resume-fallback'); if (resumeIframe && resumeFallback) { resumeIframe.addEventListener('error', () => { resumeIframe.style.display = 'none'; resumeFallback.style.display = 'block'; }); // Also check after a short delay (file:// protocol won't fire error) setTimeout(() => { try { if (!resumeIframe.contentDocument && !resumeIframe.contentWindow) { resumeIframe.style.display = 'none'; resumeFallback.style.display = 'block'; } } catch (e) { // Cross-origin or file not found — show fallback resumeIframe.style.display = 'none'; resumeFallback.style.display = 'block'; } }, 1000); } });
