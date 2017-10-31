//Tabs
var tabLinks;
var tabPanels;
//Project tab
window.onload = function () {
        //set panel state
        tabLinks = document.getElementById("tabs").getElementsByTagName("li");
        tabPanels = document.getElementById("containers").getElementsByTagName("div");
        //listen for click on tab
        displayPanel(tabLinks[0]);
        for (var i = 0; i < tabLinks.length; i++) {
            tabLinks[i].onclick = function () {
                displayPanel(this);
                return false;
            }
            for (var i = 0; i < tabLinks.length; i++) {
                tabLinks[i].onfocus = function () {
                    displayPanel(this);
                    return false;
                }
            }
        } //end function

        function displayPanel(tabToActivate) {
                //go through all the <li> elements
                for (var i = 0; i < tabLinks.length; i++) {
                    if (tabLinks[i] == tabToActivate) {
                        //if its the one to activate, change the clas
                        tabLinks[i].classList.add("active");
                        //show the correct panel
                        tabPanels[i].style.display = "block";
                    } else {
                        //remove the active class
                        tabLinks[i].classList.remove("active");
                        //hide it
                        tabPanels[i].style.display = "none";
                    }
                    //change panel display/activate tab

                } //end function