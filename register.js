function check() {
    let companyName = document.forms["register"]["companyName"];
    let personName = document.forms["register"]["personName"];
    let phoneNumber = document.forms["register"]["phoneNumber"];
    let boothSize = document.getElementById("boothSize");
    let numberChair = document.forms["register"]["numberChair"];

    if (companyName.value == "" || companyName.value == null) {
        alert("Invalid : Please fill the company name");
    } 
    else if (personName.value == "" || personName.value == null) {
        alert("Invalid : Please fill the person name");
    }
    else if (phoneNumber.value == "" || phoneNumber.value == null) {
        alert("Invalid : Please fill the phone number");
    }
    else if (boothSize.selectedIndex == 0) {
        alert("Invalid : Please select the booth size");
    }
    else if (numberChair.value != "" && numberChair.value !=null) {
        if ((numberChair.value > 10) || (numberChair.value<1) || ( isNaN(numberChair.value))) {
            alert("Invalid : The number of chairs must be between 1 to 10");
        }
    }
    

}