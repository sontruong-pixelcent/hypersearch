// this just sends back the endpoints for the form

const usingMailchimp = false;

const pardotEndpoints = {
  contactUsEndpoint: "https://go.alserkalavenue.ae/l/776773/2021-02-15/d1gysj",
  newsletterEndpoint: "https://go.alserkalavenue.ae/l/776773/2021-02-15/d1gysj",
  foundationRequestEndpoint:
    "https://go.alserkalavenue.ae/l/776773/2021-02-15/d1gysj",
  toteEndpoint: "https://go.alserkalavenue.ae/l/776773/2021-02-15/d1gysj",
  venueRequestEndpoint:
    "https://go.alserkalavenue.ae/l/776773/2021-03-25/dsqm5v",
  joinOurCommunityEndpoint:
    "https://go.alserkalavenue.ae/l/776773/2021-03-30/dtlr6l",
};

// NOTE: most of these are not actual Mailchimp endpoints!

const mailchimpEndpoints = {
  contactUsEndpoint:
    "https://alserkalavenue.us8.list-manage.com/subscribe/post?u=89ea5b35584c53ada3b153c0f&amp;id=db108ae6b9",
  newsletterEndpoint:
    "https://alserkalavenue.us8.list-manage.com/subscribe/post?u=89ea5b35584c53ada3b153c0f&amp;id=db108ae6b9",
  foundationRequestEndpoint:
    "https://go.alserkalavenue.ae/l/776773/2021-02-15/d1gysj",
  toteEndpoint: "https://go.alserkalavenue.ae/l/776773/2021-02-15/d1gysj",
  venueRequestEndpoint:
    "https://go.alserkalavenue.ae/l/776773/2021-03-25/dsqm5v",
  joinOurCommunityEndpoint:
    "https://go.alserkalavenue.ae/l/776773/2021-03-30/dtlr6l",
};

const formConfig = {
  useMailchimp: usingMailchimp,
  getFormEndpoint: (formId) =>
    usingMailchimp ? mailchimpEndpoints[formId] : pardotEndpoints[formId],
};

export default formConfig;
