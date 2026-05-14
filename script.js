/* =========================
   GSAP SAFE START
========================= */

if (typeof gsap !== "undefined") {

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".logo", {
        y: -50,
        opacity: 0,
        duration: 1
    });

    gsap.from(".hero-content h1", {
        y: 100,
        opacity: 0,
        duration: 1.5
    });

    gsap.from(".hero-content p", {
        y: 100,
        opacity: 0,
        duration: 2
    });

    gsap.from(".hero-buttons", {
        y: 60,
        opacity: 0,
        duration: 1.2
    });

}

/* =========================
   MODAL SYSTEM
========================= */

const loginBtn = document.querySelector(".login-btn");
const registerBtn = document.querySelector(".register-btn");
const modal = document.getElementById("authModal");
const closeModal = document.getElementById("closeModal");

if (loginBtn && modal) {
    loginBtn.addEventListener("click", () => {
        modal.classList.add("active");
    });
}

if (registerBtn && modal) {
    registerBtn.addEventListener("click", () => {
        modal.classList.add("active");
    });
}

if (closeModal && modal) {
    closeModal.addEventListener("click", () => {
        modal.classList.remove("active");
    });
}

/* =========================
   SCROLL BUTTONS
========================= */

const exploreBtn = document.getElementById("exploreBtn");
const mentorBtn = document.getElementById("mentorBtn");

if (exploreBtn) {
    exploreBtn.addEventListener("click", () => {
        document.querySelector(".alumni-section")
        .scrollIntoView({ behavior: "smooth" });
    });
}

if (mentorBtn) {
    mentorBtn.addEventListener("click", () => {
        document.querySelector(".about")
        .scrollIntoView({ behavior: "smooth" });
    });
}

/* =========================
   COLLEGE ALUMNI TOGGLE (FIXED)
========================= */

function toggleCollege(id){

    const sections = document.querySelectorAll(".alumni-details");

    sections.forEach(sec => {
        sec.classList.remove("active");
    });

    const current = document.getElementById(id);

    if(current){
        current.classList.add("active");

        current.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

}

/* =========================
   COUNTER ANIMATION
========================= */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;
        const increment = target / 100;

        if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }

    };

    updateCounter();

});

/* =========================
   MOBILE MENU
========================= */

const hamburger = document.querySelector(".hamburger");
const navButtons = document.querySelector(".nav-buttons");

if (hamburger && navButtons) {
    hamburger.addEventListener("click", () => {
        navButtons.classList.toggle("active");
    });
}

/* =========================
   PROGRESS BAR
========================= */

const progressBar = document.querySelector(".progress-bar");

if (progressBar) {
    window.addEventListener("scroll", () => {

        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const scrollPercent = (scrollTop / scrollHeight) * 100;

        progressBar.style.width = scrollPercent + "%";

    });
}

/* =========================
   LOADER
========================= */

const loader = document.querySelector(".loader");

if (loader && typeof gsap !== "undefined") {

    window.addEventListener("load", () => {

        gsap.to(".loader", {
            opacity: 0,
            duration: 1,
            delay: 1,
            onComplete: () => {
                loader.style.display = "none";
            }
        });

    });

}

/* =========================
   PARALLAX EFFECT
========================= */

const hero = document.querySelector(".hero");

if (hero) {

    document.addEventListener("mousemove", (e) => {

        const x = (window.innerWidth / 2 - e.pageX) / 40;
        const y = (window.innerHeight / 2 - e.pageY) / 40;

        hero.style.backgroundPosition = `${x}px ${y}px`;

    });

}
/* =========================
   REGISTER PAGE FORM SWITCH
========================= */

document.addEventListener("DOMContentLoaded", () => {

    const studentBtn =
    document.getElementById("studentBtn");

    const alumniBtn =
    document.getElementById("alumniBtn");

    const studentForm =
    document.querySelector(".main-student-form");

    const alumniForm =
    document.querySelector(".main-alumni-form");

    const leftPanel =
    document.querySelector(".register-left");

    const leftTitle =
    document.getElementById("leftTitle");

    const leftText =
    document.getElementById("leftText");

    if(
        studentBtn &&
        alumniBtn &&
        studentForm &&
        alumniForm
    ){

        /* DEFAULT ACTIVE */

        studentBtn.classList.add("active-role");

        studentForm.classList.add("active-form");

        alumniForm.classList.remove("active-form");

        /* DEFAULT STATE */

        studentBtn.classList.add("student-dim");
        alumniBtn.classList.add("alumni-highlight");

        /* STUDENT BUTTON */

        studentBtn.addEventListener("click", ()=>{

            /* OPPOSITE HIGHLIGHT */

            studentBtn.classList.add("student-dim");

            alumniBtn.classList.remove("student-dim");
            alumniBtn.classList.remove("student-highlight");

            alumniBtn.classList.add("alumni-highlight");

            /* FORM SWITCH */

            studentForm.classList.add("active-form");
            alumniForm.classList.remove("active-form");

            /* LEFT PANEL */

            leftPanel.style.background =
            "linear-gradient(180deg,#2563eb,#06b6d4)";

            leftTitle.innerHTML =
            `Start Building <br> Your Career`;

            leftText.innerHTML =
            `Connect with mentors,
            discover internships,
            and grow your skills.`;

            /* SMOOTH ANIMATION */

            gsap.fromTo(
                ".register-right",
                {
                    opacity:0,
                    x:40
                },
                {
                    opacity:1,
                    x:0,
                    duration:0.5,
                    ease:"power3.out"
                }
            );

        });

        /* ALUMNI BUTTON */

        alumniBtn.addEventListener("click", ()=>{

            /* OPPOSITE HIGHLIGHT */

            alumniBtn.classList.remove("alumni-highlight");

            studentBtn.classList.remove("student-dim");

            studentBtn.classList.add("student-highlight");

            /* FORM SWITCH */

            alumniForm.classList.add("active-form");

            studentForm.classList.remove("active-form");

            /* LEFT PANEL */

            leftPanel.style.background =
            "linear-gradient(180deg,#7c3aed,#f59e0b)";

            leftTitle.innerHTML =
            `Guide The <br> Next Generation`;

            leftText.innerHTML =
            `Share your experience,
            mentor students,
            and create opportunities.`;

            /* SMOOTH ANIMATION */

            gsap.fromTo(
                ".register-right",
                {
                    opacity:0,
                    x:-40
                },
                {
                    opacity:1,
                    x:0,
                    duration:0.5,
                    ease:"power3.out"
                }
            );

        });

    }

});

/* =========================
   LOGIN FORM SWITCHING
========================= */

document.addEventListener("DOMContentLoaded", () => {

    const studentOption =
        document.querySelector(".student-option");

    const alumniOption =
        document.querySelector(".alumni-option");

    const studentForm =
        document.querySelector(".student-form");

    const alumniForm =
        document.querySelector(".alumni-form");

    if(
        studentOption &&
        alumniOption &&
        studentForm &&
        alumniForm
    ){

        /* STUDENT */

        studentOption.addEventListener("click", () => {

            studentForm.classList.add(
                "active-form-modal"
            );

            alumniForm.classList.remove(
                "active-form-modal"
            );

            studentOption.classList.add(
                "active-role"
            );

            alumniOption.classList.remove(
                "active-role"
            );

        });

        /* ALUMNI */

        alumniOption.addEventListener("click", () => {

            alumniForm.classList.add(
                "active-form-modal"
            );

            studentForm.classList.remove(
                "active-form-modal"
            );

            alumniOption.classList.add(
                "active-role"
            );

            studentOption.classList.remove(
                "active-role"
            );

        });

    }

});
/* NAVBAR HIDE ON SCROLL */

let lastScroll = 0;

const navbar = document.querySelector("nav");

window.addEventListener("scroll", ()=>{

    const currentScroll = window.pageYOffset;

    if(currentScroll > lastScroll){

        navbar.classList.add("hide-nav");

    }else{

        navbar.classList.remove("hide-nav");

    }

    lastScroll = currentScroll;

});
/* =========================
   STUDENT REGISTER
========================= */

const studentRegisterForm =
document.getElementById("studentRegisterForm");

if(studentRegisterForm){

    studentRegisterForm.addEventListener("submit",
    async (e)=>{

        e.preventDefault();

        const data = {

            role: "student",

            fullName:
            document.getElementById("studentName").value,

            email:
            document.getElementById("studentEmail").value,

            phone:
            document.getElementById("studentPhone").value,

            password:
            document.getElementById("studentPassword").value,

            college:
            document.getElementById("studentCollege").value,

            department:
            document.getElementById("studentDepartment").value,

            skills:
            document.getElementById("studentSkills").value
        };

        try{

            const response = await fetch(
                "http://localhost:5000/register",
                {
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify(data)
                }
            );

            const result = await response.json();

            alert(result.message);

            studentRegisterForm.reset();

        }catch(error){

            alert("Registration Failed");

        }

    });

}
/* =========================
   DYNAMIC DEPARTMENTS
========================= */

const departments = {

    technology: [
        "Computer Engineering",
        "Information Technology",
        "Mechanical Engineering",
        "Civil Engineering",
        "Electrical Engineering",
        "Electronics & Communication",
        "Biotechnology"
    ],

    agriculture: [
        "Agronomy",
        "Genetics & Plant Breeding",
        "Soil Science",
        "Agricultural Economics",
        "Horticulture",
        "Plant Pathology",
        "Entomology"
    ],

    veterinary: [
        "Veterinary Medicine",
        "Veterinary Surgery",
        "Animal Genetics",
        "Animal Nutrition",
        "Livestock Production"
    ],

    agribusiness: [
        "Agribusiness Management",
        "Agri Marketing",
        "Rural Management"
    ],

    basic: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "Statistics",
        "Microbiology",
        "Biochemistry"
    ],

    community: [
        "Food & Nutrition",
        "Human Development",
        "Textiles & Apparel",
        "Family Resource Management"
    ],

    pg: [
        "MBA",
        "MTech",
        "MSc",
        "PhD"
    ],

    fisheries: [
        "Aquaculture",
        "Fish Processing Technology",
        "Fisheries Resource Management"
    ]
};

function setupDepartmentDropdown(collegeId, departmentId) {

    const collegeSelect =
    document.getElementById(collegeId);

    const departmentSelect =
    document.getElementById(departmentId);

    if(!collegeSelect || !departmentSelect) return;

    collegeSelect.addEventListener("change", ()=>{

        const selectedCollege =
        collegeSelect.value;

        departmentSelect.innerHTML =
        `<option value="">Select Department</option>`;

        if(departments[selectedCollege]){

            departments[selectedCollege]
            .forEach((dept)=>{

                const option =
                document.createElement("option");

                option.value = dept;

                option.textContent = dept;

                departmentSelect.appendChild(option);

            });

        }

    });

}
setupDepartmentDropdown(
    "studentCollege",
    "studentDepartment"
);

setupDepartmentDropdown(
    "alumniCollege",
    "alumniDepartment"
);
const upload =
document.getElementById("profileUpload");

const preview =
document.getElementById("previewImage");

const uploadText =
document.getElementById("uploadText");

if(upload && preview && uploadText){

    upload.addEventListener("change",(e)=>{

        const file =
        e.target.files[0];

        if(file){

            preview.src =
            URL.createObjectURL(file);

            preview.style.display =
            "block";

            uploadText.innerText =
            file.name;
        }
    });

}
const password =
document.getElementById("studentPassword");

const fill =
document.getElementById("strengthFill");

password.addEventListener("input",()=>{

    const val =
    password.value.length;

    if(val < 4){

        fill.style.width="30%";
        fill.style.background="#ef4444";
    }

    else if(val < 8){

        fill.style.width="65%";
        fill.style.background="#f59e0b";
    }

    else{

        fill.style.width="100%";
        fill.style.background="#22c55e";
    }
});
const leftTitle =
document.getElementById("leftTitle");

const leftText =
document.getElementById("leftText");
