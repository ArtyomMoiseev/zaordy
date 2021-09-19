let saveFile = () => {
        const name = document.getElementById('first-name');
        const lastName = document.getElementById('last-name');
        const email = document.getElementById('email');
        const company = document.getElementById('company');
        const city = document.getElementById('city');
        const msg = document.getElementById('message');

        let flag = true;

        if (validateInput(name.value) == false) {
            flag = false;
            let elm = document.getElementById('first-name');
            elm.classList.add('invalid-input');
        }

        if (validateInput(lastName.value) == false) {
            flag = false;
            let elm = document.getElementById('last-name');
            elm.classList.add('invalid-input');
        }

        if (validateInput(city.value) == false) {
            flag = false;
            let elm = document.getElementById('city');
            elm.classList.add('invalid-input');
        }

        if (validateInput(msg.value) == false) {
            flag = false;
            let elm = document.getElementById('message');
            elm.classList.add('invalid-input');
        }

        if (validateEmail(email.value) == false) {
            let elm = document.getElementById('email');
            elm.classList.add('invalid-input');
            flag = false;
        }

        if (flag)
            sendFile(name, lastName, email, company, city, msg);
    }


function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  return re.test(email);
}

function validateInput(input) {
    if (input === "")
        return false;
    if (input.length < 5)
        return false;
}

function sendFile(name, lastName, email, company, city, msg) {

        let data = 
            '\r First name: ' + name.value + ' \r\n ' +
            'Last name: ' +lastName.value + ' \r\n ' +
            'Email: ' + email.value + ' \r\n ' + 
            'Company: ' + company.value + ' \r\n ' + 
            'City: ' + city.value + ' \r\n ' + 
            'Message: ' + msg.value;
        
        const textToBLOB = new Blob([data], { type: 'text/plain' });
        const sFileName = 'formData.txt';    // The file to save the data.

        let newLink = document.createElement("a");
        newLink.download = sFileName;

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }

        newLink.click();
}
