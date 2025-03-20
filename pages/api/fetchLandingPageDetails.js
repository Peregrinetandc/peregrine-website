export default async function handler(req, res) {
  console.log("--- STARTING fetchLandingPageDetails ---");
  console.log("Request method:", req.method);
  console.log("Request URL:", req.url);
  console.log("Request headers:", req.headers); // Be careful with sensitive headers

  try {
    console.log("Environment variables:", {
      NEXT_PUBLIC_SANITY_URL: process.env.NEXT_PUBLIC_SANITY_URL,
      NEXT_PUBLIC_SANITY_TOKEN: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    }); // Log relevant environment variables

    const query = `*[_type == "landingPage"]`; // Example query
    const response = await fetch(process.env.NEXT_PUBLIC_SANITY_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    });

    console.log("API Response Status:", response.status);
    console.log("API Response Headers:", response.headers);

    if (!response.ok) {
      console.error("API Response Error:", await response.text()); // Log the error response body
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    console.log("API Response Data:", data);

    res.status(200).json({ data });

  } catch (error) {
    console.error("--- ERROR in fetchLandingPageDetails ---");
    console.error(error); // Log the full error object
    res.status(500).json({ message: "Internal Server Error", error: error.message }); // Send a more informative error response
  }
  console.log("--- ENDING fetchLandingPageDetails ---");
}