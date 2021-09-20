
// Slider One Images
var imagesOne = ['img/design/event/eventLogo.png','img/design/event/eventPoster.png','img/design/event/eventWristbands.png','img/design/event/eventMap.png','img/design/event/eventCampMap.png'];
var indexOne = 0;
var the_imageOne = document.getElementById("slider1img");
the_imageOne.src = imagesOne[0];

// Slider One
function show_imageOne(directionOne)
{
if (directionOne == "left")
{
  indexOne--;
  // ^ -- subtracts one and returns a value, so going left is going backwards, ie subtracting one spot.
}
else
{
  indexOne++;
  // ^ ++ increment, does the opposite of --. Adds instead of subtracts
  indexOne %= imagesOne.length;
}

if (indexOne < 0)
{
  indexOne = imagesOne.length - 1;
  // ^ this is how going to the previous image works
}

the_imageOne.src = imagesOne[indexOne];
// ^This code makes the image source come from the index
}
// ---------------------------------------------Slider One Ends---------------------------------------------

// Slider Two Images
var imagesTwo = ['img/design/info/infoTwo.png','img/design/info/infoOne.png','img/design/info/infoThree.png','img/design/info/zineCover.png','img/design/info/zineInside.png','img/design/info/zineInsideTwo.png'];
var indexTwo = 0;
var the_imageTwo = document.getElementById("slider2img");
the_imageTwo.src = imagesTwo[0];

// Slider Two
function show_imageTwo(directionTwo)
{
if (directionTwo == "left")
{
  indexTwo--;
  // ^ -- subtracts one and returns a value, so going left is going backwards, ie subtracting one spot.
}
else
{
  indexTwo++;
  // ^ ++ increment, does the opposite of --. Adds instead of subtracts
  indexTwo %= imagesTwo.length;
}

if (indexTwo < 0)
{
  indexTwo = imagesTwo.length - 1;
  // ^ this is how going to the previous image works
}

the_imageTwo.src = imagesTwo[indexTwo];
// ^This code makes the image source come from the index
}
// ---------------------------------------------Slider Two Ends---------------------------------------------
// Slider Three
// Slider Three Images
var imagesThree = ['img/design/packaging/packagingMockup.png','img/design/packaging/packagingOne.png','img/design/packaging/packagingTwo.png','img/design/packaging/packagingThree.png'];
var indexThree = 0;
var the_imageThree = document.getElementById("slider3img");
the_imageThree.src = imagesThree[0];

// Slider Two
function show_imageThree(directionThree)
{
if (directionThree == "left")
{
  indexThree--;
  // ^ -- subtracts one and returns a value, so going left is going backwards, ie subtracting one spot.
}
else
{
  indexThree++;
  // ^ ++ increment, does the opposite of --. Adds instead of subtracts
  indexThree %= imagesThree.length;
}

if (indexThree < 0)
{
  indexThree = imagesThree.length - 1;
  // ^ this is how going to the previous image works
}

the_imageThree.src = imagesThree[indexThree];
// ^This code makes the image source come from the index
}
// ---------------------------------------------Slider Three Ends---------------------------------------------
// Slider Four

var imagesFour = ['img/design/branding/logo.png','img/design/branding/shirtmockup.png','img/design/branding/van.png','img/design/branding/patch.png'];
var indexFour = 0;
var the_imageFour = document.getElementById("slider4img");
the_imageFour.src = imagesFour[0];

// Slider Two
function show_imageFour(directionFour)
{
if (directionFour == "left")
{
  indexFour--;
  // ^ -- subtracts one and returns a value, so going left is going backwards, ie subtracting one spot.
}
else
{
  indexFour++;
  // ^ ++ increment, does the opposite of --. Adds instead of subtracts
  indexFour %= imagesFour.length;
}

if (indexFour < 0)
{
  indexFour = imagesFour.length - 1;
  // ^ this is how going to the previous image works
}

the_imageFour.src = imagesFour[indexFour];
// ^This code makes the image source come from the index
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

var contactBtn = document.querySelector('.contactBtn');
contactBtn.onclick = function () {
  location.href = "index.html";

  document.querySelector('.contact-head').scrollIntoView({
    behavior: 'smooth'
  });

}
