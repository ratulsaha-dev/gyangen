<!DOCTYPE html>
<html>

<head>

<title>GyanGen Technologies</title>

<link rel="stylesheet" href="css/style.css">

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet">

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

</head>

<body>

<!-- Campus Representative Popup -->

<div id="repPopup" class="rep-popup">

<div class="rep-popup-content">

<span class="rep-close">&times;</span>

<div class="rep-left">

<h2>Join as a Campus Representative</h2>

<p>
Become the face of <strong>GyanGen Technologies</strong> in your campus and help students discover industry-focused technology programs.
</p>

<div class="rep-benefits">

<div class="rep-item">
<i class="fas fa-gift"></i>
<span>Incentive Gifts</span>
</div>

<div class="rep-item">
<i class="fas fa-money-bill-wave"></i>
<span>Performance Rewards</span>
</div>

<div class="rep-item">
<i class="fas fa-user-graduate"></i>
<span>Leadership Experience</span>
</div>

<div class="rep-item">
<i class="fas fa-network-wired"></i>
<span>Professional Network</span>
</div>

</div>

<a href="partnership.php" class="rep-btn">
Apply Now
</a>

</div>


<div class="rep-right">

<i class="fas fa-users"></i>

<h3>Build Your Tech Community</h3>

<p>
Help students explore technology careers and grow your own leadership skills.
</p>

</div>

</div>

</div>
<!-- HEADER -->

<?php include 'includes/header.php'; ?>


<!-- HERO SECTION -->

<section class="hero">

<h1 class="main-text">
<span id="mainText"></span>
<span class="cursor">|</span>
</h1>

<h2 class="sub-text">
Want to Become a <span id="roleText"></span>
</h2>

</section>


<!-- COURSES SECTION -->

<section class="courses">

<h2 class="section-title">Popular Courses</h2>

<div class="course-grid">


<!-- JAVA -->

<div class="course-card">

<div class="course-icon">
<i class="fab fa-java"></i>
</div>

<h3>Java Development</h3>

<p class="course-desc">
Learn core Java, OOP concepts, and backend development fundamentals.
</p>

<div class="course-meta">
<span class="price">₹7,999</span>
<span class="mode">Online</span>
</div>

<div class="course-buttons">

<button class="btn-details"
data-title="Java Development"
data-desc="Master Java programming, OOP, backend APIs, and real-world projects.">
View Details
</button>

<button class="btn-regiser">Book Demo</button>
<button class="btn-seat">Reserve Seat</button>

</div>

</div>


<!-- PYTHON -->

<div class="course-card">

<div class="course-icon">
<i class="fab fa-python"></i>
</div>

<h3>Python Programming</h3>

<p class="course-desc">
Master Python fundamentals for automation, data science, and backend development.
</p>

<div class="course-meta">
<span class="price">₹6,999</span>
<span class="mode">Online</span>
</div>

<div class="course-buttons">

<button class="btn-details"
data-title="Python Programming"
data-desc="Learn Python programming, automation, data analysis, and real-world projects.">
View Details
</button>

<button class="btn-demo">Book Demo</button>
<button class="btn-seat">Reserve Seat</button>

</div>

</div>


<!-- GEN AI -->

<div class="course-card">

<div class="course-icon">
<i class="fas fa-brain"></i>
</div>

<h3>GenAI Engineering</h3>

<p class="course-desc">
Build AI applications using LLMs, prompt engineering, and AI frameworks.
</p>

<div class="course-meta">
<span class="price">₹12,999</span>
<span class="mode">Online</span>
</div>

<div class="course-buttons">

<button class="btn-details"
data-title="GenAI Engineering"
data-desc="Learn prompt engineering, LLM development, AI tools, and build real GenAI applications.">
View Details
</button>

<button class="btn-demo">Book Demo</button>
<button class="btn-seat">Reserve Seat</button>

</div>

</div>


<!-- REACT -->

<div class="course-card">

<div class="course-icon">
<i class="fab fa-react"></i>
</div>

<h3>ReactJS Development</h3>

<p class="course-desc">
Build modern interactive web applications using React and modern UI tools.
</p>

<div class="course-meta">
<span class="price">₹8,999</span>
<span class="mode">Online</span>
</div>

<div class="course-buttons">

<button class="btn-details"
data-title="ReactJS Development"
data-desc="Learn ReactJS, modern UI frameworks, APIs, and frontend development projects.">
View Details
</button>

<button class="btn-demo">Book Demo</button>
<button class="btn-seat">Reserve Seat</button>

</div>

</div>


<!-- DATA ANALYTICS -->

<div class="course-card">

<div class="course-icon">
<i class="fas fa-chart-line"></i>
</div>

<h3>Data Analytics</h3>

<p class="course-desc">
Learn SQL, Python, and visualization tools used by modern data analysts.
</p>

<div class="course-meta">
<span class="price">₹9,999</span>
<span class="mode">Online</span>
</div>

<div class="course-buttons">

<button class="btn-details"
data-title="Data Analytics"
data-desc="Learn SQL, Python, Excel, and data visualization tools used in analytics careers.">
View Details
</button>

<button class="btn-register">Book Demo</button>
<button class="btn-seat">Reserve Seat</button>

</div>

</div>


<!-- SQL -->

<div class="course-card">

<div class="course-icon">
<i class="fas fa-database"></i>
</div>

<h3>SQL & Databases</h3>

<p class="course-desc">
Understand relational databases, SQL queries, and backend data systems.
</p>

<div class="course-meta">
<span class="price">₹4,999</span>
<span class="mode">Online</span>
</div>

<div class="course-buttons">

<button class="btn-details"
data-title="SQL & Databases"
data-desc="Learn database fundamentals, SQL queries, joins, and backend data management.">
View Details
</button>

<button class="btn-register">Book Demo</button>
<button class="btn-seat">Reserve Seat</button>

</div>

</div>


</div>

</section>


<!-- COURSE MODAL -->

<div id="courseModal" class="course-modal">

<div class="course-modal-content">

<span class="close-modal">&times;</span>

<h2 id="modalTitle"></h2>

<p id="modalDescription"></p>

<div class="modal-footer">

<button class="register-btn">Book Demo Class</button>

<button class="enroll-btn">Reserve Your Seat</button>

</div>

</div>

</div>


<!-- FOOTER -->

<?php include 'includes/footer.php'; ?>


<script src="js/script.js"></script>

</body>
</html>