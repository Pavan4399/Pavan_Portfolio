document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    const heroTitle = document.getElementById('heroTitle');
    const heroSubtitle = document.getElementById('heroSubtitle');

    const meta = {
        home: ['Home', 'Let\'s connect on LinkedIn'],
        about: ['About Me', 'Specializing in intuitive, scalable, and visually engaging web applications'],
        work: ['Work', 'Experience, skills, and technologies I work with'],
        resume: ['Resume', 'Download or preview my professional resume'],
        contact: ['Contact', 'Let\'s connect — I\'m open to new opportunities']
    };

    // Tab switching
    navLinks.forEach(link => link.addEventListener('click', (e) => {
        e.preventDefault();
        const id = link.dataset.section;
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        sections.forEach(s => s.classList.remove('active'));
        document.getElementById(id).classList.add('active');
        if (meta[id]) { heroTitle.textContent = meta[id][0]; heroSubtitle.textContent = meta[id][1]; }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }));

    // Copy to clipboard
    document.querySelectorAll('.copy-btn').forEach(btn => btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const text = btn.getAttribute('data-copy');
        if (!text) return;
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(text).then(() => showCopied(btn)).catch(() => fallbackCopy(text, btn));
        } else { fallbackCopy(text, btn); }
    }));

    function fallbackCopy(text, btn) {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.cssText = 'position:fixed;left:-9999px;top:-9999px;opacity:0';
        document.body.appendChild(ta);
        ta.focus(); ta.select();
        try { document.execCommand('copy'); showCopied(btn); } catch (_) { }
        document.body.removeChild(ta);
    }

    function showCopied(btn) {
        btn.classList.add('copied');
        const icon = btn.querySelector('i');
        if (icon) {
            icon.className = 'fas fa-check';
            setTimeout(() => { btn.classList.remove('copied'); icon.className = 'fas fa-copy'; }, 1500);
        }
    }

    // Resume  — Preview opens PDF in new tab  (works on all devices/browsers)
    // const iframe = document.getElementById('resumeIframe');
    // const card = document.getElementById('resumePreviewCard');
    // const prevBtn = document.getElementById('previewResumeBtn');
       const dlBtn = document.getElementById('downloadResumeBtn');
       const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
       if (isIos && dlBtn) {
           dlBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(dlBtn.href, '_blank');
       });
    // if (iframe && card && prevBtn) {
    //     let pdfLoaded = false;

    //     iframe.addEventListener('load', () => {
    //         try {
    //             // If we can access contentDocument, browser loaded it as HTML (not PDF plugin)
    //             const doc = iframe.contentWindow.document;
    //             const body = doc.body;
    //             // Empty body or embed/object = PDF plugin handling it
    //             if (body && body.children.length > 0) {
    //                 const tag = body.children[0].tagName;
    //                 if (tag === 'EMBED' || tag === 'OBJECT') { pdfLoaded = true; return; }
    //             }
    //             // If body is empty or has no meaningful content, PDF didn't render
    //             if (!body || body.scrollHeight < 100) {
    //                 card.style.display = 'none';
    //                 prevBtn.style.display = 'inline-flex';
    //             } else { pdfLoaded = true; }
    //         } catch (_) {
    //             // Cross-origin error = PDF plugin rendered it natively (good)
    //             pdfLoaded = true;
    //         }
    //     });

    //     iframe.addEventListener('error', () => {
    //         card.style.display = 'none';
    //         prevBtn.style.display = 'inline-flex';
    //     });

    //     // Safety net: if nothing loaded after 5s, show fallback
    //     setTimeout(() => {
    //         if (!pdfLoaded) {
    //             card.style.display = 'none';
    //             prevBtn.style.display = 'inline-flex';
    //         }
    //     }, 5000);
    }
});