const units = {
    length: [
        {name: 'Meter', value: 1},
        {name: 'Kilometer', value: 1000},
        {name: 'Centimeter', value: 0.01},
        {name: 'Millimeter', value: 0.001},
        {name: 'Mile', value: 1609.34},
        {name: 'Yard', value: 0.9144},
        {name: 'Foot', value: 0.3048},
        {name: 'Inch', value: 0.0254}
    ],
    weight: [
        {name: 'Kilogram', value: 1},
        {name: 'Gram', value: 0.001},
        {name: 'Milligram', value: 0.000001},
        {name: 'Metric Ton', value: 1000},
        {name: 'Pound', value: 0.453592},
        {name: 'Ounce', value: 0.0283495}
    ],
    area: [
        {name: 'Square Meter', value: 1},
        {name: 'Square Kilometer', value: 1000000},
        {name: 'Square Centimeter', value: 0.0001},
        {name: 'Square Millimeter', value: 0.000001},
        {name: 'Hectare', value: 10000},
        {name: 'Acre', value: 4046.86}
    ]
};

function updateCategory() {
    const category = document.getElementById('category-select').value;
    const fromSelect = document.getElementById('from-select');
    const toSelect = document.getElementById('to-select');
    const converterLabel = document.getElementById('converter-label');
    
    fromSelect.innerHTML = '';
    toSelect.innerHTML = '';
    converterLabel.textContent = category.charAt(0).toUpperCase() + category.slice(1);

    units[category].forEach(unit => {
        let option = document.createElement('option');
        option.value = unit.value;
        option.text = unit.name;
        fromSelect.add(option);
        toSelect.add(option.cloneNode(true));
    });
}

function convert() {
    const value = parseFloat(document.getElementById('value-input').value);
    const fromValue = parseFloat(document.getElementById('from-select').value);
    const toValue = parseFloat(document.getElementById('to-select').value);
    
    if (!isNaN(value)) {
        const result = (value * fromValue) / toValue;
        document.getElementById('result-input').value = result;
    }
}

updateCategory();