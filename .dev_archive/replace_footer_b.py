import re

with open(r"C:\Users\Manoj\.gemini\antigravity\scratch\mobrilz-homepage\design-b.html", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Add extra Flubble footer CSS before </style>
flubble_footer_css = '''
    /* Flubble Monolithic Deep Footer & Sliding Navigation Items */
    .flubble-footer-link {
      display: inline-block;
      font-size: 1.05rem;
      line-height: 1.35;
      font-weight: 400;
      letter-spacing: -0.02em;
      color: #ffffff;
      position: relative;
      overflow: hidden;
    }
    .flubble-footer-slide-text {
      position: relative;
      display: block;
      overflow: hidden;
    }
    .flubble-footer-slide-primary {
      display: block;
      transition: transform 0.45s cubic-bezier(0.33, 1, 0.68, 1);
    }
    .flubble-footer-slide-secondary {
      position: absolute;
      inset: 0;
      display: block;
      transform: translateY(100%);
      transition: transform 0.45s cubic-bezier(0.33, 1, 0.68, 1);
      color: #9abbe3;
    }
    .group\\/flink:hover .flubble-footer-slide-primary {
      transform: translateY(-100%);
    }
    .group\\/flink:hover .flubble-footer-slide-secondary {
      transform: translateY(0);
    }
    .flubble-huge-watermark {
      font-size: clamp(3.2rem, 9.7vw, 11rem);
      line-height: 1.05;
      letter-spacing: -0.05em;
      font-weight: 300;
      color: rgba(255, 255, 255, 0.08);
      user-select: none;
      white-space: nowrap;
      text-align: center;
      margin-bottom: -0.15em;
      transition: color 0.5s ease;
    }
    .flubble-huge-watermark:hover {
      color: rgba(255, 255, 255, 0.16);
    }
    .flubble-reveal-item {
      opacity: 0;
      transform: translateY(24px);
      transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .flubble-reveal-item.is-revealed {
      opacity: 1;
      transform: translateY(0);
    }
'''

if "/* Flubble Monolithic Deep Footer" not in content:
    style_pos = content.find("</style>")
    if style_pos != -1:
        content = content[:style_pos] + flubble_footer_css + content[style_pos:]

# 2. Find start of section #cta and end of </footer>
cta_start = content.find('<section id="cta"')
footer_end = content.find('</footer>') + len('</footer>')

if cta_start == -1 or footer_end == -1:
    print("Could not find cta_start or footer_end")
    exit(1)

# Combined Flubble unified footer containing both the CTA Studio Card and the Dark Studio Footer
combined_flubble_footer = '''  <!-- ========================================================================= -->
  <!-- 10 & 11. FLUBBLE UNIFIED STUDIO FOOTER (CTA CARD + MONOLITHIC NAV FOOTER)  -->
  <!-- ========================================================================= -->
  <footer id="cta" class="bg-white p-1.5 sm:p-2.5 relative select-none">
    
    <!-- Outer Deep Dark Ink Shell (Rounded Container) -->
    <div class="overflow-clip rounded-2xl bg-[#060d28]">
      <div class="flex flex-col p-1.5 sm:p-2">
        
        <!-- ===================================================================== -->
        <!-- PART 1: FLOATING WHITE CTA CARD (MATCHING FLUBBLE'S "LET'S WORK" BOX) -->
        <!-- ===================================================================== -->
        <div class="rounded-[11px] bg-white px-6 py-16 sm:px-10 sm:py-24 lg:px-16 lg:py-28 flubble-reveal-item">
          <div class="mx-auto flex w-full max-w-7xl flex-col gap-10 lg:gap-16">
            
            <!-- Headline -->
            <div>
              <div class="mb-3">
                <span class="text-xs font-mono font-medium tracking-[0.2em] text-mobrilz-blue uppercase">Accepting New Projects for 2026</span>
              </div>
              <h2 class="flubble-cta-headline">
                Ready to engineer your <br class="hidden sm:inline" />
                <span class="text-slate-400 font-light">next unfair advantage</span>
              </h2>
            </div>

            <!-- Two-Column Layout -->
            <div class="flex flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-16">
              
              <!-- Left: Pitch, 70px Slide Button, Email -->
              <div class="flex flex-1 flex-col justify-between gap-8">
                <div class="space-y-4">
                  <p class="max-w-[560px] text-base sm:text-lg font-light text-slate-600 leading-relaxed">
                    Are you planning a mission-critical web application, a high-concurrency mobile platform, or custom AI agent infrastructure? Mobrilz is here to bring your digital vision to life with precision engineering.
                  </p>
                  <div class="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono text-slate-400 font-light pt-1">
                    <span class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-mobrilz-blue"></i> Mutual NDA signed Day 1</span>
                    <span class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-mobrilz-blue"></i> 24h Architecture Estimate</span>
                    <span class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-mobrilz-blue"></i> Zero Sales Reps</span>
                  </div>
                </div>

                <!-- Flubble Big Slide Action Button -->
                <a href="mailto:contact@mobrilz.com" class="group/btn flubble-cta-btn">
                  <span class="flubble-cta-slide-text">
                    <span class="flubble-cta-slide-primary">Schedule Scoping Session</span>
                    <span class="flubble-cta-slide-secondary">Schedule Scoping Session</span>
                  </span>
                  <span class="flubble-cta-arrow-box">
                    <svg class="lucide lucide-arrow-up-right flubble-cta-arrow-1 size-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                    <svg class="lucide lucide-arrow-up-right flubble-cta-arrow-2 size-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                  </span>
                </a>

                <!-- Divider & Direct Email -->
                <div class="flex flex-col gap-4 pt-2">
                  <div class="h-px bg-slate-200 w-full max-w-[560px]"></div>
                  <div>
                    <span class="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">Direct Engineering Desk</span>
                    <a href="mailto:contact@mobrilz.com" class="text-2xl sm:text-4xl font-light text-mobrilz-navy tracking-tight hover:text-mobrilz-blue transition-colors">
                      contact@mobrilz.com
                    </a>
                  </div>
                </div>
              </div>

              <!-- Right: Studio Team Visual Frame -->
              <div class="flubble-cta-img-container relative flex-1 min-h-[300px] lg:min-h-[380px] overflow-hidden rounded-2xl bg-[#09143f] border border-slate-200/80 shadow-md">
                <img 
                  src="https://flubble.io/projects/sandalyede-oturan-kisi-karanlik-bir-ortamda.webp" 
                  alt="Mobrilz Senior Engineering Studio" 
                  class="w-full h-full object-cover flubble-cta-studio-img"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-[#060d28]/85 via-transparent to-transparent pointer-events-none"></div>
                <div class="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white z-10">
                  <div>
                    <p class="text-base sm:text-lg font-light text-white tracking-tight">Mobrilz Digital Engineering Studios</p>
                    <p class="text-xs text-slate-300 font-mono">Senior Full-Stack & AI Architects</p>
                  </div>
                  <div class="size-2 rounded-full bg-emerald-400 animate-pulse"></div>
                </div>
              </div>

            </div>

          </div>
        </div>

        <!-- ===================================================================== -->
        <!-- PART 2: MONOLITHIC DARK STUDIO FOOTER & NAVIGATION (EXACT FLUBBLE FORMAT)-->
        <!-- ===================================================================== -->
        <div class="flubble-reveal-item pt-14 pb-8 sm:pt-20 sm:pb-12 text-white">
          <div class="mx-auto flex w-full max-w-7xl flex-col gap-14 px-6 sm:px-10">
            
            <!-- Row 1: Brand Info, Studio Address & Newsletter Subscription -->
            <div class="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between pb-10 border-b border-white/10">
              
              <!-- Left: Brand Logo, Studio Tagline & Physical Address -->
              <div class="flex flex-1 flex-col sm:flex-row sm:items-start gap-8 lg:gap-14">
                <div class="space-y-4 max-w-xs">
                  <a href="#" class="inline-block">
                    <img src="assets/logo.svg" alt="Mobrilz Logo" class="h-9 w-auto brightness-0 invert">
                  </a>
                  <p class="text-sm text-slate-300 font-light leading-relaxed">
                    We create digital experiences that matter. High-concurrency engineering and human-centered design for ambitious companies worldwide.
                  </p>
                  <!-- Social Links Row -->
                  <div class="flex items-center gap-3 pt-1 text-slate-400">
                    <a href="https://www.youtube.com/@mobrilz" target="_blank" rel="noopener noreferrer" aria-label="YouTube" class="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/15 hover:text-white flex items-center justify-center transition-all border border-white/10">
                      <i data-lucide="youtube" class="w-4 h-4"></i>
                    </a>
                    <a href="https://twitter.com/mobrilz" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter" class="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/15 hover:text-white flex items-center justify-center transition-all border border-white/10">
                      <i data-lucide="twitter" class="w-4 h-4"></i>
                    </a>
                    <a href="https://linkedin.com/company/mobrilz" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/15 hover:text-white flex items-center justify-center transition-all border border-white/10">
                      <i data-lucide="linkedin" class="w-4 h-4"></i>
                    </a>
                    <a href="https://facebook.com/mobrilz" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/15 hover:text-white flex items-center justify-center transition-all border border-white/10">
                      <i data-lucide="facebook" class="w-4 h-4"></i>
                    </a>
                    <a href="https://github.com/mobrilz" target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/15 hover:text-white flex items-center justify-center transition-all border border-white/10">
                      <i data-lucide="github" class="w-4 h-4"></i>
                    </a>
                  </div>
                </div>

                <!-- Studio Address & Visiting Hours -->
                <div class="space-y-3 max-w-xs text-xs text-slate-300 font-light leading-relaxed">
                  <span class="text-xs font-mono uppercase tracking-wider text-[#9abbe3] font-medium block">Studio Location</span>
                  <p class="not-italic">
                    E-160, 3rd Floor, Sector 63<br />
                    Noida, U.P. 201301, India
                  </p>
                  <p class="text-slate-400">
                    Monday – Friday: 9:00 AM – 6:00 PM (IST)<br />
                    Synchronized US & EU shifts.
                  </p>
                </div>
              </div>

              <!-- Right: Flubble Newsletter Subscription Box -->
              <div class="flex flex-col gap-3 lg:items-end w-full lg:max-w-md">
                <p class="text-sm font-light text-slate-300 lg:text-right">
                  Subscribe to our engineering newsletter for the latest technical tear-downs, AI benchmarks, and web development strategies.
                </p>
                <form class="relative w-full" onsubmit="event.preventDefault(); alert('Subscribed to Mobrilz Engineering Newsletter!');">
                  <div class="flex h-[52px] items-center gap-2 rounded-[19px] bg-white p-1 border border-slate-200 shadow-sm">
                    <label class="sr-only" for="flubble-newsletter-email">Work Email</label>
                    <input 
                      id="flubble-newsletter-email" 
                      type="email" 
                      required 
                      placeholder="Enter your email" 
                      class="min-w-0 flex-1 bg-transparent px-4 text-sm text-[#09143f] placeholder:text-slate-400 focus:outline-none font-light"
                    />
                    <button type="submit" class="group/btn flex h-11 px-6 shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-2xl bg-[#09143f] hover:bg-[#3779cb] text-sm font-medium tracking-wide text-white transition-all duration-300">
                      <span class="relative block overflow-hidden">
                        <span class="block transition-transform duration-500 ease-[var(--ease-slide)] group-hover/btn:-translate-y-full">
                          Subscribe
                        </span>
                        <span aria-hidden="true" class="absolute inset-0 block translate-y-full transition-transform duration-500 ease-[var(--ease-slide)] group-hover/btn:translate-y-0 text-white">
                          Subscribe
                        </span>
                      </span>
                    </button>
                  </div>
                </form>
              </div>

            </div>

            <!-- Row 2: Four Organized Navigation Columns (Preserving All Mobrilz Content) -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 pb-12 border-b border-white/10">
              
              <!-- Col 1: COMPANY -->
              <nav aria-label="Company Navigation" class="flex flex-col gap-3.5">
                <p class="text-xs font-mono uppercase tracking-[0.18em] text-[#9abbe3] font-medium">Company</p>
                <ul class="flex flex-col gap-2.5">
                  <li><a class="group/flink flubble-footer-link" href="#why-us"><span class="flubble-footer-slide-text"><span class="flubble-footer-slide-primary">About Us</span><span class="flubble-footer-slide-secondary">About Us</span></span></a></li>
                  <li><a class="group/flink flubble-footer-link" href="#cta"><span class="flubble-footer-slide-text"><span class="flubble-footer-slide-primary">Careers</span><span class="flubble-footer-slide-secondary">Careers</span></span></a></li>
                  <li><a class="group/flink flubble-footer-link" href="#technologies"><span class="flubble-footer-slide-text"><span class="flubble-footer-slide-primary">Technologies</span><span class="flubble-footer-slide-secondary">Technologies</span></span></a></li>
                  <li><a class="group/flink flubble-footer-link" href="#projects"><span class="flubble-footer-slide-text"><span class="flubble-footer-slide-primary">Portfolios</span><span class="flubble-footer-slide-secondary">Portfolios</span></span></a></li>
                  <li><a class="group/flink flubble-footer-link" href="#faqs"><span class="flubble-footer-slide-text"><span class="flubble-footer-slide-primary">Refund Policy</span><span class="flubble-footer-slide-secondary">Refund Policy</span></span></a></li>
                  <li><a class="group/flink flubble-footer-link" href="#faqs"><span class="flubble-footer-slide-text"><span class="flubble-footer-slide-primary">Privacy Policy</span><span class="flubble-footer-slide-secondary">Privacy Policy</span></span></a></li>
                  <li><a class="group/flink flubble-footer-link" href="#faqs"><span class="flubble-footer-slide-text"><span class="flubble-footer-slide-primary">Terms of Service</span><span class="flubble-footer-slide-secondary">Terms of Service</span></span></a></li>
                </ul>
              </nav>

              <!-- Col 2: SERVICES -->
              <nav aria-label="Services Navigation" class="flex flex-col gap-3.5">
                <p class="text-xs font-mono uppercase tracking-[0.18em] text-[#9abbe3] font-medium">Services</p>
                <ul class="flex flex-col gap-2.5">
                  <li><a class="group/flink flubble-footer-link" href="#expertise"><span class="flubble-footer-slide-text"><span class="flubble-footer-slide-primary">Web Development</span><span class="flubble-footer-slide-secondary">Web Development</span></span></a></li>
                  <li><a class="group/flink flubble-footer-link" href="#expertise"><span class="flubble-footer-slide-text"><span class="flubble-footer-slide-primary">Mobile Apps</span><span class="flubble-footer-slide-secondary">Mobile Apps</span></span></a></li>
                  <li><a class="group/flink flubble-footer-link" href="#expertise"><span class="flubble-footer-slide-text"><span class="flubble-footer-slide-primary">Cloud Solutions</span><span class="flubble-footer-slide-secondary">Cloud Solutions</span></span></a></li>
                  <li><a class="group/flink flubble-footer-link" href="#expertise"><span class="flubble-footer-slide-text"><span class="flubble-footer-slide-primary">Custom Software</span><span class="flubble-footer-slide-secondary">Custom Software</span></span></a></li>
                  <li><a class="group/flink flubble-footer-link" href="#expertise"><span class="flubble-footer-slide-text"><span class="flubble-footer-slide-primary">UI/UX Design</span><span class="flubble-footer-slide-secondary">UI/UX Design</span></span></a></li>
                  <li><a class="group/flink flubble-footer-link" href="#expertise"><span class="flubble-footer-slide-text"><span class="flubble-footer-slide-primary">Branding</span><span class="flubble-footer-slide-secondary">Branding</span></span></a></li>
                  <li><a class="group/flink flubble-footer-link" href="#expertise"><span class="flubble-footer-slide-text"><span class="flubble-footer-slide-primary">DevOps & CI/CD</span><span class="flubble-footer-slide-secondary">DevOps & CI/CD</span></span></a></li>
                  <li><a class="group/flink flubble-footer-link" href="#expertise"><span class="flubble-footer-slide-text"><span class="flubble-footer-slide-primary">API Integration</span><span class="flubble-footer-slide-secondary">API Integration</span></span></a></li>
                </ul>
              </nav>

              <!-- Col 3: INDUSTRIES -->
              <nav aria-label="Industries Navigation" class="flex flex-col gap-3.5">
                <p class="text-xs font-mono uppercase tracking-[0.18em] text-[#9abbe3] font-medium">Industries</p>
                <ul class="flex flex-col gap-2.5">
                  <li><a class="group/flink flubble-footer-link" href="#projects"><span class="flubble-footer-slide-text"><span class="flubble-footer-slide-primary">Manufacturing</span><span class="flubble-footer-slide-secondary">Manufacturing</span></span></a></li>
                  <li><a class="group/flink flubble-footer-link" href="#projects"><span class="flubble-footer-slide-text"><span class="flubble-footer-slide-primary">Finance & FinTech</span><span class="flubble-footer-slide-secondary">Finance & FinTech</span></span></a></li>
                  <li><a class="group/flink flubble-footer-link" href="#projects"><span class="flubble-footer-slide-text"><span class="flubble-footer-slide-primary">Healthcare & HIPAA</span><span class="flubble-footer-slide-secondary">Healthcare & HIPAA</span></span></a></li>
                  <li><a class="group/flink flubble-footer-link" href="#projects"><span class="flubble-footer-slide-text"><span class="flubble-footer-slide-primary">Education Tech</span><span class="flubble-footer-slide-secondary">Education Tech</span></span></a></li>
                  <li><a class="group/flink flubble-footer-link" href="#projects"><span class="flubble-footer-slide-text"><span class="flubble-footer-slide-primary">E-Commerce & Retail</span><span class="flubble-footer-slide-secondary">E-Commerce & Retail</span></span></a></li>
                  <li><a class="group/flink flubble-footer-link" href="#projects"><span class="flubble-footer-slide-text"><span class="flubble-footer-slide-primary">B2B SaaS</span><span class="flubble-footer-slide-secondary">B2B SaaS</span></span></a></li>
                  <li><a class="group/flink flubble-footer-link" href="#projects"><span class="flubble-footer-slide-text"><span class="flubble-footer-slide-primary">Logistics & Supply</span><span class="flubble-footer-slide-secondary">Logistics & Supply</span></span></a></li>
                </ul>
              </nav>

              <!-- Col 4: RESOURCES & CONTACT -->
              <nav aria-label="Resources Navigation" class="flex flex-col gap-3.5">
                <p class="text-xs font-mono uppercase tracking-[0.18em] text-[#9abbe3] font-medium">Resources</p>
                <ul class="flex flex-col gap-2.5">
                  <li><a class="group/flink flubble-footer-link" href="#cta"><span class="flubble-footer-slide-text"><span class="flubble-footer-slide-primary">Contact Engineering</span><span class="flubble-footer-slide-secondary">Contact Engineering</span></span></a></li>
                  <li><a class="group/flink flubble-footer-link" href="#why-us"><span class="flubble-footer-slide-text"><span class="flubble-footer-slide-primary">Outsourcing Model</span><span class="flubble-footer-slide-secondary">Outsourcing Model</span></span></a></li>
                  <li><a class="group/flink flubble-footer-link" href="#blogs"><span class="flubble-footer-slide-text"><span class="flubble-footer-slide-primary">Perspectives / Blog</span><span class="flubble-footer-slide-secondary">Perspectives / Blog</span></span></a></li>
                  <li><a class="group/flink flubble-footer-link" href="#cta"><span class="flubble-footer-slide-text"><span class="flubble-footer-slide-primary">Make Payment</span><span class="flubble-footer-slide-secondary">Make Payment</span></span></a></li>
                  <li><a class="group/flink flubble-footer-link" href="#cta"><span class="flubble-footer-slide-text"><span class="flubble-footer-slide-primary">Get a Quote</span><span class="flubble-footer-slide-secondary">Get a Quote</span></span></a></li>
                  <li><a class="group/flink flubble-footer-link" href="#faqs"><span class="flubble-footer-slide-text"><span class="flubble-footer-slide-primary">Support Desk</span><span class="flubble-footer-slide-secondary">Support Desk</span></span></a></li>
                </ul>
              </nav>

            </div>

            <!-- Row 3: Direct Phone, Contact, and Copyright -->
            <div class="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-400 font-light">
              <div class="flex flex-wrap items-center gap-6">
                <a href="tel:+918010355718" class="hover:text-white transition-colors flex items-center gap-2">
                  <i data-lucide="phone" class="w-3.5 h-3.5 text-mobrilz-blue"></i>
                  <span>+91 8010 355 718</span>
                </a>
                <a href="mailto:sales@mobrilz.com" class="hover:text-white transition-colors flex items-center gap-2">
                  <i data-lucide="mail" class="w-3.5 h-3.5 text-mobrilz-blue"></i>
                  <span>sales@mobrilz.com</span>
                </a>
              </div>
              <div class="flex items-center gap-2">
                <span>© 2026 Mobrilz. All rights reserved.</span>
                <span class="text-slate-600">|</span>
                <span>Made with ❤️ in India 🇮🇳</span>
              </div>
            </div>

          </div>

          <!-- Bottom Grand Watermark Display (Signature Flubble Typography) -->
          <div class="w-full overflow-hidden mt-8 pt-4">
            <p aria-hidden="true" class="flubble-huge-watermark">
              Mobrilz Digital Studios™
            </p>
          </div>
        </div>

      </div>
    </div>
  </footer>
'''

updated_content = content[:cta_start] + combined_flubble_footer + content[footer_end:]

# 3. Add scroll reveal observer for the Flubble footer items
observer_js = '''
  <script>
    // Flubble Scroll Reveal Observer for Footer Elements
    (function initFlubbleScrollReveal() {
      const revealItems = document.querySelectorAll('.flubble-reveal-item');
      if (!revealItems.length) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      revealItems.forEach(item => observer.observe(item));
    })();
  </script>
'''

if "initFlubbleScrollReveal" not in updated_content:
    body_pos = updated_content.rfind("</body>")
    if body_pos != -1:
        updated_content = updated_content[:body_pos] + observer_js + "\n" + updated_content[body_pos:]

with open(r"C:\Users\Manoj\.gemini\antigravity\scratch\mobrilz-homepage\design-b.html", "w", encoding="utf-8") as f:
    f.write(updated_content)

print("Updated design-b.html footer successfully!")
