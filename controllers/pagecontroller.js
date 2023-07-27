const nodemailer = require('nodemailer');
exports.getIndexPage = (req, res) => {
  console.log(req.session.userID);
  res.status(200).render('index', {
    page_name: 'index',
  });
};

exports.getAboutPage = (req, res) => {
  res.status(200).render('about', {
    page_name: 'about',
  });
};

exports.getRegisterPage = (req, res) => {
  res.status(200).render('register', {
    page_name: 'register',
  });
};

exports.getLoginPage = (req, res) => {
  res.status(200).render('login', {
    page_name: 'login',
  });
};

exports.getContactPage = (req, res) => {
  res.status(200).render('contact', {
    page_name: 'contact',
  });
};

exports.sendEmail = (req, res) => {

  try {
    req.flash('succes', 'We received your message succesfully');
    res.redirect('contact');

    /* let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
      user: "gmailadresi", // gmail hesabı
      pass: "password", // gmail şifresi veya uygulama şifresi
          },
        });
  */
  } catch (error) {
    req.flash('error', 'Something went wrong!');
    res.redirect('contact');
  }
  
};
