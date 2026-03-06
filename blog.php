<?php include 'includes/header.php'; ?>

<section class="blog-hero">

<div class="container">
<h1>Tech & Learning Insights</h1>
<p>Explore curated articles about technology, programming, and digital skills.</p>
</div>

</section>


<section class="blog-grid-section">

<div class="container">

<div class="blog-grid">

<?php
$conn = new mysqli("localhost","root","","gyangen");

$sql = "SELECT * FROM blogs ORDER BY created_at DESC LIMIT 6";
$result = $conn->query($sql);

while($row = $result->fetch_assoc()){
?>

<div class="blog-card">

<img src="<?php echo $row['image']; ?>" alt="blog">

<h3><?php echo $row['title']; ?></h3>

<p><?php echo $row['excerpt']; ?></p>

<a href="blog-details.php?slug=<?php echo $row['slug']; ?>" class="read-btn">
Read More
</a>

</div>

<?php } ?>

</div>

</div>

</section>
<?php

$api = "https://newsapi.org/v2/everything?q=programming OR AI OR coding&language=en&apiKey=YOUR_API_KEY";

$response = file_get_contents($api);

$data = json_decode($response,true);

foreach($data['articles'] as $article){

?>

<div class="blog-card">

<img src="<?php echo $article['urlToImage']; ?>">

<h3><?php echo $article['title']; ?></h3>

<p><?php echo substr($article['description'],0,120); ?></p>

<a href="<?php echo $article['url']; ?>" target="_blank" class="read-btn">
Read Article
</a>

</div>

<?php
}
?>

<?php include 'includes/footer.php'; ?>