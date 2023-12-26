
// variables declerations
let modalForSignupForm = $("#modalForSignupForm")
let modalForLoginForm = $("#modalForLoginForm")
let signupOptionBtn = $("#signupOptionBtn")
let loginOptionBtn = $("#loginOptionBtn")
let signupOptionBtn2 = $("#signupOptionBtn2")
let loginOptionBtn2 = $("#loginOptionBtn2")
let signupBtn = $("#signupBtn")
let loginBtn = $("#loginBtn")
let firstNameInputForSignup = $("#firstNameInputForSignup")
let lastNameInputForSignup = $("#lastNameInputForSignup")
let emailInputForSignup = $("#emailInputForSignup")
let passwordInputForSignup = $("#passwordInputForSignup")
let lableForFirstNameInSignup = $("#lableForFirstNameInSignup")
let lableForLastNameInSignup = $("#lableForLastNameInSignup")
let lableForEmailInSignup = $("#lableForEmailInSignup")
let lableForPasswordInSignup = $("#lableForPasswordInSignup")
let emailInputForLogin = $("#emailInputForLogin")
let passwordInputForLogin = $("#passwordInputForLogin")
let lableForEmailInLogin = $("#lableForEmailInLogin")
let lableForPasswordInLogin = $("#lableForPasswordInLogin")
let modalForForgetPassword = $("#modalForForgetPassword")
let forgetPasswordBtn = $("#forgetPasswordBtn")
let emailInputForForgetPassword = $("#emailInputForForgetPassword")
let passwordInputForForgetPassword = $("#passwordInputForForgetPassword")
let lableForNewPassword = $("#lableForNewPassword")
let changePasswordBtn = $("#changePasswordBtn")
let logoutBtn = $("#logoutBtn")
let loginUserInput = $("#loginUserInput")
let lableForLoginUser = $("#lableForLoginUser")
let usersListBtn = $("#usersListBtn")
let modalForUsersList = $("#modalForUsersList")
// end variables declerations


// for email validation
let emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //camelCase  // PascalCase
// end email validation


let usersList = JSON.parse(localStorage.getItem('usersList')) || [];


// empty funtions for singnup inputs
function emptySignupInputs() {
    firstNameInputForSignup.val(""), lastNameInputForSignup.val(""), emailInputForSignup.val(""), passwordInputForSignup.val("")
}
// end empty funtions for singnup inputs


function emptyLoginInputs() {
    emailInputForLogin.val(""), passwordInputForLogin.val("")
}


// modal open workin

// default show modal on page load
$(document).ready(function () {
    modalForLoginForm.show()
    emailInputForLogin.focus()
    modalForLoginForm.addClass("overlay")

    $(".btn-close").click(
        function () {
            modalForLoginForm.hide()
            modalForLoginForm.removeClass("overlay")
            emptyLoginInputs()
        }
    )
})
// end default show modal on page load


// login option btn
loginOptionBtn.click(function () {
    modalForSignupForm.hide()
    modalForLoginForm.show()
    emailInputForLogin.focus()
    modalForLoginForm.addClass("overlay")

    $(".btn-close").click(
        function () {
            emptyLoginInputs()
            modalForLoginForm.hide()
            modalForLoginForm.removeClass("overlay")
        }
    )

})
// end login option btn


// signup option btn
signupOptionBtn.click(function () {

    modalForLoginForm.hide()
    modalForSignupForm.show()
    firstNameInputForSignup.focus()
    modalForSignupForm.addClass("overlay")
    emptySignupInputs()

    $(".btn-close").click(
        function () {
            modalForSignupForm.hide()
            modalForSignupForm.removeClass("overlay")
            emptySignupInputs()
        }
    )

})
// end signup option btn


// login option btn2
loginOptionBtn2.click(function () {
    modalForSignupForm.hide()
    modalForLoginForm.show()
    emailInputForLogin.focus()
    modalForLoginForm.addClass("overlay")


    $(".btn-close").click(
        function () {
            modalForLoginForm.hide()
            modalForLoginForm.removeClass("overlay")

        }
    )
})
// end login option btn2


// signupoption2 btn
signupOptionBtn2.click(function () {

    modalForLoginForm.hide()
    modalForSignupForm.show()
    firstNameInputForSignup.focus()
    modalForSignupForm.addClass("overlay")
    emptySignupInputs()

    $(".btn-close").click(
        function () {
            modalForSignupForm.hide()
            modalForSignupForm.removeClass("overlay")
            emptySignupInputs()
        }
    )
})
// end signupoption2 btn

// end modal open workin






// --------------*********@@@224354reeter@@@@%%%%%%^&&&&&&&&&8






// main funtion working


// users table 
function showData() {
    debugger

    // // get emoplyee in local storage and show in table
    // if (!usersList) {
    //     usersList = []
    //     return;
    // }
    // // end get emoplyee in local storage and show in table


    // table start
    let tableBoady = ""

    for (let i = 0; i < usersList.length; i++) {

        tableBoady += `<tr><th scope="row"> ${(i + 1)} </th>
             <td>${usersList[i].firstName} ${usersList[i].lastName}</td>
             <td>${usersList[i].email}</td>
             <td><button type='button' class='btn btn-primary shadow' onclick = deleteUser('${usersList[i].email}')>Delete <i class="fa-solid fa-user-minus"></i></button></td></tr>`
    }
    // table end

    $("#tableBody").html(tableBoady)

}
// end users table


//signup btn
signupBtn.click(function () {

    debugger

    let newUser =
    {
        firstName: firstNameInputForSignup.val(),
        lastName: lastNameInputForSignup.val(),
        email: emailInputForSignup.val(),
        password: passwordInputForSignup.val()
    }


    // validation for inputs
    if (!firstNameInputForSignup.val()) {
        firstNameInputForSignup.focus()
        lableForFirstNameInSignup.html(`<i class="fa-solid fa-triangle-exclamation fa-beat" id = "font"></i>   Please enter the valied first Name`)
        lableForFirstNameInSignup.show().addClass("cssClass")


        setTimeout(() => {
            lableForFirstNameInSignup.hide()
            lableForFirstNameInSignup.removeClass("cssClass");
        }, 1000); // Alert modal will close after 2 seconds
        return
    }


    else if (!lastNameInputForSignup.val()) {
        lastNameInputForSignup.focus()
        lableForLastNameInSignup.html(`<i class="fa-solid fa-triangle-exclamation fa-beat" id = "font"></i>   Please enter the valied last Name`)
        lableForLastNameInSignup.show().addClass("cssClass")


        setTimeout(() => {
            lableForLastNameInSignup.hide()
            lableForLastNameInSignup.removeClass("cssClass");
        }, 1000); // Alert modal will close after 2 seconds
        return
    }


    else if (!emailInputForSignup.val() || !emailInputForSignup.val().match(emailValid)) {
        emailInputForSignup.focus()
        lableForEmailInSignup.html(`<i class="fa-solid fa-triangle-exclamation fa-beat" id = "font"></i>   Please enter the valied email`)
        lableForEmailInSignup.show().addClass("cssClass")


        setTimeout(() => {
            lableForEmailInSignup.hide()
            lableForEmailInSignup.removeClass("cssClass");
        }, 1000); // Alert modal will close after 2 seconds
        return
    }


    else if (!passwordInputForSignup.val()) {
        passwordInputForSignup.focus()
        lableForPasswordInSignup.html(`<i class="fa-solid fa-triangle-exclamation fa-beat" id = "font"></i>   Please enter the valied password`)
        lableForPasswordInSignup.show().addClass("cssClass")


        setTimeout(() => {
            lableForPasswordInSignup.hide()
            lableForPasswordInSignup.removeClass("cssClass");
        }, 1000); // Alert modal will close after 2 seconds
        return
    }


    // this validation for check user registeration
    else if (localStorage.getItem("usersList")) {

        var GLSIA = localStorage.getItem("usersList");
        var CSTAOGLSIA = JSON.parse(GLSIA)
        let currentEmail = emailInputForSignup.val()

        let usersFind = CSTAOGLSIA.find((item) => item.email.toLowerCase() == currentEmail.toLowerCase())

        if (usersFind) {

            // if local storage is available and email is matched
            Swal.fire({
                position: "top",
                icon: 'error',
                title: 'Oops...',
                text: 'users are alredy registered enter the valied email',
            }).then((result) => {

                if (result.isConfirmed) {

                    emailInputForSignup.val("")
                    emailInputForSignup.focus()
                    lableForEmailInSignup.html(`<i class="fa-solid fa-triangle-exclamation fa-beat" id = "font"></i>   Please enter the valied Email`)
                    lableForEmailInSignup.show().addClass("cssClass")

                    setTimeout(() => {
                        lableForEmailInSignup.hide()
                        lableForEmailInSignup.removeClass("cssClass");
                    }, 1000); // Alert modal will close after 2 seconds

                }
            })
            // end if local storage is available and email is matched
            return;
        }


        modalForSignupForm.hide();
        modalForSignupForm.removeClass('modal fade show');

        // confirm if local storage is available but email is not matched
        Swal.fire({
            position: "top",
            title: 'Are you sure?',
            text: "You won't be able to registered this employee!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#005ae0',
            cancelButtonColor: '129, 130, 127',
            confirmButtonText: 'Yes, registered it!'
        }).then((result) => {
            if (result.isConfirmed) {

                // userRegistered()

                var GetLocalStorageIsAvailable = localStorage.getItem("usersList");
                let convertStringToArrayOfGetLocalStorageIsAvailable = JSON.parse(GetLocalStorageIsAvailable)
                convertStringToArrayOfGetLocalStorageIsAvailable.push(newUser)
                localStorage.setItem("usersList", JSON.stringify(convertStringToArrayOfGetLocalStorageIsAvailable))

                usersList.push(newUser)
                localStorage.setItem('usersList', JSON.stringify(usersList));

                showData()

                Swal.fire({
                    position: "top",
                    icon: 'success',
                    title: 'user has been successfully registered',
                    confirmButtonColor: '#005ae0',
                    confirmButtonText: 'OK'
                }).then((result) => {

                    if (result.isConfirmed) {

                        modalForLoginForm.show()
                        emailInputForLogin.focus()
                        modalForLoginForm.addClass("overlay")

                        $(".btn-close").click(
                            function () {
                                emptyLoginInputs()
                                modalForLoginForm.hide()
                                modalForLoginForm.removeClass("overlay")
                            }
                        )

                    }

                })

            }

            else {
                emptySignupInputs()
            }

        })
        // end confirm if local storage is available but email is not matched
        return
    }
    // end this validation for check user registeration


    modalForSignupForm.hide();
    modalForSignupForm.removeClass('modal fade show');


    // //if local storage is not then store user in locale
    Swal.fire({
        position: "top",
        title: 'Are you sure?',
        text: "You won't be able to registered this employee!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#005ae0',
        cancelButtonColor: '129, 130, 127',
        confirmButtonText: 'Yes, registered it!'
    }).then((result) => {
        if (result.isConfirmed) {

            // userRegistered()

            usersList.push(newUser)
            localStorage.setItem('usersList', JSON.stringify(usersList));
            showData()

            var converArrayToString = JSON.stringify(usersList)
            localStorage.setItem("usersList", converArrayToString)
            emptySignupInputs()

            Swal.fire(
                {
                    position: "top",
                    icon: 'success',
                    title: 'user has been successfully registered',
                    confirmButtonColor: '#005ae0',
                    confirmButtonText: 'OK'
                }
            ).then((result) => {

                if (result.isConfirmed) {

                    modalForLoginForm.show()
                    emailInputForLogin.focus()
                    modalForLoginForm.addClass("overlay")

                    $(".btn-close").click(
                        function () {
                            emptyLoginInputs()
                            modalForLoginForm.hide()
                            modalForLoginForm.removeClass("overlay")
                        }
                    )

                }

            })

        }

        else {
            emptySignupInputs()
        }

    })
    // // end if local storage is not

})
//end signup btn  



// login btn
loginBtn.click(function () {

    debugger

    if (!emailInputForLogin.val() || !emailInputForLogin.val().match(emailValid)) {
        emailInputForLogin.val("")
        emailInputForLogin.focus()
        lableForEmailInLogin.html(`<i class="fa-solid fa-triangle-exclamation fa-beat" id = "font"></i>   Please enter the valied email`)
        lableForEmailInLogin.show().addClass("cssClass")


        setTimeout(() => {
            lableForEmailInLogin.hide()
            lableForEmailInLogin.removeClass("cssClass");
        }, 1000); // Alert modal will close after 2 seconds
        return
    }


    else if (!passwordInputForLogin.val()) {
        passwordInputForLogin.focus()
        lableForPasswordInLogin.html(`<i class="fa-solid fa-triangle-exclamation fa-beat" id = "font"></i>   Please enter the valied password`)
        lableForPasswordInLogin.show().addClass("cssClass")


        setTimeout(() => {
            lableForPasswordInLogin.hide()
            lableForPasswordInLogin.removeClass("cssClass");
        }, 1000); // Alert modal will close after 2 seconds
        return
    }


    else if (!localStorage.getItem("usersList")) {

        Swal.fire({
            position: "top",
            icon: 'error',
            title: 'Oops...',
            text: 'users are not registered',
        }).then((result) => {

            if (result.isConfirmed) {
                emptyLoginInputs()
                modalForLoginForm.hide()
                modalForSignupForm.show()
            }
        })
        // end if local storage is available and email is matched
        return;

    }


    else if (localStorage.getItem("usersList")) {


        var GetLocalStorageIsAvailable = localStorage.getItem("usersList");
        let ConvertStringToArrayOfGetLocalStorageIsAvailable = JSON.parse(GetLocalStorageIsAvailable)

        let currentEmail = emailInputForLogin.val()
        let currentPassword = passwordInputForLogin.val()
        let userFind = ConvertStringToArrayOfGetLocalStorageIsAvailable.find((item) => item.email == currentEmail && item.password == currentPassword)

        if (userFind) {

            emptyLoginInputs()
            modalForLoginForm.hide();
            modalForLoginForm.removeClass('modal fade show');

            Swal.fire({
                position: "top",
                icon: 'success',
                title: 'User are Login successfully',
                // text: 'user are login',
            })
                .then((result) => {

                    if (result.isConfirmed) {
                        usersListBtn.show()
                        logoutBtn.show()
                        loginUserInput.show()
                        lableForLoginUser.show()
                        loginUserInput.val(`${userFind.firstName} ${userFind.lastName}`)
                        signupOptionBtn2.hide()
                        loginOptionBtn2.hide()
                        return
                    }
                })
        }

        else {
            emptyLoginInputs()

            Swal.fire({

                position: "top",
                icon: 'error',
                title: 'Oops...',
                text: 'user are not registered!',
            })
                .then((result) => {

                    if (result.isConfirmed) {

                        emptyLoginInputs()
                        modalForLoginForm.hide();
                        modalForLoginForm.removeClass('modal fade show');

                        modalForSignupForm.show();
                        modalForSignupForm.addClass('modal fade show');
                        modalForSignupForm.addClass("overlay")

                        firstNameInputForSignup.focus()

                        $(".btn-close").click(
                            function () {
                                modalForSignupForm.hide()
                                modalForSignupForm.removeClass("overlay")
                                emptySignupInputs()
                            }
                        )

                        return
                    }
                })
        }
    }
})
// end login btn



// forget password btn
forgetPasswordBtn.click(function () {

    if (!emailInputForLogin.val() || !emailInputForLogin.val().match(emailValid)) {
        emailInputForLogin.val("")
        emailInputForLogin.focus()
        lableForEmailInLogin.html(`<i class="fa-solid fa-triangle-exclamation fa-beat" id = "font"></i>   Please enter the valied email`)
        lableForEmailInLogin.show().addClass("cssClass")

        setTimeout(() => {
            lableForEmailInLogin.hide()
            lableForEmailInLogin.removeClass("cssClass");
        }, 1000); // Alert modal will close after 2 seconds
        return
    }


    else if (!localStorage.getItem("usersList")) {

        Swal.fire({
            position: "top",
            icon: 'error',
            title: 'Oops...',
            text: 'user are not registered this email',
        }).then((result) => {

            if (result.isConfirmed) {
                emailInputForLogin.val("")
            }
        })
        // end if local storage is available and email is matched
        return;

    }


    else if (localStorage.getItem("usersList")) {

        var getLocalStorageIsAvailable = localStorage.getItem("usersList");
        let convertStringToArrayOfGetLocalStorageIsAvailable = JSON.parse(getLocalStorageIsAvailable)

        let currentEmail = emailInputForLogin.val()
        let userFind = convertStringToArrayOfGetLocalStorageIsAvailable.find((item) => item.email == currentEmail)


        if (userFind) {

            modalForLoginForm.hide()
            modalForForgetPassword.show()
            modalForForgetPassword.addClass("overlay")

            $(".btn-close").click(
                function () {
                    modalForForgetPassword.hide()
                    emailInputForForgetPassword.val("")
                    passwordInputForForgetPassword.val("")
                    modalForForgetPassword.removeClass("overlay")
                }
            )

            emailInputForForgetPassword.val(currentEmail)
            passwordInputForForgetPassword.focus()

            lableForNewPassword.html(`<i class="fa-solid fa-triangle-exclamation fa-beat" id = "font"></i>  enter the new password`)
            lableForNewPassword.show().addClass("cssClass")

            setTimeout(() => {
                lableForNewPassword.hide()
                lableForNewPassword.removeClass("cssClass");
            }, 2000); // Alert modal will close after 2 seconds
            return
        }

        else {
            Swal.fire({
                position: "top",
                icon: 'error',
                title: 'Oops...',
                text: 'user are not registered this email',
            }).then((result) => {

                if (result.isConfirmed) {
                    emailInputForLogin.val("")
                }
            })
            // end if local storage is available and email is matched
            return;
        }


    }


})
// end 



// change password btn
changePasswordBtn.click(function () {

    if (!passwordInputForForgetPassword.val()) {
        lableForNewPassword.html(`<i class="fa-solid fa-triangle-exclamation fa-beat" id = "font"></i>  Enter the new password`)
        lableForNewPassword.show().addClass("cssClass")

        setTimeout(() => {
            lableForNewPassword.hide()
            lableForNewPassword.removeClass("cssClass");
        }, 2000); // Alert modal will close after 2 seconds
        return
    }


    // password change code 
    var getLocalStorageIsAvailable = localStorage.getItem("usersList");
    let convertStringToArrayOfGetLocalStorageIsAvailable = JSON.parse(getLocalStorageIsAvailable)
    let currentEmail = emailInputForForgetPassword.val()
    let matchedEmail = convertStringToArrayOfGetLocalStorageIsAvailable.find((item) => item.email == currentEmail)
    let findIndexOfMatchedEmail = convertStringToArrayOfGetLocalStorageIsAvailable.findIndex((item) => item.email == currentEmail)

    let CurrentPassword = passwordInputForForgetPassword.val()
    matchedEmail.password = CurrentPassword

    convertStringToArrayOfGetLocalStorageIsAvailable[findIndexOfMatchedEmail] = matchedEmail
    localStorage.setItem("usersList", JSON.stringify(convertStringToArrayOfGetLocalStorageIsAvailable))

    modalForForgetPassword.hide()
    modalForForgetPassword.removeClass("overlay")
    // end password change code 


    Swal.fire({
        position: "top",
        icon: 'success',
        title: 'User password has been successfully changed',
        // text: 'user are login',
    })
        .then((result) => {

            if (result.isConfirmed) {

                emailInputForForgetPassword.val("")
                passwordInputForForgetPassword.val("")
                return
            }

        })


})
// end change password btn



// logout btn working
logoutBtn.click(function () {

    usersListBtn.hide()
    logoutBtn.hide()
    loginUserInput.val()
    loginUserInput.hide()
    lableForLoginUser.hide()

    loginOptionBtn2.show()
    signupOptionBtn2.show()

    modalForLoginForm.show()
    emailInputForLogin.focus()
    modalForLoginForm.addClass("overlay")

    $(".btn-close").click(
        function () {
            modalForLoginForm.hide()
            modalForLoginForm.removeClass("overlay")
            emptyLoginInputs()
        }
    )

})



// users list btn
usersListBtn.click(function () {

    modalForUsersList.show()
    modalForUsersList.addClass("overlay")

    $(".btn-close").click(
        function () {
            modalForUsersList.hide()
            modalForUsersList.removeClass("overlay")
        }
    )

})
// end 



// delete user account
function deleteUser(inputEmail) {
    debugger

    Swal.fire({
        position: "top",
        title: 'Are you sure?',
        text: "You won't be able to delete account!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#26c6da',
        cancelButtonColor: '#dc143c',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {

            let filteredData = usersList.filter((item) => item.email != inputEmail);
            usersList = filteredData;

            // emplyee add in local storage
            localStorage.setItem("usersList", JSON.stringify(usersList));
            // end emplyee add in local storage

            showData()

            Swal.fire(
                {
                    position: "top",
                    icon: 'success',
                    title: 'empoloyee has been successfully deleted',
                    confirmButtonColor: '#26c6da',
                    confirmButtonText: 'OK'
                }
            )

        }
    })

}
// end delete user account 


// bydefult empolyee list 
showData()
// end bydefult empolyee list


// end this main funtion working
