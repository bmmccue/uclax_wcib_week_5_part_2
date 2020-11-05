// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS

var storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:,they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
let insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {

  let newStory = "storyText";
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',yItem);
  newStory = newStory.replace(':insertx:',zItem);
}

  if(customName.value !== '') {
      let name = customName.value;
      newStory = customName.replace ('Bob','name');

    }

    if(document.getElementById("uk").checked) {
      let weight = Math.round(st=lb*0.071429) + 'stone';
      let temperature =  Math.round(℃=(℉-32)/1.8) + 'centigrade';
      newStory = newStory.replace ('94 fahrenheit', 'temperature');
      newStory = newStory.replace ('300 pounds', 'weight');

    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
  }
