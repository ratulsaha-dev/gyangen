<?php include 'includes/header.php'; ?>

<section class="login-section">

<div class="login-box">

<h2>Login</h2>

<form action="login-process.php" method="POST">

<label>Email or Phone</label>
<input type="text" name="login_id" required>

<label>Password</label>
<input type="password" name="password" required>

<div class="remember-box">
<input type="checkbox" name="remember" id="remember">
<label for="remember">Remember Me</label>
</div>

<button type="submit">Login</button>

<p class="login-extra">
Don't have an account? <a href="register.php">Sign Up</a>
</p>

</form>

</div>

</section>

<?php include 'includes/footer.php'; ?>