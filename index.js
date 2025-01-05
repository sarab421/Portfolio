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

// Popup function
function showPopup(message) {
  // Create modal elements if they don't exist
  if (!document.getElementById("myModal")) {
    let modal = document.createElement("div");
    modal.setAttribute("id", "myModal");
    modal.setAttribute("class", "modal");

    let modalContent = document.createElement("div");
    modalContent.setAttribute("class", "modal-content");

    let closeButton = document.createElement("span");
    closeButton.setAttribute("class", "close");
    closeButton.innerHTML = "&times;";

    let messageP = document.createElement("p");
    messageP.setAttribute("id", "modalMessage");

    modalContent.appendChild(closeButton);
    modalContent.appendChild(messageP);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Add event listener for the close button
    closeButton.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }

  // Set the message and display the modal
  document.getElementById("modalMessage").textContent = message;
  document.getElementById("myModal").style.display = "block";
}


// Send Message Function

function sendMessage() {
  const userEmail = document.getElementById("contact_me_input").value;
  let userMessage = document.getElementById("user_message").value;
  const userName = document.getElementById("user_name").value;

  if (userMessage === "") {
    userMessage = "No message Entered";
  }

  const templateParams = {
    email: userEmail,
    message: userMessage,
    userName: userName,
  };

  if (userEmail !== "" && userName !== "") {
    emailjs.send("service_1sdptov", "template_zhlxtcm", templateParams).then(
      function (response) {
        showPopup("Message sent successfully!");
        document.getElementById("contact_me_input").value = "";
        document.getElementById("user_message").value = "";
        document.getElementById("user_name").value = "";
      },
      function (error) {
        console.error("Failed to send email:", error);
      }
    );
  } else {
    showPopup("Please Enter Your Email and Your Name");
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

let b =2;
function showBar(){
  if(b%2==0){

 document.getElementById("menu_icon_bar").style.display = "block";
 b++;
  }
  else if(b%2!=0){
     document.getElementById("menu_icon").style.display = "block";
     document.getElementById("menu_icon_bar").style.display = "none";
     b++;
  }
 
}