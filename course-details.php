<?php include 'includes/header.php'; ?>

<?php

$course = $_GET['course'];

?>

<section class="course-detail-section">

<div class="course-detail-container">

<h1><?php echo strtoupper($course); ?> Course</h1>

<div class="course-info">

<p><strong>Mode:</strong> Online</p>
<p><strong>Batch Type:</strong> Weekend Batch</p>
<p><strong>Class Hours:</strong> 2 Hours Per Session</p>

</div>

<h2>Syllabus</h2>

<div class="syllabus">

<button class="topic">Topic 1: Fundamentals</button>
<div class="subtopics">
<ul>
<li>Introduction</li>
<li>Environment Setup</li>
<li>Basic Syntax</li>
</ul>
</div>

<button class="topic">Topic 2: Core Concepts</button>
<div class="subtopics">
<ul>
<li>Variables</li>
<li>Loops</li>
<li>Functions</li>
</ul>
</div>

<button class="topic">Topic 3: Projects</button>
<div class="subtopics">
<ul>
<li>Mini Project</li>
<li>Real World Application</li>
<li>Deployment</li>
</ul>
</div>

</div>

<div class="course-actions">

<a href="register.php" class="btn-seat">Reserve Seat</a>

<a href="register.php" class="btn-demo">Book Demo</a>

</div>

</div>

</section>

<?php include 'includes/footer.php'; ?>