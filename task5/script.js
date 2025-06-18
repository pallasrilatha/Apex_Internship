function submitContact(e){
  e.preventDefault();
  const msg = document.getElementById("confirmation");
  msg.innerText = "Thanks! Your message was sent.";
  e.target.reset();
}
