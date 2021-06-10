function Cookie_Accept() {
    //getting the cookies
    var cookie = getCookie("request");;
    //cookie is does not exist
    if(cookie === null || cookie === undefined){
      if (!gameSwal) {
        //making a dialog box for requesting user for cookies acceptances
        swal({
          title: "Treasure Hunter",
          text: `${document.title} uses cookies in order to offer you save button to save your game`,
          buttons: [true, "accept"],
          dangerMode: true,
          closeOnClickOutside: false,
        })
        .then((willDelete) => {
          if(willDelete) { //if accepted
            gameCookieRequest = true;
            setCookie("request", "1", 30);
            gameState = MAINMENU;
          }else{ //if delinced  
            gameCookieRequest = false;
            gameState = MAINMENU;
          }
        });
        gameSwal = true;
      }
    }else {//if 
      gameCookieRequest = 0;
      gameSwal = true;
      gameState = MAINMENU;
    }
};