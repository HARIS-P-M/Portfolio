/**
 * Google Apps Script — Portfolio Contact Form Mailer
 * Receives POST from HARIS P M's portfolio and sends email via Gmail.
 *
 * HOW TO DEPLOY:
 * 1. Open https://script.google.com  (sign in with your Google account)
 * 2. Click "New project"
 * 3. Delete everything and paste THIS entire file
 * 4. Click Save (floppy icon), name it "Portfolio Mailer"
 * 5. Click "Deploy" → "New deployment"
 *    - Type: "Web app"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone"
 * 6. Click "Deploy" → Authorise when prompted (allow Gmail access)
 * 7. Copy the Web App URL  (looks like https://script.google.com/macros/s/ABC.../exec)
 * 8. Paste it into Contact.jsx:
 *       const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/ABC.../exec';
 */

const RECIPIENT = 'harispm.23cse@kongu.edu';

// Called automatically for every POST request from the portfolio form
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    const name    = data.name    || '(no name)';
    const email   = data.email   || '(no email)';
    const message = data.message || '(no message)';

    MailApp.sendEmail({
      to:      RECIPIENT,
      subject: `📩 Portfolio message from ${name}`,
      body:
        `You received a new message via your portfolio contact form.\n\n` +
        `─────────────────────────────\n` +
        `Name    : ${name}\n` +
        `Email   : ${email}\n` +
        `─────────────────────────────\n\n` +
        `${message}\n\n` +
        `─────────────────────────────\n` +
        `Reply directly to: ${email}`,
      replyTo: email,
    });

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: keep the script alive / test via browser
function doGet() {
  return ContentService
    .createTextOutput('Portfolio Mailer is active ✓')
    .setMimeType(ContentService.MimeType.TEXT);
}
