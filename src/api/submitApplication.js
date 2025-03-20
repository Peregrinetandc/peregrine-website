import multer from 'multer';
import nextConnect from 'next-connect';
import axios from 'axios';

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
});

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.single('resume'));

apiRoute.post((req, res) => {
  const { full_name, email, phone, college, course, year, program, cover_letter } = req.body;
  const resume = req.file;

  // Process the form data and save it to the database or send it via email
  // For example, you can use nodemailer to send the application via email

  res.status(200).json({ message: 'Application submitted successfully!' });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, since we're using multer
  },
};