window.onload = function(){
    var loginbtn = document.getElementById('loginlink');
    var cover = document.getElementsByClassName('cover')[0];
    var login = document.getElementsByClassName('login')[0];

    loginbtn.addEventListener('click',function(){
        cover.style.display = 'block';
        login.style.display = 'block';
    },false);

    var removeCover = document.getElementById('removecover');
    removeCover.addEventListener('click', function(){
        cover.style.display = 'none';
        login.style.display = 'none';
    }, false);

    cover.addEventListener('click', function(){
        cover.style.display = 'none';
        login.style.display = 'none';
    },false);

    //function toggleLogin(status){
    //    cover.style.display = status;
    //    login.style.display = status;
    //}
}

