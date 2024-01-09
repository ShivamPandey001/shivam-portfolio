export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Shivam Pandey</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Software</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          Welcome to my portfolio showcasing a diverse range of projects that reflect my expertise as a Full Stack Developer. <br/>
          Explore how I've leveraged my mastery of JavaScript, React.js, Node.js, express.js, CSS, and Next.js to create stunning websites for small and medium-sized businesses.
          </p>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
