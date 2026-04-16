# Google Sheets Integration Setup

Follow these steps to connect the pre-order form to Google Sheets:

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet
2. Name it **"Hapus Mango Pre-Orders"**
3. In Row 1 (header row), add these column headers:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Phone`
   - D1: `City`
   - E1: `Product`
   - F1: `Quantity`
   - G1: `Pincode`
   - H1: `Address`
   - I1: `Notes`

## Step 2: Create the Google Apps Script

1. In your Google Sheet, go to **Extensions → Apps Script**
2. Delete the default code and paste the following:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.phone,
      data.city,
      data.product,
      data.quantity,
      data.pincode,
      data.address,
      data.notes
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput('Hapus Mango Pre-Order API is running')
    .setMimeType(ContentService.MimeType.TEXT);
}
```

3. Save the script (Ctrl+S / Cmd+S)

## Step 3: Deploy as Web App

1. Click **Deploy → New deployment**
2. Click the gear icon ⚙️ next to "Select type" and choose **Web app**
3. Set:
   - **Description**: "Hapus Pre-Order Form"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
4. Click **Deploy**
5. **Authorize** the app when prompted (click through the "unsafe" warning)
6. Copy the **Web app URL** — it looks like:
   ```
   https://script.google.com/macros/s/AKfycb.../exec
   ```

## Step 4: Add the URL to Your Website

Open `components/PreOrderForm.vue` and find this line:

```javascript
const GOOGLE_SHEETS_URL = ref('')
```

Replace it with your actual Web App URL:

```javascript
const GOOGLE_SHEETS_URL = ref('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec')
```

## Step 5: Test

1. Fill out the pre-order form on your website
2. Check the Google Sheet — a new row should appear with the form data
3. The form uses `mode: 'no-cors'` so it works even across origins

## Optional: Email Notifications

Add this to the Apps Script to get email notifications on new orders:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.phone,
      data.city,
      data.product,
      data.quantity,
      data.pincode,
      data.address,
      data.notes
    ]);
    
    // Send email notification
    MailApp.sendEmail({
      to: 'your@email.com',
      subject: '🥭 New Mango Pre-Order from ' + data.name,
      htmlBody: '<h2>New Pre-Order!</h2>' +
        '<p><strong>Name:</strong> ' + data.name + '</p>' +
        '<p><strong>Phone:</strong> ' + data.phone + '</p>' +
        '<p><strong>City:</strong> ' + data.city + '</p>' +
        '<p><strong>Product:</strong> ' + data.product + '</p>' +
        '<p><strong>Quantity:</strong> ' + data.quantity + '</p>' +
        '<p><strong>Pincode:</strong> ' + data.pincode + '</p>' +
        '<p><strong>Address:</strong> ' + data.address + '</p>' +
        '<p><strong>Notes:</strong> ' + (data.notes || 'None') + '</p>'
    });
    
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```
