<?php include 'includes/header.php'; ?>

<section class="demo-section">

<div class="demo-container">

<div class="demo-logo">
<img src="assets/logo.png" alt="GyanGen">
</div>

<h2>Book a Demo</h2>

<form action="submit-demo.php" method="POST" id="demoForm">

<label>Registering As *</label>
<select name="role" required>
<option value="">Select Option</option>
<option value="student">I am a Student</option>
<option value="partner">I want to be a Partner</option>
<option value="representative">I want to be a Representative</option>
<option value="trainer">I want to join as Trainer</option>
</select>

<label>Name *</label>
<input type="text" name="name" required>

<label>School / University / Organization *</label>
<input type="text" name="organization" required>

<label>Experience Type *</label>
<select name="experience" required>
<option value="">Select Option</option>
<option value="student">I am a Student</option>
<option value="organization">I represent an Organization</option>
<option value="trainer">I am a GyanGen Trainer</option>
</select>

<label>Contact Number *</label>
<input type="tel" name="phone" required>

<label>Email *</label>
<input type="email" name="email" required>

<label>Centre Code (Optional)</label>
<input type="text" name="centre_code">

<button type="submit" class="demo-btn">Submit Request</button>

</form>

<div id="formMessage"></div>

</div>

</section>

<?php include 'includes/footer.php'; ?>