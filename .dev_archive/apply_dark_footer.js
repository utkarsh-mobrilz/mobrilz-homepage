const fs = require('fs');

const darkCleanFooter = `<footer id="footer" class="osmo-footer relative bg-[#040817] text-white pt-24 pb-10 overflow-hidden border-t border-[#1b2b65]">
    <!-- Subtle Ambient Glows -->
    <div class="absolute -top-40 left-1/3 w-[600px] h-[300px] bg-[#3779cb]/10 blur-[150px] pointer-events-none rounded-full"></div>
    <div class="absolute bottom-0 right-10 w-[500px] h-[250px] bg-[#18346b]/20 blur-[130px] pointer-events-none rounded-full"></div>

    <style>
      /* Osmo Kinetic Rolling Text Button (Dark Clean Version) */
      .osmo-rolling-btn {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border-radius: 9999px;
        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        text-decoration: none;
      }
      .osmo-rolling-btn .label-wrapper {
        position: relative;
        display: block;
        overflow: hidden;
        line-height: 1.2;
      }
      .osmo-rolling-btn .label-primary,
      .osmo-rolling-btn .label-hover {
        display: block;
        transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      }
      .osmo-rolling-btn .label-hover {
        position: absolute;
        top: 0;
        left: 0;
        transform: translateY(100%);
      }
      .osmo-rolling-btn:hover .label-primary {
        transform: translateY(-100%);
      }
      .osmo-rolling-btn:hover .label-hover {
        transform: translateY(0%);
      }

      /* Clean Dark Square Social Icon Button */
      .osmo-square-icon-btn {
        position: relative;
        width: 42px;
        height: 42px;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.1);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        color: #94a3b8;
        box-shadow: 0 1px 2px rgba(0,0,0,0.2);
      }
      .osmo-square-icon-btn:hover {
        border-color: #3779cb;
        color: #64b5f6;
        background: rgba(55, 121, 203, 0.15);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(55, 121, 203, 0.25);
      }
      .osmo-square-icon-btn .icon-stack {
        position: relative;
        width: 18px;
        height: 18px;
        overflow: hidden;
      }
      .osmo-square-icon-btn .icon-1,
      .osmo-square-icon-btn .icon-2 {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
      }
      .osmo-square-icon-btn .icon-2 {
        transform: translateY(100%);
      }
      .osmo-square-icon-btn:hover .icon-1 {
        transform: translateY(-100%);
      }
      .osmo-square-icon-btn:hover .icon-2 {
        transform: translateY(0%);
      }

      /* Clean Dark Nav Links */
      .osmo-nav-link {
        position: relative;
        display: inline-block;
        color: #94a3b8;
        font-weight: 400;
        font-size: 0.875rem;
        transition: color 0.2s ease, transform 0.2s ease;
      }
      .osmo-nav-link:hover {
        color: #64b5f6;
        transform: translateX(3px);
      }

      /* Giant Logo Path Morph Scroll Effect */
      .osmo-footer-logo-svg path {
        transition: transform 0.15s ease-out;
        transform-origin: center center;
      }
    </style>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      <!-- ==================== TOP ROW: EDITORIAL LEAD & COLUMNS ==================== -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#1b2b65]">

        <!-- Left Brand & Editorial Area (Col 1-4) -->
        <div class="lg:col-span-4 space-y-6">
          <div class="space-y-4">
            <h3 class="text-3xl sm:text-4xl font-normal tracking-tight text-white leading-tight">
              Experience liftoff
            </h3>
            <p class="text-slate-400 font-normal text-sm leading-relaxed max-w-sm">
              Architecting mission-critical digital products, high-velocity engineering, and scalable enterprise intelligence for visionary teams worldwide.
            </p>
          </div>

          <!-- Clean Office Location & Schedule Appointment Card -->
          <div class="p-4 rounded-2xl bg-[#09143f]/60 border border-[#1b2b65] space-y-2.5">
            <div class="flex items-start gap-2.5 text-xs font-normal text-slate-300">
              <i data-lucide="map-pin" class="w-4 h-4 text-[#64b5f6] shrink-0 mt-0.5"></i>
              <span>E-160, 3rd Floor, Sector 63 Noida, U.P. 201301, India</span>
            </div>
            <div class="flex items-start gap-2.5 text-xs font-normal text-slate-300">
              <i data-lucide="clock" class="w-4 h-4 text-[#64b5f6] shrink-0 mt-0.5"></i>
              <span>Mon - Fri: 9:00 AM - 6:00 PM (IST) &middot; <a href="#cta" class="text-[#64b5f6] hover:underline font-medium">schedule an appointment</a></span>
            </div>
          </div>
        </div>

        <!-- 4 Structured Nav Columns (Col 5-12) -->
        <div class="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">

          <!-- Col 1: COMPANY -->
          <div class="space-y-4">
            <h4 class="text-xs font-medium text-white uppercase tracking-wider font-mono">Company</h4>
            <ul class="space-y-2.5">
              <li><a href="#why-us" class="osmo-nav-link">About Us</a></li>
              <li><a href="#cta" class="osmo-nav-link">Careers</a></li>
              <li><a href="#technologies" class="osmo-nav-link">Technologies</a></li>
              <li><a href="#projects" class="osmo-nav-link">Portfolios</a></li>
              <li><a href="#faqs" class="osmo-nav-link">Refund Policy</a></li>
              <li><a href="#faqs" class="osmo-nav-link">Privacy Policy</a></li>
              <li><a href="#faqs" class="osmo-nav-link">Terms of Service</a></li>
            </ul>
          </div>

          <!-- Col 2: SERVICES -->
          <div class="space-y-4">
            <h4 class="text-xs font-medium text-white uppercase tracking-wider font-mono">Services</h4>
            <ul class="space-y-2.5">
              <li><a href="#expertise" class="osmo-nav-link">Web Development</a></li>
              <li><a href="#expertise" class="osmo-nav-link">Mobile Apps</a></li>
              <li><a href="#expertise" class="osmo-nav-link">Cloud Solutions</a></li>
              <li><a href="#expertise" class="osmo-nav-link">Custom Software</a></li>
              <li><a href="#expertise" class="osmo-nav-link">UI/UX Design</a></li>
              <li><a href="#expertise" class="osmo-nav-link">Branding</a></li>
              <li><a href="#expertise" class="osmo-nav-link">Graphics Design</a></li>
              <li><a href="#expertise" class="osmo-nav-link">DevOps</a></li>
              <li><a href="#expertise" class="osmo-nav-link">API Integration</a></li>
              <li><a href="#expertise" class="osmo-nav-link">Maintenance</a></li>
            </ul>
          </div>

          <!-- Col 3: INDUSTRIES -->
          <div class="space-y-4">
            <h4 class="text-xs font-medium text-white uppercase tracking-wider font-mono">Industries</h4>
            <ul class="space-y-2.5">
              <li><a href="#projects" class="osmo-nav-link">Manufacturing</a></li>
              <li><a href="#projects" class="osmo-nav-link">Finance</a></li>
              <li><a href="#projects" class="osmo-nav-link">Healthcare</a></li>
              <li><a href="#projects" class="osmo-nav-link">Real Estate</a></li>
              <li><a href="#projects" class="osmo-nav-link">Education</a></li>
              <li><a href="#projects" class="osmo-nav-link">Retail & eCommerce</a></li>
              <li><a href="#projects" class="osmo-nav-link">Logistics & Supply</a></li>
            </ul>
          </div>

          <!-- Col 4: RESOURCES -->
          <div class="space-y-4">
            <h4 class="text-xs font-medium text-white uppercase tracking-wider font-mono">Resources</h4>
            <ul class="space-y-2.5">
              <li><a href="#case-studies" class="osmo-nav-link">Case Studies</a></li>
              <li><a href="#faqs" class="osmo-nav-link">Blog & Insights</a></li>
              <li><a href="#faqs" class="osmo-nav-link">Knowledge Base</a></li>
              <li><a href="#faqs" class="osmo-nav-link">Client Reviews</a></li>
              <li><a href="#cta" class="osmo-nav-link">Free Quote Calculator</a></li>
              <li><a href="#faqs" class="osmo-nav-link">FAQs</a></li>
            </ul>
          </div>

        </div>

      </div>

      <!-- ==================== MIDDLE ROW: DIRECT CONTACT & SOCIAL BUTTONS ==================== -->
      <div class="py-10 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-[#1b2b65]">

        <!-- Direct Contact Pills -->
        <div class="flex flex-wrap items-center gap-3">
          <a href="tel:+918010355718" class="osmo-rolling-btn px-5 py-2.5 bg-[#09143f]/70 border border-[#1b2b65] text-slate-200 hover:text-[#64b5f6] hover:border-[#3779cb] hover:bg-[#09143f] text-xs font-mono font-medium tracking-wide">
            <div class="label-wrapper flex items-center gap-2">
              <i data-lucide="phone-call" class="w-3.5 h-3.5 text-[#64b5f6]"></i>
              <span class="label-primary">+91-8010355718</span>
              <span class="label-hover">+91-8010355718</span>
            </div>
          </a>
          <a href="mailto:sales@mobrilz.com" class="osmo-rolling-btn px-5 py-2.5 bg-[#09143f]/70 border border-[#1b2b65] text-slate-200 hover:text-[#64b5f6] hover:border-[#3779cb] hover:bg-[#09143f] text-xs font-mono font-medium tracking-wide">
            <div class="label-wrapper flex items-center gap-2">
              <i data-lucide="mail" class="w-3.5 h-3.5 text-[#64b5f6]"></i>
              <span class="label-primary">sales@mobrilz.com</span>
              <span class="label-hover">sales@mobrilz.com</span>
            </div>
          </a>
        </div>

        <!-- Clean Social Links -->
        <div class="flex items-center gap-2.5">
          <!-- LinkedIn -->
          <a href="https://linkedin.com/company/mobrilz" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="osmo-square-icon-btn">
            <div class="icon-stack">
              <span class="icon-1">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </span>
              <span class="icon-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </span>
            </div>
          </a>
          <!-- Twitter / X -->
          <a href="https://twitter.com/mobrilz" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" class="osmo-square-icon-btn">
            <div class="icon-stack">
              <span class="icon-1">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </span>
              <span class="icon-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </span>
            </div>
          </a>
          <!-- GitHub -->
          <a href="https://github.com/mobrilz" target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="osmo-square-icon-btn">
            <div class="icon-stack">
              <span class="icon-1">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </span>
              <span class="icon-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </span>
            </div>
          </a>
          <!-- YouTube -->
          <a href="https://youtube.com/@mobrilz" target="_blank" rel="noopener noreferrer" aria-label="YouTube" class="osmo-square-icon-btn">
            <div class="icon-stack">
              <span class="icon-1">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
              </span>
              <span class="icon-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
              </span>
            </div>
          </a>
          <!-- Instagram -->
          <a href="https://instagram.com/mobrilz" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="osmo-square-icon-btn">
            <div class="icon-stack">
              <span class="icon-1">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </span>
              <span class="icon-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </span>
            </div>
          </a>
          <!-- Facebook -->
          <a href="https://facebook.com/mobrilz" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="osmo-square-icon-btn">
            <div class="icon-stack">
              <span class="icon-1">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </span>
              <span class="icon-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </span>
            </div>
          </a>
        </div>

      </div>

      <!-- ==================== SIGNATURE GIANT SCROLL-DRIVEN LOGO ==================== -->
      <!-- Clean, crisp Antigravity-style giant watermark logo across the bottom in dark mode -->
      <div data-footer-logo-wrap class="pt-16 pb-6 flex items-center justify-center overflow-hidden select-none">
        <svg class="osmo-footer-logo-svg w-full max-w-6xl h-auto text-white/20 hover:text-white/35 transition-colors duration-500" viewBox="0 0 468 97" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <!-- Letter M (Official 3-stroke Mobrilz Brand Mark) -->
          <path id="osmo-l-0" d="M118 28c-3 0-5 1-8 5L91 60C85 68 81 74 73 76c-10 3-18 0-25-9-6-7-8-16-16-17 3-10 16-14 23-6 4 5 7 15 11 15 6 0 18-27 30-38 9-6 19-2 22 7ZM99 14c13-18 40-10 43 12 1 9 1 43 0 55-1 14-18 15-20 3-2-15 1-40 0-56-1-13-11-16-23-14ZM49 36c-4-2-8-2-12-1-9 2-10 11-9 22l1 19c0 6-1 10-5 13-7 6-16 0-17-9-1-11-1-33 3-41 7-14 27-18 39-3Z" />
          <!-- Letter O -->
          <path id="osmo-l-1" d="M188.15,33.97c18.16,3.34,28.91,22.75,22.57,39.99-9.72,27.05-48.32,27.85-57.76.22-7.63-22.34,11.76-44.92,35-40.25l.2.04ZM179.79,49.19c-9.6,2.36-11.2,17.36-6.7,25.01,4.9,9.09,15.04,6.88,18.27-2.09,3.58-8.49.05-24.48-11.42-22.96l-.16.03Z" />
          <!-- Letter B -->
          <path id="osmo-l-2" d="M243,1v36c3.52.03,6.09-2.43,9.58-2.91,38.49-5.3,41.85,63.36-3.12,60.94-4.56-.25-10.43-3.05-13.85-2.96s-8.8,2.78-12.61,2.93V4.5c5.55-2.66,13.58-2.15,20-3.5ZM243.14,79.86c21.57,9.59,26.31-33.18,6.46-30.83-1.6.19-5.9,2.07-6.44,3.64s-.74,26.04-.02,27.2Z" />
          <!-- Letter R -->
          <path id="osmo-l-3" d="M334,34v21c-6.59-.34-20-1.01-20,8.5v28.5h-19v-56h18l.5,9c4.71-7.45,11.34-12.02,20.5-11Z" />
          <!-- Letter I (Stem + Dot) -->
          <path id="osmo-l-4" d="M363,34v58h-20v-54.5c5.55-2.66,13.58-2.15,20-3.5ZM349.72,6.2c16.13-3.61,19.1,19.96,3.75,20.83-13.58.77-14.84-18.35-3.75-20.83Z" />
          <!-- Letter L -->
          <path id="osmo-l-5" d="M397,1v91h-20V4.5c5.58-2.88,13.55-2.17,20-3.5Z" />
          <!-- Letter Z -->
          <path id="osmo-l-6" d="M459 36 L434 77 L459 77 L457 92 L404 92 L428 51 L407 51 L410 36 Z" />
        </svg>
      </div>

    </div>

    <!-- Osmo ScrollTrigger Kinetic Letter Fan Script -->
    <script>
      (function() {
        function setupOsmoFooterMotion() {
          const wrap = document.querySelector('[data-footer-logo-wrap]');
          if (!wrap || typeof gsap === 'undefined') return;

          const paths = Array.from(wrap.querySelectorAll('svg path'));
          if (!paths.length) return;

          // Osmo signature fan-out angles: left letters tilt counter-clockwise, right letters tilt clockwise
          const fanAngles = [-40, -22, -10, 0, 10, 22, 40];
          const yPercents = [85, 45, 20, 5, 20, 45, 85];

          // Initialize rotated resting state
          paths.forEach((p, idx) => {
            gsap.set(p, {
              transformOrigin: "center center",
              rotate: fanAngles[idx] || 0,
              yPercent: yPercents[idx] || 0,
              opacity: 0.85
            });
          });

          // ScrollTrigger scrub to snap into flat alignment on scroll
          if (typeof ScrollTrigger !== 'undefined') {
            gsap.to(paths, {
              rotate: 0,
              yPercent: 0,
              opacity: 1,
              ease: "power2.out",
              stagger: 0.02,
              scrollTrigger: {
                trigger: wrap,
                start: "top 95%",
                end: "bottom 95%",
                scrub: 1.2
              }
            });
          }
        }

        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', setupOsmoFooterMotion);
        } else {
          setupOsmoFooterMotion();
        }
      })();
    </script>
  </footer>`;

const designAPath = 'C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/design-a.html';
const indexPath = 'C:/Users/Manoj/.gemini/antigravity/scratch/mobrilz-homepage/index.html';

function updateFile(file) {
  let content = fs.readFileSync(file, 'utf8');
  const footerStart = content.indexOf('<footer id="footer"');
  const footerEnd = content.indexOf('</footer>', footerStart);

  if (footerStart === -1 || footerEnd === -1) {
    console.error('Footer not found in ' + file);
    return false;
  }

  const before = content.substring(0, footerStart);
  const after = content.substring(footerEnd + 9);

  const updated = before + darkCleanFooter + after;
  fs.writeFileSync(file, updated, 'utf8');
  console.log('Successfully updated to dark footer in ' + file);
  return true;
}

updateFile(designAPath);
updateFile(indexPath);
