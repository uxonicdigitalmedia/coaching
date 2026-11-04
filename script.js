/* ================= DATA ================= */
const ICONS = {
  tuition: '<svg class="ic" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"><path d="M4 24 32 12l28 12-28 12z"/><path d="M16 30v12c0 4 8 8 16 8s16-4 16-8V30M58 25v14"/></svg>',
  board: '<svg class="ic" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"><path d="M32 16c-6-4-16-5-26-4v38c10-1 20 0 26 4 6-4 16-5 26-4V12c-10-1-20 0-26 4zM32 16v38"/></svg>',
  neet: '<svg class="ic" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M14 6h-4v14a12 12 0 0 0 24 0V6h-4"/><path d="M22 32v8a12 12 0 0 0 24 0v-6"/><circle cx="46" cy="28" r="6"/></svg>',
  jee: '<svg class="ic" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3"><circle cx="32" cy="32" r="4" fill="currentColor"/><ellipse cx="32" cy="32" rx="26" ry="10"/><ellipse cx="32" cy="32" rx="26" ry="10" transform="rotate(60 32 32)"/><ellipse cx="32" cy="32" rx="26" ry="10" transform="rotate(-60 32 32)"/></svg>',
  competitive: '<svg class="ic" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3"><circle cx="32" cy="14" r="7"/><circle cx="14" cy="20" r="5.5"/><circle cx="50" cy="20" r="5.5"/><path d="M18 52v-6a14 14 0 0 1 28 0v6zM4 50v-4a10 10 0 0 1 12-10M60 50v-4a10 10 0 0 0-12-10"/></svg>',
};
const ARROW = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#1d1a33" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

const courses = [
  { id: "tuition", color: "c-purple", title: "School Tuition", sub: "Classes 6 – 12<br>(All Boards)",
    desc: "Subject-wise tuition for Maths, Science, English and Social Science, aligned to State Board, CBSE and ICSE syllabi.",
    points: ["Small batches (max 20 students)", "Weekly chapter tests", "Homework & doubt support", "Monthly progress report to parents"],
    duration: "Academic year", fee: "₹1,500 / month" },
  { id: "board", color: "c-pink", title: "Board Exam Coaching", sub: "10th & 12th<br>(State / CBSE)",
    desc: "Focused preparation for board exams with full-syllabus revision, previous year papers and model exams.",
    points: ["Complete syllabus revision", "10+ full-length model exams", "Answer-writing practice", "Special crash course before exams"],
    duration: "6 months", fee: "₹18,000" },
  { id: "neet", color: "c-blue", title: "NEET Coaching", sub: "Medical Entrance<br>Preparation",
    desc: "Comprehensive Physics, Chemistry and Biology coaching for NEET-UG with NCERT-focused teaching.",
    points: ["NCERT line-by-line coverage", "Weekly NEET pattern mock tests", "All-India test series", "Personal mentor for each student"],
    duration: "1 / 2 years", fee: "₹65,000 / year" },
  { id: "jee", color: "c-orange", title: "JEE Coaching", sub: "Engineering Entrance<br>(Main &amp; Advanced)",
    desc: "In-depth coaching for JEE Main & Advanced covering concepts, problem solving and exam strategy.",
    points: ["Concept + problem-solving classes", "JEE Main & Advanced mock tests", "Daily practice problems (DPP)", "Performance analytics"],
    duration: "1 / 2 years", fee: "₹70,000 / year" },
  { id: "competitive", color: "c-green", title: "Competitive Exams", sub: "TNPSC | SSC | Banking<br>and More",
    desc: "Coaching for government job exams — TNPSC Group 1/2/4, SSC CGL/CHSL, IBPS & SBI banking exams.",
    points: ["General studies & aptitude", "Current affairs every week", "Previous-year paper practice", "Interview guidance"],
    duration: "4 – 8 months", fee: "₹12,000 onwards" },
];

const batches = [
  { name: "Class 10 – Board Focus", course: "board", cat: "school", color: "c-purple", start: "Nov 15", time: "5:00 – 7:00 PM", mode: "Offline", seats: 8, featured: true },
  { name: "Class 12 – Board Focus", course: "board", cat: "school", color: "c-pink", start: "Nov 15", time: "6:00 – 8:00 PM", mode: "Offline", seats: 5, featured: true },
  { name: "NEET (2027)", course: "neet", cat: "entrance", color: "c-blue", start: "Dec 1", time: "7:00 – 10:00 AM", mode: "Offline + Online", seats: 12, featured: true },
  { name: "JEE (2027)", course: "jee", cat: "entrance", color: "c-orange", start: "Dec 1", time: "4:00 – 7:00 PM", mode: "Offline + Online", seats: 3, featured: true },
  { name: "Class 6 – 9 Tuition", course: "tuition", cat: "school", start: "Nov 10", time: "4:30 – 6:00 PM", mode: "Offline", seats: 15 },
  { name: "NEET Repeaters (2027)", course: "neet", cat: "entrance", start: "Dec 10", time: "9:00 AM – 1:00 PM", mode: "Offline", seats: 10 },
  { name: "TNPSC Group 4", course: "competitive", cat: "competitive", start: "Nov 20", time: "6:30 – 8:30 AM", mode: "Offline", seats: 20 },
  { name: "SSC CGL / Banking", course: "competitive", cat: "competitive", start: "Dec 5", time: "Weekends", mode: "Online", seats: 25 },
];

const faculty = [
  { name: "Dr. R. Lakshmi", subj: "Biology", exp: "15 yrs · M.Sc., Ph.D." },
  { name: "S. Karthik", subj: "Physics", exp: "12 yrs · M.Sc., B.Ed." },
  { name: "M. Priya", subj: "Chemistry", exp: "10 yrs · M.Sc., M.Phil." },
  { name: "A. Venkatesh", subj: "Mathematics", exp: "14 yrs · M.Sc., B.Ed." },
];

const toppers = [
  { name: "Harini S", score: "682/720", exam: "NEET 2026" },
  { name: "Arjun K", score: "99.6 %ile", exam: "JEE Main 2026" },
  { name: "Divya R", score: "495/500", exam: "Class 10 Board" },
  { name: "Mohammed F", score: "588/600", exam: "Class 12 Board" },
];

const testimonials = [
  { text: "The weekly tests and personal attention helped me improve from 450 to 682 in NEET. The faculty were always available for doubts.", name: "Harini S", role: "NEET 2026 – Govt. Medical College" },
  { text: "My son's maths marks improved a lot within three months. The monthly reports keep us informed about his progress.", name: "Mrs. Kavitha", role: "Parent of Class 9 student" },
  { text: "Concept-based teaching made JEE physics so much easier. The mock tests felt exactly like the real exam.", name: "Arjun K", role: "JEE Main 2026 – 99.6 percentile" },
];

/* ================= HELPERS ================= */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const initials = (n) => n.replace(/^(Dr\.|Mrs\.|Mr\.)\s*/, "").split(/[\s.]+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("");

function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.classList.remove("show"), 3200);
}

/* ================= RENDER ================= */
$("#courseGrid").innerHTML = courses.map((c) => `
  <article class="course-card ${c.color} reveal" data-course="${c.id}" tabindex="0">
    ${ICONS[c.id]}
    <h3>${c.title}</h3>
    <p>${c.sub}</p>
    <p class="more">${c.duration} · ${c.fee}</p>
    <span class="arrow-btn">${ARROW}</span>
  </article>`).join("");

$("#batchCards").innerHTML = batches.filter((b) => b.featured).map((b) => `
  <div class="batch-card ${b.color}" data-batch="${b.name}" tabindex="0">
    <h4>${b.name}</h4>
    <p>Starts: ${b.start}</p>
    <span class="arrow-btn">${ARROW}</span>
  </div>`).join("");

function renderBatchTable(filter = "all") {
  $("#batchTable").innerHTML = batches
    .filter((b) => filter === "all" || b.cat === filter)
    .map((b) => `
      <tr>
        <td><strong>${b.name}</strong></td>
        <td>${b.start}</td>
        <td>${b.time}</td>
        <td>${b.mode}</td>
        <td><span class="badge ${b.seats <= 5 ? "low" : "ok"}">${b.seats} seats</span></td>
        <td><button class="btn btn-primary btn-sm" data-batch="${b.name}">Enroll</button></td>
      </tr>`).join("");
}
renderBatchTable();

$("#facultyGrid").innerHTML = faculty.map((f) => `
  <div class="faculty-card reveal">
    <div class="avatar">${initials(f.name)}</div>
    <h4>${f.name}</h4>
    <p class="subj">${f.subj}</p>
    <p class="exp">${f.exp}</p>
  </div>`).join("");

$("#toppers").innerHTML = toppers.map((t) => `
  <div class="topper reveal">
    <div class="avatar">${initials(t.name)}</div>
    <div class="score">${t.score}</div>
    <h4>${t.name}</h4>
    <p>${t.exam}</p>
  </div>`).join("");

$("#slides").innerHTML = testimonials.map((t) => `
  <div class="slide"><p>“${t.text}”</p><strong>${t.name}</strong><span>${t.role}</span></div>`).join("");
$("#sliderDots").innerHTML = testimonials.map((_, i) => `<button aria-label="Slide ${i + 1}" data-i="${i}"></button>`).join("");

// Fill course & batch dropdowns in forms
$$('select[name="course"]').forEach((sel) => {
  courses.forEach((c) => sel.insertAdjacentHTML("beforeend", `<option value="${c.id}">${c.title}</option>`));
});
batches.forEach((b) => $('#enquiryForm select[name="batch"]').insertAdjacentHTML("beforeend", `<option>${b.name}</option>`));

$("#year").textContent = new Date().getFullYear();

/* ================= HEADER / NAV ================= */
const header = $("#header");
const nav = $("#nav");
const hamburger = $("#hamburger");
const dropdown = $(".nav-dropdown");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("open");
  hamburger.classList.toggle("open");
});

$(".dropdown-toggle").addEventListener("click", (e) => {
  e.stopPropagation();
  const open = dropdown.classList.toggle("open");
  e.currentTarget.setAttribute("aria-expanded", open);
});
document.addEventListener("click", (e) => {
  if (!dropdown.contains(e.target)) dropdown.classList.remove("open");
});

// Close mobile menu after clicking a link
$$(".nav a").forEach((a) => a.addEventListener("click", () => {
  nav.classList.remove("open");
  hamburger.classList.remove("open");
  dropdown.classList.remove("open");
}));

// Dropdown course links open the course detail
$$(".dropdown-menu a").forEach((a) => a.addEventListener("click", () => {
  setTimeout(() => openCourse(a.dataset.course), 450);
}));

// Active link on scroll + header shadow + back-to-top
const sections = $$("main section[id]");
const navLinks = $$(".nav-link[href^='#']");
const toTop = $("#toTop");
function onScroll() {
  const y = window.scrollY;
  header.classList.toggle("scrolled", y > 10);
  toTop.classList.toggle("show", y > 600);
  let current = "home";
  sections.forEach((s) => { if (y + 120 >= s.offsetTop) current = s.id; });
  navLinks.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + current));
  $(".dropdown-toggle").classList.toggle("active", current === "courses");
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

/* ================= MODALS ================= */
function openModal(id) {
  $$(".modal.open").forEach((m) => m.classList.remove("open"));
  const m = $("#" + id);
  m.classList.add("open");
  m.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeModal(m) {
  m.classList.remove("open");
  m.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (m.id === "demoModal") $("#demoFrame").src = "";
}
$$(".modal").forEach((m) => {
  m.addEventListener("click", (e) => {
    if (e.target === m || e.target.closest("[data-close]")) closeModal(m);
  });
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") $$(".modal.open").forEach(closeModal);
});

function openEnquiry({ course = "", batch = "" } = {}) {
  const f = $("#enquiryForm");
  f.reset();
  f.querySelector(".form-msg").textContent = "";
  f.course.value = course;
  f.batch.value = batch;
  openModal("enquiryModal");
  setTimeout(() => f.name.focus(), 250);
}
$$("[data-open-enquiry]").forEach((b) => b.addEventListener("click", () => openEnquiry()));

// Course detail
function openCourse(id) {
  const c = courses.find((x) => x.id === id);
  if (!c) return;
  $("#courseModalBody").innerHTML = `
    <div class="course-detail">
      <div class="${c.color}" style="background:none">${ICONS[c.id]}</div>
      <h3>${c.title}</h3>
      <p>${c.desc}</p>
      <div class="meta"><span>⏱ ${c.duration}</span><span>💰 ${c.fee}</span></div>
      <ul>${c.points.map((p) => `<li>${p}</li>`).join("")}</ul>
      <button class="btn btn-primary btn-block" id="courseEnquire">Enquire for ${c.title}</button>
    </div>`;
  $("#courseEnquire").onclick = () => openEnquiry({ course: c.id });
  openModal("courseModal");
}
$("#courseGrid").addEventListener("click", (e) => {
  const card = e.target.closest(".course-card");
  if (card) openCourse(card.dataset.course);
});
$("#courseGrid").addEventListener("keydown", (e) => {
  const card = e.target.closest(".course-card");
  if (card && e.key === "Enter") openCourse(card.dataset.course);
});

// View all courses toggles extra info
$("#viewAllCourses").addEventListener("click", (e) => {
  e.preventDefault();
  const grid = $("#courseGrid");
  const expanded = grid.classList.toggle("expanded");
  e.currentTarget.firstChild.textContent = expanded ? "Show Less " : "View All Courses ";
});

// Batch enroll (cards + table)
document.addEventListener("click", (e) => {
  const el = e.target.closest("[data-batch]");
  if (!el) return;
  const b = batches.find((x) => x.name === el.dataset.batch);
  openEnquiry({ course: b.course, batch: b.name });
});
$("#batchCards").addEventListener("keydown", (e) => {
  if (e.key === "Enter" && e.target.dataset.batch) e.target.click();
});

// Batch filter
$("#batchFilters").addEventListener("click", (e) => {
  const tab = e.target.closest(".tab");
  if (!tab) return;
  $$(".tab").forEach((t) => t.classList.remove("active"));
  tab.classList.add("active");
  renderBatchTable(tab.dataset.filter);
});

// Demo video
$("#demoBtn").addEventListener("click", () => {
  // Replace with your own YouTube video ID
  $("#demoFrame").src = "https://www.youtube.com/embed/ysz5S6PUM-U?autoplay=1&rel=0";
  openModal("demoModal");
});

/* ================= FORMS ================= */
function validate(form) {
  let ok = true;
  $$("input, select", form).forEach((el) => el.classList.remove("invalid"));
  const name = form.name;
  const phone = form.phone;
  const course = form.course;
  const email = form.email;

  if (!name.value.trim() || name.value.trim().length < 2) { name.classList.add("invalid"); ok = false; }
  if (!/^[6-9]\d{9}$/.test(phone.value.replace(/[\s-]/g, "").replace(/^(\+91|0)/, ""))) { phone.classList.add("invalid"); ok = false; }
  if (!course.value) { course.classList.add("invalid"); ok = false; }
  if (email && email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { email.classList.add("invalid"); ok = false; }
  return ok;
}

function saveEnquiry(data) {
  try {
    const list = JSON.parse(localStorage.getItem("excelEnquiries") || "[]");
    list.push({ ...data, at: new Date().toISOString() });
    localStorage.setItem("excelEnquiries", JSON.stringify(list));
  } catch (_) { /* storage unavailable – ignore */ }
}

function handleForm(form, onDone) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const msg = form.querySelector(".form-msg");
    if (!validate(form)) {
      msg.className = "form-msg error";
      msg.textContent = "Please fill name, a valid 10-digit mobile number and course.";
      return;
    }
    const data = Object.fromEntries(new FormData(form));
    const btn = form.querySelector("button[type=submit]");
    btn.disabled = true;
    btn.textContent = "Sending...";
    setTimeout(() => {
      saveEnquiry(data);
      btn.disabled = false;
      btn.textContent = form.id === "enquiryForm" ? "Submit Enquiry" : "Send Message";
      msg.className = "form-msg success";
      msg.textContent = `Thank you ${data.name.split(" ")[0]}! We'll call you shortly.`;
      form.reset();
      onDone && onDone();
    }, 700);
  });
  $$("input, select", form).forEach((el) => el.addEventListener("input", () => el.classList.remove("invalid")));
}
handleForm($("#contactForm"), () => toast("✅ Message sent successfully!"));
handleForm($("#enquiryForm"), () => {
  toast("✅ Enquiry submitted! Our counsellor will call you.");
  setTimeout(() => closeModal($("#enquiryModal")), 1400);
});

/* ================= COUNTERS ================= */
function animateCount(el) {
  const target = +el.dataset.count;
  const suffix = el.dataset.suffix || "";
  const dur = 1600;
  const start = performance.now();
  const step = (now) => {
    const p = Math.min((now - start) / dur, 1);
    const val = Math.floor(target * (1 - Math.pow(1 - p, 3)));
    el.textContent = val.toLocaleString("en-IN") + suffix;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* ================= SCROLL REVEAL ================= */
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    en.target.classList.add("visible");
    if (en.target.dataset.count) animateCount(en.target);
    io.unobserve(en.target);
  });
}, { threshold: 0.2 });
$$(".reveal, [data-count]").forEach((el) => io.observe(el));

/* ================= TESTIMONIAL SLIDER ================= */
let slide = 0;
const dots = $$("#sliderDots button");
function goTo(i) {
  slide = (i + testimonials.length) % testimonials.length;
  $("#slides").style.transform = `translateX(-${slide * 100}%)`;
  dots.forEach((d, j) => d.classList.toggle("active", j === slide));
}
dots.forEach((d) => d.addEventListener("click", () => { goTo(+d.dataset.i); restart(); }));
let timer;
const restart = () => { clearInterval(timer); timer = setInterval(() => goTo(slide + 1), 5000); };
goTo(0);
restart();
