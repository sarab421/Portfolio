let a = 0;
function showMenubar() {
  let sidebar = document.getElementById("right_side_nav");
  let whatsaapButton = document.getElementById("whatsapp_btn");
  let closeIt = document.getElementById("closeIt");
  if (a == 0) {
    sidebar.style.display = "block";
    whatsaapButton.style.display = "block";
    closeIt.style.display = "none";

    a = 1;
  } else if (a == 1) {
    sidebar.style.display = "none";
    whatsaapButton.style.display = "none";
    closeIt.style.display = "block";
    a = 0;
  }
}

function sendMessage() {
  const userEmail = document.getElementById("contact_me_input").value;
  let userMessage = document.getElementById("user_message").value;
  const userName = document.getElementById("user_name").value;

if(userMessage ==""){
  userMessage="No message Entered"
}

  const templateParams = {
    email: userEmail,
    message: userMessage,
    userName: userName,  
  };

  if(userEmail !="" && userName != ""){
      emailjs.send("service_1sdptov", "template_zhlxtcm", templateParams).then(
        function (response) {
          alert("Email sent successfully!");
          document.getElementById("contact_me_input").value = "";
          document.getElementById("user_message").value="";
          document.getElementById("user_name").value="";
        },
        function (error) {
          console.error("Failed to send email:", error);
        }
      );
  }
  else{
    alert("Please Enter Your Email and Your Name")
  }

}

 //Sending Gmail
 function send_mail(){
  var email = "darsarab421@@egmail.com";
  var subject = "Enter Your Sbject";
  var body = "Your Message Body";
  var mailtoLink =
    "mailto:" +
    email +
    "?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(body);

  // Open the mailto link
  window.location.href = mailtoLink;
 }