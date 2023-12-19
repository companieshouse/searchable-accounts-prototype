
  document.addEventListener('DOMContentLoaded', function() {
    var urlParams = new URLSearchParams(window.location.search);
    var accountsCheckbox = document.getElementById('accounts-check');
    var fhAccountsRows = document.querySelectorAll('.govuk-table__row#fhAccounts');
    var fhOtherRows = document.querySelectorAll('.govuk-table__row#fhOther');

    function toggleRowsVisibility() {
      if (accountsCheckbox.checked) {
        // When checkbox is selected, show fhAccounts and hide fhOther
        fhAccountsRows.forEach(function(row) {
          row.style.display = 'table-row';
        });
        fhOtherRows.forEach(function(row) {
          row.style.display = 'none';
        });
      } else {
        // When checkbox is not selected, show both fhAccounts and fhOther
        fhAccountsRows.forEach(function(row) {
          row.style.display = 'table-row';
        });
        fhOtherRows.forEach(function(row) {
          row.style.display = 'table-row';
        });
      }
    }

    // Initial toggle based on the checkbox state
    toggleRowsVisibility();

    // Check the checkbox if the "accountsChecked" parameter is present and set to "true"
    if (urlParams.has('accountsChecked') && urlParams.get('accountsChecked') === 'true') {
      accountsCheckbox.checked = true;
      toggleRowsVisibility(); // Trigger visibility based on the checked state
    }

    // Add an event listener to the checkbox
    accountsCheckbox.addEventListener('change', toggleRowsVisibility);
  });
