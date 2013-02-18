<!DOCTYPE>

<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
    <meta charset="utf-8" />
    
    <!-- Set the viewport width to device width for mobile -->
    <meta name="viewport" content="width=device-width" />
    
    <title>Rutgers | Biomedical and Health Science</title>
    
    <!-- Included CSS Files -->
    <link type="text/css" rel="stylesheet" href="includes/css/bootstrap.css" />
    <link type="text/css" rel="stylesheet" href="includes/css/templates.css" />
    <link type="text/css" rel="stylesheet" href="includes/css/class.css" />
    <link type="text/css" rel="stylesheet" href="includes/css/override.css" />
    <!-- Included JavaScript Files -->
    <script type="text/javascript" src="includes/js/jquery.js"></script>
    <script type="text/javascript" src="includes/js/jquery-json.js"></script>
    <script type="text/javascript" src="includes/js/templates.js"></script>
    <script type="text/javascript" src="includes/js/bootstrap.js"></script>
    <script type="text/javascript" src="includes/js/rbhs.js"></script>
</head>
<body class="body_border">
	<div class="row">
	<div class="twelve columns" >
	<!-- Includes Header -->	
    <?php include("includes/header.php") ?>
    <!-- Includes Navigation -->
    <?php include("includes/nav.php") ?>
    </div>
    </div>
    
    <div class="row">
    <div class="twelve columns">
    	<!-- Slideshow
    	====================== -->
        <div id="slideshow_area" class="shiftup hide-for-small">
            <!-- Image Slider -->
            <div id="carousel_img" class="carousel slide span9">
                <div id="image" class="carousel-inner"></div>
            </div>
            <!-- Content Slider -->
            <div id="content_area" class="span3 hide-for-small"><br/>
                <div id="content_inner" class="carousel slide span3">
                    <div id="content" class="carousel-inner"></div>
                </div>
                <div id="carouselnav" class="carousel-nav span3"></div>
            </div>
        </div>
        <!-- Mobile Slider -->
        <div class="row">
            <div class="twelve columns show-for-small">
                <img src="http://placehold.it/1200x700&text=Mobile Header">
            </div>
        </div>
        <br/><!-- #end-of-slideshow -->
    </div>
    </div>
    
    <div class="row">
    <div class="twelve columns shiftup_ex bg-white">
        
        <!-- Main Content
        ====================== -->
        <div class="six push-three mobile-four columns">
            <h4 class="title red">Leading the Way in Academic Health Care: Rutgers Biomedical and Health Sciences</h4>
            <hr/>
            <p>Magna malis fugit eu ius, an has audiam bonorum voluptatum, eum nonumy dolorum vivendum an. Sit ei ullum ubique nominavi, mea munere conten tiones te. Mollis detraxit sea ea.</p>
            <p>No habemus suavitate torquatos ius, usu omnis fabellas liberavisse ut. Ut modus graeco mei, ea est ubique populo iudicabit, sed no tation audiam. Suscipiantur necessitatibus id mel, mea te nostro corpora perpetua, cu usu accumsan albucius maluisset. Nonumy viderer contentiones cum ad, in vis inermis evertitur similique.</p>
            
            <a href="#"><h5 class="teal">Decore deserunt ne sed, docendi moderatius sit ea. >></h5></a>
            <p>Quas iriure et nam. Vis magna dolor cu?</p>
            
            <a href="#"><h5 class="teal">Pri agam paulo graecis at. >></h5></a>
            <p>At tantas philosophia eam, sed vero assentior no.</p>
            
            <a href="#"><h5 class="teal">Laboramus maiestatis referrentur est ne. >></h5></a>
            <p>Possit integre est an, vivendum praesent complectitur quo ad, te libris vocibus qui.</p>
        </div><!-- #end-of-main-content-area -->
        
        <!-- Right Sidebar
        ====================== -->
        <div class="three push-three mobile-four columns">
            <br/>
            <!-- Panel One -->
            <div class="panel padding">
                <h4 class="orange title">Meet the Chancellor</h4>
                <img src="http://placehold.it/250x150" />
                <h5 class="subheader teal">Eu nibh aliquam nam, esta quidam utroque vertus</h5>
                <p class="subheader">Est inani numquam ceteros eu. Est quem dicat minimum cu, at vim paulo partiendo. Modus reformidans sed id. Id etiam virtute veritus nec, ea has justo utamur dissentiet. Eum no facilisi consti tuam omittantur.</p>
            </div>
            <!-- Panel Two -->
            <div class="panel padding">
                <h4 class="orange title">Per primis Causae</h4>
                <h5 class="subheader teal">Mundi habemus facilisi vix at, at quo eligendi.</h5>
                <p class="subheader">Pri in everti minimum pertina cia, ad eos convenire mnesar chum in inani veniam salutatus.</p>
                <h6><a href="#" class="teal right">More »</a></h6>
            </div>
        </div><!-- #end-of-right-sidebar -->
        
        <!-- Includes Left Sidebar -->
        <?php include("includes/side_nav-home.php") ?>
    
    </div>
    </div><!-- #end-of-all-content -->
    
    <!-- Includes Footer -->
    <?php include("includes/footer.php") ?>
</body>
</html>
