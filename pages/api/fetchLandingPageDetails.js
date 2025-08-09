export default async function handler(req, res) {
  console.log("--- STARTING fetchLandingPageDetails ---");
  console.log("Request method:", req.method);
  console.log("Request URL:", req.url);

  try {
    // Check if environment variables are configured
    const sanityUrl = process.env.NEXT_PUBLIC_SANITY_URL;
    const sanityToken = process.env.NEXT_PUBLIC_SANITY_TOKEN;

    console.log("Environment variables:", {
      NEXT_PUBLIC_SANITY_URL: sanityUrl ? "configured" : "missing",
      NEXT_PUBLIC_SANITY_TOKEN: sanityToken ? "configured" : "missing",
    });

    // If Sanity is not configured, return mock data
    if (!sanityUrl || !sanityToken || sanityUrl.includes('your-project-id')) {
      console.log("Sanity not configured, returning mock data");
      const mockData = {
        title: "Welcome to Peregrine T&C",
        description: "Your Gateway to Global Opportunities",
        services: ["Language Training", "Career Counseling", "Digital Marketing", "Translation Services"]
      };
      return res.status(200).json({ data: mockData, message: "Mock data - Sanity not configured" });
    }

    const query = `*[_type == "landingPage"]`; // Example query
    const response = await fetch(sanityUrl, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${sanityToken}`,
      },
      body: JSON.stringify({ query }),
    });

    console.log("API Response Status:", response.status);

    if (!response.ok) {
      console.error("API Response Error:", await response.text());
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    console.log("API Response Data:", data);

    res.status(200).json({ data });

  } catch (error) {
    console.error("--- ERROR in fetchLandingPageDetails ---");
    console.error(error.message);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
  console.log("--- ENDING fetchLandingPageDetails ---");
}