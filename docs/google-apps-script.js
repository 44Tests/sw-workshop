/**
 * Google Apps Script for Standard Work Workshop Registration
 *
 * SETUP INSTRUCTIONS:
 * 1. Open your Google Sheet
 * 2. Go to Extensions → Apps Script
 * 3. Delete any existing code and paste this entire file
 * 4. Click "Deploy" → "New deployment"
 * 5. Select "Web app" as the type
 * 6. Set "Execute as" to "Me"
 * 7. Set "Who has access" to "Anyone"
 * 8. Click "Deploy" and authorize when prompted
 * 9. Copy the Web App URL and add it to your .env.local file as VITE_GOOGLE_SCRIPT_URL
 *
 * SHEET SETUP:
 * Add these headers to Row 1 of your sheet:
 * A1: Timestamp | B1: First Name | C1: Last Name | D1: Email | E1: Job Title
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    // Append a new row with the registration data
    sheet.appendRow([
      new Date(),           // Timestamp
      data.firstName,       // First Name
      data.lastName,        // Last Name
      data.email,           // Email
      data.jobTitle         // Job Title
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test endpoint to verify deployment
function doGet(e) {
  return ContentService
    .createTextOutput("Standard Work Workshop registration endpoint is working!")
    .setMimeType(ContentService.MimeType.TEXT);
}
