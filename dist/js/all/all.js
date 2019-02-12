'use strict';

// Global Functions
var get = function get(pTarget) {
  return document.getElementById(pTarget);
};

var titleAnimation = function titleAnimation(pTitle) {
  $('#sidebarTitle').fadeOut(400, function () {
    $(this).html(pTitle).fadeIn();
  });
};

var initNav = function initNav() {
  var trigger = $('.hamburger');
  var overlay = $('.overlay');
  var isClosed = false;

  trigger.click(function () {
    if (isClosed === true) {
      overlay.css('display', 'none');
      trigger.removeClass('is-open');
      trigger.addClass('is-closed');
      isClosed = false;
    } else {
      overlay.css('display', 'block');
      trigger.removeClass('is-closed');
      trigger.addClass('is-open');
      isClosed = true;
    }
  });

  $('[data-toggle="offcanvas"]').click(function () {
    $('#wrapper').toggleClass('toggled');
  });
};

$(document).ready(function () {
  setTimeout('initNav()', 1000);
  $('#container').fullpage({
    afterLoad: function afterLoad(anchorLink) {
      // hero variables
      var heroship = get('heroship');
      var launchSmoke = $('#launchSmoke');
      var firstSmoke = $('#firstSmoke');
      var secondSmoke = $('#secondSmoke');
      var sun = $('#sun');
      var sunRings = sun.children(0);
      // farewell variables
      var comet = get('comet');
      var spaceship = get('spaceship');
      var trail = get('trail');
      var stars = get('stars');
      var constellation = get('constellation');
      var brightStars = get('brightstars');
      var planet1 = get('planet_1');
      var planet2 = get('planet_2');
      var ufo = get('ufo');
      var landingEye = get('landingEye');
      var landingEye2 = get('landingEye2');
      // mercury variables
      var mercurySun = $('#mercurySun');
      var mercurySunRings = mercurySun.children(0);
      var mercuryship = get('mercuryship');
      var mercuryfireOne = $('#mercuryshipFire');
      var mercuryfireTwo = $('#mercuryshipFire2');
      var mercuryLight = get('sunLight2');
      var mercuryStarts = get('mercuryStars');
      var mercuryBright = get('mercuryBrightstars');
      var mercuryEye = get('mercuryEye');
      var mercuryEye2 = get('mercuryEye2');
      // venus variables
      var venusSun = $('#venusSun');
      var venusSunRings = venusSun.children(0);
      var venusship = get('venusSpaceship');
      var venusFireOne = $('#venusFire');
      var venusFireTwo = $('#venusFire2');
      var venusLight = get('sunLight3');
      var venusStars = get('venusStars');
      var venusBright = get('venusBright');
      var venusRadiance = get('venusRadiance');
      var venusEyeOne = get('venusEye1');
      var venusEyeTwo = get('venusEye2');
      //earth variables
      var earthship = get('earthShip');
      var earthBright = get('earthBrightstars');
      var earthStars = get('earthStars');
      var clouds = get('clouds');
      var earthSun = $('#earthSun');
      var earthRings = earthSun.children(0);
      var earthLight = get('sunLight4');
      var moonLight = get('moonSunLight');
      var moonEye1 = get('moonEye1');
      var moonEye2 = get('moonEye2');
      var satellite = get('satellite');
      var earthUfo = get('ufoEarth');
      var earthFireOne = $('#earthFire1');
      var earthFireTwo = $('#earthFire2');
      var earthEye = get('earthEye');
      var earthEye2 = get('earthEye2');
      // marth variables
      var marsship = get('marsSpaceship');
      var marsEye = get('marsEye');
      var marsEye2 = get('marsEye2');
      var marsMouth = get('marsMouth');
      var marsStars = get('marsStars');
      var marsBright = get('marsBrightstars');
      var marsUfo = get('marsUfo');
      var marsFire = $('#marsFire');
      var marsFire2 = $('#marsFire2');
      // jupiter variables
      var jupiterBright = get('jupiterBrightstars');
      var jupiterStars = get('jupiterStars');
      var jupiterComet = get('jupiterComet');
      var jupiterComet2 = get('jupiterComet2');
      var jupiterComet3 = get('jupiterComet3');
      var jupiterRadiance = get('jupiterRadiance');
      var jupiterHand = get('jupiterHand');
      var jupiterHand2 = get('jupiterHand2');
      var jupiterMouth = get('jupiterMouth');
      var jupiterShip = get('jupiterSpaceship');
      var jupiterEye = get('jupiterEye1');
      var jupiterEye2 = get('jupiterEye2');
      var jupiterElipse = get('jupiterElipse');
      var jupiterFire = $('#jupiterFire');
      var jupiterFire2 = $('#jupiterFire2');
      // saturn variables
      var saturnBright = get('saturnBrightstars');
      var saturnStars = get('saturnStars');
      var saturnShip = get('saturnSpaceship');
      var saturnEye = get('saturnEye');
      var saturnEye2 = get('saturnEye2');
      var saturnRing = get('saturnRing');
      var saturnFire = $('#saturnFire');
      var saturnFire2 = $('#saturnFire2');
      // uranus variables
      var uranusBright = get('uranusBrightstars');
      var uranusStars = get('uranusStars');
      var uranusShip = get('uranusSpaceship');
      var uranusRadiance = get('uranusRadiance');
      var uranusEye = get('uranusEye1');
      var uranusEye2 = get('uranusEye2');
      var uranusMouth = get('uranusMouth');
      var uranusElipse = get('uranusElipse');
      var uranusFire = $('#uranusFire');
      var uranusFire2 = $('#uranusFire2');
      // neptune variables
      var neptuneBright = get('neptuneBrightstars');
      var neptuneStars = get('neptuneStars');
      var neptuneShip = get('neptuneSpaceship');
      var neptuneRadiance = get('neptuneRadiance');
      var neptuneEye = get('neptuneEye');
      var neptuneEye2 = get('neptuneEye2');
      var neptuneMouth = get('neptuneMouth');
      var neptuneFire = $('#neptuneFire1');
      var neptuneFire2 = $('#neptuneFire2');

      switch (anchorLink) {
        case 'home':
          // Home Timelines
          var spaceshipHeroTimeline = new TimelineMax({ delay: 5, repeat: 0 });

          titleAnimation('Welcome To Milkyway: Solar System Tour!');
          launchSmoke.delay(500).animate({ opacity: 0 }, 1000);
          firstSmoke.delay(700).animate({ opacity: 0 }, 6000);
          secondSmoke.delay(800).animate({ opacity: 0.25 }, 6000);
          var heroshipTweenOne = TweenLite.to(heroship, 10, { y: -400 });
          spaceshipHeroTimeline.add(heroshipTweenOne);
          $('#fire1').delay(200).animate({ opacity: 1 }, 3000);
          $('#fire2').delay(200).animate({ opacity: 1 }, 3000);
          secondSmoke.delay(100).animate({ opacity: 0.10 }, 6000);
          secondSmoke.delay(100).animate({ opacity: 0 }, 2000);
          break;

        case 'first':
          // Farewell Timelines
          var ufoTimeline = new TimelineMax({ delay: 3, repeat: 0 });
          var starsTimeline = new TimelineMax({ delay: 1, repeat: 15 });
          var trailTimeline = new TimelineMax({ delay: 1, repeat: 0 });
          var cometTimeline = new TimelineMax({ delay: 1, repeat: 0 });
          var spaceshipTimeline = new TimelineMax({ delay: 1, repeat: 0 });
          var brightstarTimeline = new TimelineMax({ repeat: 25 });
          var constellationTimeline = new TimelineMax({ delay: 0.5, repeat: 15 });
          var sunRingOneTimeline = new TimelineMax({ delay: 1, repeat: 15 });
          var sunRingTwoTimeline = new TimelineMax({ delay: 1, repeat: 15 });
          var sunRingThreeTimeline = new TimelineMax({ delay: 0, repeat: 15 });
          var landingEyeTimeline = new TimelineMax({ delay: 3, repeat: 15, repeatDelay: 3.5 });
          var landingEyeTwoTimeline = new TimelineMax({ delay: 3, repeat: 15, repeatDelay: 3.5 });
          titleAnimation('Farewell Astronauts! be careful out there, the Space is a mysterious place.');

          var spaceshipTween = TweenLite.to(spaceship, 10, { x: -550, y: -350, rotation: 10 });
          spaceshipTimeline.add(spaceshipTween);

          var trailTween = TweenLite.to(trail, 2, { opacity: 0 });
          trailTimeline.add(trailTween);

          var cometTween = TweenLite.to(comet, 12, { x: 300, y: 250, rotation: 25 });
          cometTimeline.add(cometTween);

          var ufoTween1 = TweenLite.to(ufo, 1, { y: 60 });
          var ufoTween2 = TweenLite.to(ufo, 1, { y: -100 });
          var ufoTween3 = TweenLite.to(ufo, 3, { opacity: 0 });
          ufoTimeline.add(ufoTween1);
          ufoTimeline.add(ufoTween2);
          ufoTimeline.add(ufoTween3);

          var starsFade1 = TweenLite.to(stars, 2, { opacity: 0.3 });
          var starsFade2 = TweenLite.to(stars, 2, { opacity: 1 });
          starsTimeline.add(starsFade1);
          starsTimeline.add(starsFade2);

          var brightStarFade1 = TweenLite.to(brightStars, 1, { opacity: 0.5 });
          var brightStarFade2 = TweenLite.to(brightStars, 1, { opacity: 1 });
          brightstarTimeline.add(brightStarFade1);
          brightstarTimeline.add(brightStarFade2);

          var constellationFade1 = TweenLite.to(constellation, 5, { opacity: 0.3 });
          var constellationFade2 = TweenLite.to(constellation, 3, { opacity: 1 });
          constellationTimeline.add(constellationFade1);
          constellationTimeline.add(constellationFade2);

          var sunRingOneFade1 = TweenLite.to(sunRings[1], 2, { opacity: 0.6 });
          var sunRingOneFade2 = TweenLite.to(sunRings[1], 2, { opacity: 0.3 });
          var sunRingOneFade3 = TweenLite.to(sunRings[1], 2, { opacity: 0.7 });
          var sunRingOneFade4 = TweenLite.to(sunRings[1], 2, { opacity: 0.2 });
          var sunRingOneFade5 = TweenLite.to(sunRings[1], 2, { opacity: 0.6 });
          var sunRingOneFade6 = TweenLite.to(sunRings[1], 2, { opacity: 0.4 });
          sunRingOneTimeline.add(sunRingOneFade1);
          sunRingOneTimeline.add(sunRingOneFade2);
          sunRingOneTimeline.add(sunRingOneFade3);
          sunRingOneTimeline.add(sunRingOneFade4);
          sunRingOneTimeline.add(sunRingOneFade5);
          sunRingOneTimeline.add(sunRingOneFade6);

          var sunRingTwoFade1 = TweenLite.to(sunRings[2], 2, { opacity: 0.6 });
          var sunRingTwoFade2 = TweenLite.to(sunRings[2], 2, { opacity: 0.3 });
          var sunRingTwoFade3 = TweenLite.to(sunRings[2], 2, { opacity: 0.7 });
          var sunRingTwoFade4 = TweenLite.to(sunRings[2], 2, { opacity: 0.2 });
          var sunRingTwoFade5 = TweenLite.to(sunRings[2], 2, { opacity: 0.6 });
          var sunRingTwoFade6 = TweenLite.to(sunRings[2], 2, { opacity: 0.4 });
          sunRingTwoTimeline.add(sunRingTwoFade1);
          sunRingTwoTimeline.add(sunRingTwoFade2);
          sunRingTwoTimeline.add(sunRingTwoFade3);
          sunRingTwoTimeline.add(sunRingTwoFade4);
          sunRingTwoTimeline.add(sunRingTwoFade5);
          sunRingTwoTimeline.add(sunRingTwoFade6);

          var sunRingThreeFade1 = TweenLite.to(sunRings[3], 2, { opacity: 0.6 });
          var sunRingThreeFade2 = TweenLite.to(sunRings[3], 2, { opacity: 0.3 });
          var sunRingThreeFade3 = TweenLite.to(sunRings[3], 2, { opacity: 0.7 });
          var sunRingThreeFade4 = TweenLite.to(sunRings[3], 2, { opacity: 0.2 });
          var sunRingThreeFade5 = TweenLite.to(sunRings[3], 2, { opacity: 0.6 });
          var sunRingThreeFade6 = TweenLite.to(sunRings[3], 2, { opacity: 0.4 });
          sunRingThreeTimeline.add(sunRingThreeFade1);
          sunRingThreeTimeline.add(sunRingThreeFade2);
          sunRingThreeTimeline.add(sunRingThreeFade3);
          sunRingThreeTimeline.add(sunRingThreeFade4);
          sunRingThreeTimeline.add(sunRingThreeFade5);
          sunRingThreeTimeline.add(sunRingThreeFade6);

          var landingEyeTween = TweenLite.to(landingEye, 0.1, { opacity: 0 });
          var landingEyeTween2 = TweenLite.to(landingEye, 0.1, { opacity: 1 });
          landingEyeTimeline.add(landingEyeTween);
          landingEyeTimeline.add(landingEyeTween2);

          var landingEyeTwoTween = TweenLite.to(landingEye2, 0.1, { opacity: 0 });
          var landingEyeTwoTween2 = TweenLite.to(landingEye2, 0.1, { opacity: 1 });
          landingEyeTwoTimeline.add(landingEyeTwoTween);
          landingEyeTwoTimeline.add(landingEyeTwoTween2);

          break;
        case 'mercury':
          // Mercury Timelines
          var mercuryshipTimeline = new TimelineMax({ delay: 0, repeat: 0 });
          var mercuryshipShake = new TimelineMax({ delay: 8, repeat: 20 });
          var mercuryMouthTimeline = new TimelineMax({ delay: 0, repeat: 0 });
          var mercuryRingOneTimeline = new TimelineMax({ delay: 1, repeat: 20 });
          var mercuryRingTwoTimeline = new TimelineMax({ delay: 1, repeat: 20 });
          var mercuryRingThreeTimeline = new TimelineMax({ delay: 0, repeat: 20 });
          var mercuryLightTimeline = new TimelineMax({ delay: 1, repeat: 20 });
          var mercuryStarsTimeline = new TimelineMax({ delay: 1, repeat: 20 });
          var mercuryBrightTimeline = new TimelineMax({ delay: 2, repeat: 20 });
          var mercuryDepartureTimeline = new TimelineMax({ delay: 0, repeat: 0 });
          var mercuryEyeTimeline = new TimelineMax({ delay: 3, repeat: 15, repeatDelay: 3 });
          var mercuryEyeTwoTimeline = new TimelineMax({ delay: 3, repeat: 15, repeatDelay: 3 });

          titleAnimation('Hey! isn\'t that Mercury over there?');

          var mercuryEyeOneTween = TweenLite.to(mercuryEye, 0.1, { opacity: 0 });
          var mercuryEyeOneTween2 = TweenLite.to(mercuryEye, 0.1, { opacity: 1 });
          mercuryEyeTimeline.add(mercuryEyeOneTween);
          mercuryEyeTimeline.add(mercuryEyeOneTween2);
          var mercuryEyeTwoTween = TweenLite.to(mercuryEye2, 0.1, { opacity: 0 });
          var mercuryEyeTwoTween2 = TweenLite.to(mercuryEye2, 0.1, { opacity: 1 });
          mercuryEyeTwoTimeline.add(mercuryEyeTwoTween);
          mercuryEyeTwoTimeline.add(mercuryEyeTwoTween2);

          var mercuryshipTweenOne = TweenLite.to(mercuryship, 7, { x: -400 });
          mercuryshipTimeline.add(mercuryshipTweenOne);

          mercuryfireOne.delay(300).animate({ opacity: 0 }, 7000);
          mercuryfireTwo.delay(300).animate({ opacity: 0 }, 7000);

          console.log(mercurySunRings);

          var mercuryRingOneFade1 = TweenLite.to(mercurySunRings[1], 2, { opacity: 0.6 });
          var mercuryRingOneFade2 = TweenLite.to(mercurySunRings[1], 2, { opacity: 0.3 });
          var mercuryRingOneFade3 = TweenLite.to(mercurySunRings[1], 2, { opacity: 0.7 });
          var mercuryRingOneFade4 = TweenLite.to(mercurySunRings[1], 2, { opacity: 0.2 });
          var mercuryRingOneFade5 = TweenLite.to(mercurySunRings[1], 2, { opacity: 0.6 });
          var mercuryRingOneFade6 = TweenLite.to(mercurySunRings[1], 2, { opacity: 0.4 });
          mercuryRingOneTimeline.add(mercuryRingOneFade1);
          mercuryRingOneTimeline.add(mercuryRingOneFade2);
          mercuryRingOneTimeline.add(mercuryRingOneFade3);
          mercuryRingOneTimeline.add(mercuryRingOneFade4);
          mercuryRingOneTimeline.add(mercuryRingOneFade5);
          mercuryRingOneTimeline.add(mercuryRingOneFade6);

          var mercuryRingTwoFade1 = TweenLite.to(mercurySunRings[2], 2, { opacity: 0.6 });
          var mercuryRingTwoFade2 = TweenLite.to(mercurySunRings[2], 2, { opacity: 0.3 });
          var mercuryRingTwoFade3 = TweenLite.to(mercurySunRings[2], 2, { opacity: 0.7 });
          var mercuryRingTwoFade4 = TweenLite.to(mercurySunRings[2], 2, { opacity: 0.2 });
          var mercuryRingTwoFade5 = TweenLite.to(mercurySunRings[2], 2, { opacity: 0.6 });
          var mercuryRingTwoFade6 = TweenLite.to(mercurySunRings[2], 2, { opacity: 0.4 });
          mercuryRingTwoTimeline.add(mercuryRingTwoFade1);
          mercuryRingTwoTimeline.add(mercuryRingTwoFade2);
          mercuryRingTwoTimeline.add(mercuryRingTwoFade3);
          mercuryRingTwoTimeline.add(mercuryRingTwoFade4);
          mercuryRingTwoTimeline.add(mercuryRingTwoFade5);
          mercuryRingTwoTimeline.add(mercuryRingTwoFade6);

          var mercuryRingThreeFade1 = TweenLite.to(mercurySunRings[3], 2, { opacity: 0.6 });
          var mercuryRingThreeFade2 = TweenLite.to(mercurySunRings[3], 2, { opacity: 0.3 });
          var mercuryRingThreeFade3 = TweenLite.to(mercurySunRings[3], 2, { opacity: 0.7 });
          var mercuryRingThreeFade4 = TweenLite.to(mercurySunRings[3], 2, { opacity: 0.2 });
          var mercuryRingThreeFade5 = TweenLite.to(mercurySunRings[3], 2, { opacity: 0.6 });
          var mercuryRingThreeFade6 = TweenLite.to(mercurySunRings[3], 2, { opacity: 0.4 });
          mercuryRingThreeTimeline.add(mercuryRingThreeFade1);
          mercuryRingThreeTimeline.add(mercuryRingThreeFade2);
          mercuryRingThreeTimeline.add(mercuryRingThreeFade3);
          mercuryRingThreeTimeline.add(mercuryRingThreeFade4);
          mercuryRingThreeTimeline.add(mercuryRingThreeFade5);
          mercuryRingThreeTimeline.add(mercuryRingThreeFade6);

          var mercuryLightFade1 = TweenLite.to(mercuryLight, 4, { opacity: 0.15 });
          var mercuryLightFade2 = TweenLite.to(mercuryLight, 4, { opacity: 0.24 });
          mercuryLightTimeline.add(mercuryLightFade1);
          mercuryLightTimeline.add(mercuryLightFade2);

          var mercuryStarsFade1 = TweenLite.to(mercuryStars, 4, { opacity: 0.3 });
          var mercuryStarsFade2 = TweenLite.to(mercuryStars, 4, { opacity: 1 });
          var mercuryStarsFade3 = TweenLite.to(mercuryStars, 4, { opacity: 0.2 });
          var mercuryStarsFade4 = TweenLite.to(mercuryStars, 4, { opacity: 0.6 });
          mercuryStarsTimeline.add(mercuryStarsFade1);
          mercuryStarsTimeline.add(mercuryStarsFade2);
          mercuryStarsTimeline.add(mercuryStarsFade3);
          mercuryStarsTimeline.add(mercuryStarsFade4);

          var mercuryBrightFade1 = TweenLite.to(mercuryBright, 3, { opacity: 0.3 });
          var mercuryBrightFade2 = TweenLite.to(mercuryBright, 3, { opacity: 1 });
          var mercuryBrightFade3 = TweenLite.to(mercuryBright, 3, { opacity: 0.2 });
          var mercuryBrightFade4 = TweenLite.to(mercuryBright, 3, { opacity: 0.6 });
          mercuryBrightTimeline.add(mercuryBrightFade1);
          mercuryBrightTimeline.add(mercuryBrightFade2);
          mercuryBrightTimeline.add(mercuryBrightFade3);
          mercuryBrightTimeline.add(mercuryStarsFade4);
          break;
        case 'venus':
          // Venus Timelines
          var venusshipTimeline = new TimelineMax({ delay: 0, repeat: 0 });
          var venusMouthTimeline = new TimelineMax({ delay: 0, repeat: 0 });
          var venusRingOneTimeline = new TimelineMax({ delay: 1, repeat: 15 });
          var venusRingTwoTimeline = new TimelineMax({ delay: 1, repeat: 15 });
          var venusRingThreeTimeline = new TimelineMax({ delay: 0, repeat: 15 });
          var venusLightTimeline = new TimelineMax({ delay: 1, repeat: 15 });
          var venusStarsTimeline = new TimelineMax({ delay: 1, repeat: 15 });
          var venusBrightStarsTimeline = new TimelineMax({ delay: 2, repeat: 15 });
          var venusBrightTimeline = new TimelineMax({ delay: 2, repeat: 15 });
          var venusEyeOneTimeline = new TimelineMax({ delay: 4, repeat: 15, repeatDelay: 3 });
          var venusEyeTwoTimeline = new TimelineMax({ delay: 4, repeat: 15, repeatDelay: 3 });

          titleAnimation('Look! Its Venus, what a beauty, right?');
          var venusRingOneFade1 = TweenLite.to(venusSunRings[1], 2, { opacity: 0.6 });
          var venusRingOneFade2 = TweenLite.to(venusSunRings[1], 2, { opacity: 0.3 });
          var venusRingOneFade3 = TweenLite.to(venusSunRings[1], 2, { opacity: 0.7 });
          var venusRingOneFade4 = TweenLite.to(venusSunRings[1], 2, { opacity: 0.2 });
          var venusRingOneFade5 = TweenLite.to(venusSunRings[1], 2, { opacity: 0.6 });
          var venusRingOneFade6 = TweenLite.to(venusSunRings[1], 2, { opacity: 0.4 });
          venusRingOneTimeline.add(venusRingOneFade1);
          venusRingOneTimeline.add(venusRingOneFade2);
          venusRingOneTimeline.add(venusRingOneFade3);
          venusRingOneTimeline.add(venusRingOneFade4);
          venusRingOneTimeline.add(venusRingOneFade5);
          venusRingOneTimeline.add(venusRingOneFade6);

          var venusRingTwoFade1 = TweenLite.to(venusSunRings[2], 2, { opacity: 0.6 });
          var venusRingTwoFade2 = TweenLite.to(venusSunRings[2], 2, { opacity: 0.3 });
          var venusRingTwoFade3 = TweenLite.to(venusSunRings[2], 2, { opacity: 0.7 });
          var venusRingTwoFade4 = TweenLite.to(venusSunRings[2], 2, { opacity: 0.2 });
          var venusRingTwoFade5 = TweenLite.to(venusSunRings[2], 2, { opacity: 0.6 });
          var venusRingTwoFade6 = TweenLite.to(venusSunRings[2], 2, { opacity: 0.4 });
          venusRingTwoTimeline.add(venusRingTwoFade1);
          venusRingTwoTimeline.add(venusRingTwoFade2);
          venusRingTwoTimeline.add(venusRingTwoFade3);
          venusRingTwoTimeline.add(venusRingTwoFade4);
          venusRingTwoTimeline.add(venusRingTwoFade5);
          venusRingTwoTimeline.add(venusRingTwoFade6);

          var venusRingThreeFade1 = TweenLite.to(venusSunRings[3], 2, { opacity: 0.6 });
          var venusRingThreeFade2 = TweenLite.to(venusSunRings[3], 2, { opacity: 0.3 });
          var venusRingThreeFade3 = TweenLite.to(venusSunRings[3], 2, { opacity: 0.7 });
          var venusRingThreeFade4 = TweenLite.to(venusSunRings[3], 2, { opacity: 0.2 });
          var venusRingThreeFade5 = TweenLite.to(venusSunRings[3], 2, { opacity: 0.6 });
          var venusRingThreeFade6 = TweenLite.to(venusSunRings[3], 2, { opacity: 0.4 });
          venusRingThreeTimeline.add(venusRingThreeFade1);
          venusRingThreeTimeline.add(venusRingThreeFade2);
          venusRingThreeTimeline.add(venusRingThreeFade3);
          venusRingThreeTimeline.add(venusRingThreeFade4);
          venusRingThreeTimeline.add(venusRingThreeFade5);
          venusRingThreeTimeline.add(venusRingThreeFade6);

          var venusLightFade1 = TweenLite.to(venusLight, 4, { opacity: 0.15 });
          var venusLightFade2 = TweenLite.to(venusLight, 4, { opacity: 0.24 });
          venusLightTimeline.add(venusLightFade1);
          venusLightTimeline.add(venusLightFade2);

          var venusBrightFade1 = TweenLite.to(venusRadiance, 3, { opacity: 0.25 });
          var venusBrightFade2 = TweenLite.to(venusRadiance, 8, { opacity: 0.65 });
          var venusBrightFade3 = TweenLite.to(venusRadiance, 8, { opacity: 0.25 });
          var venusBrightFade4 = TweenLite.to(venusRadiance, 6, { opacity: 0.45 });
          venusBrightTimeline.add(venusBrightFade1);
          venusBrightTimeline.add(venusBrightFade2);
          venusBrightTimeline.add(venusBrightFade3);
          venusBrightTimeline.add(venusBrightFade4);

          var venusshipTween1 = TweenLite.to(venusship, 3, { x: 281, y: -269 });
          var venusshipTween2 = TweenLite.to(venusship, 3, { x: 283, y: -266 });
          var venusshipTween3 = TweenLite.to(venusship, 3, { x: 281, y: -269 });
          var venusshipTween4 = TweenLite.to(venusship, 3, { x: 283, y: -266 });
          venusshipTimeline.add(venusshipTween1);
          venusshipTimeline.add(venusshipTween2);
          venusshipTimeline.add(venusshipTween3);
          venusshipTimeline.add(venusshipTween4);

          venusFireOne.delay(300).animate({ opacity: 0 }, 7000);
          venusFireTwo.delay(300).animate({ opacity: 0 }, 7000);

          var venusStarsFade1 = TweenLite.to(venusStars, 4, { opacity: 0.3 });
          var venusStarsFade2 = TweenLite.to(venusStars, 4, { opacity: 1 });
          var venusStarsFade3 = TweenLite.to(venusStars, 4, { opacity: 0.2 });
          var venusStarsFade4 = TweenLite.to(venusStars, 4, { opacity: 0.6 });
          venusStarsTimeline.add(venusStarsFade1);
          venusStarsTimeline.add(venusStarsFade2);
          venusStarsTimeline.add(venusStarsFade3);
          venusStarsTimeline.add(venusStarsFade4);

          var venusBrightStarsFade1 = TweenLite.to(venusBright, 3, { opacity: 0.3 });
          var venusBrightStarsFade2 = TweenLite.to(venusBright, 3, { opacity: 1 });
          var venusBrightStarsFade3 = TweenLite.to(venusBright, 3, { opacity: 0.2 });
          var venusBrightStarsFade4 = TweenLite.to(venusBright, 3, { opacity: 0.6 });
          venusBrightStarsTimeline.add(venusBrightStarsFade1);
          venusBrightStarsTimeline.add(venusBrightStarsFade2);
          venusBrightStarsTimeline.add(venusBrightStarsFade3);
          venusBrightStarsTimeline.add(venusBrightStarsFade4);

          var venusEyeOneTween = TweenLite.to(venusEyeOne, 0.1, { opacity: 0 });
          var venusEyeOneTween2 = TweenLite.to(venusEyeOne, 0.1, { opacity: 1 });
          venusEyeOneTimeline.add(venusEyeOneTween);
          venusEyeOneTimeline.add(venusEyeOneTween2);

          var venusEyeTwoTween = TweenLite.to(venusEyeTwo, 0.1, { opacity: 0 });
          var venusEyeTwoTween2 = TweenLite.to(venusEyeTwo, 0.1, { opacity: 1 });
          venusEyeTwoTimeline.add(venusEyeTwoTween);
          venusEyeTwoTimeline.add(venusEyeTwoTween2);

          break;
        case 'earth':
          // Earth Timelines
          var earthshipTimeline = new TimelineMax({ delay: 1, repeat: 0 });
          var earthUfoTimeline = new TimelineMax({ delay: 12, repeat: 0 });
          var earthRingOneTimeline = new TimelineMax({ delay: 1, repeat: 15 });
          var earthRingTwoTimeline = new TimelineMax({ delay: 1, repeat: 15 });
          var earthRingThreeTimeline = new TimelineMax({ delay: 0, repeat: 15 });
          var earthStarsTimeline = new TimelineMax({ delay: 1, repeat: 15 });
          var earthBrightTimeline = new TimelineMax({ delay: 2, repeat: 15 });
          var earthSatelliteTimeline = new TimelineMax({ delay: 0, repeat: 0 });
          var moonEyeOneTimeline = new TimelineMax({ delay: 4, repeat: 15, repeatDelay: 3 });
          var moonEyeTwoTimeline = new TimelineMax({ delay: 4, repeat: 15, repeatDelay: 3 });
          var moonEyeOneTimeline2 = new TimelineMax({ delay: 22.5, repeat: 0 });
          var moonEyeTwoTimeline2 = new TimelineMax({ delay: 22.5, repeat: 0 });
          var cloudsTimeline = new TimelineMax({ delay: 0, repeat: 15 });
          var earthEyeTimeline = new TimelineMax({ delay: 5, repeat: 15, repeatDelay: 3 });
          var earthEyeTwoTimeline = new TimelineMax({ delay: 5, repeat: 15, repeatDelay: 3 });
          var earthSunlightTimeline = new TimelineMax({ delay: 2, repeat: 10, repeatDelay: 4 });
          var moonLightTimeline = new TimelineMax({ delay: 3, repeat: 10, repeatDelay: 4 });

          titleAnimation('We\'re back home! lets rest a bit, but know that we are far from over!');

          var earthEyeOneTween = TweenLite.to(earthEye, 0.1, { opacity: 0 });
          var earthEyeOneTween2 = TweenLite.to(earthEye, 0.1, { opacity: 1 });
          earthEyeTimeline.add(earthEyeOneTween);
          earthEyeTimeline.add(earthEyeOneTween2);
          var earthEyeTwoTween = TweenLite.to(earthEye2, 0.1, { opacity: 0 });
          var earthEyeTwoTween2 = TweenLite.to(earthEye2, 0.1, { opacity: 1 });
          earthEyeTwoTimeline.add(earthEyeTwoTween);
          earthEyeTwoTimeline.add(earthEyeTwoTween2);

          var earthLightFade1 = TweenLite.to(earthLight, 4, { opacity: 0.15 });
          var earthLightFade2 = TweenLite.to(earthLight, 4, { opacity: 0.24 });
          earthSunlightTimeline.add(earthLightFade1);
          earthSunlightTimeline.add(earthLightFade2);

          var moonLightFade1 = TweenLite.to(moonLight, 4, { opacity: 0.15 });
          var moonLightFade2 = TweenLite.to(moonLight, 4, { opacity: 0.24 });
          moonLightTimeline.add(moonLightFade1);
          moonLightTimeline.add(moonLightFade2);

          var earthRingOneFade1 = TweenLite.to(earthRings[1], 2, { opacity: 0.6 });
          var earthRingOneFade2 = TweenLite.to(earthRings[1], 2, { opacity: 0.3 });
          var earthRingOneFade3 = TweenLite.to(earthRings[1], 2, { opacity: 0.7 });
          var earthRingOneFade4 = TweenLite.to(earthRings[1], 2, { opacity: 0.2 });
          var earthRingOneFade5 = TweenLite.to(earthRings[1], 2, { opacity: 0.6 });
          var earthRingOneFade6 = TweenLite.to(earthRings[1], 2, { opacity: 0.4 });
          earthRingOneTimeline.add(earthRingOneFade1);
          earthRingOneTimeline.add(earthRingOneFade2);
          earthRingOneTimeline.add(earthRingOneFade3);
          earthRingOneTimeline.add(earthRingOneFade4);
          earthRingOneTimeline.add(earthRingOneFade5);
          earthRingOneTimeline.add(earthRingOneFade6);

          var earthRingTwoFade1 = TweenLite.to(earthRings[2], 2, { opacity: 0.6 });
          var earthRingTwoFade2 = TweenLite.to(earthRings[2], 2, { opacity: 0.3 });
          var earthRingTwoFade3 = TweenLite.to(earthRings[2], 2, { opacity: 0.7 });
          var earthRingTwoFade4 = TweenLite.to(earthRings[2], 2, { opacity: 0.2 });
          var earthRingTwoFade5 = TweenLite.to(earthRings[2], 2, { opacity: 0.6 });
          var earthRingTwoFade6 = TweenLite.to(earthRings[2], 2, { opacity: 0.4 });
          earthRingTwoTimeline.add(earthRingTwoFade1);
          earthRingTwoTimeline.add(earthRingTwoFade2);
          earthRingTwoTimeline.add(earthRingTwoFade3);
          earthRingTwoTimeline.add(earthRingTwoFade4);
          earthRingTwoTimeline.add(earthRingTwoFade5);
          earthRingTwoTimeline.add(earthRingTwoFade6);

          var earthRingThreeFade1 = TweenLite.to(earthRings[3], 2, { opacity: 0.6 });
          var earthRingThreeFade2 = TweenLite.to(earthRings[3], 2, { opacity: 0.3 });
          var earthRingThreeFade3 = TweenLite.to(earthRings[3], 2, { opacity: 0.7 });
          var earthRingThreeFade4 = TweenLite.to(earthRings[3], 2, { opacity: 0.2 });
          var earthRingThreeFade5 = TweenLite.to(earthRings[3], 2, { opacity: 0.6 });
          var earthRingThreeFade6 = TweenLite.to(earthRings[3], 2, { opacity: 0.4 });
          earthRingThreeTimeline.add(earthRingThreeFade1);
          earthRingThreeTimeline.add(earthRingThreeFade2);
          earthRingThreeTimeline.add(earthRingThreeFade3);
          earthRingThreeTimeline.add(earthRingThreeFade4);
          earthRingThreeTimeline.add(earthRingThreeFade5);
          earthRingThreeTimeline.add(earthRingThreeFade6);

          var earthshipTween1 = TweenLite.to(earthship, 3, { x: 281, y: -269 });
          var earthshipTween2 = TweenLite.to(earthship, 3, { x: 283, y: -266 });
          var earthshipTween3 = TweenLite.to(earthship, 3, { x: 281, y: -269 });
          var earthshipTween4 = TweenLite.to(earthship, 3, { x: 283, y: -266 });
          earthshipTimeline.add(earthshipTween1);
          earthshipTimeline.add(earthshipTween2);
          earthshipTimeline.add(earthshipTween3);
          earthshipTimeline.add(earthshipTween4);

          var earthStarsFade1 = TweenLite.to(earthStars, 4, { opacity: 0.3 });
          var earthStarsFade2 = TweenLite.to(earthStars, 4, { opacity: 1 });
          var earthStarsFade3 = TweenLite.to(earthStars, 4, { opacity: 0.2 });
          var earthStarsFade4 = TweenLite.to(earthStars, 4, { opacity: 0.6 });
          earthStarsTimeline.add(earthStarsFade1);
          earthStarsTimeline.add(earthStarsFade2);
          earthStarsTimeline.add(earthStarsFade3);
          earthStarsTimeline.add(earthStarsFade4);

          var earthBrightFade1 = TweenLite.to(earthBright, 3, { opacity: 0.3 });
          var earthBrightFade2 = TweenLite.to(earthBright, 3, { opacity: 1 });
          var earthBrightFade3 = TweenLite.to(earthBright, 3, { opacity: 0.2 });
          var earthBrightFade4 = TweenLite.to(earthBright, 3, { opacity: 0.6 });
          earthBrightTimeline.add(earthBrightFade1);
          earthBrightTimeline.add(earthBrightFade2);
          earthBrightTimeline.add(earthBrightFade3);
          earthBrightTimeline.add(earthBrightFade4);

          earthFireOne.delay(7).animate({ opacity: 0 }, 7000);
          earthFireTwo.delay(7).animate({ opacity: 0 }, 7000);

          var satelliteTween1 = TweenLite.to(satellite, 4, { x: +90, y: +140, rotation: 10 });
          var satelliteTween2 = TweenLite.to(satellite, 6, { x: -120, y: -70, rotation: -10 });
          var satelliteTween3 = TweenLite.to(satellite, 6, { x: -70, y: -120, rotation: -30 });
          earthSatelliteTimeline.add(satelliteTween1);
          earthSatelliteTimeline.add(satelliteTween2);
          earthSatelliteTimeline.add(satelliteTween3);

          var ufoEarthTween = TweenLite.to(earthUfo, 4, { x: 281 });
          var ufoEarthTween2 = TweenLite.to(earthUfo, 1, { y: -50 });
          var ufoEarthTween3 = TweenLite.to(earthUfo, 2, { x: 500 });
          var ufoEarthTween4 = TweenLite.to(earthUfo, 1, { y: -100 });
          var ufoEarthTween5 = TweenLite.to(earthUfo, 2, { x: 550 });
          var ufoEarthTween6 = TweenLite.to(earthUfo, 0.5, { opacity: 0.5 });
          var ufoEarthTween7 = TweenLite.to(earthUfo, 2, { y: -900 });
          earthUfoTimeline.add(ufoEarthTween);
          earthUfoTimeline.add(ufoEarthTween2);
          earthUfoTimeline.add(ufoEarthTween3);
          earthUfoTimeline.add(ufoEarthTween4);
          earthUfoTimeline.add(ufoEarthTween5);
          earthUfoTimeline.add(ufoEarthTween6);
          earthUfoTimeline.add(ufoEarthTween7);

          var moonEyeOneTween = TweenLite.to(moonEye1, 0.1, { opacity: 0 });
          var moonEyeOneTween2 = TweenLite.to(moonEye1, 0.1, { opacity: 1 });
          moonEyeOneTimeline.add(moonEyeOneTween);
          moonEyeOneTimeline.add(moonEyeOneTween2);

          var moonEyeOneUp = TweenLite.to(moonEye1, 0.4, { y: -30 });
          var moonEyeOneDown = TweenLite.to(moonEye1, 0.6, { y: +10 });
          moonEyeOneTimeline2.add(moonEyeOneUp);
          moonEyeOneTimeline2.add(moonEyeOneDown);

          var moonEyeTwoUp = TweenLite.to(moonEye2, 0.4, { y: -30 });
          var moonEyeTwoDown = TweenLite.to(moonEye2, 0.6, { y: +10 });
          moonEyeTwoTimeline2.add(moonEyeTwoUp);
          moonEyeTwoTimeline2.add(moonEyeTwoDown);

          var moonEyeTwoTween = TweenLite.to(moonEye2, 0.1, { opacity: 0 });
          var moonEyeTwoTween2 = TweenLite.to(moonEye2, 0.1, { opacity: 1 });
          moonEyeTwoTimeline.add(moonEyeTwoTween);
          moonEyeTwoTimeline.add(moonEyeTwoTween2);

          var cloudsTween = TweenLite.to(clouds, 8, { x: +20 });
          var cloudsTween2 = TweenLite.to(clouds, 8, { x: -20 });
          var cloudsTween3 = TweenLite.to(clouds, 8, { x: +20 });
          var cloudsTween4 = TweenLite.to(clouds, 8, { x: -10 });
          cloudsTimeline.add(cloudsTween);
          cloudsTimeline.add(cloudsTween2);
          cloudsTimeline.add(cloudsTween3);
          cloudsTimeline.add(cloudsTween4);
          break;
        case 'mars':
          titleAnimation('The Red Planet. Our neighboor here its pretty mysterious.');

          var marsshipTimeline = new TimelineMax({ delay: 2, repeat: 0 });
          var marsEyeTimeline = new TimelineMax({ delay: 3, repeat: 15, repeatDelay: 3 });
          var marsEyeTwoTimeline = new TimelineMax({ delay: 3, repeat: 15, repeatDelay: 3 });
          var marsStarsTimeline = new TimelineMax({ delay: 1, repeat: 15 });
          var marsBrightTimeline = new TimelineMax({ delay: 2, repeat: 15 });
          var marsUfoTimeline = new TimelineMax({ delay: 13, repeat: 0 });

          var marsShipTween = TweenLite.to(marsship, 5, { x: 350 });
          marsshipTimeline.add(marsShipTween);

          var marsStarsFade1 = TweenLite.to(marsStars, 4, { opacity: 0.3 });
          var marsStarsFade2 = TweenLite.to(marsStars, 4, { opacity: 1 });
          var marsStarsFade3 = TweenLite.to(marsStars, 4, { opacity: 0.2 });
          var marsStarsFade4 = TweenLite.to(marsStars, 4, { opacity: 0.6 });
          marsStarsTimeline.add(marsStarsFade1);
          marsStarsTimeline.add(marsStarsFade2);
          marsStarsTimeline.add(marsStarsFade3);
          marsStarsTimeline.add(marsStarsFade4);

          var marsBrightFade1 = TweenLite.to(marsBright, 3, { opacity: 0.3 });
          var marsBrightFade2 = TweenLite.to(marsBright, 3, { opacity: 1 });
          var marsBrightFade3 = TweenLite.to(marsBright, 3, { opacity: 0.2 });
          var marsBrightFade4 = TweenLite.to(marsBright, 3, { opacity: 0.6 });
          marsBrightTimeline.add(marsBrightFade1);
          marsBrightTimeline.add(marsBrightFade2);
          marsBrightTimeline.add(marsBrightFade3);
          marsBrightTimeline.add(marsBrightFade4);

          var marsEyeOneTween = TweenLite.to(marsEye, 0.1, { opacity: 0 });
          var marsEyeOneTween2 = TweenLite.to(marsEye, 0.1, { opacity: 1 });
          marsEyeTimeline.add(marsEyeOneTween);
          marsEyeTimeline.add(marsEyeOneTween2);
          var marsEyeTwoTween = TweenLite.to(marsEye2, 0.1, { opacity: 0 });
          var marsEyeTwoTween2 = TweenLite.to(marsEye2, 0.1, { opacity: 1 });
          marsEyeTwoTimeline.add(marsEyeTwoTween);
          marsEyeTwoTimeline.add(marsEyeTwoTween2);

          var marsUfoTween = TweenLite.to(marsUfo, 6, { y: 200 });
          var marsUfoTween2 = TweenLite.to(marsUfo, 6, { x: 400 });
          var marsUfoTween3 = TweenLite.to(marsUfo, 4, { y: 250 });
          var marsUfoTween4 = TweenLite.to(marsUfo, 1, { opacity: 0.6 });
          var marsUfoTween5 = TweenLite.to(marsUfo, 1, { x: 10000 });
          marsUfoTimeline.add(marsUfoTween);
          marsUfoTimeline.add(marsUfoTween2);
          marsUfoTimeline.add(marsUfoTween3);
          marsUfoTimeline.add(marsUfoTween4);
          marsUfoTimeline.add(marsUfoTween5);

          marsFire.delay(200).animate({ opacity: 0 }, 10000);
          marsFire2.delay(200).animate({ opacity: 0 }, 10000);

          break;
        case 'jupiter':
          // const jupiterBright = get('jupiterBrightstars');
          // const jupiterStars = get('jupiterStars');
          // const jupiterComet = get('jupiterComet');
          // const jupiterComet2 = get('jupiterComet2');
          // const jupiterComet3 = get('jupiterComet3');
          // const jupiterRadiance = get('jupiterRadiance');
          // const jupiterHand = get('jupiterHand');
          // const jupiterHand2 = get('jupiterHand2');
          // const jupiterMouth = get('jupiterMouth');
          // // const jupiterShip = get('jupiterSpaceship');
          // const jupiterEye = get('jupiterEye1');
          // const jupiterEye2 = get('jupiterEyes2');
          titleAnimation('Wow! Take a look at the big fellow. That must be Jupiter');
          var jupiterBrightTimeline = new TimelineMax({ delay: 4, repeat: 15 });
          var jupiterStarsTimeline = new TimelineMax({ delay: 2, repeat: 15 });
          var jupiterRadianceTimeline = new TimelineMax({ delay: 4, repeat: 10, repeatDelay: 3 });
          var jupiterCometOneTimeline = new TimelineMax({ delay: 18, repeat: 0 });
          var jupiterCometTwoTimeline = new TimelineMax({ delay: 8, repeat: 0 });
          var jupiterCometThreeTimeline = new TimelineMax({ delay: 18, repeat: 0 });
          var jupiterShipTimeline = new TimelineMax({ delay: 3, repeat: 0 });
          var jupiterEyeTimeline = new TimelineMax({ delay: 4, repeat: 15, repeatDelay: 4 });
          var jupiterEyeTwoTimeline = new TimelineMax({ delay: 4, repeat: 15, repeatDelay: 4 });

          var jupiterRadianceTween = TweenLite.to(jupiterRadiance, 5, { opacity: 0.25 });
          var jupiterRadianceTween2 = TweenLite.to(jupiterRadiance, 6, { opacity: 0.45 });
          var jupiterRadianceTween3 = TweenLite.to(jupiterRadiance, 3, { opacity: 0.35 });
          var jupiterRadianceTween4 = TweenLite.to(jupiterRadiance, 4, { opacity: 0.15 });
          var jupiterRadianceTween5 = TweenLite.to(jupiterRadiance, 5, { opacity: 0.55 });
          var jupiterRadianceTween6 = TweenLite.to(jupiterRadiance, 7, { opacity: 0.25 });
          jupiterRadianceTimeline.add(jupiterRadianceTween);
          jupiterRadianceTimeline.add(jupiterRadianceTween2);
          jupiterRadianceTimeline.add(jupiterRadianceTween3);
          jupiterRadianceTimeline.add(jupiterRadianceTween4);
          jupiterRadianceTimeline.add(jupiterRadianceTween5);
          jupiterRadianceTimeline.add(jupiterRadianceTween6);

          var jupiterEyeOneTween = TweenLite.to(jupiterEye, 0.1, { opacity: 0 });
          var jupiterEyeOneTween2 = TweenLite.to(jupiterEye, 0.1, { opacity: 1 });
          jupiterEyeTimeline.add(jupiterEyeOneTween);
          jupiterEyeTimeline.add(jupiterEyeOneTween2);
          var jupiterEyeTwoTween = TweenLite.to(jupiterEye2, 0.1, { opacity: 0 });
          var jupiterEyeTwoTween2 = TweenLite.to(jupiterEye2, 0.1, { opacity: 1 });
          jupiterEyeTwoTimeline.add(jupiterEyeTwoTween);
          jupiterEyeTwoTimeline.add(jupiterEyeTwoTween2);

          var jupiterStarsFade1 = TweenLite.to(jupiterStars, 4, { opacity: 0.3 });
          var jupiterStarsFade2 = TweenLite.to(jupiterStars, 4, { opacity: 1 });
          var jupiterStarsFade3 = TweenLite.to(jupiterStars, 4, { opacity: 0.2 });
          var jupiterStarsFade4 = TweenLite.to(jupiterStars, 4, { opacity: 0.6 });
          jupiterStarsTimeline.add(jupiterStarsFade1);
          jupiterStarsTimeline.add(jupiterStarsFade2);
          jupiterStarsTimeline.add(jupiterStarsFade3);
          jupiterStarsTimeline.add(jupiterStarsFade4);

          var jupiterBrightFade1 = TweenLite.to(jupiterBright, 3, { opacity: 0.3 });
          var jupiterBrightFade2 = TweenLite.to(jupiterBright, 3, { opacity: 1 });
          var jupiterBrightFade3 = TweenLite.to(jupiterBright, 3, { opacity: 0.2 });
          var jupiterBrightFade4 = TweenLite.to(jupiterBright, 3, { opacity: 0.6 });
          jupiterBrightTimeline.add(jupiterBrightFade1);
          jupiterBrightTimeline.add(jupiterBrightFade2);
          jupiterBrightTimeline.add(jupiterBrightFade3);
          jupiterBrightTimeline.add(jupiterBrightFade4);

          var jupitershipTween = TweenLite.to(jupiterShip, 2, { y: -300 });
          var jupitershipTween2 = TweenLite.to(jupiterShip, 2, { rotation: 30 });
          var jupitershipTween3 = TweenLite.to(jupiterShip, 2, { x: 300 });
          jupiterShipTimeline.add(jupitershipTween);
          jupiterShipTimeline.add(jupitershipTween2);
          jupiterShipTimeline.add(jupitershipTween3);

          var jupiterCometOneTween = TweenLite.to(jupiterComet, 8, { rotation: 40, x: 1800, opacity: 0.6 });
          jupiterCometOneTimeline.add(jupiterCometOneTween);

          var jupiterCometThreeTween = TweenLite.to(jupiterComet3, 12, { x: 2000, rotation: 40, opacity: 0.6 });
          var jupiterCometThreeTween2 = TweenLite.to(jupiterComet3, 12, { x: 2000, rotation: 40, opacity: 0.6 });
          jupiterCometThreeTimeline.add(jupiterCometThreeTween);
          jupiterCometThreeTimeline.add(jupiterCometThreeTween2);

          jupiterFire.delay(100).animate({ opacity: 0 }, 12000);
          jupiterFire2.delay(100).animate({ opacity: 0 }, 12000);
          break;
        case 'saturn':
          titleAnimation('Well, this one sure is a breath taker, just take a look at those rings.');
          var saturnBrightTimeline = new TimelineMax({ delay: 4, repeat: 15 });
          var saturnStarsTimeline = new TimelineMax({ delay: 2, repeat: 15 });
          var saturnEyeTimeline = new TimelineMax({ delay: 3, repeat: 15, repeatDelay: 4 });
          var saturnEyeTwoTimeline = new TimelineMax({ delay: 3, repeat: 15, repeatDelay: 4 });
          var saturnShipTimeline = new TimelineMax({ delay: 3, repeat: 0 });
          var saturnRingTimeline = new TimelineMax({ delay: 2, repeat: 15, repeatDelay: 1 });

          var saturnEyeOneTween = TweenLite.to(saturnEye, 0.1, { opacity: 0 });
          var saturnEyeOneTween2 = TweenLite.to(saturnEye, 0.1, { opacity: 1 });
          saturnEyeTimeline.add(saturnEyeOneTween);
          saturnEyeTimeline.add(saturnEyeOneTween2);
          var saturnEyeTwoTween = TweenLite.to(saturnEye2, 0.1, { opacity: 0 });
          var saturnEyeTwoTween2 = TweenLite.to(saturnEye2, 0.1, { opacity: 1 });
          saturnEyeTwoTimeline.add(saturnEyeTwoTween);
          saturnEyeTwoTimeline.add(saturnEyeTwoTween2);

          var saturnStarsFade1 = TweenLite.to(saturnStars, 4, { opacity: 0.3 });
          var saturnStarsFade2 = TweenLite.to(saturnStars, 4, { opacity: 1 });
          var saturnStarsFade3 = TweenLite.to(saturnStars, 4, { opacity: 0.2 });
          var saturnStarsFade4 = TweenLite.to(saturnStars, 4, { opacity: 0.6 });
          saturnStarsTimeline.add(saturnStarsFade1);
          saturnStarsTimeline.add(saturnStarsFade2);
          saturnStarsTimeline.add(saturnStarsFade3);
          saturnStarsTimeline.add(saturnStarsFade4);

          var saturnBrightFade1 = TweenLite.to(saturnBright, 3, { opacity: 0.3 });
          var saturnBrightFade2 = TweenLite.to(saturnBright, 3, { opacity: 1 });
          var saturnBrightFade3 = TweenLite.to(saturnBright, 3, { opacity: 0.2 });
          var saturnBrightFade4 = TweenLite.to(saturnBright, 3, { opacity: 0.6 });
          saturnBrightTimeline.add(saturnBrightFade1);
          saturnBrightTimeline.add(saturnBrightFade2);
          saturnBrightTimeline.add(saturnBrightFade3);
          saturnBrightTimeline.add(saturnBrightFade4);

          var saturnshipTween = TweenLite.to(saturnShip, 2, { y: -300 });
          var saturnshipTween2 = TweenLite.to(saturnShip, 2, { rotation: 30 });
          var saturnshipTween3 = TweenLite.to(saturnShip, 2, { x: 300 });
          saturnShipTimeline.add(saturnshipTween);
          saturnShipTimeline.add(saturnshipTween2);
          saturnShipTimeline.add(saturnshipTween3);

          var saturnRingTween = TweenLite.to(saturnRing, 4, { opacity: 0.55 });
          var saturnRingTween2 = TweenLite.to(saturnRing, 3, { opacity: 1 });
          var saturnRingTween3 = TweenLite.to(saturnRing, 4, { opacity: 0.45 });
          var saturnRingTween4 = TweenLite.to(saturnRing, 3, { opacity: 0.8 });
          var saturnRingTween5 = TweenLite.to(saturnRing, 4, { opacity: 0.65 });
          saturnRingTimeline.add(saturnRingTween);
          saturnRingTimeline.add(saturnRingTween2);
          saturnRingTimeline.add(saturnRingTween3);
          saturnRingTimeline.add(saturnRingTween4);
          saturnRingTimeline.add(saturnRingTween5);

          saturnFire.delay(2000).animate({ opacity: 0 }, 9000);
          saturnFire2.delay(2000).animate({ opacity: 0 }, 9000);

          break;
        case 'uranus':
          titleAnimation('Oh hey! It\'s Uranus.');
          var uranusBrightTimeline = new TimelineMax({ delay: 4, repeat: 15 });
          var uranusStarsTimeline = new TimelineMax({ delay: 2, repeat: 15 });
          var uranusEyeTimeline = new TimelineMax({ delay: 4, repeat: 15, repeatDelay: 4 });
          var uranusEyeTwoTimeline = new TimelineMax({ delay: 4, repeat: 15, repeatDelay: 4 });
          var uranusShipTimeline = new TimelineMax({ delay: 3, repeat: 0 });
          var uranusSpotsTimeline = new TimelineMax({ delay: 2, repeat: 10, repeatDelay: 2 });
          var uranusRadianceTimeline = new TimelineMax({ delay: 3, repeat: 10, repeatDelay: 3 });

          var uranusEyeOneTween = TweenLite.to(uranusEye, 0.1, { opacity: 0 });
          var uranusEyeOneTween2 = TweenLite.to(uranusEye, 0.1, { opacity: 1 });
          uranusEyeTimeline.add(uranusEyeOneTween);
          uranusEyeTimeline.add(uranusEyeOneTween2);
          var uranusEyeTwoTween = TweenLite.to(uranusEye2, 0.1, { opacity: 0 });
          var uranusEyeTwoTween2 = TweenLite.to(uranusEye2, 0.1, { opacity: 1 });
          uranusEyeTwoTimeline.add(uranusEyeTwoTween);
          uranusEyeTwoTimeline.add(uranusEyeTwoTween2);

          var uranusStarsFade1 = TweenLite.to(uranusStars, 4, { opacity: 0.3 });
          var uranusStarsFade2 = TweenLite.to(uranusStars, 4, { opacity: 1 });
          var uranusStarsFade3 = TweenLite.to(uranusStars, 4, { opacity: 0.2 });
          var uranusStarsFade4 = TweenLite.to(uranusStars, 4, { opacity: 0.6 });
          uranusStarsTimeline.add(uranusStarsFade1);
          uranusStarsTimeline.add(uranusStarsFade2);
          uranusStarsTimeline.add(uranusStarsFade3);
          uranusStarsTimeline.add(uranusStarsFade4);

          var uranusBrightFade1 = TweenLite.to(uranusBright, 3, { opacity: 0.3 });
          var uranusBrightFade2 = TweenLite.to(uranusBright, 3, { opacity: 1 });
          var uranusBrightFade3 = TweenLite.to(uranusBright, 3, { opacity: 0.2 });
          var uranusBrightFade4 = TweenLite.to(uranusBright, 3, { opacity: 0.6 });
          uranusBrightTimeline.add(uranusBrightFade1);
          uranusBrightTimeline.add(uranusBrightFade2);
          uranusBrightTimeline.add(uranusBrightFade3);
          uranusBrightTimeline.add(uranusBrightFade4);

          var uranusSpotsFade1 = TweenLite.to(get('uranusSpot1'), 3, { opacity: 0.3 });
          var uranusSpotsFade2 = TweenLite.to(get('uranusSpot2'), 3, { opacity: 1 });
          var uranusSpotsFade3 = TweenLite.to(get('uranusSpot3'), 3, { opacity: 0.2 });
          var uranusSpotsFade4 = TweenLite.to(get('uranusSpot4'), 3, { opacity: 0.6 });
          var uranusSpotsFade5 = TweenLite.to(get('uranusSpot5'), 3, { opacity: 0.3 });
          var uranusSpotsFade6 = TweenLite.to(get('uranusSpot6'), 3, { opacity: 1 });
          var uranusSpotsFade7 = TweenLite.to(get('uranusSpot7'), 3, { opacity: 0.2 });
          var uranusSpotsFade8 = TweenLite.to(get('uranusSpot8'), 3, { opacity: 0.6 });
          var uranusSpotsFade9 = TweenLite.to(get('uranusSpot9'), 3, { opacity: 0.6 });
          var uranusSpotsFade10 = TweenLite.to(get('uranusSpot1'), 3, { opacity: 0.7 });
          var uranusSpotsFade11 = TweenLite.to(get('uranusSpot2'), 3, { opacity: 0.2 });
          var uranusSpotsFade12 = TweenLite.to(get('uranusSpot3'), 3, { opacity: 0.6 });
          var uranusSpotsFade13 = TweenLite.to(get('uranusSpot4'), 3, { opacity: 0.9 });
          var uranusSpotsFade14 = TweenLite.to(get('uranusSpot5'), 3, { opacity: 0.8 });
          var uranusSpotsFade15 = TweenLite.to(get('uranusSpot6'), 3, { opacity: 0.2 });
          var uranusSpotsFade16 = TweenLite.to(get('uranusSpot7'), 3, { opacity: 0.8 });
          var uranusSpotsFade17 = TweenLite.to(get('uranusSpot8'), 3, { opacity: 0.4 });
          var uranusSpotsFade18 = TweenLite.to(get('uranusSpot9'), 3, { opacity: 0.7 });
          uranusSpotsTimeline.add(uranusSpotsFade1);
          uranusSpotsTimeline.add(uranusSpotsFade2);
          uranusSpotsTimeline.add(uranusSpotsFade3);
          uranusSpotsTimeline.add(uranusSpotsFade4);
          uranusSpotsTimeline.add(uranusSpotsFade5);
          uranusSpotsTimeline.add(uranusSpotsFade6);
          uranusSpotsTimeline.add(uranusSpotsFade7);
          uranusSpotsTimeline.add(uranusSpotsFade8);
          uranusSpotsTimeline.add(uranusSpotsFade9);
          uranusSpotsTimeline.add(uranusSpotsFade10);
          uranusSpotsTimeline.add(uranusSpotsFade11);
          uranusSpotsTimeline.add(uranusSpotsFade12);
          uranusSpotsTimeline.add(uranusSpotsFade13);
          uranusSpotsTimeline.add(uranusSpotsFade14);
          uranusSpotsTimeline.add(uranusSpotsFade15);
          uranusSpotsTimeline.add(uranusSpotsFade16);
          uranusSpotsTimeline.add(uranusSpotsFade17);
          uranusSpotsTimeline.add(uranusSpotsFade18);

          var uranusRadianceTween = TweenLite.to(uranusRadiance, 5, { opacity: 0.25 });
          var uranusRadianceTween2 = TweenLite.to(uranusRadiance, 6, { opacity: 0.45 });
          var uranusRadianceTween3 = TweenLite.to(uranusRadiance, 3, { opacity: 0.35 });
          var uranusRadianceTween4 = TweenLite.to(uranusRadiance, 4, { opacity: 0.15 });
          var uranusRadianceTween5 = TweenLite.to(uranusRadiance, 5, { opacity: 0.55 });
          var uranusRadianceTween6 = TweenLite.to(uranusRadiance, 7, { opacity: 0.25 });
          uranusRadianceTimeline.add(uranusRadianceTween);
          uranusRadianceTimeline.add(uranusRadianceTween2);
          uranusRadianceTimeline.add(uranusRadianceTween3);
          uranusRadianceTimeline.add(uranusRadianceTween4);
          uranusRadianceTimeline.add(uranusRadianceTween5);
          uranusRadianceTimeline.add(uranusRadianceTween6);

          var uranusshipTween = TweenLite.to(uranusShip, 2, { y: 350, x: 350 });
          uranusShipTimeline.add(uranusshipTween);

          uranusFire.delay(1800).animate({ opacity: 0 }, 9000);
          uranusFire2.delay(1800).animate({ opacity: 0 }, 9000);
          break;
        case 'neptune':

          titleAnimation('It\'s Neptune! that must be the deepest blue I\'ve ever seen.');
          $('.arrow-container').animate({ opacity: 0 }, 3000);
          console.log($('.arrow-container'));
          var neptuneBrightTimeline = new TimelineMax({ delay: 4, repeat: 15 });
          var neptuneStarsTimeline = new TimelineMax({ delay: 2, repeat: 15 });
          var neptuneEyeTimeline = new TimelineMax({ delay: 4, repeat: 15, repeatDelay: 4 });
          var neptuneEyeTwoTimeline = new TimelineMax({ delay: 4, repeat: 15, repeatDelay: 4 });
          var neptuneShipTimeline = new TimelineMax({ delay: 3, repeat: 0 });
          var neptuneRadianceTimeline = new TimelineMax({ delay: 2, repeat: 10, repeatDelay: 3 });
          var neptuneSpotsTimeline = new TimelineMax({ delay: 2, repeat: 10, repeatDelay: 2 });

          var neptuneEyeOneTween = TweenLite.to(neptuneEye, 0.1, { opacity: 0 });
          var neptuneEyeOneTween2 = TweenLite.to(neptuneEye, 0.1, { opacity: 1 });
          neptuneEyeTimeline.add(neptuneEyeOneTween);
          neptuneEyeTimeline.add(neptuneEyeOneTween2);
          var neptuneEyeTwoTween = TweenLite.to(neptuneEye2, 0.1, { opacity: 0 });
          var neptuneEyeTwoTween2 = TweenLite.to(neptuneEye2, 0.1, { opacity: 1 });
          neptuneEyeTwoTimeline.add(neptuneEyeTwoTween);
          neptuneEyeTwoTimeline.add(neptuneEyeTwoTween2);

          var neptuneStarsFade1 = TweenLite.to(neptuneStars, 4, { opacity: 0.3 });
          var neptuneStarsFade2 = TweenLite.to(neptuneStars, 4, { opacity: 1 });
          var neptuneStarsFade3 = TweenLite.to(neptuneStars, 4, { opacity: 0.2 });
          var neptuneStarsFade4 = TweenLite.to(neptuneStars, 4, { opacity: 0.6 });
          neptuneStarsTimeline.add(neptuneStarsFade1);
          neptuneStarsTimeline.add(neptuneStarsFade2);
          neptuneStarsTimeline.add(neptuneStarsFade3);
          neptuneStarsTimeline.add(neptuneStarsFade4);

          var neptuneBrightFade1 = TweenLite.to(neptuneBright, 3, { opacity: 0.3 });
          var neptuneBrightFade2 = TweenLite.to(neptuneBright, 3, { opacity: 1 });
          var neptuneBrightFade3 = TweenLite.to(neptuneBright, 3, { opacity: 0.2 });
          var neptuneBrightFade4 = TweenLite.to(neptuneBright, 3, { opacity: 0.6 });
          neptuneBrightTimeline.add(neptuneBrightFade1);
          neptuneBrightTimeline.add(neptuneBrightFade2);
          neptuneBrightTimeline.add(neptuneBrightFade3);
          neptuneBrightTimeline.add(neptuneBrightFade4);

          var neptuneshipTween = TweenLite.to(neptuneShip, 2, { y: -300 });
          var neptuneshipTween2 = TweenLite.to(neptuneShip, 2, { rotation: 30 });
          var neptuneshipTween3 = TweenLite.to(neptuneShip, 4, { x: 500 });
          neptuneShipTimeline.add(neptuneshipTween);
          neptuneShipTimeline.add(neptuneshipTween2);
          neptuneShipTimeline.add(neptuneshipTween3);

          var neptuneRadianceTween = TweenLite.to(neptuneRadiance, 5, { opacity: 0.25 });
          var neptuneRadianceTween2 = TweenLite.to(neptuneRadiance, 6, { opacity: 0.45 });
          var neptuneRadianceTween3 = TweenLite.to(neptuneRadiance, 3, { opacity: 0.35 });
          var neptuneRadianceTween4 = TweenLite.to(neptuneRadiance, 4, { opacity: 0.15 });
          var neptuneRadianceTween5 = TweenLite.to(neptuneRadiance, 5, { opacity: 0.55 });
          var neptuneRadianceTween6 = TweenLite.to(neptuneRadiance, 7, { opacity: 0.25 });
          neptuneRadianceTimeline.add(neptuneRadianceTween);
          neptuneRadianceTimeline.add(neptuneRadianceTween2);
          neptuneRadianceTimeline.add(neptuneRadianceTween3);
          neptuneRadianceTimeline.add(neptuneRadianceTween4);
          neptuneRadianceTimeline.add(neptuneRadianceTween5);
          neptuneRadianceTimeline.add(neptuneRadianceTween6);

          var neptuneSpotsFade1 = TweenLite.to(get('neptuneSpot1'), 3, { opacity: 0.4 });
          var neptuneSpotsFade2 = TweenLite.to(get('neptuneSpot2'), 3, { opacity: 0.5 });
          var neptuneSpotsFade3 = TweenLite.to(get('neptuneSpot3'), 3, { opacity: 0.5 });
          var neptuneSpotsFade4 = TweenLite.to(get('neptuneSpot4'), 3, { opacity: 0.3 });
          var neptuneSpotsFade5 = TweenLite.to(get('neptuneSpot1'), 3, { opacity: 0.8 });
          var neptuneSpotsFade6 = TweenLite.to(get('neptuneSpot2'), 3, { opacity: 1 });
          var neptuneSpotsFade7 = TweenLite.to(get('neptuneSpot3'), 3, { opacity: 0.9 });
          var neptuneSpotsFade8 = TweenLite.to(get('neptuneSpot4'), 3, { opacity: 0.7 });
          neptuneSpotsTimeline.add(neptuneSpotsFade1);
          neptuneSpotsTimeline.add(neptuneSpotsFade2);
          neptuneSpotsTimeline.add(neptuneSpotsFade3);
          neptuneSpotsTimeline.add(neptuneSpotsFade4);
          neptuneSpotsTimeline.add(neptuneSpotsFade5);
          neptuneSpotsTimeline.add(neptuneSpotsFade6);
          neptuneSpotsTimeline.add(neptuneSpotsFade7);
          neptuneSpotsTimeline.add(neptuneSpotsFade8);

          neptuneFire.delay(1000).animate({ opacity: 0 }, 12000);
          neptuneFire2.delay(1000).animate({ opacity: 0 }, 12000);
          break;
      }

      if (anchorLink === 'neptune') {
        $('.arrow-container').animate({ opacity: 0 }, 1000);
      } else {
        $('.arrow-container').animate({ opacity: 1 }, 1000);
      }
    },

    onLeave: function onLeave(index, nextIndex, direction) {}

  });

  $('.js-textbox').slick({
    autoplaySpeed: 7000,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $('.play').on('click', function (e) {
    var event = $(e.target.offsetParent);
    console.log(event);
  });

  // $('.js-textbox').on('afterChange', (event, slick) => {
  //   let target = event.currentTarget;
  //   $(target).slick('slickPlay');
  // });
});
