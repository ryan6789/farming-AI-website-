document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'https://api.openai.com/v1/engines/davinci/completions';
    const apiKey = 'sk-proj-H5267eV52TASFUCzT55DT3BlbkFJAZDdv2XBXlbZxMWSMnsX'; // Replace with your actual OpenAI API key

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

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            
            // Check if choices array exists and has at least one element
            const responseData = data.choices && data.choices.length > 0 ? data.choices[0].text.trim() : 'No data found';

            return responseData;
        } catch (error) {
            console.error('Error fetching data:', error);
            return 'Failed to fetch data. Please check console for details.';
        }
    }

    // Fetch weather data
    const weatherPrompt = "Provide the latest weather forecast for farming.";
    fetchData(weatherPrompt).then(data => {
        document.getElementById('weather-data').innerText = data;
    }).catch(error => {
        document.getElementById('weather-data').innerText = 'Failed to fetch weather data.';
    });

    // Fetch crop disease data
    const diseasePrompt = "Identify potential crop diseases for current farming conditions.";
    fetchData(diseasePrompt).then(data => {
        document.getElementById('disease-data').innerText = data;
    }).catch(error => {
        document.getElementById('disease-data').innerText = 'Failed to fetch crop disease data.';
    });

    // Fetch planting and harvesting recommendations
    const plantingPrompt = "Give optimal planting and harvesting recommendations based on current data.";
    fetchData(plantingPrompt).then(data => {
        document.getElementById('planting-data').innerText = data;
    }).catch(error => {
        document.getElementById('planting-data').innerText = 'Failed to fetch planting and harvesting recommendations.';
    });

    // Fetch sustainable farming practices
    const sustainablePrompt = "Suggest sustainable farming practices for current conditions.";
    fetchData(sustainablePrompt).then(data => {
        document.getElementById('sustainable-data').innerText = data;
    }).catch(error => {
        document.getElementById('sustainable-data').innerText = 'Failed to fetch sustainable farming practices.';
    });
});
