module.exports = {
  siteTitle: 'Jason AlHilal',
  siteDescription:
    'Jason AlHilal is an incoming Software Developer, based in Indonesia, who loves learning new things and helping tech beginners.',
  siteKeywords:
    'Jason AlHilal, Jason, AlHilal, jasonalhilal, software engineer, web developer, javascript, python, java, svvv, semarang',
  siteUrl: 'https://0xSabdadev.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Jason AlHilal',
  location: 'Semarang, Indonesia',
  email: 'jasonalhilal@gmail.com',
  github: 'https://github.com/0xSabdadev',
  twitterHandle: '@',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/0xSabdadev',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/jasonalhilal/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/jason_riskov10/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/0xSabdadev',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experiences',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
