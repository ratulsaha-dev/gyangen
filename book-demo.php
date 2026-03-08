<?php include 'includes/header.php'; ?>

<section class="demo-section">

<div class="demo-container">

<h2>Book a Demo Class</h2>

<form action="demo-process.php" method="POST" class="demo-form">

<div class="form-group">
<label>Full Name</label>
<input type="text" name="name" required>
</div>

<div class="form-group">
<label>Email</label>
<input type="email" name="email" required>
</div>

<div class="form-group">
<label>Phone Number</label>
<input type="text" name="phone" required>
</div>

<div class="form-group">
<label>Course Interested</label>
<select name="course">
<option>Java Development</option>
<option>Python Programming</option>
<option>GenAI Engineering</option>
<option>ReactJS Development</option>
<option>Data Analytics</option>
</select>
</div>

<div class="form-group full">
<label>Message</label>
<textarea name="message" rows="4"></textarea>
</div>

<div class="form-group full">
<button type="submit" class="demo-btn">Book Demo</button>
</div>

</form>

</div>

</section>

<?php include 'includes/footer.php'; ?>