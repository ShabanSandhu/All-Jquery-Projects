// STARTING JAVASCRIPT

// variables declerations
let addOptionEmpolyeBtn = $("#addOptionEmpolyeBtn");
let empolyeNameInput = $("#empolyeNameInput");
let empolyeEmailInput = $("#empolyeEmailInput");
let empolyeDateInput = $("#empolyeDateInput");
let empolyeNumberInput = $("#empolyeNumberInput");
let addEmpolyeBtn = $("#addEmpolyeBtn");
let updateEmpolyeBtn = $("#updateEmpolyeBtn");
let deleteEmpolyeBtn = $("#deleteEmpolyeBtn");
let clearFilteringBtn = $("#clearFilteringBtn");
let impolyeSearchInput = $("#impolyeSearchInput");
let impolyesearchBtn = $("#impolyesearchBtn");
let lableForName = $("#lableForName");
let lableForEmail = $("#lableForEmail");
let lableForDate = $("#lableForDate");
let lableForNumber = $("#lableForNumber");
let tBody = $("#tBody");
let modalForEmpolyeForm = $("#modalForEmpolyeForm")
let modalForAddEmpolye = $("#modalForAddEmpolye")
let submitForAddEmpolyeBtn = $("#submitForAddEmpolyeBtn")
let resetForAddEmpolyeBtn = $("#resetForAddEmpolyeBtn")
let modalForUpdateEmpolye = $("#modalForUpdateEmpolye")
let submitForUpdateEmpolyeBtn = $("#submitForUpdateEmpolyeBtn")
let resetForUpdateEmpolyeBtn = $("#resetForUpdateEmpolyeBtn")
let modalForConfirmForDelete = $("#modalForConfirmForDelete")
let yesImpolyeDeleteBtn = $("#yesImpolyeDeleteBtn")
let noImpolyeDeleteBtn = $("#noImpolyeDeleteBtn")
let selectImgBtn = $("#selectImgBtn");
let inputFile = $("#inputFile")
let IMG = $("#IMG")
var selectedImageUrl; // To store the selected image URL
// end variables declerations



// for email validation
let emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //camelCase  // PascalCase
// end email validation



// default empolyee
let empolyeList = [];
// end default employe



// this funtion for empty inputs
function emptyInputs() {
    empolyeNameInput.val(""), empolyeEmailInput.val(""), empolyeDateInput.val(""), empolyeNumberInput.val("")
}
// ending



// add option btn
addOptionEmpolyeBtn.click(function () {
    modalForEmpolyeForm.show();
    modalForEmpolyeForm.addClass('modal fade show');
    empolyeNameInput.focus()
    updateEmpolyeBtn.prop("disabled", true);
    addEmpolyeBtn.prop("disabled", false);

    $(".btn-close").click(function () {
        modalForEmpolyeForm.hide();
        emptyInputs()
        IMG.attr('src', 'https://kalasalingam.ac.in/wp-content/uploads/2021/08/Achievements-dummy-profile.png');
    });

});
// end add option btn



// table body kaliyee
function showData() {
    debugger


    // get emoplyee in local storage and show in table
    empolyeList = JSON.parse(localStorage.getItem("empolyeList"));
    if (!empolyeList) {
        empolyeList = []
        return;
    }
    // end get emoplyee in local storage and show in table


    // table start
    let tableBoady = ""

    for (let i = 0; i < empolyeList.length; i++) {

        tableBoady += `<tr><th scope="row"> ${(i + 1)} </th>
             <td><img src=${empolyeList[i].img} id="imgForTable" class = "img-fluid"></td>
             <td>${empolyeList[i].yourName}</td>
             <td>${empolyeList[i].yourEmail}</td>
             <td>${empolyeList[i].DOB}</td>
             <td>${empolyeList[i].number}</td>
             <td><button type='button' class='btn btn-info bttn shadow'  onclick = editeEmpolye(${i})><i class="fa-solid fa-file-pen fa-beat"></i></button>
             <button type='button' class='btn btn-danger bttn shadow' onclick = deleteImpolye('${empolyeList[i].yourEmail}')><i class="fa-solid fa-trash fa-beat"></i></button></td></tr>`
    }
    // table end

    let table = tableBoady
    tBody.html(table)
}
// end table body kaliyee



// this funtion for upload img
inputFile.on('change', function (e) {
    debugger
    var inputFile1 = e.target;

    if (inputFile1.files && inputFile1.files[0]) {
        var reader = new FileReader();
        reader.onload = function (event) {
            selectedImageUrl = event.target.result; // Store the image URL in the variable
            IMG.attr('src', selectedImageUrl);
        };
        reader.readAsDataURL(inputFile1.files[0]);
    }

});
// ending for uploading



// add empolyee kaliyee
addEmpolyeBtn.click(function () {
    debugger

    if (!empolyeNameInput.val()) {
        empolyeNameInput.focus()
        lableForName.html(`<i class="fa-solid fa-triangle-exclamation fa-beat" id = "font"></i>   Please enter the valied Name`)
        lableForName.show().addClass("cssClass")


        setTimeout(() => {
            lableForName.hide()
            lableForName.removeClass("cssClass");
        }, 2000); // Alert modal will close after 2 seconds
        return
    }


    // 

    else if (!empolyeEmailInput.val() || !empolyeEmailInput.val().match(emailValid)) {

        empolyeEmailInput.val("")
        empolyeEmailInput.focus()
        lableForEmail.html(`<i class="fa-solid fa-triangle-exclamation fa-beat" id = "font"></i>   Please enter the valied Email`)
        lableForEmail.show().addClass("cssClass")

        setTimeout(() => {
            lableForEmail.hide()
            lableForEmail.removeClass("cssClass");
        }, 2000); // Alert modal will close after 2 seconds
        return
    }



    else if (!empolyeDateInput.val()) {
        empolyeDateInput.focus()
        lableForDate.html(`<i class="fa-solid fa-triangle-exclamation fa-beat" id = "font"></i>   Please enter the valied Number`)
        lableForDate.show().addClass("cssClass")

        setTimeout(() => {
            lableForDate.hide()
            lableForDate.removeClass("cssClass");
        }, 2000); // Alert modal will close after 2 seconds
        return
    }



    else if (!empolyeNumberInput.val()) {
        empolyeNumberInput.focus()
        lableForNumber.html(`<i class="fa-solid fa-triangle-exclamation fa-beat" id = "font"></i>   Please enter the valied Number`)
        lableForNumber.show().addClass("cssClass")

        setTimeout(() => {
            lableForNumber.hide()
            lableForNumber.removeClass("cssClass");
        }, 2000); // Alert modal will close after 2 seconds
        return
    }



    else if (localStorage.getItem("empolyeList")) {

        var GLSIA = localStorage.getItem("empolyeList");
        var CSTAOGLSIA = JSON.parse(GLSIA)
        let currentEmail = empolyeEmailInput.val()

        let empolyeFind = CSTAOGLSIA.find((item) => item.yourEmail.toLowerCase() == currentEmail.toLowerCase())

        if (empolyeFind) {
            alert("If the employee is already registered with their Gmail account and you also want to register, please enter your correct email.")
            empolyeEmailInput.val("")
            empolyeEmailInput.focus()
            lableForEmail.html(`<i class="fa-solid fa-triangle-exclamation fa-beat" id = "font"></i>   Please enter the valied Email`)
            lableForEmail.show().addClass("cssClass")
            setTimeout(() => {
                lableForEmail.hide()
                lableForEmail.removeClass("cssClass");
            }, 2000); // Alert modal will close after 2 seconds
            return;
        }
    }


    // when inputs are fillup
    modalForEmpolyeForm.hide();
    modalForEmpolyeForm.removeClass('modal fade show');
    // end 

    // confirm box
    modalForAddEmpolye.show();
    modalForAddEmpolye.addClass('modal fade show');
    $(".btn-close").click(function () {
        debugger
        modalForAddEmpolye.hide();
        emptyInputs();
    });
    // end

})
// end add empolyee kaliyee



// submit btn funtions
submitForAddEmpolyeBtn.click(function () {
    debugger
    // for added empolye in array

    let newEmpolye =
    {
        img: selectedImageUrl || 'https://kalasalingam.ac.in/wp-content/uploads/2021/08/Achievements-dummy-profile.png',
        yourName: empolyeNameInput.val(),
        yourEmail: empolyeEmailInput.val(),
        DOB: empolyeDateInput.val(),
        number: empolyeNumberInput.val()
    }
    
    empolyeList.push(newEmpolye);

    // emplyee add in local storage
    localStorage.setItem("empolyeList", JSON.stringify(empolyeList));
    // end emplyee add in local storage

    showData()

    modalForAddEmpolye.hide();
    modalForAddEmpolye.removeClass('modal fade show');
    emptyInputs()
    IMG.attr('src', 'https://kalasalingam.ac.in/wp-content/uploads/2021/08/Achievements-dummy-profile.png');
    selectedImageUrl = null; 
    // end

})
// ending



// reset btn funtion
resetForAddEmpolyeBtn.click(function () {

    modalForAddEmpolye.hide();
    modalForAddEmpolye.removeClass('modal fade show');
    emptyInputs()

})



// edit data
function editeEmpolye(i) {

    debugger
    modalForEmpolyeForm.show();
    modalForEmpolyeForm.addClass('modal fade show');
    addEmpolyeBtn.prop("disabled", true);
    updateEmpolyeBtn.prop("disabled", false);
    empolyeEmailInput.prop("disabled", true);

    // updated
    IMG.attr('src', empolyeList[i].img);
    empolyeNameInput.val(empolyeList[i].yourName)
    empolyeEmailInput.val(empolyeList[i].yourEmail)
    empolyeDateInput.val(empolyeList[i].DOB)
    empolyeNumberInput.val(empolyeList[i].number)
    currentEmail = empolyeEmailInput.val();

    $(".btn-close").click(function () {
        modalForEmpolyeForm.hide();
        emptyInputs()
        empolyeEmailInput.prop("disabled", false);
        IMG.attr('src', 'https://kalasalingam.ac.in/wp-content/uploads/2021/08/Achievements-dummy-profile.png');
    });

}
// end edit data




// update empolyee btn
updateEmpolyeBtn.click(function () {

    debugger

    // validation code
    if (!empolyeNameInput.val()) {
        empolyeNameInput.focus()
        lableForName.html(`<i class="fa-solid fa-triangle-exclamation fa-beat" id = "font"></i>   Please enter the valied Name`)
        lableForName.show().addClass("cssClass")


        setTimeout(() => {
            lableForName.hide()
            lableForName.removeClass("cssClass");
        }, 2000); // Alert modal will close after 2 seconds
        return
    }


    else if (!empolyeEmailInput.val() || !empolyeEmailInput.val().match(emailValid)) {

        empolyeEmailInput.val("")
        empolyeEmailInput.focus()
        lableForEmail.html(`<i class="fa-solid fa-triangle-exclamation fa-beat" id = "font"></i>   Please enter the valied Email`)
        lableForEmail.show().addClass("cssClass")

        setTimeout(() => {
            lableForEmail.hide()
            lableForEmail.removeClass("cssClass");
        }, 2000); // Alert modal will close after 2 seconds
        return
    }


    else if (!empolyeDateInput.val()) {
        empolyeDateInput.focus()
        lableForDate.html(`<i class="fa-solid fa-triangle-exclamation fa-beat" id = "font"></i>   Please enter the valied Number`)
        lableForDate.show().addClass("cssClass")

        setTimeout(() => {
            lableForDate.hide()
            lableForDate.removeClass("cssClass");
        }, 2000); // Alert modal will close after 2 seconds
        return
    }


    else if (!empolyeNumberInput.val()) {
        empolyeNumberInput.focus()
        lableForNumber.html(`<i class="fa-solid fa-triangle-exclamation fa-beat" id = "font"></i>   Please enter the valied Number`)
        lableForNumber.show().addClass("cssClass")

        setTimeout(() => {
            lableForNumber.hide()
            lableForNumber.removeClass("cssClass");
        }, 2000); // Alert modal will close after 2 seconds
        return
    }

    // ending validation


    // when inputs are fillup
    modalForEmpolyeForm.hide();
    modalForEmpolyeForm.removeClass('modal fade show');
    empolyeEmailInput.prop("disabled", false);
    // end 

    // confirm box open
    modalForUpdateEmpolye.show();
    modalForUpdateEmpolye.addClass('modal fade show');
    $(".btn-close").click(function () {
        modalForUpdateEmpolye.hide();
        emptyInputs()
        IMG.attr('src', 'https://kalasalingam.ac.in/wp-content/uploads/2021/08/Achievements-dummy-profile.png');
    });
    // end

})
//  ending




// submit btn for updated empolyee funtions
submitForUpdateEmpolyeBtn.click(function () {
    debugger

    let index = empolyeList.findIndex((item) => item.yourEmail === currentEmail);

    // main coding start
    let newObj = {

        img: selectedImageUrl !== undefined && selectedImageUrl !== null && selectedImageUrl !== '' ? selectedImageUrl : empolyeList[index].img,
        yourName: empolyeNameInput.val(),
        yourEmail: empolyeEmailInput.val(),
        DOB: empolyeDateInput.val(),
        number: empolyeNumberInput.val(),
    }

    empolyeList[index] = newObj
    
    // emplyee add in local storage
    localStorage.setItem("empolyeList", JSON.stringify(empolyeList));
    // end emplyee add in local storage

    showData()
    // ending main coding

    modalForUpdateEmpolye.hide();
    modalForUpdateEmpolye.removeClass('modal fade show');
    emptyInputs()
    IMG.attr('src', 'https://kalasalingam.ac.in/wp-content/uploads/2021/08/Achievements-dummy-profile.png');
    selectedImageUrl = null;

})
// ending




// reset btn funtion
resetForUpdateEmpolyeBtn.click(function () {

    modalForUpdateEmpolye.hide();
    modalForUpdateEmpolye.removeClass('modal fade show');
    emptyInputs()

})
// end




// delete btn funtion 
function deleteImpolye(inputEmail) {
    debugger

    let confrm = confirm("are you want to delete empolye")
    if (confrm == true) {

        let filteredData = empolyeList.filter((item) => item.yourEmail != inputEmail);
        empolyeList = filteredData;

        // emplyee add in local storage
        localStorage.setItem("empolyeList", JSON.stringify(empolyeList));
        // end emplyee add in local storage

        showData()
    }


}
//  ending




// // yes delete empolyee funtion
// yesImpolyeDeleteBtn.click(function () {
//     modalForConfirmForDelete.hide()
//     modalForConfirmForDelete.removeClass('modal fade show')
// })
// //  ending


// // no delete empolyee
// noImpolyeDeleteBtn.click(function () {
//     modalForConfirmForDelete.hide()
//     modalForConfirmForDelete.removeClass('modal fade show')
// })
// // end



// bydefult empolyee list 
showData()
// end bydefult empolyee list


// end javascript