export default {
  jwt: {
    secretOrKey: process.env.JWT_SECRET,
    expiresIn: 86400,
  },
  mail: {
    service: {
      host: 'smtp.sendgrid.net',
      port: 587,
      secure: false,
      user: 'apikey',
      pass: process.env.SENDGRID_API_KEY,
    },
    senderCredentials: {
      name: 'Testerko',
      email: 'krsticmarkokg@gmail.com',
    },
  },
  // these are used in the mail templates
  project: {
    name: 'Lead Scrapy',
    address: 'Silicon Valley 1, San Francisco',
    logoUrl: 'https://res.cloudinary.com/practicaldev/image/fetch/s--IyMkU0q_--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/ppvwjaepwr5yvxxh0o94.jpg',
    slogan: 'bla bla',
    color: '#123456',
    socials: [
      ['GitHub', 'https://github.com/Gonzo84/scrapy'],
    ],
    url: 'http://localhost:xxxx',
    mailVerificationUrl: 'http://localhost:3000/auth/verify',
    mailChangeUrl: 'http://localhost:3000/auth/change-email',
    resetPasswordUrl: 'http://localhost:xxxx/reset-password',
    termsOfServiceUrl: 'http://localhost:xxxx/legal/terms',
  },
};
