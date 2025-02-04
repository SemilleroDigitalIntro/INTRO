function right(){
    let main_section2 = document.getElementById("main-section2");
    main_section2.style.display = "none";
    
    let main_section3 = document.getElementById("main-section3")
    main_section3.style.display = "flex";
    
    let main_section1_section1 = document.getElementById("main-section1-section1")
    main_section1_section1.style.border = "3px solid #f77f00"
    main_section1_section1.style.boxShadow =" 1px 1px 20px 2px #f77f00"
    main_section1_section1.style.backgroundColor = "#343a40"
    
    let URPSPACE = document.getElementById("URPSPACE")
    URPSPACE.style.background = "linear-gradient(-90deg,#eff6e0,#aec3b0,#f77f00,#aec3b0,#eff6e0)";
    URPSPACE.style.backgroundClip = "text";
    URPSPACE.style.backgroundSize = "500%";

    let Create_Account =document.getElementById("Create_Account");
    Create_Account.style.background = "linear-gradient(-90deg,#fcbf49,#f77f00,#fcbf49)";
    Create_Account.style.backgroundSize = "500%";
    Create_Account.style.color = "#f0ead2";

    let login_Account = document.getElementById("login-Account");
    login_Account.style.background = "linear-gradient(-90deg,#fcbf49,#f77f00,#fcbf49)";
    login_Account.style.backgroundSize = "500%";
    login_Account.style.color = "#f0ead2";

    let btn_sign_up = document.getElementById("btn_sign_up");
    btn_sign_up.style.background = "linear-gradient(-90deg,#fcbf49,#f77f00,#fcbf49)";
    btn_sign_up.style.backgroundSize = "500%";
    btn_sign_up.style.color = "#f0ead2";

    let btn_sign_up2 = document.getElementById("btn_sign_up2");
    btn_sign_up2.style.background = "linear-gradient(-90deg,#fcbf49,#f77f00,#fcbf49)";
    btn_sign_up2.style.backgroundSize = "500%";
    btn_sign_up2.style.color = "#f0ead2";
}
function Left() {
    let main_section2 = document.getElementById("main-section2");
    main_section2.style.display = "flex";
    
    let main_section3 = document.getElementById("main-section3")
    main_section3.style.display = "none";
    main_section3.style.animation ="background-info 1s";
    
    let main_section1_section1 = document.getElementById("main-section1-section1")
    main_section1_section1.style.border = "3px solid #3b0086";
    main_section1_section1.style.boxShadow =" 1px 1px 20px 2px #3b0086";
    main_section1_section1.style.backgroundColor = "#33415c";

    let URPSPACE = document.getElementById("URPSPACE")
    URPSPACE.style.background = "linear-gradient(-90deg,#eff6e0,#aec3b0,#7b2cbf,#aec3b0,#eff6e0)";
    URPSPACE.style.backgroundClip = "text";
    URPSPACE.style.backgroundSize = "500%";
    

    let Create_Account =document.getElementById("Create_Account");
    Create_Account.style.background = "linear-gradient(-90deg,#7765e3,#6200b3,#3b0086,#6200b3,#7765e3)";
    Create_Account.style.backgroundSize = "500%";

    let login_Account = document.getElementById("login-Account");
    login_Account.style.background = "linear-gradient(-90deg,#7765e3,#6200b3,#3b0086,#6200b3,#7765e3)";
    login_Account.style.backgroundSize = "500%";

    let btn_sign_up = document.getElementById("btn_sign_up");
    btn_sign_up.style.background = "linear-gradient(-90deg,#7765e3,#6200b3,#7765e3)";
    btn_sign_up.style.backgroundSize = "500%";
    btn_sign_up.style.color = "#f0ead2";

    let btn_sign_up2 = document.getElementById("btn_sign_up2");
    btn_sign_up2.style.background = "linear-gradient(-90deg,#7765e3,#6200b3,#7765e3)";
    btn_sign_up2.style.backgroundSize = "500%";
    btn_sign_up2.style.color = "#f0ead2";
}
function login(){
    let Name = document.getElementById("Name");
    Name.style.display = "none";

    let section1_section1_H1_H3_2 = document.getElementById("section1-section1-H1-H3-2");
    section1_section1_H1_H3_2.style.display ="flex";
    section1_section1_H1_H3_2.style.animation = "header-form 1s";

    let section1_section1_H1_H3 = document.getElementById("section1-section1-H1-H3");
    section1_section1_H1_H3.style.display = "none";

    let Create_Account = document.getElementById("Create_Account")
    Create_Account.style.display = "none";

    let login_Account = document.getElementById("login-Account");
    login_Account.style.display = "block";
    login_Account.style.fontSize = "16px";
    login_Account.style.animation = "animacion_button 1s";

    let login = document.getElementById("login");
    login.style.display = "none";

    let SignUp = document.getElementById("SignUp")
    SignUp.style.display = "flex";
}
function SignUp(){
    let Name = document.getElementById("Name");
    Name.style.display = "flex";
    Name.style.animation ="animacion_input 1s";

    let section1_section1_H1_H3_2 = document.getElementById("section1-section1-H1-H3-2");
    section1_section1_H1_H3_2.style.display ="none";

    let section1_section1_H1_H3 = document.getElementById("section1-section1-H1-H3");
    section1_section1_H1_H3.style.display = "flex";
    section1_section1_H1_H3.style.animation = "header-form 1s";  

    let Create_Account = document.getElementById("Create_Account")
    Create_Account.style.display = "block";
    Create_Account.style.animation = "animacion_button 1s";

    let login_Account = document.getElementById("login-Account");
    login_Account.style.display = "none";
    login_Account.style.fontSize = "16px";

    let login = document.getElementById("login");
    login.style.display = "flex";

    let SignUp = document.getElementById("SignUp")
    SignUp.style.display = "none";
}