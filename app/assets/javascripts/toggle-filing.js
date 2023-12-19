// document.addEventListener('DOMContentLoaded', function() {
//   var accountsCheckbox = document.getElementById('accounts-check');
//   var fhAccountsRows = document.querySelectorAll('.govuk-table__row#fhAccounts');
//   var fhOtherRows = document.querySelectorAll('.govuk-table__row#fhOther');

//   function toggleRowsVisibility() {
//     fhAccountsRows.forEach(function(row) {
//       row.style.display = accountsCheckbox.checked ? 'table-row' : 'none';
//     });

//     fhOtherRows.forEach(function(row) {
//       row.style.display = accountsCheckbox.checked ? 'none' : 'table-row';
//     });
//   }

//   // Check the checkbox if the "accountsChecked" parameter is present and set to "true"
//   var urlParams = new URLSearchParams(window.location.search);
//   if (urlParams.has('accountsChecked') && urlParams.get('accountsChecked') === 'true') {
//     accountsCheckbox.checked = true;
//   }

//   // Initial toggle based on the checkbox state
//   toggleRowsVisibility();

//   // Add an event listener to the checkbox after the initial toggle
//   accountsCheckbox.addEventListener('change', toggleRowsVisibility);
// });
document.addEventListener('DOMContentLoaded', function() {
  var accountsCheckbox = document.getElementById('accounts-check');
  var fhAccountsRows = document.querySelectorAll('.govuk-table__row#fhAccounts');
  var fhOtherRows = document.querySelectorAll('.govuk-table__row#fhOther');

  function toggleRowsVisibility() {
    fhAccountsRows.forEach(function(row) {
      row.style.display = 'table-row';
    });

    fhOtherRows.forEach(function(row) {
      row.style.display = accountsCheckbox.checked ? 'none' : 'table-row';
    });
  }

  // Set the checkbox to be checked by default
  accountsCheckbox.checked = true;

  // Initial toggle based on the checkbox state
  toggleRowsVisibility();

  // Add an event listener to the checkbox after the initial toggle
  accountsCheckbox.addEventListener('change', toggleRowsVisibility);
});