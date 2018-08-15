import magnifyImage from '../img/help-center-magnify.svg';
import magnifyImageDevs from '../img/help-center-magnify-devs.svg';

export const GLOSSARY_TERMS_HOME = {
  HEADER: 'Featured Terms',
  ANCHORS: [
    { URL: '/glossary/sender-authentication/', TEXTNODE: 'Sender Authentication' },
    { URL: '/glossary/ip-address/', TEXTNODE: 'IP Address' },
    { URL: '/glossary/phishing/', TEXTNODE: 'Phishing' },
  ],
  IMAGE: magnifyImage,
};

export const GLOSSARY_TERMS_DEVS = {
  HEADER: 'Featured Terms',
  ANCHORS: [
    { URL: '/glossary/sender-authentication/', TEXTNODE: 'Sender Authentication' },
    { URL: '/glossary/event-webhook/', TEXTNODE: 'Event Webhook' },
    { URL: '/glossary/deliverability/', TEXTNODE: 'Email Deliverability' },
  ],
  IMAGE: magnifyImageDevs,
};
