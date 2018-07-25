import magnifyImage from '../img/help-center-magnify.svg';
import magnifyImageDevs from '../img/help-center-magnify-devs.svg';

const GLOSSARY_TERMS = [];

GLOSSARY_TERMS.HOME = {
  HEADER: 'Featured Terms',
  LINKS: [
    { URL: '/', TEXTNODE: 'lorem ipsum home 1' },
    { URL: '/', TEXTNODE: 'lorem ipsum home 2' },
    { URL: '/', TEXTNODE: 'lorem ipsum home 3' },
  ],
  BUTTON_LINK: '/',
  IMAGE: magnifyImage,
};

GLOSSARY_TERMS.DEVS = {
  HEADER: 'Featured Terms',
  LINKS: [
    { URL: '/', TEXTNODE: 'lorem ipsum devs 1' },
    { URL: '/', TEXTNODE: 'lorem ipsum devs 2' },
    { URL: '/', TEXTNODE: 'lorem ipsum devs 3' },
  ],
  BUTTON_LINK: '/',
  IMAGE: magnifyImageDevs,
};

export default GLOSSARY_TERMS;
