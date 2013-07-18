<!doctype html>
    <!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7 oldie" lang="en"> <![endif]-->
    <!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8 oldie" lang="en"> <![endif]-->
    <!--[if IE 8]>    <html class="no-js lt-ie9 oldie" lang="en"> <![endif]-->
<html class="no-js " lang="en" ng-app="convert">
    <head>

        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

        <meta charset="utf-8">
        <title>V's Conversions</title>
        <meta name="description" content="">
        <meta name="author" content="humans.txt">
        <meta name="keywords" content=""  />

        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
        <meta name="apple-mobile-web-app-capable" content="yes"/>

        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">

        <!-- Facebook Metadata /-->
        <meta property="fb:page_id" content="" />
        <meta property="og:image" content="" />
        <meta property="og:description" content=""/>
        <meta property="og:title" content=""/>

        <!-- Google+ Metadata /-->
        <meta itemprop="name" content="">
        <meta itemprop="description" content="">
        <meta itemprop="image" content="">

        <!-- CSS: implied media="all" -->
        <link rel="stylesheet" href="/css/gumby.css"  />


        <!-- Modernizr -->
        <script src="/javascripts/libs/modernizr-2.6.2.min.js"></script>
        

        <!--[if lt IE 7]><p class=chromeframe>Your browser is <em>ancient!</em> <a href="http://browsehappy.com/">Upgrade to a different browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to experience this site.</p><![endif]-->
    </head>

<body ng-controller="application" >
    <header>
        <nav class="mobile-header row">
          <ul>
            <li class="left"><a class="nav-icon" ng-click="toggleView('/calculator', $event);"><i class="icon-layout"></i></a></li>
            <li class="logo center"><a href="#/app">Eatr</a></li>
            <li class="right"><a class="nav-icon active" ng-click="toggleView('/recipe', $event);"><i class="icon-newspaper"></i></a></li>
          </ul>
        </nav>
        <div class="flash alert">{{ flash }}</div>
    </header>

    <!-- Main Content -->
    <section class="angular row" ng-view="view" ng-animate="{enter: 'enter', leave: 'leave'}"></section>

    <footer>
        <!-- &copy; Octopoda Media LLC 2012- <?= date('Y'); ?> -->
    </footer>



      <!-- Script Files -->
      <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
      <script>window.jQuery || document.write('<script src="js/libs/jquery-1.9.1.min.js"><\/script>')</script>
      <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.1.5/angular.min.js"></script>
      <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.1.5/angular-resource.min.js"></script>

      <script src="/javascripts/main-bi.js"></script> 
      <script src="/javascripts/angular/app.js"></script> 
      
      


      
      
     <!-- end scripts-->


      <!-- mathiasbynens.be/notes/async-analytics-snippet Change UA-XXXXX-X to be your site's ID -->
      
     

      <!-- Prompt IE 6 users to install Chrome Frame. Remove this if you want to support IE 6.
           chromium.org/developers/how-tos/chrome-frame-getting-started -->
      <!--[if lt IE 7 ]>
        <script src="//ajax.googleapis.com/ajax/libs/chrome-frame/1.0.3/CFInstall.min.js"></script>
        <script>window.attachEvent('onload',function(){CFInstall.check({mode:'overlay'})})</script>
      <![endif]-->

    </body>
</html>



