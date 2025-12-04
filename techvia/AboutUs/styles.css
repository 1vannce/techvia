/* =============================
   CSS Reset & Base Styles
   ============================= */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 16px;
    scroll-behavior: smooth;
}

body {
    font-family: 'Sansation', sans-serif;
    font-size: 1.125rem;
    line-height: 1.7;
    color: #C0C8CA;
    background: linear-gradient(135deg, #1A2D42 0%, #2E4156 100%);
    overflow-x: hidden;
}

/* =============================
   Typography
   ============================= */
h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: 'Anton', sans-serif;
    font-weight: 400;
    line-height: 1.2;
    color: #D4D8DD;
    text-shadow: 0 0 20px rgba(212, 216, 221, 0.3);
}

h1 {
    font-size: 3rem;
}

h2 {
    font-size: 2.5rem;
}

h3 {
    font-size: 1.5rem;
}

h4 {
    font-size: 1.25rem;
}

p {
    margin-bottom: 1rem;
    color: #AAB7B7;
}

/* =============================
   Layout Utilities
   ============================= */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.section {
    padding: 5rem 0;
    position: relative;
}

/* =============================
   Buttons
   ============================= */
.btn {
    display: inline-block;
    padding: 1rem 2rem;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    border-radius: 8px;
    transition: all 0.3s ease;
    cursor: pointer;
    border: none;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.btn::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
}

.btn:hover::before {
    width: 300px;
    height: 300px;
}

.btn-primary {
    background: linear-gradient(135deg, #D4D8DD 0%, #AAB7B7 100%);
    color: #1A2D42;
    box-shadow: 0 4px 15px rgba(212, 216, 221, 0.4);
    position: relative;
    z-index: 1;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(212, 216, 221, 0.6);
}

.btn-secondary {
    background: transparent;
    color: #D4D8DD;
    border: 2px solid #D4D8DD;
    box-shadow: 0 0 10px rgba(212, 216, 221, 0.3);
}

.btn-secondary:hover {
    background: rgba(212, 216, 221, 0.1);
    box-shadow: 0 0 20px rgba(212, 216, 221, 0.5);
}

/* =============================
   Header & Navigation
   ============================= */
.header {
    background: linear-gradient(135deg, #1A2D42 0%, #2E4156 100%);
    border-bottom: 1px solid rgba(192, 200, 202, 0.2);
    position: sticky;
    top: 0;
    z-index: 1000;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
}

.header.scrolled {
    box-shadow: 0 2px 20px rgba(192, 200, 202, 0.3);
    border-bottom-color: rgba(192, 200, 202, 0.4);
}

.nav-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 0;
}

.brand-name {
    position: relative;
    font-family: 'Anton', sans-serif;
    font-size: 1.75rem;
    font-weight: 400;
    color: #D4D8DD;
    display: inline-block;
}

/* Shine overlay that only affects the text */
.brand-name::after {
    content: "TechVerse";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    /* Match the original text exactly */
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;

    /* Gradient that sweeps across */
    background: linear-gradient(120deg,
            transparent 0%,
            transparent 40%,
            rgba(255, 255, 255, 0.8) 50%,
            transparent 60%,
            transparent 100%);

    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;

    background-size: 200% 100%;
    animation: textShine 2.2s linear infinite;
}

@keyframes textShine {
    0% {
        background-position: 100% 0;
    }

    100% {
        background-position: -100% 0;
    }
}

.nav-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
}

.hamburger {
    display: block;
    width: 25px;
    height: 2px;
    background: #D4D8DD;
    position: relative;
    transition: background 0.3s ease;
    box-shadow: 0 0 10px rgba(212, 216, 221, 0.5);
}

.hamburger::before,
.hamburger::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 2px;
    background: #D4D8DD;
    box-shadow: 0 0 10px rgba(212, 216, 221, 0.5);
    transition: all 0.3s ease;
}

.hamburger::before {
    top: -8px;
}

.hamburger::after {
    top: 8px;
}

.nav-toggle[aria-expanded="true"] .hamburger {
    background: transparent;
}

.nav-toggle[aria-expanded="true"] .hamburger::before {
    transform: rotate(45deg);
    top: 0;
}

.nav-toggle[aria-expanded="true"] .hamburger::after {
    transform: rotate(-45deg);
    top: 0;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2.5rem;
}

.nav-link {
    text-decoration: none;
    color: #AAB7B7;
    font-weight: 500;
    font-size: 1rem;
    position: relative;
    transition: color 0.3s ease;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #D4D8DD, #C0C8CA);
    box-shadow: 0 0 10px rgba(212, 216, 221, 0.8);
    transition: width 0.3s ease;
}

.nav-link:hover {
    color: #D4D8DD;
    text-shadow: 0 0 10px rgba(212, 216, 221, 0.6);
}

.nav-link:hover::after {
    width: 100%;
}

.nav-link.active {
    z-index: 2;
    max-width: 800px;
}

/* =============================
   Hero Section
   ============================= */

.hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* vertical center */
    align-items: center;
    /* horizontal center */
    text-align: center;
    /* center text */
    height: 100vh;
    /* full screen height */
    padding: 0 20px;
    /* spacing for mobile */
}

.hero-title {
    font-family: 'Anton', sans-serif;
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    font-weight: 400;
    background: linear-gradient(135deg, #D4D8DD 0%, #C0C8CA 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.hero-word {
    display: inline-block;
    opacity: 0;
    animation: fadeInUp 0.6s ease forwards;
}

.hero-word:nth-child(1) {
    animation-delay: 0.1s;
}

.hero-word:nth-child(2) {
    animation-delay: 0.2s;
}

.hero-word:nth-child(3) {
    animation-delay: 0.3s;
}

.hero-word:nth-child(4) {
    animation-delay: 0.4s;
}

.hero-subtitle {
    font-size: 1.25rem;
    color: #AAB7B7;
    margin-bottom: 2rem;
    opacity: 0;
    animation: fadeIn 0.8s ease forwards 0.6s;
}

.hero .btn {
    opacity: 0;
    animation: fadeInUp 0.6s ease forwards 0.8s;
}

.hero-blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(100px);
    opacity: 0.2;
    animation: float 8s ease-in-out infinite;
}

.hero-blob-1 {
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, #D4D8DD 0%, transparent 70%);
    top: -100px;
    left: -100px;
}

.hero-blob-2 {
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, #AAB7B7 0%, transparent 70%);
    bottom: -100px;
    right: -100px;
    animation-delay: 1s;
}

/* =============================
   Section Headers
   ============================= */
.section-header {
    text-align: center;
    margin-bottom: 4rem;
}

.section-title {
    font-family: 'Anton', sans-serif;
    margin-bottom: 0.5rem;
    background: linear-gradient(135deg, #D4D8DD 0%, #C0C8CA 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.section-subtitle {
    font-size: 1.125rem;
    color: #AAB7B7;
}

/* =============================
   Story Section
   ============================= */
.story-section {
    background: linear-gradient(135deg, #1A2D42 0%, #2E4156 100%);
}

.story-text {
    max-width: 900px;
    margin: 0 auto 4rem;
}

.story-text p {
    font-size: 1.125rem;
    line-height: 1.8;
    color: #C0C8CA;
    margin-bottom: 1.5rem;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.stat-card {
    background: linear-gradient(135deg, #2E4156 0%, #1A2D42 100%);
    padding: 2.5rem 2rem;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease;
    border: 1px solid rgba(192, 200, 202, 0.2);
    position: relative;
    overflow: hidden;
}

.stat-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(212, 216, 221, 0.1), transparent);
    transition: left 0.5s;
}

.stat-card:hover::before {
    left: 100%;
}

.stat-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 30px rgba(170, 183, 183, 0.4);
    border-color: rgba(192, 200, 202, 0.6);
}

.stat-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    filter: drop-shadow(0 0 10px rgba(212, 216, 221, 0.5));
}

.stat-number {
    font-family: 'Anton', sans-serif;
    font-size: 2.5rem;
    font-weight: 400;
    color: #D4D8DD;
    margin-bottom: 0.5rem;
    text-shadow: 0 0 20px rgba(212, 216, 221, 0.6);
}

.stat-label {
    font-size: 1rem;
    color: #AAB7B7;
    font-weight: 500;
}

/* =============================
   Timeline Section
   ============================= */
.timeline-section {
    background: linear-gradient(135deg, #1A2D42 0%, #2E4156 50%, #1A2D42 100%);
    position: relative;
}

.timeline-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
        radial-gradient(circle at 30% 30%, rgba(212, 216, 221, 0.05) 0%, transparent 50%),
        radial-gradient(circle at 70% 70%, rgba(46, 65, 86, 0.05) 0%, transparent 50%);
    pointer-events: none;
}

.timeline {
    position: relative;
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem 0;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, transparent, #C0C8CA, transparent);
    transform: translateX(-50%);
    box-shadow: 0 0 20px rgba(192, 200, 202, 0.6);
}

.timeline-item {
    position: relative;
    margin-bottom: 4rem;
    display: flex;
    align-items: center;
    gap: 2rem;
}

.timeline-item:nth-child(odd) {
    flex-direction: row;
}

.timeline-item:nth-child(even) {
    flex-direction: row-reverse;
}

.timeline-year {
    font-family: 'Anton', sans-serif;
    width: 120px;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 400;
    color: #D4D8DD;
    background: linear-gradient(135deg, #2E4156, #1A2D42);
    padding: 1rem;
    border-radius: 50%;
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #C0C8CA;
    box-shadow: 0 0 30px rgba(192, 200, 202, 0.6);
    z-index: 2;
    position: relative;
}

.timeline-content {
    flex: 1;
    background: linear-gradient(135deg, #2E4156 0%, #1A2D42 100%);
    padding: 2rem;
    border-radius: 12px;
    border: 1px solid rgba(192, 200, 202, 0.2);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease;
}

.timeline-content:hover {
    transform: translateX(10px);
    border-color: rgba(192, 200, 202, 0.6);
    box-shadow: 0 8px 30px rgba(170, 183, 183, 0.3);
}

.timeline-item:nth-child(even) .timeline-content:hover {
    transform: translateX(-10px);
}

.timeline-content h3 {
    font-family: 'Anton', sans-serif;
    color: #D4D8DD;
    margin-bottom: 0.75rem;
    font-size: 1.5rem;
}

.timeline-content p {
    color: #C0C8CA;
    line-height: 1.6;
}

/* =============================
   Mission & Vision Section
   ============================= */
.mission-vision-section {
    background: linear-gradient(135deg, #1A2D42 0%, #2E4156 100%);
    color: #D4D8DD;
}

.mission-vision-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3rem;
}

.mission-card,
.vision-card {
    background: linear-gradient(135deg, #2E4156 0%, #1A2D42 100%);
    padding: 3rem 2rem;
    border-radius: 16px;
    border: 1px solid rgba(192, 200, 202, 0.2);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.mission-card::before,
.vision-card::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(212, 216, 221, 0.1) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.5s;
}

.mission-card:hover::before,
.vision-card:hover::before {
    opacity: 1;
}

.mission-card:hover,
.vision-card:hover {
    transform: translateY(-8px);
    border-color: rgba(192, 200, 202, 0.6);
    box-shadow: 0 12px 40px rgba(170, 183, 183, 0.3);
}

.mission-card .card-icon,
.vision-card .card-icon {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    filter: drop-shadow(0 0 20px rgba(212, 216, 221, 0.6));
}

.mission-card h3,
.vision-card h3 {
    font-family: 'Anton', sans-serif;
    color: #D4D8DD;
    margin-bottom: 1rem;
    font-size: 1.75rem;
}

.mission-card p,
.vision-card p {
    color: #C0C8CA;
    line-height: 1.8;
}

/* =============================
   Values Section
   ============================= */
.values-section {
    background: linear-gradient(135deg, #2E4156 0%, #1A2D42 100%);
    padding: 4rem 0;
    overflow: hidden;
}

.values-section .section-header {
    text-align: center;
    margin-bottom: 3rem;
}

/* Wrapper with fade edges */
.values-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
    padding: 1rem 0;
}

/* Left fade edge */
.values-wrapper::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100%;
    background: linear-gradient(to right, #1A2D42 0%, transparent 100%);
    z-index: 10;
    pointer-events: none;
}

/* Right fade edge */
.values-wrapper::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100%;
    background: linear-gradient(to left, #1A2D42 0%, transparent 100%);
    z-index: 10;
    pointer-events: none;
}

/* Scrolling track - KEY FIXES HERE */
.values-track {
    display: flex;
    gap: 2rem;
    width: fit-content;
    animation: scrollCards 20s linear infinite;
}

/* Pause animation on hover */
.values-wrapper:hover .values-track {
    animation-play-state: paused;
}

/* FIXED: Animation moves exactly 50% (original content width) */
@keyframes scrollCards {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(calc(-50% - 1rem));
    }
}

/* Value Cards */
.value-card {
    flex-shrink: 0;
    width: 300px;
    background: linear-gradient(135deg, #232f3e 0%, #151f2b 100%);
    padding: 2.5rem 2rem;
    border-radius: 12px;
    border: 1px solid rgba(192, 200, 202, 0.1);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);

    /* Default dimmed state */
    opacity: 0.5;
    filter: brightness(0.6);
    transform: scale(0.95);

    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* All cards brighten slightly when wrapper is hovered */
.values-wrapper:hover .value-card {
    opacity: 0.7;
    filter: brightness(0.8);
}

/* Individual card highlight on hover */
.value-card:hover {
    opacity: 1 !important;
    filter: brightness(1.15) !important;
    transform: scale(1.05) translateY(-10px) !important;
    background: linear-gradient(135deg, #3a4d63 0%, #243447 100%);
    border-color: rgba(212, 216, 221, 0.4);
    box-shadow:
        0 15px 40px rgba(0, 0, 0, 0.4),
        0 0 30px rgba(212, 216, 221, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

/* Icon styling */
.value-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    filter: drop-shadow(0 0 8px rgba(212, 216, 221, 0.2));
    transition: all 0.4s ease;
    display: inline-block;
}

.value-card:hover .value-icon {
    filter: drop-shadow(0 0 15px rgba(212, 216, 221, 0.6));
    transform: scale(1.2);
}

/* Card title */
.value-card h3 {
    font-family: 'Anton', sans-serif;
    margin-bottom: 0.75rem;
    font-size: 1.25rem;
    color: #D4D8DD;
    transition: all 0.3s ease;
}

.value-card:hover h3 {
    color: #ffffff;
}

/* Card description */
.value-card p {
    color: #C0C8CA;
    font-size: 0.95rem;
    line-height: 1.7;
    transition: color 0.3s ease;
}

.value-card:hover p {
    color: #e8ecee;
}

/* =============================
   Team Section
   ============================= */
.team-section {
    background: linear-gradient(135deg, #1A2D42 0%, #2E4156 100%);
}

.team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2.5rem;
}

.team-card {
    background: linear-gradient(135deg, #2E4156 0%, #1A2D42 100%);
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid rgba(192, 200, 202, 0.2);
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}

.team-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(170, 183, 183, 0.4);
    border-color: rgba(192, 200, 202, 0.6);
}

.team-image-wrapper {
    width: 100%;
    padding-top: 100%;
    position: relative;
    overflow: hidden;
}

.team-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.team-info {
    padding: 2rem;
}

.team-name {
    font-family: 'Anton', sans-serif;
    font-size: 1.5rem;
    margin-bottom: 0.25rem;
    color: #D4D8DD;
}

.team-role {
    color: #AAB7B7;
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 1rem;
}

.team-bio {
    color: #C0C8CA;
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
}

/* Social Media Buttons */
.team-social {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
}

.social-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-size: 0.875rem;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s ease;
    border: 1px solid;
}

.social-btn svg {
    width: 16px;
    height: 16px;
}

.social-btn.linkedin {
    background: rgba(0, 119, 181, 0.1);
    color: #0077B5;
    border-color: rgba(0, 119, 181, 0.3);
}

.social-btn.linkedin:hover {
    background: rgba(0, 119, 181, 0.2);
    border-color: #0077B5;
    box-shadow: 0 0 15px rgba(0, 119, 181, 0.4);
}

.social-btn.facebook {
    background: rgba(24, 119, 242, 0.1);
    color: #1877F2;
    border-color: rgba(24, 119, 242, 0.3);
}

.social-btn.facebook:hover {
    background: rgba(24, 119, 242, 0.2);
    border-color: #1877F2;
    box-shadow: 0 0 15px rgba(24, 119, 242, 0.4);
}

.social-btn.github {
    background: rgba(212, 216, 221, 0.05);
    color: #D4D8DD;
    border-color: rgba(192, 200, 202, 0.2);
}

.social-btn.github:hover {
    background: rgba(212, 216, 221, 0.1);
    border-color: #D4D8DD;
    box-shadow: 0 0 15px rgba(212, 216, 221, 0.3);
}

/* =============================
   CTA Section
   ============================= */
.cta-section {
    background: linear-gradient(135deg, #1A2D42 0%, #2E4156 50%, #1A2D42 100%);
    position: relative;
    overflow: hidden;
}

.cta-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(212, 216, 221, 0.1) 0%, transparent 50%);
}

.cta-content {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
}

.cta-title {
    font-family: 'Anton', sans-serif;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #D4D8DD 0%, #C0C8CA 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.cta-text {
    font-size: 1.25rem;
    color: #C0C8CA;
    margin-bottom: 2.5rem;
}

.cta-buttons {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
}

.cta-blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(100px);
    opacity: 0.2;
    animation: float 10s ease-in-out infinite;
}

.cta-blob-1 {
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, #AAB7B7 0%, transparent 70%);
    top: -100px;
    left: -100px;
}

.cta-blob-2 {
    width: 350px;
    height: 350px;
    background: radial-gradient(circle, #C0C8CA 0%, transparent 70%);
    bottom: -100px;
    right: -100px;
    animation-delay: 2s;
}

/* =============================
   Footer
   ============================= */
.footer {
    background: linear-gradient(135deg, #1A2D42 0%, #2E4156 100%);
    color: #C0C8CA;
    padding: 3rem 0 2rem;
    border-top: 1px solid rgba(192, 200, 202, 0.2);
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(192, 200, 202, 0.1);
}

.footer-brand .brand-name {
    font-family: 'Anton', sans-serif;
    color: #D4D8DD;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    text-shadow: 0 0 20px rgba(212, 216, 221, 0.6);
}

.footer-tagline {
    color: #AAB7B7;
    font-size: 0.95rem;
}

.footer-links {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.footer-links a {
    color: #C0C8CA;
    text-decoration: none;
    font-size: 0.95rem;
    transition: all 0.3s ease;
}

.footer-links a:hover {
    color: #D4D8DD;
    text-shadow: 0 0 10px rgba(212, 216, 221, 0.6);
}

.footer-bottom {
    text-align: center;
}

.footer-bottom p {
    color: #AAB7B7;
    font-size: 0.9rem;
}

/* =============================
   Animations
   ============================= */
@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0) scale(1) rotate(0deg);
    }

    33% {
        transform: translateY(-20px) scale(1.05) rotate(5deg);
    }

    66% {
        transform: translateY(-10px) scale(0.95) rotate(-5deg);
    }
}

/* Scroll reveal animation */
.fade-in-section {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in-section.is-visible {
    opacity: 1;
    transform: translateY(0);
}

/* =============================
   Responsive Design
   ============================= */

/* Tablet */
@media (max-width: 992px) {
    .container {
        padding: 0 1.5rem;
    }

    .section {
        padding: 4rem 0;
    }

    .hero-title {
        font-size: 2.5rem;
    }

    .nav-toggle {
        display: block;
        z-index: 1001;
    }

    .nav-menu {
        position: fixed;
        top: 0;
        right: -100%;
        width: 100%;
        height: 100vh;
        background: rgba(26, 45, 66, 0.95);
        backdrop-filter: blur(10px);
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: right 0.3s ease;
        z-index: 1000;
    }

    .nav-menu.active {
        right: 0;
    }

    .nav-link {
        font-size: 1.5rem;
    }

    .timeline::before {
        left: 0;
    }

    .timeline-item {
        flex-direction: column !important;
        align-items: flex-start;
        margin-left: 2rem;
    }

    .timeline-year {
        width: 80px;
        font-size: 1.2rem;
        margin-bottom: 1rem;
        position: absolute;
        left: -60px;
        top: 0;
    }

    .timeline-content {
        width: 100%;
    }

    .timeline-content:hover,
    .timeline-item:nth-child(even) .timeline-content:hover {
        transform: translateX(0);
    }
}

/* Mobile */
@media (max-width: 576px) {
    .hero-title {
        font-size: 2rem;
    }

    .section-title {
        font-size: 2rem;
    }

    .stats-grid {
        grid-template-columns: 1fr;
    }

    .cta-buttons {
        flex-direction: column;
    }

    .footer-content {
        flex-direction: column;
        gap: 2rem;
        text-align: center;
    }

    .footer-links {
        flex-direction: column;
        gap: 1rem;
    }
}
