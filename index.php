<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8" />
    <!-- Set the viewport width to device width for mobile -->
    <meta name="viewport" content="width=device-width" />
    <!-- title -->
    <title>Rutgers | Health</title>
    
    <!-- Included CSS Files -->
    <link type="text/css" rel="stylesheet" href="includes/css/bootstrap.css" />
    <link type="text/css" rel="stylesheet" href="includes/css/templates.css" />
    <link type="text/css" rel="stylesheet" href="includes/css/class.css" />
    <link type="text/css" rel="stylesheet" href="includes/css/override.css" />
    <!-- Included JavaScript Files -->
    <script type="text/javascript" src="includes/js/modernizr.js"></script>
    <script type="text/javascript" src="includes/js/jquery.js"></script>
    <script type="text/javascript" src="includes/js/jquery-json.js"></script>
    <script type="text/javascript" src="includes/js/templates.js"></script>
    <script type="text/javascript" src="includes/js/bootstrap.js"></script>
    <!--[if (gt IE 8)|!(IE)]><!--><script type="text/javascript" src="includes/js/NOTie8.js"></script><!--<![endif]-->
    <!--[if (lt IE 9)]><!--><script type="text/javascript" src="includes/js/WHYie8.js"></script><!--<![endif]-->
    <script type="text/javascript" src="includes/js/home.js"></script>
</head>
<body>
	<div class="row">
	<div class="twelve columns" >
        <!-- Includes Header -->	
        <?php include("includes/header.php") ?>
        <!-- Includes Navigation -->
        <?php include("includes/nav.php") ?>
    </div>
    </div>
    
    <!-- Slideshow
    ====================== -->
    <div class="row">
    <div class="twelve columns">
        <div id="slideshow_area" class="shiftup hide-for-medium-down">
            <!-- Image Slider -->
            <div id="carousel_img" class="carousel slide span9">
                <div id="image" class="carousel-inner"></div>
            </div>
            <!-- Content Slider -->
            <div id="content_area" class="span3"><br/>
                <div id="content_inner" class="carousel slide span3">
                    <div id="content" class="carousel-inner"></div>
                </div>
                <div id="carouselnav" class="carousel-nav span3"></div>
            </div>
        </div>
        <!-- Mobile Slider -->
        <div class="row">
            <div id="shifting" class="show-for-medium-down mobile-four columns">
            
            </div>
        </div>
        <br/>
    </div>
    </div><!-- #end-of-slideshow -->
    
    <div class="row">
    <div class="twelve columns shiftup_ex bg-white">
        
        <!-- Main Content
        ====================== -->
        <div id="main" class="six push-three mobile-four columns"><br/>
            <h1 class="title">Leading the Way in Academic Health Care: Rutgers Biomedical and Health Sciences</h1>
            <p>
            Magna malis fugit eu ius, an has audiam bonorum voluptatum, eum nonumy dolorum vivendum an. Sit ei ullum ubique nominavi, mea munere conten tiones te. Mollis detraxit sea ea.
            </p>
            <p>
            No habemus suavitate torquatos ius, usu omnis fabellas liberavisse ut. Ut modus graeco mei, ea est ubique populo iudicabit, sed no tation audiam. Suscipiantur necessitatibus id mel, mea te nostro corpora perpetua, cu usu accumsan albucius maluisset. Nonumy viderer contentiones cum ad, in vis inermis evertitur similique.
            </p>
            <a href="#">Decore deserunt ne sed, docendi moderatius sit ea. </a><img src="includes/img/arrow-blue.gif" alt=""/>
            <p>Quas iriure et nam. Vis magna dolor cu?</p>
            <a href="#">Pri agam paulo graecis at. </a><img src="includes/img/arrow-blue.gif" alt=""/>
            <p>At tantas philosophia eam, sed vero assentior no.</p>
            <a href="#">Laboramus maiestatis referrentur est ne. </a><img src="includes/img/arrow-blue.gif" alt=""/>
            <p>Possit integre est an, vivendum praesent complectitur quo ad, te libris vocibus qui.</p>
        </div><!-- #end-of-main-content-area -->
        
        <!-- Right Sidebar
        ====================== -->
        <div class="three push-three mobile-four columns">
        <div id="home-rite_sidebar" class="row"><br/>
            <!-- Panel One -->
            <div class="panel padding">
            <div class="row">
            <div class="twelve columns">
                <h2 class="title">Meet the Chancellor</h2>
                <img src="images/sm_image_FPO.jpg" />
                <a>Eu nibh aliquam nam, esta quidam utroque vertus</a>
                <p>Est inani numquam ceteros eu. Est quem dicat minimum cu, at vim paulo partiendo. Modus reformidans sed id. Id etiam virtute veritus nec, ea has justo utamur dissentiet. Eum no facilisi consti tuam omittantur.</p>
            </div>
            </div>
            </div>
            <!-- Panel Two -->
            <div class="panel padding">
                <h2 class="title">Per primis Causae</h2>
                <a>Mundi habemus facilisi vix at, at quo eligendi.</a>
                <p>Pri in everti minimum pertina cia, ad eos convenire mnesar chum in inani veniam salutatus.</p>
                <!--<p class="more"><a href="#">More &gt;</a></p>-->
            </div>
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
