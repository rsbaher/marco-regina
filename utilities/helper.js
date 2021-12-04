import auth from './auth'


export const getFormData = object =>
  Object.keys(object).reduce((formData, key) => {
    formData.append(key, object[key])
    return formData
  }, new FormData())

export function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  )
}

export async function getSheetData() {
  const data = null;
  const sheets = google.sheets({ version: 'v4', auth });
  const range = `rsvp!A2:H9`;

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.NEXT_PUBLIC_GOOGLE_SHEET,
    range,
  });

  data = response.data.values;
  console.log("Loaded data: ", data);
  const FormatedData = formatData(data);
  
  return FormatedData
}

function formatData(data){
  const formatted = {};
  console.log("Formatting data...")

  return formatted;
}
