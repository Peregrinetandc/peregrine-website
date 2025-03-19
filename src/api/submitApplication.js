import multer from 'multer';
import nextConnect from 'next-connect';

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
});

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
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

{
  "name": "peregrine-website",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "test": "jest"
  },
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "formik": "^2.2.9",
    "yup": "^0.32.11",
    "axios": "^0.24.0",
    "multer": "^1.4.4",
    "next-connect": "^0.11.0"
  },
  "devDependencies": {
    "jest": "^27.0.6",
    "babel-jest": "^27.0.6"
  }
}