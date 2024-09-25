// frontend/src/app/api/chatApi/chatApi.ts

export const sendMessageToAI = async (message: string) => {
    try {
        const response = await fetch('http://127.0.0.1:5000/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        });

        const data = await response.json();
        return data.response;
    } catch (error) {
        console.error('Error sending message to AI:', error);
        return 'Error: Could not send message to AI';
    }
};
