
// Slider One Images
var imagesOne = ['img/web/travel/one.png','img/web/travel/two.png','img/web/travel/three.png','img/web/travel/four.png','img/web/travel/five.png','img/web/travel/six.png'];
console.log(imagesOne);
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
var imagesTwo = ['img/web/finance/one.png','img/web/finance/two.png','img/web/finance/three.png','img/web/finance/four.png'];
console.log(imagesTwo);
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
