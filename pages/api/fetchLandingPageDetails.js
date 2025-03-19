export default function handler(req, res) {
    const details = {
      title: "Welcome to Peregrine T&C",
      description: "We provide high-quality training and consulting services to individuals and organizations around the world."
    };
  
    res.status(200).json(details);
  }