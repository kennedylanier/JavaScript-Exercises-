let gmailData = {
    mailboxes: [
      {sender: "drink@mudwtr.com", subject: "Subscription cancelled", body: "Your membership has been cancelled and you will not be billed for future orders."},
      {sender: "hemming@e.lululemon.com", subject: "Hemming order", body: "Just us again! Reminding you that your hemming order is ready for pick up in-store."},
    ],
    starred: [
      {sender: "michaelwillard@miufi.org", subject: "2023 Internship", body: "Thanks for applying to The Michigan Urban Farming Initiative (MUFI)"},
      {sender: "raining@peridance.com", subject: "Peridance Independent Study", body: "Hi Kennedy, Thank you for your interest in the Independent Study Program at Peridance."},
    ],
    important: [
      {sender: "no-reply@zoom.us", subject: "Basic Gardening TONIGHT", body: "Hello Kennedy Lanier, Thank you for registering for Basic Gardening. You can find information about this meeting below."},
      {sender: "meow@kitteny.com", subject: "A shipment from order ##### is out for delivery", body: "The below items from your order are now out for delivery."},
    ],
    sent: [
      {recipient: "MSUE.TollgateCSA@campusad.msu.edu", subject: "2023 Summer CSA", body: "Hello, I am reaching out to request to be put on the contact list for Tollgate Farm's 2023 Summer CSA."},
      {recipient: "birminghamvillageplayers@gmail.com", subject: "WOODS", body: "I am reaching out to ask for the audition cuts for Little Red Riding Hood and Cinderella."},
    ],
    drafts: [
      {recipient: "themidnightmary@gmail.com", subject: "Tattoo consultation", body: "Hi Mary, I'm reching out to ask if you have any available time to meet with me and dicuss a tattoo idea I have."},
      {recipient: "admis@msu.edu", subject: "Scheduling", body: "Hello, I am reaching out with a question regaurding my schedule for this upcoming semester."},
    ],
    categories: {
      social: [
        {sender: "nfo@twitter.com", subject: "Check out your feed!", body: "Shanna tweeted: HBO Max deleting shows they canceled is WILDLY aggressive"},
        {id: 2, sender: "no-reply@tumblr.com", subject: "Need distractions? Try these on us.", body: "Here's what's trending..."},
      ],
    },
      updates: [
        {sender: "amy.warner@clubpilates.com>", subject: "APRIL 2023 CLUB PILATES NEWSLETTER", body: "Physical fitness is the first requisite of happiness."}
      ]
    };

//Get a list of mailbox names
   let mailboxNames = Object.keys(gmailData).filter(key => {
        return Array.isArray(gmailData[key]);
      });
      
      console.log(mailboxNames);

    let allEmails = [];

//Get a list of emails
Object.keys(gmailData).forEach(key => {
  if (Array.isArray(gmailData[key])) {
    gmailData[key].forEach(email => {
      allEmails.push(email);
    });
  }
});

console.log(allEmails);

//Get the text of the second email in the visible list
let secondMailboxEmail = gmailData.mailboxes[1].body;
console.log(secondMailboxEmail);

//Mark an email as sent
// 1) find the email with matching subject and recipient values
const email = gmailData.sent.find(email => email.subject === "2023 Summer CSA" && email.recipient === "MSUE.TollgateCSA@campusad.msu.edu");

// 2) update the email properties
if (email) {
  email.sent = true;
}

//Add a draft email to the drafts mailbox
let draftEmail = {recipient: "johndoe@example.com", subject: "Draft email", body: "This is a draft email."};
gmailData.drafts.push(draftEmail);

