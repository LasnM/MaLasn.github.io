document.addEventListener('DOMContentLoaded', loadBugReport);

function loadBugReport() {
  const bugReportObject = document.getElementById('bugReport');
  if (bugReportObject) {
    bugReportObject.data = `bugReport.html?source=cookieclicker`; // Add the source parameter
  }
  customizeBugReportFor('cookieclicker'); // Customize the form for cookie clicker
}

function customizeBugReportFor(source) {
  const problemSelect = document.getElementById('probleem');
  const stepsSelect = document.getElementById('sammud');
  const expectedSelect = document.getElementById('oodatudTulemus');
  const actualSelect = document.getElementById('parisTulemus');
  
  if (source === 'cookieclicker') {
    updateOptions(problemSelect, [
      { text: 'Pärast kümmet klikki arvestatakse iga järgnev klikk kahekordselt', value: 'doubleCountAfterTen' },
      { text: 'abc', value: 'abc' }

      // ... other options if necessary
    ], true);
    
    updateOptions(stepsSelect, [
      { text: '1. Klikin küpsist 2. Jälgin skoori', value: 'clickWatchScore' }
      // ... other options if necessary
    ], true);
  
    updateOptions(expectedSelect, [
      { text: 'Iga klikk annab ühe punkti', value: 'onePointPerClick' }
      // ... other options if necessary
    ], true);
  
    updateOptions(actualSelect, [
      { text: 'Kui kogutud on 10 punkti, saab iga järgneva klikiga 2 punkti', value: 'twoPointsAfterTen' }
      // ... other options if necessary
    ], true);
  }
  // ... other cases for different sources if necessary
}

function updateOptions(selectElement, options, includePlaceholder) {
  selectElement.innerHTML = ''; // Clear existing options
  
  if (includePlaceholder) {
    const placeholderOption = document.createElement('option');
    placeholderOption.textContent = '- Vali -'; // or any placeholder text you want
    placeholderOption.value = '';
    placeholderOption.disabled = true;
    placeholderOption.selected = true;
    selectElement.appendChild(placeholderOption);
  }

  options.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.value = option.value;
    optionElement.textContent = option.text;
    selectElement.appendChild(optionElement);
  });
}
