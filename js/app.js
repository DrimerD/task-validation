function validate_form() {
    var form = document.createElement("form");
    form.setAttribute('name', "login");
    form.setAttribute('action', "https://www.google.com.ua/");

    var age = document.createElement("input");
    age.setAttribute('name', "age");
    age.setAttribute('type', "text");
    age.setAttribute('placeholder', "age");

    var username = document.createElement("input");
    username.setAttribute('name', "username");
    username.setAttribute('type', "text");
    username.setAttribute('value', "user_");

    var date = document.createElement("input");
    date.setAttribute('name', "date");
    date.setAttribute('type', "text");
    date.setAttribute('placeholder', "dd.mm.yyyy");

    var submit = document.createElement("input");
    submit.setAttribute('value', "Validate Me");
    submit.setAttribute('type', "submit");

    form.appendChild(age);
    form.appendChild(username);
    form.appendChild(date);
    form.appendChild(submit);
    document.getElementsByClassName('form-container')[0].appendChild(form);

    age.onblur = function () {
        if (/\D/.test(age.value)) {
            console.log("Bad age!!!");
            age.style.border = "1px solid red";
        } else {
            console.log(" Age - OK!!!");
            age.style.border = "none";
        }
    };

    username.onblur = function () {
        var str = username.value.slice(0, 5);

        if (str == 'user_' && username.value.length > 5) {
            console.log('Username - OK');
            username.style.border = "none";
        } else {
            console.log('Username BAD');
            username.style.border = "1px solid red";
        }
    };

    date.onblur = function () {
        if (/\d{1,2}.\d{1,2}.\d{4}/.test(date.value)) {
            console.log('Date - OK!');
            date.style.border = "none";
        } else {
            console.log('your data is invalid');
            date.style.border = "1px solid red";
        }
    };
};

validate_form();