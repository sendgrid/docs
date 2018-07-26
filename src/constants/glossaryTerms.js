import magnifyImage from '../img/help-center-magnify.svg';
import magnifyImageDevs from '../img/help-center-magnify-devs.svg';

// const GLOSSARY_TERMS = [];

export const GLOSSARY_TERMS_HOME = {
  HEADER: 'Featured Terms',
  LINKS: [
    { URL: '/glossary/sender-authentication/', TEXTNODE: 'Sender Authentication' },
    { URL: '/glossary/ip-address/', TEXTNODE: 'IP Address' },
    { URL: '/glossary/phishing/', TEXTNODE: 'Phishing' },
  ],
  BUTTON_LINK: '/',
  IMAGE: magnifyImage,
};

export const GLOSSARY_TERMS_DEVS = {
  HEADER: 'Featured Terms',
  LINKS: [
    { URL: '/glossary/sender-authentication/', TEXTNODE: 'Sender Authentication' },
    { URL: '/glossary/event-webhook/', TEXTNODE: 'Event Webhook' },
    { URL: '/glossary/email-deliverability/', TEXTNODE: 'Email Deliverability' },
  ],
  BUTTON_LINK: '/',
  IMAGE: magnifyImageDevs,
};

// export default GLOSSARY_TERMS;
