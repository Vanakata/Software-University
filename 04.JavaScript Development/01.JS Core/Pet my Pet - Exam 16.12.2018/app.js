function startApp() {

    sessionStorage.clear();
    showHideMenuLinks();

    let kinveyAppKey = "kid_B14uRRQg4";
    let kinveyAppSecret = "35ccf401b1e84cfeb081e2ad03e4a5d9";
    let kinveyBasicUrl = "https://baas.kinvey.com/";
    let kinveyAppAuthHeaders = { 'Authorization': "Basic " + btoa(kinveyAppKey + ":" + kinveyAppSecret) };

    let loginView = $("#loginView").on("click", showLoginView);
    let registerView = $("#registerView").on("click", showRegisterView);
    let registerUserButton = $("#submitRegister").on("click", registerUser);
    let loginUserbutton = $("#submitLogin").on("click", loginUser);
    let logOutUser = $("#logOutUser").on("click", logOut);
    let myPetsView = $("#myPetsView").on("click", showMyPets);
    let createNewPetView = $("#createNewPet").on("click", showAddNewPetView);
    let homeView = $("#homeView").on("click", showAllPets);
    let likesButton = $("#petLikes").on("click", plusLike);
    let allPetsView = $("#allPetsCategory").on("click", showAllPets);
    let catsCategory = $("#catsCategory").on("click", showAllCats);
    let dogsCategory = $("#dogsCategory").on("click", showAllDogs);
    let parrotsCategory = $("#parrotsCategory").on("click", showAllParrots);
    let reptilesCategory = $("#reptilesCategory").on("click", showAllReptiles);
    let otherCategory = $("#otherCategory").on("click", showAllOther);
    let editMyPetButton = $("#editMyPet").on("click", showEditMenu);
    $("form").submit(function (event) {

        event.preventDefault();
    });


    $(document).on({
        ajaxStart: function () {
            $('#loadingBox').show()
        },
        ajaxStop: function () {
            $('#loadingBox').hide()
        }
    })
    $('#infoBox', '#errorBox').on('click', function () {
        $(this).fadeOut()
    })

    function showInfo(message) {
        $('#infoBox').show()
        $('#infoBox > span').text(message)
        setTimeout(function () {
            $('#infoBox').fadeOut()
        }, 3000)
    }

    function showError(error) {
        $('#errorBox').show()
        $('#errorBox > span').text(error)
        $('#errorBox').on('click', function () {
            $(this).fadeOut()
        })
    }

    function handleAjaxError(response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0)
            errorMsg = "Cannot connect due to network error.";
        if (response.responseJSON && response.responseJSON.description)
            errorMsg = response.responseJSON.description;
        showError(errorMsg);
    }


    function showHideMenuLinks() {

        hideAllView();


        if (sessionStorage.getItem("authToken") === null) {

            $("#afterLog").hide();
            $(".basic").show();
            $("#beforeLog").show();


        } else {

            $("#beforeLog").hide();
            $("#afterLog").show();
            $("#site-content").show();
            $("#greetingsUser").text(`Welcome {{${sessionStorage.getItem("userName")}}}`);
        }
    }

    function hideAllView() {

        $(".login").hide();
        $(".register").hide();
        $(".create").hide();
        $(".myPet").hide();
        $(".otherPet").hide();
        $(".deletePet").hide();
        $(".detailsMyPet").hide();
        $(".detailsOtherPet").hide();
        $(".dashboard").hide();
        $(".my-pets").hide();
        $(".basic").hide();


    }

    function saveAuthInSession(userInfo) {

        sessionStorage.setItem("authToken", userInfo._kmd.authtoken);
        sessionStorage.setItem("userId", userInfo._id);
        sessionStorage.setItem("userName", userInfo.username);
        sessionStorage.setItem("creator", userInfo._acl.creator);
    }
    function getKinveyUserAuthHeaders() {
        return {
            'Authorization': "Kinvey " + sessionStorage.getItem('authToken'),
            'Authorization': "Kinvey " + sessionStorage.getItem('authToken'),
        };
    }

    function showLoginView() {
        hideAllView();
        $(".login").show();


    }

    function showRegisterView() {
        hideAllView();
        $(".register").show();
    };

    function showAllPets() {
        showHideMenuLinks();
        let request = {
            method: "GET",
            url: `https://baas.kinvey.com/appdata/${kinveyAppKey}/pets?query={}&sort={"likes": -1}`,
            headers: getKinveyUserAuthHeaders(),
        }
        $.ajax(request).then(function (response) {
            $(".dashboard").show()
            $(".other-pets-list").empty();


            for (let pet of response) {


                if (pet._acl.creator !== sessionStorage.getItem("creator")) {


                    let mainLi = $(`<li class="otherPet"><h3>Name: ${pet.name}</h3><p>Category: ${pet.category}</p>
                    <p class="img"><img src="${pet.imageURL}"></p><p class="description">${pet.description}</p></li>`);

                    let divButtons = $(`<div class="pet-info"></div>`);
                    let infoButtons = $(`<a href="#"><button class="button" id=petLikes><i class="fas fa-heart"></i> Pet</button></a>`);
                    let likes = $(`<i class="fas fa-heart"></i><span> ${pet.likes}</span>`)
                    let detailButton = $(`<a href="#"><button class="button">Details</button></a>`).click(showDetails.bind(this, pet));
                    divButtons.append(infoButtons).append(detailButton).append(likes);
                    mainLi.append(divButtons);
                    $(".other-pets-list").append(mainLi);

                }



            }


        })
    };

    function showAllCats() {
        showHideMenuLinks();
        let request = {
            method: "GET",
            url: `https://baas.kinvey.com/appdata/${kinveyAppKey}/pets?query={}&sort={"likes": -1}`,
            headers: getKinveyUserAuthHeaders(),
        }
        $.ajax(request).then(function (response) {
            $(".dashboard").show()
            $(".other-pets-list").empty();


            for (let pet of response) {


                if (pet.category === "Cat") {
                    if (pet._acl.creator !== sessionStorage.getItem("creator")) {
                        let mainLi = $(`<li class="otherPet"><h3>Name: ${pet.name}</h3><p>Category: ${pet.category}</p>
                        <p class="img"><img src="${pet.imageURL}"></p><p class="description">${pet.description}</p></li>`);

                        let divButtons = $(`<div class="pet-info"></div>`);
                        let infoButtons = $(`<a href="#"><button class="button" id=petLikes><i class="fas fa-heart"></i> Pet</button></a>`);
                        let likes = $(`<i class="fas fa-heart"></i><span> ${pet.likes}</span>`)
                        let detailButton = $(`<a href="#"><button class="button">Details</button></a>`).click(showDetails.bind(this, pet));
                        divButtons.append(infoButtons).append(detailButton).append(likes);
                        mainLi.append(divButtons);
                        $(".other-pets-list").append(mainLi);
                    }



                }



            }


        })


    }

    function showAllDogs() {
        showHideMenuLinks();
        let request = {
            method: "GET",
            url: `https://baas.kinvey.com/appdata/${kinveyAppKey}/pets?query={}&sort={"likes": -1}`,
            headers: getKinveyUserAuthHeaders(),
        }
        $.ajax(request).then(function (response) {
            $(".dashboard").show()
            $(".other-pets-list").empty();


            for (let pet of response) {


                if (pet.category === "Dog") {
                    if (pet._acl.creator !== sessionStorage.getItem("creator")) {

                        let mainLi = $(`<li class="otherPet"><h3>Name: ${pet.name}</h3><p>Category: ${pet.category}</p>
                        <p class="img"><img src="${pet.imageURL}"></p><p class="description">${pet.description}</p></li>`);

                        let divButtons = $(`<div class="pet-info"></div>`);
                        let infoButtons = $(`<a href="#"><button class="button" id=petLikes><i class="fas fa-heart"></i> Pet</button></a>`);
                        let likes = $(`<i class="fas fa-heart"></i><span> ${pet.likes}</span>`)
                        let detailButton = $(`<a href="#"><button class="button">Details</button></a>`).click(showDetails.bind(this, pet));
                        divButtons.append(infoButtons).append(detailButton).append(likes);
                        mainLi.append(divButtons);
                        $(".other-pets-list").append(mainLi);
                    }


                }

            }

        })

    }
    function showAllParrots() {
        showHideMenuLinks();
        let request = {
            method: "GET",
            url: `https://baas.kinvey.com/appdata/${kinveyAppKey}/pets?query={}&sort={"likes": -1}`,
            headers: getKinveyUserAuthHeaders(),
        }
        $.ajax(request).then(function (response) {
            $(".dashboard").show()
            $(".other-pets-list").empty();


            for (let pet of response) {


                if (pet.category === "Parrot") {
                    if (pet._acl.creator !== sessionStorage.getItem("creator")) {
                        let mainLi = $(`<li class="otherPet"><h3>Name: ${pet.name}</h3><p>Category: ${pet.category}</p>
                        <p class="img"><img src="${pet.imageURL}"></p><p class="description">${pet.description}</p></li>`);

                        let divButtons = $(`<div class="pet-info"></div>`);
                        let infoButtons = $(`<a href="#"><button class="button" id=petLikes><i class="fas fa-heart"></i> Pet</button></a>`);
                        let likes = $(`<i class="fas fa-heart"></i><span> ${pet.likes}</span>`)
                        let detailButton = $(`<a href="#"><button class="button">Details</button></a>`).click(showDetails.bind(this, pet));
                        divButtons.append(infoButtons).append(detailButton).append(likes);
                        mainLi.append(divButtons);
                        $(".other-pets-list").append(mainLi);

                    }

                }

            }
        })

    };
    function showAllReptiles() {
        showHideMenuLinks();
        let request = {
            method: "GET",
            url: `https://baas.kinvey.com/appdata/${kinveyAppKey}/pets?query={}&sort={"likes": -1}`,
            headers: getKinveyUserAuthHeaders(),
        }
        $.ajax(request).then(function (response) {
            $(".dashboard").show()
            $(".other-pets-list").empty();


            for (let pet of response) {


                if (pet.category === "Reptile") {

                    if (pet._acl.creator !== sessionStorage.getItem("creator")) {
                        let mainLi = $(`<li class="otherPet"><h3>Name: ${pet.name}</h3><p>Category: ${pet.category}</p>
                        <p class="img"><img src="${pet.imageURL}"></p><p class="description">${pet.description}</p></li>`);

                        let divButtons = $(`<div class="pet-info"></div>`);
                        let infoButtons = $(`<a href="#"><button class="button" id=petLikes><i class="fas fa-heart"></i> Pet</button></a>`);
                        let likes = $(`<i class="fas fa-heart"></i><span> ${pet.likes}</span>`)
                        let detailButton = $(`<a href="#"><button class="button">Details</button></a>`).click(showDetails.bind(this, pet));
                        divButtons.append(infoButtons).append(detailButton).append(likes);
                        mainLi.append(divButtons);
                        $(".other-pets-list").append(mainLi);
                    }


                }



            }


        })



    };
    function showAllOther() {
        showHideMenuLinks();
        let request = {
            method: "GET",
            url: `https://baas.kinvey.com/appdata/${kinveyAppKey}/pets?query={}&sort={"likes": -1}`,
            headers: getKinveyUserAuthHeaders(),
        }
        $.ajax(request).then(function (response) {
            $(".dashboard").show()
            $(".other-pets-list").empty();


            for (let pet of response) {


                if (pet.category === "Other") {

                    if (pet._acl.creator !== sessionStorage.getItem("creator")) {

                        let mainLi = $(`<li class="otherPet"><h3>Name: ${pet.name}</h3><p>Category: ${pet.category}</p>
                        <p class="img"><img src="${pet.imageURL}"></p><p class="description">${pet.description}</p></li>`);

                        let divButtons = $(`<div class="pet-info"></div>`);
                        let infoButtons = $(`<a href="#"><button class="button" id=petLikes><i class="fas fa-heart"></i> Pet</button></a>`);
                        let likes = $(`<i class="fas fa-heart"></i><span> ${pet.likes}</span>`)
                        let detailButton = $(`<a href="#"><button class="button">Details</button></a>`).click(showDetails.bind(this, pet));
                        divButtons.append(infoButtons).append(detailButton).append(likes);
                        mainLi.append(divButtons);
                        $(".other-pets-list").append(mainLi);
                    }


                }



            }


        })



    }

    function showDetails(pet) {
        debugger;
        hideAllView();
        $(".detailsOtherPet").show();
        $(".detailsOtherPet").empty();

        let mainDiv = `<h3>${pet.name}</h3>
        <p>Pet counter: ${pet.likes} <a href="#"><button class="button"><i class="fas fa-heart"></i>
                    Pet</button></a>
        </p>
        <p class="img"><img src="${pet.imageURL}"></p>
        <p class="description">${pet.description}</p>`


        $(".detailsOtherPet").append(mainDiv);

    };

    function showEditMenu(pet) {



    }

    function plusLike(pet) {


        let request = {
            method: "PUT",
            url: `https://baas.kinvey.com/appdata/${kinveyAppKey}/pets/${pet._id}`,
            headers: getKinveyUserAuthHeaders(),

        }
    }

    function showMyPets() {
        debugger;
        hideAllView();

        let request = {
            method: "GET",
            url: `https://baas.kinvey.com/appdata/${kinveyAppKey}/pets?query={"_acl.creator":"${sessionStorage.getItem('creator')}"}`,
            headers: getKinveyUserAuthHeaders(),
        }
        $.ajax(request).then(function (response) {
            $(".myPet").show();
            $(".myPet").empty();
            debugger;

            for (let pet of response) {

                let mainDiv = $(`
                <h3>Name: ${pet.name}</h3>
                <p>Category: ${pet.category}</p>
                <p class="img"><img src="${pet.imageURL}"></p>
                <p class="description">${pet.description}</p>`);
                let divButtons = $(`<div class="pet-info">`);
                let editButton = $(`<a href="#"><button class="button" id=editMyPet>Edit</button></a>`).click(editMyPet.bind(this, pet));
                let deleteButton = $(`<a href="#"><button class="button" id=deleteMyPet>Delete</button></a>`).click(deleteMyPet.bind(this, pet));
                let likes = $(`<i class="fas fa-heart"></i> <span>${pet.likes}</span>`)
                divButtons.append(editButton).append(deleteButton).append(likes);
                
                $(".myPet").append(mainDiv).append(divButtons);
            }
            
            $(".myPet").show();
        })

    };

    function showAddNewPetView() {
        hideAllView()
        $('.create').show()
        $("#addNewPet").on("click", createNewPet)

    }
    function createNewPet() {
        debugger;
        let name = $("#name").val();
        let description = $("#description").val();
        let imageURL = $("#image").val();
        let category = $("#myselect option:selected").text();
        let likes = 0;

        let request = {
            method: "POST",
            data: { name, description, imageURL, category, likes },
            headers: getKinveyUserAuthHeaders(),
            url: `https://baas.kinvey.com/appdata/${kinveyAppKey}/pets`,
        }
        $.ajax(request).then(function (response) {
            showHideMenuLinks();
            showInfo("Pet created");
            showAllPets();
            $("#name").val("");
            $("#description").val("");
            $("#image").val("");
            $("#myselect option:selected").text("");
        }).catch(handleAjaxError);
    }

    function editMyPet() {

    }

    function deleteMyPet(pet) {

        let request = {
            method: "DELETE",
            url: `https://baas.kinvey.com/appdata/${kinveyAppKey}/pets/${pet._id}`,
            headers: getKinveyUserAuthHeaders()
        }
        $.ajax(request).then(function (response) {

            showAllPets();
            showInfo('Pet removed successfully!')

        })

    }

    function registerUser() {

        let username = $("#registerUsername").val();
        let password = $("#registerPassword").val();

        if (username.length < 3) {
            showError('Username must be at least 3 symbols')

        } else if (password.length < 6) {

            showError('Password must be at least 6 symbols.')
        } else {

            let request = {
                method: "POST",
                url: "https://baas.kinvey.com/user/kid_B14uRRQg4/",
                headers: kinveyAppAuthHeaders,
                data: { username, password }
            };
            $.ajax(request).then(function (response) {

                saveAuthInSession(response);
                showHideMenuLinks();
                showAllPets();
                showInfo('User registration successful.')


            }).catch(handleAjaxError);
        }
    };

    function loginUser() {

        let username = $("#loginUsername").val();
        let password = $("#loginPassword").val();

        let request = {
            method: "POST",
            url: `https://baas.kinvey.com/user/${kinveyAppKey}/login`,
            data: { username, password },
            headers: kinveyAppAuthHeaders
        };
        $.ajax(request).then(function (response) {

            saveAuthInSession(response);
            showHideMenuLinks();
            showAllPets();
            $("#loginUsername").val('');
            $("#loginPassword").val('');
        }).catch(handleAjaxError);
    };

    function logOut() {

        let request = {
            method: "POST",
            url: `https://baas.kinvey.com/user/${kinveyAppKey}/_logout`,
            headers: getKinveyUserAuthHeaders()
        }
        $.ajax(request).then(function (response) {

            sessionStorage.clear()
            $('#greetingsUser').text('')
            showHideMenuLinks()
            showInfo('Logout successful.')
        })
    };

}