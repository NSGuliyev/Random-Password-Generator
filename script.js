document.getElementById('generate').onclick = function newPassword() {

    var length_of_password = prompt("Enter the length of your password(between 8 and 128)");

    // checklength(length_of_password);
    if (length_of_password <= 8 && length_of_password >= 128) {
        alert("Your choice doesn't meet our password requirements")
    } else {

        var specialchart = confirm("Do you want Special Characters in your password ?");
        var numericchart = confirm("Do you want Numeric Characters in your password ?");
        var lowercasechart = confirm("Do you want Lowercase Characters in your password ?");
        var uppercasechart = confirm("Do you want Uppercase Characters in your password ?");


        var choice_specialchart = '!#$%&?@[\]^_`{|}~'.split('');
        var choice_numericchart = '0123456789'.split('');
        var choice_lowercasechart = 'abcdefghijklmnopqrstuvwxyz'.split('');
        var choice_uppercasechart = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

        var total_choice = [];

        if (specialchart) { total_choice = total_choice.concat(choice_specialchart) };
        if (numericchart) { total_choice = total_choice.concat(choice_numericchart) };
        if (lowercasechart) { total_choice = total_choice.concat(choice_lowercasechart) };
        if (uppercasechart) { total_choice = total_choice.concat(choice_uppercasechart) };

        var checklength = function (length_of_password) {



            var Randommax = total_choice.length;
            var Randomnumber = 0;

            var password = '';

            for (var i = 0; i < length_of_password; i++) {

                Randomnumber = Math.floor(Math.random() * (Randommax));
                password = password + total_choice[Randomnumber];
            }
        }
    }
}
newPassword();


// document.getElementById("showpassword").Value = password;


function copyPassword() {

    document.getElementById("showpassword").select();

    document.execCommand("Copy");

    alert("Password copied to clipboard!");

}
