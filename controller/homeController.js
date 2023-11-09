
let getHomePage = (req, res) => {
    return res.render('homepage.ejs');
}

let getRegisterPage = (req, res)=>{
    return res.render('subviews/registerpage.ejs');
}

let getLoginPage = (req, res)=>{
    return res.render('subviews/loginpage.ejs');
}

let getProd_details = (req, res) => {
    return res.render('subviews/prod_details.ejs');
}

module.exports = {
    getHomePage: getHomePage,
    getRegisterPage: getRegisterPage,
    getLoginPage: getLoginPage,
    getProd_details: getProd_details,
}
