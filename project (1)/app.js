document.addEventListener('DOMContentLoaded', function() {
    // Simulated data for each section
    const fakeData = {
        weather: "Today's weather is sunny with a chance of rain later in the evening.",
        disease: "No significant crop diseases reported for your region.",
        planting: "Optimal time for planting corn is from late April to mid-May.",
        sustainable: "Consider rotating crops to maintain soil health and reduce pests."
    };

    // Display fake data for each section
    document.getElementById('weather-data').innerText = fakeData.weather;
    document.getElementById('disease-data').innerText = fakeData.disease;
    document.getElementById('planting-data').innerText = fakeData.planting;
    document.getElementById('sustainable-data').innerText = fakeData.sustainable;
});
