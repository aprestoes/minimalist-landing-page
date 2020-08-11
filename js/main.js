/* IMPORTANT: Each array must have at least 1 element
  and you must remove all elements within "#rotating-words"
  and "#rotating-paragraphs".
  You can also bypass the dynamic elements entirely
  and uncomment the elements in index.html
*/
var loadDynamically = false;

/* The beginning of the header sentence has a black font.
  The headersBlack element of index i, will be added to
  the corresponding headersBlue element of index i.
  E.g. headersBlack[i] + headersBlue[i]
  headersBlack[0] + headersBlue[0]
  "Hi, I'm " + "Dan" = "Hi, I'm Dan"
  
  If one array is larger than the other, the last element
  of the smaller array will be used for the rest of the
  rotations. You can also use empty strings ""
  E.g. headersBlack[1] doesn't exist
  "Hi, I'm a student." 
*/
var headersBlack = [ //headersBlack + headersBlue, e.g. "Hi, I'm Dan"
  "Hi, I'm "
];

var headersBlue = [ //Descriptive and re-affirming words here
  "Dan.",
];

/* If true, the paragraph beneath the header will also
  rotate. If disabled, the first element of the array
  will be used for the paragraph.
  "rotating-paragraphs" div must also be of class
  "slider"
*/
var rotateParagraph = false;

/* Connects paragraph to header slider so they slide
  at the same time.
*/
var connectParagraphToHeaders = false;

/* The paragraphs to rotate between. If rotateParagraph is disabled,
  the first element also serves as the only paragraph. You can
  also use tags such as <a>, <span>, and a few more here.
*/
var rotatingParagraphs = [
  "Currently studying at Carleton University for computer science with a specialization in software engineering and a minor in applied linguistics. <span>Whew.</span>"
];

var addRotatingWords = function() {
  
  var wordsDiv = document.getElementById("rotating-words");
  var paragraphsDiv = document.getElementById("rotating-paragraphs");
  var largestArrayLength;
  
  if (!(paragraphsDiv.classList.contains("slider"))) {
    paragraphsDiv.classList.add("slider");
  }
  
  if (rotateParagraph) {
    largestArrayLength = Math.max(headersBlack.length, headersBlue.length, rotatingParagraphs.length);
  } else {
    largestArrayLength = Math.max(headersBlack.length, headersBlue.length);
  }
  
  for (var index = 0; index < largestArrayLength; index++) {
    //Temp variables
    var headerBeginning;
    var headerEnd;
    var paragraph = rotatingParagraphs[0]; //Default
    
    if (index >= headersBlack.length) { //Use last element
      headerBeginning = headersBlack[headersBlack.length - 1];
    } else {
      headerBeginning = headersBlack[index];
    }
    
    if (index >= headersBlue.length) {
      headerEnd = headersBlue[headersBlue.length - 1];
    } else {
      headerEnd = headersBlue[index];
    }
    
    if (index >= rotatingParagraphs.length) {
      paragraph = rotatingParagraphs[rotatingParagraphs.length - 1];
    } else {
      paragraph = rotatingParagraphs[index];
    }
    
    //Add headers
    var newDiv = document.createElement("div");
    newDiv.className = "item";
    
    var newElement = document.createElement("h4");
    var textBeginning = document.createTextNode(headerBeginning);
    var blueElement = document.createElement("a");
    var textBlue = document.createTextNode(headerEnd);
    
    newElement.appendChild(textBeginning);
    blueElement.appendChild(textBlue);
    blueElement.className = "highlighted-words"; //Used for dark theme
    newElement.appendChild(blueElement);
    
    newDiv.appendChild(newElement);
    wordsDiv.appendChild(newDiv);
    
    //Add paragraphs
    var newPDiv = document.createElement("div");
    newPDiv.className = "item";
      
    var newPElement = document.createElement("p");
    var textParagraph = document.createTextNode("");
    newPElement.innerHTML = paragraph; //So you can use html tags inside of paragraph.
      
    newPElement.appendChild(textParagraph);
    if (connectParagraphToHeaders) {
      newDiv.appendChild(newPElement);  
    } else {
      newPDiv.appendChild(newPElement);
      paragraphsDiv.appendChild(newPDiv);
    }
  }
};

var startTinySlider = function () {
  var sliders = document.querySelectorAll(".slider");
  sliders.forEach(slider => {
    var tnsSlider = tns({
      container: slider,
      mode: 'gallery', //carousel is also nice
      controls: false,
      nav: false,
      autoplay: true,
      autoplayButtonOutput: false,
      mouseDrag: true
    });
  });
  /*tns({
    
  });*/
}

//On start
if (loadDynamically) {
  addRotatingWords();
}
startTinySlider();