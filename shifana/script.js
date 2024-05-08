


  
       

    document.addEventListener('DOMContentLoaded', function() {
        const links = [
            { id: 'home', selector: 'a[href="#home"]' },
            { id: 'about', selector: 'a[href="#about"]' },
            { id: 'services', selector: 'a[href="#services"]' },
            { id: 'portfolio', selector: 'a[href="#portfolio"]' },
            { id: 'contact', selector: 'a[href="#contact"]' }
        ];
    
        links.forEach(link => {
            const element = document.querySelector(link.selector);
            if (element) {
                element.addEventListener('click', function(event) {
                    event.preventDefault();
                    smoothScrollTo(link.id);
                });
            }
        });
    
        function smoothScrollTo(sectionId) {
            let scrollPosition = 0;
            if (sectionId !== 'home') {
                const section = document.getElementById(sectionId);
                if (section) {
                    const headerHeight = document.querySelector('header').offsetHeight;
                    scrollPosition = section.offsetTop - headerHeight;
                }
            }
    
            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });
        }
    });
    

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message")




function sendEmail() {
    const bodyMessage = `Full Name : ${fullName.value}<br>
    Email : ${email.value}<br> 
    Phone Number : ${phone.value}<br>
    Message : ${mess.value}<br> `;

    Email.send({
        SecureToken :"52dd4efb-45b0-42d0-bb2b-4e701d0534f6" ,
        To : 'shifanabacker11@gmail.com',
        From : "shifanabacker11@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK"){
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });
        }
      }
    );
}


function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items ) {

        if(item.value == ""){
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if (items[1].value != "" ) {
            checkEmail();
        }

        items[1].addEventListener("keyup",() => {
            checkEmail();
        })
        
        item.addEventListener("keyup",() => {
            if(item.value != " " ) {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else{
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }

}


function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

    const errorTxtEmail = document.querySelector(".error-txt.email");

    if(!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if(email.value != "") {
            errorTxtEmail.innerText = "Enter a valid email address";
        }
        else {
            errorTxtEmail.innerText = "Email can't be blank";
        }

    }
    else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}   

form.addEventListener("submit" , (e) => {
    e.preventDefault();
    checkInputs();


    if(!fullName.classList.contains("error")
     && !email.classList.contains("error") 
    && !phone.classList.contains("error") 
    && !mess.classList.contains("error") ){
        sendEmail();    

        form.reset();
        return false;
    }

   
})

const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', function() {
  this.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// JavaScript to handle click event on navigation list items
const navListItems = document.querySelectorAll('.nav-links li');

navListItems.forEach(item => {
  item.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior

    menuIcon.classList.remove('active');
    navLinks.classList.remove('active');

    const targetId = this.querySelector('a').getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    const headerHeight = document.querySelector('header').offsetHeight;
    const targetOffset = targetSection.offsetTop - headerHeight;

    window.scrollTo({
      top: targetOffset,
      behavior: 'smooth'
    });
  });
});
