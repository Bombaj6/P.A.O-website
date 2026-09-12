/* ==========================================
   PRACTICE AREA DATASET
   ========================================== */
const practiceDetails = {
    litigation: {
        title: "Litigation & Advocacy",
        tag: "Core Trial Representation",
        text: "P.A.O. Olorunnisola SAN & Co is built on a foundation of elite courtroom advocacy. Our litigators are highly experienced legal practitioners who display zeal, rigor, and promptness in handling complex legal disputes. We represent clients across all tiers of the Nigerian judicial system—from Magistrate courts up to the Court of Appeal and the Supreme Court of Nigeria.",
        highlights: [
            "Supreme Court & Appellate Advocacy",
            "Commercial & Civil Litigations",
            "Corporate Shareholder Disputes",
            "Real Estate & Land Tenure Actions"
        ]
    },
    adr: {
        title: "Alternative Dispute Resolution (ADR)",
        tag: "Arbitration & Mediation",
        text: "Multi-Nationals and Individuals frequently consider Alternative Dispute Resolution as a highly effective medium of settling their disputes out of court. Given the long, rigorous, and often public nature of standard judicial proceedings, ADR serves as the best resort to preserve commercial relationships and secure swift resolutions. In our firm, we feature Chartered Arbitrators (UK) and certified mediators with decades of combined experience.",
        highlights: [
            "CIArb Member Arbitrators (UK)",
            "Commercial Mediation & Settlements",
            "Fast-track Neutral Valuations",
            "Multi-party Negotiation Advocacy"
        ]
    },
    debt: {
        title: "Corporate Debt Recovery & Insolvency",
        tag: "Financial Restructuring & Receivership",
        text: "The firm is highly reputed for debt servicing and conversion solutions. We provide legal counsel to financial institutions, asset management corporations, and corporate entities under receivership. We handle asset tracking, liquidation audits, reorganization plans, and the recovery of outstanding debts with speed, accuracy, and absolute confidentiality.",
        highlights: [
            "Corporate Asset Servicing & Conversion",
            "Receivership Administration & Insolvency",
            "Asset Liquidation & Debt-to-Equity Restructuring",
            "Negotiated Settlements & Installment Protocols"
        ]
    },
    maritime: {
        title: "Shipping & Maritime Legal Advisory",
        tag: "Admiralty & Marine Counsel",
        text: "This firm is a reputable establishment widely known for providing strategic advisory services for clients in the shipping and maritime sector. For over 20 years, we have served shipowners, charterers, cargo owners, and maritime operators. Our maritime team handles everything from admiralty litigation to ship finance, cabotage law compliance, and regulatory liaison.",
        highlights: [
            "Admiralty Disputes & Vessel Arrests",
            "Cabotage & NIMASA Regulatory Compliance",
            "Charterparty & Bill of Lading Drafting",
            "Marine Insurance & Cargo Claims"
        ]
    },
    energy: {
        title: "Energy, Oil, Gas & Power",
        tag: "Natural Resources Counsel",
        text: "The firm has well-bred and schooled hands offering legal advice to clients in the complex areas of energy, oil & gas, and power. We support operators, investors, and regulators in navigating joint operating agreements (JOA), production sharing contracts (PSC), environmental regulations, licensing, and energy transition projects.",
        highlights: [
            "Concessions & Licensing Advisory",
            "Joint Operating Agreements (JOAs) & PSCs",
            "Power Sector Compliance & Power Purchase Agreements",
            "Energy & Environmental Litigation"
        ]
    },
    ip: {
        title: "Intellectual Property Rights",
        tag: "Patents, Trademarks & Copyrights",
        text: "Emerging areas of trade and technology are rapidly coming to the limelight in Nigeria. Deals are being brokered, ideas are incubated, and creative expressions are transformed into value daily—which is why protecting your intellectual creation is vital. At P.A.O. Olorunnisola SAN & Co, we guide clients in registering trademarks, acquiring patents, securing copyrights, and defending intellectual assets. We do not allow our clients to sign disadvantageous contracts that leave them in perpetual legal bondage.",
        highlights: [
            "Trademark Registration & Brand Portfolio Auditing",
            "Patent Filings & Licensing Operations",
            "Copyright Protection & Anti-Piracy Actions",
            "IP Transfer & Non-Disclosure Agreement Formulation"
        ]
    },
    diligence: {
        title: "Due Diligence & Diagnostic Audits",
        tag: "Corporate Transactions Safeguard",
        text: "We are committed to providing rigorous due diligence services, particularly during periods of merger, acquisition, management buyout, or management buy-in. We leave no stone unturned in ensuring that our client's interests are insulated from hidden risks. We perform comprehensive diagnostic audits, examining corporate records, pending litigations, regulatory compliance, and the full state of liabilities of the target entity.",
        highlights: [
            "M&A Due Diligence Auditing",
            "Liability Tracking & Asset Verifications",
            "Management Buyout (MBO) Legal Representation",
            "Regulatory Compliance Checkups"
        ]
    },
    governance: {
        title: "Governance, Compliance & Secretarial",
        tag: "Entity Maintenance & Board Advisory",
        text: "Failing to comply with basic regulatory frameworks can lead to severe penalties, including corporate registry de-registration. Many companies face bankruptcy or dissolution purely due to governance failure. At P.A.O. Olorunnisola SAN & Co, we act as Company Secretary to various organizations, helping them avert administrative crises, maintain filings with the Corporate Affairs Commission (CAC), and implement healthy governance structures.",
        highlights: [
            "Corporate Secretarial & Registrar Services",
            "Corporate Affairs Commission (CAC) Compliance",
            "Board Advisory & Governance Audits",
            "Crisis Mediation & Entity Recovery"
        ]
    },
    election: {
        title: "Election Petitions",
        tag: "Constitutional & Electoral Litigation",
        text: "Electoral dispute resolution is a highly specialized field (sui generis), demanding precise compliance with stringent statutory timelines and complex rules of evidence. P.A.O. Olorunnisola SAN & Co has a long-standing record of representing candidates, political entities, and electoral stakeholders. We deliver meticulous preparation, exhaustive research, and passionate courtroom representation.",
        highlights: [
            "State & Federal Assembly Petition Actions",
            "Gubernatorial Dispute Proceedings",
            "Electoral Act Compliance Audits",
            "Rapid Response Evidential Compilations"
        ]
    },
    drafting: {
        title: "Legal Drafting & Writing",
        tag: "Document Engineering & Advocacy",
        text: "Legal drafting involves the meticulous analysis of facts, commercial realities, and legal precedents to build balanced, protective documents. Whether drafting legal briefs, commercial agreements, or corporate policies, our legal writing is persuasive and structured to advocate clearly for our client's position. All legal drafts are highly seasoned, precise, and articulated to advance and secure your goals.",
        highlights: [
            "Commercial Contracts & Service Level Agreements",
            "Persuasive Appellate Brief Preparation",
            "Bespoke Wills, Trusts & Estate Structuring Documents",
            "Corporate Policies & Regulatory Submissions"
        ]
    },
    risk: {
        title: "Risk Analysis & Advisory",
        tag: "Preventive Liability Management",
        text: "Modern commercial decisions require proactive legal risk analysis to identify and mitigate liabilities before they materialize. We analyze transactions, operational models, and employment frameworks, advising clients on dispute avoidance mechanisms and liability limitation controls.",
        highlights: [
            "Commercial Transaction Exposure Audits",
            "Preventive Legal Audits & Policy Tuning",
            "Contractual Indemnification & Risk Shifting Reviews",
            "Regulatory Breach Audits"
        ]
    }
};

/* ==========================================
   INITIALIZATION & EVENT HANDLERS
   ========================================== */
document.addEventListener("DOMContentLoaded", () => {
    initHeader();
    initMobileNav();
    initTheme();
    initScrollReveal();
    initPracticeModal();
    initTestimonialsSlider();
    initContactForm();
});

/* Sticky Header on Scroll */
function initHeader() {
    const header = document.querySelector(".site-header");
    if (!header) return;
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}

/* Mobile Hamburger Menu */
function initMobileNav() {
    const toggle = document.getElementById("mobileNavToggle");
    const menu = document.getElementById("navMenu");
    const links = document.querySelectorAll(".nav-link");
    if (!toggle || !menu) return;
    
    toggle.addEventListener("click", () => {
        const isOpen = menu.classList.toggle("open");
        toggle.setAttribute("aria-expanded", isOpen);
        toggle.classList.toggle("active");
    });
    
    // Close menu when a link is clicked
    links.forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("open");
            toggle.classList.remove("active");
            toggle.setAttribute("aria-expanded", false);
            
            // Set active class link
            links.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });
}

/* Light / Dark Mode Toggle */
function initTheme() {
    const toggle = document.getElementById("themeToggle");
    const body = document.body;
    if (!toggle) return;
    
    // Check local storage or system preference
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
        body.classList.replace("light-mode", "dark-mode");
    } else {
        body.classList.replace("dark-mode", "light-mode");
    }
    
    toggle.addEventListener("click", () => {
        if (body.classList.contains("light-mode")) {
            body.classList.replace("light-mode", "dark-mode");
            localStorage.setItem("theme", "dark");
        } else {
            body.classList.replace("dark-mode", "light-mode");
            localStorage.setItem("theme", "light");
        }
    });
}

/* Intersection Observer for Entrance Animations */
function initScrollReveal() {
    const revealElements = document.querySelectorAll(".scroll-reveal");
    
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                obs.unobserve(entry.target); // Trigger once
            }
        });
    }, {
        threshold: 0.15
    });
    
    revealElements.forEach(element => {
        observer.observe(element);
    });
}

/* Practice Area Modal Drawer Details */
function initPracticeModal() {
    const cards = document.querySelectorAll(".practice-card");
    const modal = document.getElementById("detailsModal");
    const closeBtn = document.getElementById("modalClose");
    const body = document.getElementById("modalBody");
    if (!modal || !closeBtn || !body || cards.length === 0) return;
    
    cards.forEach(card => {
        card.addEventListener("click", () => {
            const areaKey = card.getAttribute("data-area");
            const data = practiceDetails[areaKey];
            
            if (data) {
                // Populate Modal content
                let highlightsHTML = "";
                data.highlights.forEach(h => {
                    highlightsHTML += `<li>${h}</li>`;
                });
                
                body.innerHTML = `
                    <span class="area-tag">${data.tag}</span>
                    <h2>${data.title}</h2>
                    <p>${data.text}</p>
                    <div class="modal-highlights">
                        <h4>Key Areas of focus:</h4>
                        <ul>
                            ${highlightsHTML}
                        </ul>
                    </div>
                `;
                
                modal.classList.add("open");
                document.body.style.overflow = "hidden"; // Prevent scrolling behind
            }
        });
    });
    
    // Close modal function
    const closeModal = () => {
        modal.classList.remove("open");
        document.body.style.overflow = ""; // Re-enable scrolling
    };
    
    closeBtn.addEventListener("click", closeModal);
    
    // Close on clicking backdrop
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close on Escape key press
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("open")) {
            closeModal();
        }
    });
}

/* Testimonials Carousel Slider */
function initTestimonialsSlider() {
    const slider = document.getElementById("testimonialsSlider");
    const slides = document.querySelectorAll(".testimonial-slide");
    const prevBtn = document.getElementById("sliderPrev");
    const nextBtn = document.getElementById("sliderNext");
    const dotsContainer = document.getElementById("sliderDots");
    if (!slider || !prevBtn || !nextBtn || !dotsContainer) return;
    
    let currentIndex = 0;
    const slideCount = slides.length;
    let autoSlideInterval;
    
    // Create navigation dots
    for (let i = 0; i < slideCount; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active");
        dot.addEventListener("click", () => {
            goToSlide(i);
            resetAutoSlide();
        });
        dotsContainer.appendChild(dot);
    }
    
    const dots = document.querySelectorAll(".dot");
    
    function updateSliderPosition() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, idx) => {
            dot.classList.toggle("active", idx === currentIndex);
        });
    }
    
    function goToSlide(index) {
        currentIndex = (index + slideCount) % slideCount;
        updateSliderPosition();
    }
    
    function showNext() {
        goToSlide(currentIndex + 1);
    }
    
    function showPrev() {
        goToSlide(currentIndex - 1);
    }
    
    prevBtn.addEventListener("click", () => {
        showPrev();
        resetAutoSlide();
    });
    
    nextBtn.addEventListener("click", () => {
        showNext();
        resetAutoSlide();
    });
    
    // Auto play every 6 seconds
    function startAutoSlide() {
        autoSlideInterval = setInterval(showNext, 6000);
    }
    
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }
    
    startAutoSlide();
    
    // Support swipe gestures
    let startX = 0;
    slider.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    }, { passive: true });
    
    slider.addEventListener("touchend", (e) => {
        const diffX = e.changedTouches[0].clientX - startX;
        if (Math.abs(diffX) > 50) {
            if (diffX > 0) {
                showPrev();
            } else {
                showNext();
            }
            resetAutoSlide();
        }
    }, { passive: true });
}

/* Floating Form Callback Submit Actions */
function initContactForm() {
    const form = document.getElementById("contactForm");
    const feedback = document.getElementById("formFeedback");
    if (!form || !feedback) return;
    
    // Floating labels styling fallback for autofills
    const inputs = form.querySelectorAll("input, textarea, select");
    
    inputs.forEach(input => {
        input.addEventListener("blur", () => {
            if (input.value.trim() !== "") {
                input.classList.add("has-value");
            } else {
                input.classList.remove("has-value");
            }
        });
        
        // Trigger check on load in case of autofill
        if (input.value && input.value.trim() !== "") {
            input.classList.add("has-value");
        }
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const name = document.getElementById("formName").value;
        const email = document.getElementById("formEmail").value;
        const service = document.getElementById("formService").value;
        
        // Visual processing animation
        const submitBtn = form.querySelector("button[type='submit']");
        const btnText = submitBtn.querySelector("span");
        const originalText = btnText.textContent;
        
        btnText.textContent = "Processing Secure Transmission...";
        submitBtn.disabled = true;
        
        setTimeout(() => {
            // Simulated submission response
            feedback.className = "feedback-msg success";
            feedback.innerHTML = `<strong>Thank you, ${name}.</strong> Your secure legal consultation request regarding <strong>${service.toUpperCase()}</strong> has been transmitted. A representative from the chambers of P.A.O. Olorunnisola SAN & Co will review your case file and contact you at <strong>${email}</strong> within 12 hours.`;
            
            form.reset();
            inputs.forEach(input => input.classList.remove("has-value"));
            
            btnText.textContent = originalText;
            submitBtn.disabled = false;
            
            // Scroll to feedback
            feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            
            // Clear message after 12 seconds
            setTimeout(() => {
                feedback.style.display = "none";
            }, 12000);
        }, 1800);
    });
}


/* ============================================
   8. COOKIE CONSENT BANNER
   ============================================ */

(function initCookieConsent() {
    const banner = document.getElementById('cookieBanner');
    const acceptBtn = document.getElementById('cookieAccept');
    const essentialBtn = document.getElementById('cookieEssential');
    const declineBtn = document.getElementById('cookieDecline');
    const footerCookieLink = document.getElementById('footerCookieSettings');

    if (!banner) return;

    // Check if user has already made a choice
    const consentStatus = localStorage.getItem('pao_cookie_consent');

    if (!consentStatus) {
        // Show banner after a short delay for smoother UX
        setTimeout(() => {
            banner.classList.add('visible');
        }, 1500);
    }

    function hideBanner() {
        banner.classList.remove('visible');
    }

    function setConsent(level) {
        localStorage.setItem('pao_cookie_consent', level);
        localStorage.setItem('pao_cookie_consent_date', new Date().toISOString());
        hideBanner();
    }

    if (acceptBtn) {
        acceptBtn.addEventListener('click', () => setConsent('all'));
    }
    if (essentialBtn) {
        essentialBtn.addEventListener('click', () => setConsent('essential'));
    }
    if (declineBtn) {
        declineBtn.addEventListener('click', () => setConsent('declined'));
    }

    // Footer "Cookie Settings" link — re-shows the banner
    if (footerCookieLink) {
        footerCookieLink.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('pao_cookie_consent');
            localStorage.removeItem('pao_cookie_consent_date');
            banner.classList.add('visible');
            banner.scrollIntoView({ behavior: 'smooth', block: 'end' });
        });
    }
})();
