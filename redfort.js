
// Reference to nationality dropdown and additional fields container
const nationalityDropdown = document.getElementById('nationality');
const additionalFieldsContainer = document.getElementById('additional-fields');

// Event listener to detect changes in nationality selection
nationalityDropdown.addEventListener('change', function () {
    // Clear existing additional fields
    additionalFieldsContainer.innerHTML = '';

    // If Indian National is selected, add Aadhaar card fields
    if (this.value === 'indian') {
        const aadhaarField = `
            <div>
                <label for="aadhaar">Aadhaar Number</label>
                <input id="aadhaar" name="aadhaar" type="text" pattern="\\d{12}" required>
                <small>(12-digit Aadhaar Number)</small>
            </div>
        `;
        additionalFieldsContainer.innerHTML = aadhaarField;
    }
});

