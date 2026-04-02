// Initialize font
const fontname = "Inter";
const fontweights = [300, 400, 500, 600, 700];

// Color properties
const basecolor = "#4a4a6a";
const accentcolor = "#1a3a5c";
const highlightcolor = "#1a1a2e";

// Body properties
const bodyfontweight = 400;
const bodyfontsize = "11.5pt";
const backgroundcolor = "var(--bg)";

// Menu properties
const menucolor = "#1a1a2e";
const menufontsize = "11pt";
const menudecoration = "none";

// Header properties
const headercolor = "var(--accent)";
const headerfontsize = "15pt";
const headerdecoration = "none";
const namecolor = "var(--text-primary)";
const namefontsize = "17pt";

// Load Inter font
$("head").append("<link href='https://fonts.googleapis.com/css2?family=" + fontname + ":wght@" + fontweights.join(';') + "&display=swap' rel='stylesheet' type='text/css'>");
$("body").css("font-family", "'" + fontname + "', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif");

$("body").css("font-weight", bodyfontweight);
$("body").css("font-size", bodyfontsize);
$("body").css("line-height", "1.7");

$(".menulink").css("font-size", menufontsize);
$(".menulink").css("text-decoration", menudecoration);

$(".menulink2").css("font-size", menufontsize);
$(".menulink2").css("text-decoration", headerdecoration);

$(".header").css("font-size", headerfontsize);
$(".header").css("text-decoration", headerdecoration);
$(".name").css("font-size", namefontsize);
$(".name").css("letter-spacing", "-0.3px");

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Highlight active nav link on scroll
const sections = document.querySelectorAll('[id]');
const navLinks = document.querySelectorAll('.sidebar-nav a');

function updateActiveNav() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);
window.addEventListener('load', updateActiveNav);

// ---- Dark mode toggle ----
function initTheme() {
    const saved = localStorage.getItem('theme');
    if (saved) {
        document.documentElement.setAttribute('data-theme', saved);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
}

// Initialize theme immediately
initTheme();

// Bind toggle button
const toggleBtn = document.querySelector('.theme-toggle');
if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleTheme);
}

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    }
});
