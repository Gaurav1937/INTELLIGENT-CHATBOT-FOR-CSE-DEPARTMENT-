var crsr=document.querySelector("#cursor")  //used to select any element text to js
var blur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px"; // i.e position of crsr from left of page= position of actual mouse/cursor acc to x axis ,in px
    crsr.style.top= dets.y+"px"; // i.e position of crsr from right of page= position of actual mouse/cursor acc to y axis, in px
    blur.style.left=dets.x- 190 +"px"; //-190 i.e sifting it to 190 px more left which is half of cursor-blur width
    blur.style.top= dets.y-190+"px";    //-190 i.e sifting it to 190 px more down which is half of cursor-blur width so our cursor is around middle of cursor blur
});


gsap.to("#nav",{
    backgroundColor:"#000",
    //note:- when using function same as in css here we use camelcase here i.e capital c or t  instead of -c or -t, in case of 'backgreound-colour' it become-> 'backgroundColour'
    duration:0.5,
    height:"130px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
       // markers:true,         //can use it again when neede to see the making of start and end
        start:"top -10%",
        end:"top -11%",
        scrub:2,    //to make it appear smoothly, it can be true or from 1 to 5 according to need
    }
})

function toggleChat() {
    // Toggle the visibility of the chat container
    var chatContainer = document.getElementById('chatContainer');
    chatContainer.style.display = (chatContainer.style.display === 'none' || chatContainer.style.display === '') ? 'block' : 'none';
}
    function sendMessage() {
  var userInput = document.getElementById('userInput').value;
   if (userInput.trim() !== '') {
     appendMessage('user', userInput);

    // Clear user input field
    document.getElementById('userInput').value = '';

    // Simulate processing time before the bot responds
  setTimeout(function () {
    // Generate a dynamic response based on user input
    var botResponse = generateBotResponse(userInput);
    appendMessage('bot', botResponse);
}, 500);
}
}

function appendMessage(sender, message) {
var chatLog = document.getElementById('chatLog');
var messageDiv = document.createElement('div');
messageDiv.className = sender === 'user' ? 'user-message' : 'bot-message';
messageDiv.textContent = message;
chatLog.appendChild(messageDiv);

// Scroll to the bottom of the chat log to show the latest message
chatLog.scrollTop = chatLog.scrollHeight;
}

function generateBotResponse(userInput) {
// Implement your custom chatbot logic here based on user input
userInput = userInput.toLowerCase();

if (userInput.includes('hello') || userInput.includes('hi')) {
return 'Hello! How can I assist you today?';
} else if (userInput.includes('courses')|| userInput.includes('course')) {
return 'We offer various courses in Computer Science and Engineering. M. Tech Computer Science and EngineeringB.Tech CSBS (Computer Science and Business Systems)B.Tech CSE (Hons.) with specialization in AI and Data ScienceB.Tech CSE (Hons.) with specialization in Machine Learning and Artificial IntelligenceB.Tech CSE (Hons.) with specialization in Artificial IntelligenceB.Tech CSE (Hons.) with specialization in CybersecurityB.Tech CSE (Hindi)B.Tech CSE (Hons.) with specialization in Internet of Things & Cyber SecurityB.Tech Computer Science and EngineeringYou can check our program details on the website.';
} else if (userInput.includes('faculty')) {
return 'Our faculty members are experts in various fields, providing quality education and guidance to students.';
} else if(userInput.includes('facilities')){
    return'Well-equipped laboratories for a conducive learning environment.Specialized labs: Cloud Computing, High-Performance Computing, Big Data Analytics, and IoT. Private cloud infrastructure (IaaS and SaaS) accessible via intranet.High-performance supercomputer (5 Teraflops) and Hadoop Map-Reduce cluster for parallel processing. Cloud-based Web development setup using Microsoft Azure in the Project Lab.Beowulf Cluster with Open MPI for parallel processing tasks';
}else {
return 'Im sorry, I didnt understand that. Can you please clarify or ask a different question?';
}
}

gsap.to("#main",{
    backgroundColor:"#130C0C",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true, 
        start:"top -25%",
        end:"top -70%",
        scrub:2,
    }
})