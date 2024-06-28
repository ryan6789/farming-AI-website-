document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'https://api.openai.com/v1/engines/davinci/completions';
    const apiKey = 'sk-proj-tRryPT6jw1nHUqib3fSRT3BlbkFJ6zgCoEm9uWs2Hf312fbi';

    async function fetchData(prompt) {
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: "davinci",
                    prompt: prompt,
                    max_tokens: 150
                })
            });
            const data = await response.json();
            return data.choices[0].text.trim();
        } catch (error) {
            console.error('Error fetching data:', error);
            return 'Failed to fetch data.';
        }
    }

    // Fetch weather data
    const weatherPrompt = "Provide the latest weather forecast for farming.";
    fetchData(weatherPrompt).then(data => {
        document.getElementById('weather-data').innerText = data;
    });

    // Fetch crop disease data
    const diseasePrompt = "Identify potential crop diseases for current farming conditions.";
    fetchData(diseasePrompt).then(data => {
        document.getElementById('disease-data').innerText = data;
    });

    // Fetch planting and harvesting recommendations
    const plantingPrompt = "Give optimal planting and harvesting recommendations based on current data.";
    fetchData(plantingPrompt).then(data => {
        document.getElementById('planting-data').innerText = data;
    });

    // Fetch sustainable farming practices
    const sustainablePrompt = "Suggest sustainable farming practices for current conditions.";
    fetchData(sustainablePrompt).then(data => {
        document.getElementById('sustainable-data').innerText = data;
    });
});
