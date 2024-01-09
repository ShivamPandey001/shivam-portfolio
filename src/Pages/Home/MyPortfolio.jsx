import data from "../../data/index.json";

function getGitHubLink(title) {
  const githubLinks = {
    NetflixGPT: "https://github.com/ShivamPandey001/netflix-gpt",
    BiteBoutique: "https://github.com/ShivamPandey001/namaste-react",
    YoutubeThreads: "https://github.com/ShivamPandey001/youTube-threads",
  };
  return githubLinks[title] || "#"; // Return '#' if title is not found
}

function getLiveDemoLink(title) {
  const liveDemoLinks = {
    NetflixGPT: "https://netflixgpt-shivam.netlify.app/", // Replace with the actual live demo link
    BiteBoutique: "https://dummy-url1.com", // Replace with a dummy URL
    YoutubeThreads: "https://dummy-url2.com", // Replace with a dummy URL
  };
  return liveDemoLinks[title] || "#"; // Return '#' if title is not found
}

export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      {/* ... your other code ... */}
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              {/* <p className="text-sm portfolio--link">
                <a
                  href={getGitHubLink(item.title)} // Use the getGitHubLink function
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.link}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 20 19"
                    fill="none"
                  >
                    <path
                      d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                      stroke="currentColor"
                      strokeWidth="2.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </p> */}

<div className="portfolio--buttons">
    <a
      href={getGitHubLink(item.title)}
      target="_blank"
      rel="noopener noreferrer"
      className="portfolio--link"
    >
      View in GitHub
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 20 19"
        fill="none"
      >
        <path
          d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
          stroke="currentColor"
          strokeWidth="2.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
    {item.liveDemo && (
      <a
      href={getLiveDemoLink(item.title)}
      target="_blank"
      rel="noopener noreferrer"
      className="portfolio--link"
      >
        Live Demo
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 20 19"
          fill="none"
        >
          <path
            d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
            stroke="currentColor"
            strokeWidth="2.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    )}
  </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
