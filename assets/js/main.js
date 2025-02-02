function sendInquiry(event){
    event.preventDefault();
    
    let name = document.querySelector('name').value;
    let email = document.querySelector('email').value;
    let message = document.querySelector('message').value;

    if(name === '' || email === '' || message === ''){
        alert('Please fill all required fields');
        return;
    }

    const formInquiry = {
        fullName: name,
        clientEmail: email,
        msgInquiry: message      
    }

    alert("Good Day! " + formInquiry.fullName + " we got your inquiry, we will get back to your email " + clientEmail + " soon." + "Thank you!");
}

function projectDetails1(){
    document.getElementById("project1Details").innerText = "Project 1: This is a project that is about a website for a company that sells shoes. The website is designed to help the company reach more customers and increase sales. The website has a user-friendly interface that allows customers to easily browse through the products and make purchases. The website also has a blog section where the company can share news and updates with customers. The website is designed to be responsive and works well on all devices. The website is built using HTML, CSS, and JavaScript.";
}

function projectDetails2(){
    alert("Project 2: This is a project that is about a website for a company that sells shoes. The website is designed to help the company reach more customers and increase sales. The website has a user-friendly interface that allows customers to easily browse through the products and make purchases. The website also has a blog section where the company can share news and updates with customers. The website is designed to be responsive and works well on all devices. The website is built using HTML, CSS, and JavaScript.");
}

function projectDetails3(){
    alert("Project 3: This is a project that is about a website for a company that sells shoes. The website is designed to help the company reach more customers and increase sales. The website has a user-friendly interface that allows customers to easily browse through the products and make purchases. The website also has a blog section where the company can share news and updates with customers. The website is designed to be responsive and works well on all devices. The website is built using HTML, CSS, and JavaScript.");
}


