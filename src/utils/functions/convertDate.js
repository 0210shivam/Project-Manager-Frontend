export default function convertDate(dateStr) {
   // Parse the date string into a Date object
   const date = new Date(dateStr);

   // Extract the date components
   const day = String(date.getUTCDate()).padStart(2, '0');
   const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based
   const year = date.getUTCFullYear();

   // Extract the time components
   const hours = String(date.getUTCHours()).padStart(2, '0');
   const minutes = String(date.getUTCMinutes()).padStart(2, '0');
   const seconds = String(date.getUTCSeconds()).padStart(2, '0');

   // Format the date and time
   const dateFormatted = `${day}-${month}-${year}`;
   const timeFormatted = `${hours}:${minutes}:${seconds}`;

   return { dateFormatted, timeFormatted };
}
