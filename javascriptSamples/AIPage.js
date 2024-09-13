// Example of fetching AI-generated text from OpenAI's API
export async function getServerSideProps() {
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        prompt: "Tell me about Next.js",
        max_tokens: 100,
      }),
    });
  
    const data = await response.json();
  
    return {
      props: { text: data.choices[0].text },
    };
  }
  
  function AIPage({ text }) {
    return <div>{text}</div>;
  }
  
  export default AIPage;
  