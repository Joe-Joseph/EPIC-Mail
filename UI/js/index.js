window.onload = function() {
    var signIn = document.getElementById("signInButton");
    var signUp = document.getElementById("signUpButton");
    var admin = document.getElementById("adminButton");
    var submit = document.getElementById("submitButton");

        signIn.onmouseover = function(){
            this.style.backgroundColor = "#074707";
        }

        signIn.onmouseout = function(){
        this.style.backgroundColor = "#339c33";
        }

        signUp.onmouseover = function(){
            this.style.backgroundColor = "#074707";
        }

        signUp.onmouseout = function(){
        this.style.backgroundColor = "#339c33";
        }

        admin.onmouseover = function(){
            this.style.backgroundColor = "#074707";
        }

        admin.onmouseout = function(){
        this.style.backgroundColor = "#339c33";
        }

        submit.onmouseover = function(){
            this.style.backgroundColor = "#074707";
        } 
        
        submit.onmouseout = function(){
            this.style.backgroundColor = "#339c33";
        }
    
        /* On mouse Click */
        signIn.onclick = function(){
            this.style.backgroundColor = "#304227";
        }

        signUp.onclick = function(){
        this.style.backgroundColor = "#304227";
        }

        admin.onclick = function(){
            this.style.backgroundColor = "#304227";
            }

        submit.onclick = function(){
        this.style.backgroundColor = "#304227";
        }

}
