/**
 * Created by Utilisateur on 06/05/2016.
 */

var navigation = document.getElementById('navigation');
console.log(navigation);

navigation.addEventListener('click', function(event) {
    console.log(event.a);
    event.classList.toggle("active");
},false);

var active = document.getElementById('active');

// active.addEventListener('click', function() {
//     active.style.color = "blue";
// },false);
