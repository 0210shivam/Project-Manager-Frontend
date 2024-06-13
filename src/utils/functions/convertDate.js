export default function convertDate(dateStr) {
   if (!dateStr) return "No Date";
   let newD = new Date(dateStr);

   let options = {
      weekday: 'short', year: 'numeric', month: 'short', day: 'numeric',
      hour: 'numeric', minute: 'numeric', second: 'numeric'
   };

   let newDate = newD.toLocaleString('en-GB', options);
   console.log(newDate);


   return newDate;
}
