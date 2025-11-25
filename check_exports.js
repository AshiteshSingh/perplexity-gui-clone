const aiReact = require('@ai-sdk/react');
console.log('Exports:', Object.keys(aiReact));
try {
    console.log('useChat type:', typeof aiReact.useChat);
} catch (e) {
    console.error(e);
}
