import { useState } from "react";

import "./Accordion.css";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggler = () => setIsOpen(!isOpen);

  return (
    <div className="accordionData">
      <div
        className="accordion-Item"
        style={{ cursor: "pointer", color: "white" }}
      >
        <h2>{title}</h2>
        {!isOpen ? (
          <span>
            <img
              src="src/assets/Plus.svg"
              alt="Open"
              onClick={toggler}
              style={{ width: "50px", height: "50px"}}
            />
          </span>
        ) : (
          <span>
            <img
              src="src/assets/Close.svg"
              alt="Close"
              onClick={toggler}
              style={{ width: "50px", height: "50px" }}
            />
          </span>
        )}
      </div>
      {isOpen && (
        <div id="Content"
          className="accordion-Content"
          style={{
            maxHeight: isOpen ? "400px" : 0,
            padding: isOpen ? "20px" : 0,
            fontSize: isOpen ? "24px" : 0,
            color: "#FFFFFF",
             
            
          }}
        >
          <p id="ContentAcc">{content}</p>
        </div>
      )}
    </div>
  );
};

function Accordion() {
  const items = [
    {
      title: "What is Netflix?",
      content:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
    },
    {
      title: "How Much Does Netflix cost?",
      content:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
    },
    {
      title: "Where can i watch?",
      content:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    },
    {
      title: "How do i cancel?",
      content:
        "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      title: "What can i watch on Netflix?",
      content:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      title: "Is Netflix good for kids?",
      content:
        "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    },
  ];
  return (
    <div className="accordion">
      <h2>Frequently asked Questions</h2>
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
}

export default Accordion;
