const Testimonial = ({ testimonial }) => (
  <blockquote>
    <p>{testimonial.quote}</p>
    <cite>- {testimonial.author}</cite>
  </blockquote>
);

export default Testimonial;