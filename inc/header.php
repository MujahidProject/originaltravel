<?php include 'config/config.php'; ?>

<!DOCTYPE html>
<html lang="en" class="no-js">
    <head>
        <title><?php echo page_title().' | '.basename($_SERVER['SCRIPT_NAME']);?></title>
        <link rel="shortcut icon" href="<?php echo base_url(); ?>img/favicon.ico" />
        <link rel="icon" href="<?php echo base_url(); ?>img/favicon.gif" type="image/gif" />
        <link rel="canonical" href="<?php echo base_url(); ?>http://www.originaltravel.co.uk/" />
        <link rel="apple-touch-icon" size="60x60" href="<?php echo base_url(); ?>img/apple-60.png" />
        <link rel="apple-touch-icon" size="76x76" href="<?php echo base_url(); ?>img/apple-76.png" />
        <link rel="apple-touch-icon" size="120x120" href="<?php echo base_url(); ?>img/apple-120.png" />
        <link rel="apple-touch-icon" size="152x152" href="<?php echo base_url(); ?>img/apple-152.png" />
        <link href="<?php echo base_url(); ?>core/css/html5.css?m=1493373755" media="all" rel="stylesheet" type="text/css" />
        <link href="<?php echo base_url(); ?>core/css/ot.css?m=1493373763" media="all" rel="stylesheet" type="text/css" /><link rel="alternate" type="application/rss+xml" title="Original Travel Blog" href="<?php echo base_url(); ?>/blog/rss" />
        <!--
        ===================================
        Designed & built by D3R
        Tel: 0333 800 2288
        E-mail: info@d3r.com
        Web: http://d3r.com
        ===================================
        -->

        <script type="text/javascript" src="<?php echo base_url(); ?>core/javascript/modernizr-3.3.1.js?m=1493373763" async></script>
        <script type="text/javascript">
            var _gaq = _gaq || [];
            _gaq.push(['_setAccount', 'UA-4263869-1']);
            _gaq.push(['_trackPageview']);
            (function () {
                var ga = document.createElement('script');
                ga.type = 'text/javascript';
                ga.async = true;
                ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(ga, s);
            })();
        </script>

    </head>
    <body class=" home no-touch-mobile " itemscope itemtype="http://schema.org/WebPage">
        <!--[if lte IE 6]><div id="ie6"><![endif]-->
        <!--[if IE 7]><div id="ie7"><![endif]-->
        <!--[if IE 8]><div id="ie8"><![endif]-->
        <!--[if IE 9]><div id="ie9"><![endif]-->
        <div id="outer-wrapper" class="outer-wrapper">
            <!--
            <script type="text/javascript">
                var addthis_config = {
                    data_ga_property: 'UA-4263869-1',
                    data_ga_social: true,
                    ui_use_css: true
                };
                var addthis_share = {};
            </script>
            -->
            <div id="header-wrapper">

                <header id="navigation-header" class="navigation__header noideas">

                    <div class="centered cf">

                        <a href="<?php echo base_url(); ?>index.php" class="logo"></a>

                        <div class="center">
                            <a href="<?php echo base_url(); ?>destinations.php" data-target="destinations">Where to go</a>
                            <a href="<?php echo base_url(); ?>collections.php" data-target="inspiration" class="collections-top">Collections</a>
                            <a href="<?php echo base_url(); ?>#header-search" data-target="search">Search</a>
                            <a href="<?php echo base_url(); ?>#" id="explore">More</a>
                            <div itemscope itemtype="http://schema.org/WebSite">
                                <meta itemprop="url" content="//www.originaltravel.co.uk/"/>
                                <form action="/search" method="get" id="header-search"  itemprop="potentialAction" itemscope itemtype="http://schema.org/SearchAction">
                                    <meta itemprop="target" content="//www.originaltravel.co.uk/search?q={q}"/>
                                    <div class="inner-search-wrap">
                                        <input itemprop="query-input" type="text" name="q" placeholder="Search" autocomplete="off" />
                                        <button type="submit"><span class="icon"></span></button>
                                        <div class="results">
                                            <ul></ul>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div id="navigation-popover" class="navigation__popover" class="active">
                                <div id="navigation-popover-center" class="navigation__popover-center" class="cf">

                                    <div class="destinations-dropdown  cf">
                                        <nav>
                                            <div class="navigation__column">
                                                <a href="<?php echo base_url(); ?>/north-america" class="navigation__title navigation__title--primary">North America</a>
                                                <a href="<?php echo base_url(); ?>/north-america/canada" class="navigation__title navigation__title--secondary">Canada</a>
                                                <a href="<?php echo base_url(); ?>/north-america/usa" class="navigation__title navigation__title--secondary">USA</a>
                                                <a href="<?php echo base_url(); ?>/central-america" class="navigation__title navigation__title--primary">Central America</a>
                                                <a href="<?php echo base_url(); ?>/central-america/belize" class="navigation__title navigation__title--secondary">Belize</a>
                                                <a href="<?php echo base_url(); ?>/central-america/costa-rica" class="navigation__title navigation__title--secondary">Costa Rica</a>
                                                <a href="<?php echo base_url(); ?>/central-america/cuba" class="navigation__title navigation__title--secondary">Cuba</a>
                                                <a href="<?php echo base_url(); ?>/central-america/el-salvador" class="navigation__title navigation__title--secondary">El Salvador</a>
                                                <a href="<?php echo base_url(); ?>/central-america/guatemala" class="navigation__title navigation__title--secondary">Guatemala</a>
                                                <a href="<?php echo base_url(); ?>/central-america/honduras" class="navigation__title navigation__title--secondary">Honduras</a>
                                                <a href="<?php echo base_url(); ?>/central-america/mexico" class="navigation__title navigation__title--secondary">Mexico</a>
                                                <a href="<?php echo base_url(); ?>/central-america/nicaragua" class="navigation__title navigation__title--secondary">Nicaragua</a>
                                                <a href="<?php echo base_url(); ?>/central-america/panama" class="navigation__title navigation__title--secondary">Panama</a>
                                                <a href="<?php echo base_url(); ?>/south-america" class="navigation__title navigation__title--primary">South America</a>
                                                <a href="<?php echo base_url(); ?>/south-america/argentina" class="navigation__title navigation__title--secondary">Argentina</a>
                                                <a href="<?php echo base_url(); ?>/south-america/bolivia" class="navigation__title navigation__title--secondary">Bolivia</a>
                                                <a href="<?php echo base_url(); ?>/south-america/brazil" class="navigation__title navigation__title--secondary">Brazil</a>
                                                <a href="<?php echo base_url(); ?>/south-america/chile" class="navigation__title navigation__title--secondary">Chile</a>
                                                <a href="<?php echo base_url(); ?>/south-america/colombia" class="navigation__title navigation__title--secondary">Colombia</a>
                                                <a href="<?php echo base_url(); ?>/south-america/ecuador-galapagos" class="navigation__title navigation__title--secondary">Ecuador & Galapagos</a>
                                                <a href="<?php echo base_url(); ?>/south-america/peru" class="navigation__title navigation__title--secondary">Peru</a>
                                                <a href="<?php echo base_url(); ?>/south-america/uruguay" class="navigation__title navigation__title--secondary">Uruguay</a>
                                                <a href="<?php echo base_url(); ?>/antarctica-1" class="navigation__title navigation__title--primary">Antarctica</a>
                                            </div>
                                            <div class="navigation__column">
                                                <a href="<?php echo base_url(); ?>/caribbean" class="navigation__title navigation__title--primary">Caribbean</a>
                                                <a href="<?php echo base_url(); ?>/caribbean/anguilla" class="navigation__title navigation__title--secondary">Anguilla</a>
                                                <a href="<?php echo base_url(); ?>/caribbean/antigua" class="navigation__title navigation__title--secondary">Antigua</a>
                                                <a href="<?php echo base_url(); ?>/caribbean/barbados" class="navigation__title navigation__title--secondary">Barbados</a>
                                                <a href="<?php echo base_url(); ?>/caribbean/bermuda" class="navigation__title navigation__title--secondary">Bermuda</a>
                                                <a href="<?php echo base_url(); ?>/caribbean/british-virgin-islands" class="navigation__title navigation__title--secondary">British Virgin Islands</a>
                                                <a href="<?php echo base_url(); ?>/caribbean/dominican-republic" class="navigation__title navigation__title--secondary">Dominican Republic</a>
                                                <a href="<?php echo base_url(); ?>/caribbean/grenada" class="navigation__title navigation__title--secondary">Grenada</a>
                                                <a href="<?php echo base_url(); ?>/caribbean/jamaica" class="navigation__title navigation__title--secondary">Jamaica</a>
                                                <a href="<?php echo base_url(); ?>/caribbean/st-barths" class="navigation__title navigation__title--secondary">St Barths</a>
                                                <a href="<?php echo base_url(); ?>/caribbean/st-kitts-and-nevis" class="navigation__title navigation__title--secondary">St Kitts & Nevis</a>
                                                <a href="<?php echo base_url(); ?>/caribbean/st-lucia" class="navigation__title navigation__title--secondary">St Lucia</a>
                                                <a href="<?php echo base_url(); ?>/caribbean/st-vincent-and-grenadines" class="navigation__title navigation__title--secondary">St Vincent  &</a>
                                                <a href="<?php echo base_url(); ?>/caribbean/st-vincent-and-grenadines" class="navigation__title navigation__title--secondary"> The Grenadines</a>
                                                <a href="<?php echo base_url(); ?>/caribbean/turks-and-caicos" class="navigation__title navigation__title--secondary">Turks & Caicos</a>
                                                <a href="<?php echo base_url(); ?>/europe" class="navigation__title navigation__title--primary">Europe</a>
                                                <a href="<?php echo base_url(); ?>/europe/albania" class="navigation__title navigation__title--secondary">Albania</a>
                                                <a href="<?php echo base_url(); ?>/europe/armenia" class="navigation__title navigation__title--secondary">Armenia</a>
                                                <a href="<?php echo base_url(); ?>/europe/austria" class="navigation__title navigation__title--secondary">Austria</a>
                                                <a href="<?php echo base_url(); ?>/europe/croatia" class="navigation__title navigation__title--secondary">Croatia</a>
                                                <a href="<?php echo base_url(); ?>/europe/cyprus" class="navigation__title navigation__title--secondary">Cyprus</a>
                                                <a href="<?php echo base_url(); ?>/europe/denmark" class="navigation__title navigation__title--secondary">Denmark</a>
                                                <a href="<?php echo base_url(); ?>/europe/estonia" class="navigation__title navigation__title--secondary">Estonia</a>
                                                <a href="<?php echo base_url(); ?>/europe/finland" class="navigation__title navigation__title--secondary">Finland</a>
                                                <a href="<?php echo base_url(); ?>/europe/france" class="navigation__title navigation__title--secondary">France</a>
                                                <a href="<?php echo base_url(); ?>/europe/georgia" class="navigation__title navigation__title--secondary">Georgia</a>
                                            </div>
                                            <div class="navigation__column">
                                                <a href="<?php echo base_url(); ?>/europe" class="navigation__title navigation__title--primary">Europe...</a>
                                                <a href="<?php echo base_url(); ?>/europe/germany" class="navigation__title navigation__title--secondary">Germany</a>
                                                <a href="<?php echo base_url(); ?>/europe/greece" class="navigation__title navigation__title--secondary">Greece</a>
                                                <a href="<?php echo base_url(); ?>/europe/hungary" class="navigation__title navigation__title--secondary">Hungary</a>
                                                <a href="<?php echo base_url(); ?>/europe/iceland" class="navigation__title navigation__title--secondary">Iceland</a>
                                                <a href="<?php echo base_url(); ?>/europe/ireland" class="navigation__title navigation__title--secondary">Ireland</a>
                                                <a href="<?php echo base_url(); ?>/europe/italy" class="navigation__title navigation__title--secondary">Italy</a>
                                                <a href="<?php echo base_url(); ?>/europe/malta" class="navigation__title navigation__title--secondary">Malta</a>
                                                <a href="<?php echo base_url(); ?>/europe/montenegro" class="navigation__title navigation__title--secondary">Montenegro</a>
                                                <a href="<?php echo base_url(); ?>/europe/the-netherlands" class="navigation__title navigation__title--secondary">Netherlands</a>
                                                <a href="<?php echo base_url(); ?>/europe/norway" class="navigation__title navigation__title--secondary">Norway</a>
                                                <a href="<?php echo base_url(); ?>/europe/portugal" class="navigation__title navigation__title--secondary">Portugal</a>
                                                <a href="<?php echo base_url(); ?>/europe/romania" class="navigation__title navigation__title--secondary">Romania</a>
                                                <a href="<?php echo base_url(); ?>/europe/russia" class="navigation__title navigation__title--secondary">Russia</a>
                                                <a href="<?php echo base_url(); ?>/europe/slovenia" class="navigation__title navigation__title--secondary">Slovenia</a>
                                                <a href="<?php echo base_url(); ?>/europe/spain" class="navigation__title navigation__title--secondary">Spain</a>
                                                <a href="<?php echo base_url(); ?>/europe/sweden" class="navigation__title navigation__title--secondary">Sweden</a>
                                                <a href="<?php echo base_url(); ?>/europe/switzerland" class="navigation__title navigation__title--secondary">Switzerland</a>
                                                <a href="<?php echo base_url(); ?>/europe/turkey" class="navigation__title navigation__title--secondary">Turkey</a>
                                                <a href="<?php echo base_url(); ?>/europe/uk" class="navigation__title navigation__title--secondary">UK</a>
                                                <a href="<?php echo base_url(); ?>/africa" class="navigation__title navigation__title--primary">Africa</a>
                                                <a href="<?php echo base_url(); ?>/africa/botswana" class="navigation__title navigation__title--secondary">Botswana</a>
                                                <a href="<?php echo base_url(); ?>/africa/djibouti" class="navigation__title navigation__title--secondary">Djibouti</a>
                                                <a href="<?php echo base_url(); ?>/africa/ethiopia" class="navigation__title navigation__title--secondary">Ethiopia</a>
                                                <a href="<?php echo base_url(); ?>/africa/kenya" class="navigation__title navigation__title--secondary">Kenya</a>
                                            </div>
                                            <div class="navigation__column">
                                                <a href="<?php echo base_url(); ?>/africa" class="navigation__title navigation__title--primary">Africa...</a>
                                                <a href="<?php echo base_url(); ?>/africa/madagascar" class="navigation__title navigation__title--secondary">Madagascar</a>
                                                <a href="<?php echo base_url(); ?>/africa/malawi" class="navigation__title navigation__title--secondary">Malawi</a>
                                                <a href="<?php echo base_url(); ?>/africa/morocco" class="navigation__title navigation__title--secondary">Morocco</a>
                                                <a href="<?php echo base_url(); ?>/africa/mozambique" class="navigation__title navigation__title--secondary">Mozambique</a>
                                                <a href="<?php echo base_url(); ?>/africa/namibia" class="navigation__title navigation__title--secondary">Namibia</a>
                                                <a href="<?php echo base_url(); ?>/africa/rwanda" class="navigation__title navigation__title--secondary">Rwanda</a>
                                                <a href="<?php echo base_url(); ?>/africa/sao-tome-and-principe" class="navigation__title navigation__title--secondary">S�o Tom� & Pr�ncipe</a>
                                                <a href="<?php echo base_url(); ?>/africa/senegal" class="navigation__title navigation__title--secondary">Senegal</a>
                                                <a href="<?php echo base_url(); ?>/africa/south-africa" class="navigation__title navigation__title--secondary">South Africa</a>
                                                <a href="<?php echo base_url(); ?>/africa/sudan" class="navigation__title navigation__title--secondary">Sudan</a>
                                                <a href="<?php echo base_url(); ?>/africa/tanzania" class="navigation__title navigation__title--secondary">Tanzania</a>
                                                <a href="<?php echo base_url(); ?>/africa/tunisia" class="navigation__title navigation__title--secondary">Tunisia</a>
                                                <a href="<?php echo base_url(); ?>/africa/uganda" class="navigation__title navigation__title--secondary">Uganda</a>
                                                <a href="<?php echo base_url(); ?>/africa/zambia" class="navigation__title navigation__title--secondary">Zambia</a>
                                                <a href="<?php echo base_url(); ?>/africa/zimbabwe" class="navigation__title navigation__title--secondary">Zimbabwe</a>
                                                <a href="<?php echo base_url(); ?>/middle-east" class="navigation__title navigation__title--primary">Middle East</a>
                                                <a href="<?php echo base_url(); ?>/middle-east/abu-dhabi" class="navigation__title navigation__title--secondary">Abu Dhabi</a>
                                                <a href="<?php echo base_url(); ?>/middle-east/dubai" class="navigation__title navigation__title--secondary">Dubai</a>
                                                <a href="<?php echo base_url(); ?>/middle-east/egypt" class="navigation__title navigation__title--secondary">Egypt</a>
                                                <a href="<?php echo base_url(); ?>/middle-east/iran" class="navigation__title navigation__title--secondary">Iran</a>
                                                <a href="<?php echo base_url(); ?>/middle-east/israel" class="navigation__title navigation__title--secondary">Israel</a>
                                                <a href="<?php echo base_url(); ?>/middle-east/jordan" class="navigation__title navigation__title--secondary">Jordan</a>
                                                <a href="<?php echo base_url(); ?>/middle-east/lebanon" class="navigation__title navigation__title--secondary">Lebanon</a>
                                                <a href="<?php echo base_url(); ?>/middle-east/oman" class="navigation__title navigation__title--secondary">Oman</a>
                                            </div>
                                            <div class="navigation__column">
                                                <a href="<?php echo base_url(); ?>/far-east" class="navigation__title navigation__title--primary">Asia</a>
                                                <a href="<?php echo base_url(); ?>/indian-subcontinent/bhutan" class="navigation__title navigation__title--secondary">Bhutan</a>
                                                <a href="<?php echo base_url(); ?>/far-east/cambodia" class="navigation__title navigation__title--secondary">Cambodia</a>
                                                <a href="<?php echo base_url(); ?>/far-east/china" class="navigation__title navigation__title--secondary">China</a>
                                                <a href="<?php echo base_url(); ?>/indian-subcontinent/india" class="navigation__title navigation__title--secondary">India</a>
                                                <a href="<?php echo base_url(); ?>/far-east/indonesia" class="navigation__title navigation__title--secondary">Indonesia</a>
                                                <a href="<?php echo base_url(); ?>/far-east/japan" class="navigation__title navigation__title--secondary">Japan</a>
                                                <a href="<?php echo base_url(); ?>/far-east/laos" class="navigation__title navigation__title--secondary">Laos</a>
                                                <a href="<?php echo base_url(); ?>/far-east/malaysia" class="navigation__title navigation__title--secondary">Malaysia</a>
                                                <a href="<?php echo base_url(); ?>/far-east/mongolia" class="navigation__title navigation__title--secondary">Mongolia</a>
                                                <a href="<?php echo base_url(); ?>/far-east/burma" class="navigation__title navigation__title--secondary">Myanmar</a>
                                                <a href="<?php echo base_url(); ?>/indian-subcontinent/nepal" class="navigation__title navigation__title--secondary">Nepal</a>
                                                <a href="<?php echo base_url(); ?>/far-east/philippines" class="navigation__title navigation__title--secondary">Philippines</a>
                                                <a href="<?php echo base_url(); ?>/far-east/singapore" class="navigation__title navigation__title--secondary">Singapore</a>
                                                <a href="<?php echo base_url(); ?>/indian-subcontinent/sri-lanka" class="navigation__title navigation__title--secondary">Sri Lanka</a>
                                                <a href="<?php echo base_url(); ?>/far-east/thailand" class="navigation__title navigation__title--secondary">Thailand</a>
                                                <a href="<?php echo base_url(); ?>/central-asia/uzbekistan" class="navigation__title navigation__title--secondary">Uzbekistan</a>
                                                <a href="<?php echo base_url(); ?>/far-east/vietnam" class="navigation__title navigation__title--secondary">Vietnam</a>
                                                <a href="<?php echo base_url(); ?>/indian-ocean" class="navigation__title navigation__title--primary">Indian Ocean</a>
                                                <a href="<?php echo base_url(); ?>/indian-ocean/maldives" class="navigation__title navigation__title--secondary">Maldives</a>
                                                <a href="<?php echo base_url(); ?>/indian-ocean/mauritius" class="navigation__title navigation__title--secondary">Mauritius</a>
                                                <a href="<?php echo base_url(); ?>/indian-ocean/reunion" class="navigation__title navigation__title--secondary">Reunion</a>
                                                <a href="<?php echo base_url(); ?>/indian-ocean/seychelles" class="navigation__title navigation__title--secondary">Seychelles</a>
                                            </div>
                                            <div class="navigation__column">
                                                <a href="<?php echo base_url(); ?>/australasia-pacific-islands" class="navigation__title navigation__title--primary">Australasia & Pacific Islands</a>
                                                <a href="<?php echo base_url(); ?>/australasia-pacific-islands/australia" class="navigation__title navigation__title--secondary">Australia</a>
                                                <a href="<?php echo base_url(); ?>/australasia-pacific-islands/fiji" class="navigation__title navigation__title--secondary">Fiji</a>
                                                <a href="<?php echo base_url(); ?>/australasia-pacific-islands/french-polynesia" class="navigation__title navigation__title--secondary">French Polynesia</a>
                                                <a href="<?php echo base_url(); ?>/australasia-pacific-islands/new-zealand" class="navigation__title navigation__title--secondary">New Zealand</a>
                                                <a href="<?php echo base_url(); ?>/australasia-pacific-islands/papua-new-guinea" class="navigation__title navigation__title--secondary">Papua New Guinea</a>
                                                <div class="navigation__map">
                                                    <a href="<?php echo base_url(); ?>/destinations">
                                                        <div class="worlds">
                                                        </div>
                                                        <span class="navigation__title navigation__title--primary navigation__title--centered">Browse our map</span>
                                                    </a>
                                                </div>
                                                <p href="<?php echo base_url(); ?>australasia-pacific-islands" class="navigation__title navigation__title--primary">Trending</p>
                                                <div class="navigation__sub-column">
                                                    <a href="<?php echo base_url(); ?>/europe/italy" class="navigation__title navigation__title--secondary">Italy</a>
                                                    <a href="<?php echo base_url(); ?>/africa/tanzania" class="navigation__title navigation__title--secondary">Tanzania</a>
                                                    <a href="<?php echo base_url(); ?>/indian-subcontinent/india" class="navigation__title navigation__title--secondary">India</a>
                                                    <a href="<?php echo base_url(); ?>/africa/morocco" class="navigation__title navigation__title--secondary">Morocco</a>
                                                    <a href="<?php echo base_url(); ?>/indian-ocean/maldives" class="navigation__title navigation__title--secondary">Maldives </a>
                                                    <a href="<?php echo base_url(); ?>/europe/portugal" class="navigation__title navigation__title--secondary">Portugal</a>
                                                </div>
                                                <div class="navigation__sub-column">
                                                    <a href="<?php echo base_url(); ?>/central-america/mexico" class="navigation__title navigation__title--secondary">Mexico</a>
                                                    <a href="<?php echo base_url(); ?>/middle-east/oman" class="navigation__title navigation__title--secondary">Oman</a>
                                                    <a href="<?php echo base_url(); ?>/far-east/indonesia" class="navigation__title navigation__title--secondary">Indonesia </a>
                                                    <a href="<?php echo base_url(); ?>/south-america/argentina" class="navigation__title navigation__title--secondary">Argentina</a>
                                                    <a href="<?php echo base_url(); ?>/caribbean/antigua" class="navigation__title navigation__title--secondary">Antigua</a>
                                                    <a href="<?php echo base_url(); ?>/australasia-pacific-islands/fiji" class="navigation__title navigation__title--secondary">Fiji</a>
                                                </div>
                                            </div>
                                        </nav>
                                    </div>
                                    <div class="navigation-inspiration collections-dropdown cf">
                                        <h4>Popular Collections Right Now</h4>
                                        <a href="<?php echo base_url(); ?>/collections/honeymoons" class="nav-circle">
                                            <div class="image-mask">
                                                <img src="<?php echo base_url(); ?>img/121303-clayoquot-crop.jpg" width="110" height="110" alt="Honeymoons" />                            </div>
                                            Honeymoons        </a>
                                        <a href="<?php echo base_url(); ?>/collections/family-holidays" class="nav-circle">
                                            <div class="image-mask">
                                                <img src="<?php echo base_url(); ?>img/121309-istock-000015847178medium.jpg" width="110" height="110" alt="Child Snorkelling" />                            </div>
                                            Family Holidays        </a>
                                        <a href="<?php echo base_url(); ?>/collections/luxury-safari-holidays" class="nav-circle">
                                            <div class="image-mask">
                                                <img src="<?php echo base_url(); ?>img/328663-lion-sun-standing.jpg" width="110" height="110" alt="Lion in the Masai Mara" />                            </div>
                                            Safari Holidays        </a>
                                        <a href="<?php echo base_url(); ?>/collections/small-group-tours" class="nav-circle">
                                            <div class="image-mask">
                                                <img src="<?php echo base_url(); ?>img/326108-camels-on-the-beach-dubai.jpg" width="110" height="110" alt="Camels, Dubai" />                            </div>
                                            Small Group Tours        </a>
                                        <a href="<?php echo base_url(); ?>/collections/summer-holidays-2016" class="nav-circle">
                                            <div class="image-mask">
                                                <img src="<?php echo base_url(); ?>fonts/bryantwebregularalt-webfont.woff" width="110" height="110" alt="Puglia, Italy" />                            </div>
                                            Summer 2017        </a>
                                        <p><a href="<?php echo base_url(); ?>/collections" class="button lowercase">View All</a></p>
                                    </div>
                                    <div class="myideas-dropdown myideas-dropdown-empty cf">
                                        <h4>Start planning your perfect trip</h4>
                                        <p>Use <span>Add to ideas +</span> to collect your trip ideas, share with friends or make
                                            an enquiry.</p>
                                        <p class="user-prompt">Please <a href="<?php echo base_url(); ?>/account/login">Sign-in</a> or <a href="<?php echo base_url(); ?>/account/register">Register</a>
                                            to save My Ideas for later</p>
                                    </div>

                                    <div class="myideas-action-dropdown cf">
                                        <h4>1 item added to my ideas</h4>
                                        <p>Collect your trip ideas, share with friends or make an enquiry.</p>
                                        <p class="left">Please <a href="<?php echo base_url(); ?>/account/login">Sign-in</a> or <a href="<?php echo base_url(); ?>/account/register">Register</a> to save My Ideas for later</p>
                                        <p class="right"><a href="<?php echo base_url(); ?>#" data-action="close">Continue browsing</a></p>
                                    </div>
                                    <div id="header-opening" class="opening-dropdown" itemscope itemtype="http://schema.org/LocalBusiness">

                                        <h2 class="opening-hours__title opening-hours--closed">
                                            We're back at  tomorrow, please email us                            </h2>
                                        <p>
                                            Call <a href="<?php echo base_url(); ?>tel:+44 (0) 20 7978 7333"><span>+44 (0) 20 7978 7333</span></a>                            </p>
                                        <dl class="opening-hours__times"><dt>Monday:</dt><dd itemprop="openingHours" content="Mo9am until 6pm">9am until 6pm</dd><dt>Tuesday:</dt><dd itemprop="openingHours" content="Tu9am until 6pm">9am until 6pm</dd><dt>Wednesday:</dt><dd itemprop="openingHours" content="We9am until 6pm">9am until 6pm</dd><dt>Thursday:</dt><dd itemprop="openingHours" content="Th9am until 6pm">9am until 6pm</dd><dt>Friday:</dt><dd itemprop="openingHours" content="Fr9am until 6pm">9am until 6pm</dd><dt>Saturday:</dt><dd itemprop="openingHours" content="SaClosed">Closed</dd><dt>Sunday:</dt><dd itemprop="openingHours" content="SuClosed">Closed</dd></dl>
                                    </div>
                                    <div class="cf">
                                        <ul>
                                            <li class="small"><a href="<?php echo base_url(); ?>/destinations" class="small">Where to go</a></li>
                                            <li class="small medium"><a href="<?php echo base_url(); ?>/collections" class="small inspiration">Collections</a></li>
                                            <li><a href="<?php echo base_url(); ?>/why-choose-us" class="why">Why us</a></li>
                                            <li><a href="<?php echo base_url(); ?>about.php" class="about">About us</a></li>
                                            <li class="small"><a href="<?php echo base_url(); ?>/account" class="ideas small">My Ideas</a></li>

                                            <li class="small"><a href="<?php echo base_url(); ?>/offers" class="small offers">Special Offers</a></li>
                                            <li><a href="<?php echo base_url(); ?>/contact" class="contact">Contact us</a></li>
                                            <li class="hide-on-medium"><a href="<?php echo base_url(); ?>/brochure" class="about">Get The Brochure</a></li>

                                        </ul>
                                        <div class="navigation-inspiration cf">
                                            <a href="<?php echo base_url(); ?>/best-time-to-go" class="nav-circle">
                                                <div class="image-mask">
                                                    <img src="<?php echo base_url(); ?>img/nav1.jpg" width="110" height="110" />
                                                </div>
                                                Where to go when
                                            </a>
                                            <a href="<?php echo base_url(); ?>/blog" class="nav-circle">
                                                <div class="image-mask">
                                                    <img src="<?php echo base_url(); ?>img/nav2.jpg" width="110" height="110" />
                                                </div>
                                                Explore the blog
                                            </a>
                                            <a href="<?php echo base_url(); ?>/offers" class="nav-circle">
                                                <div class="image-mask">
                                                    <img src="<?php echo base_url(); ?>img/nav4.jpg" width="110" height="110" />
                                                </div>
                                                Special Offers
                                            </a>
                                            <a href="<?php echo base_url(); ?>/collections/tribes" class="nav-circle">
                                                <div class="image-mask">
                                                    <img src="<?php echo base_url(); ?>img/nav6.jpg" width="110" height="110" />
                                                </div>
                                                Travel Tribes
                                            </a>
                                        </div>
                                    </div>
                                    <div class="navigation-popover-footer cf">
                                        <p class="social">
                                            Our social channels

                                            <a href="<?php echo base_url(); ?>https://www.facebook.com/originaltravel" target="_blank" class="fb">Facebook</a>
                                            <a href="<?php echo base_url(); ?>https://twitter.com/OriginalTravel" target="_blank" class="tw">Twitter</a>
                                            <a href="<?php echo base_url(); ?>http://www.pinterest.com/originaltravel/" target="_blank" class="pi">Pinterest</a>
                                            <a href="<?php echo base_url(); ?>https://plus.google.com/+originaltravel/" target="_blank" class="gp">Google+</a>
                                            <a href="<?php echo base_url(); ?>https://www.youtube.com/channel/UCZvRSIsKdPrrijKms1DQciA/featured" target="_blank" class="yt">Youtube+</a>
                                            <a href="<?php echo base_url(); ?>http://instagram.com/originaltravel" target="_blank" class="in">Instagram</a>
                                        </p>
                                        <form action="" method="post">
                                            <label>Newsletter sign-up <input type="email" name="contact_email" placeholder="Your email" /></label>
                                            <button type="submit"><span>Go</span></button>
                                            <input type="hidden" name="action" value="header-signup" />
                                        </form>

                                    </div>

                                </div>
                            </div>

                        </div>
                        <p class="right-anchor with-ideas">
                            <a href="<?php echo base_url(); ?>/account" class="ideas" data-target="myideas">
                                <span class="ideas-label">My Ideas</span>
                                <span id="idea-count">0</span>
                            </a>

                            <a href="<?php echo base_url(); ?>/contact" class="contact">Enquire</a>
                            <span class="telephone-label">or call</span>
                            <a href="<?php echo base_url(); ?>tel:+44 (0) 20 7978 7333"><span>+44 (0) 20 7978 7333</span></a>
                        </p>

                        <a href="<?php echo base_url(); ?>/contact" class="opening-hours" data-target="opening">Opening Hours</a>

                    </div>

                </header>
            </div>