const express = require("express");
const cors = require("cors");
const app = express();

const { ENVIRONMENT, PORT } = process.env;
const IS_DEVELOPMENT = ENVIRONMENT === "development";

app.use(express.json());
app.use(
  cors({
    // origin: IS_DEVELOPMENT
    //   ? "http://localhost:3000"
    //   : "https://sore-kittens.surge.sh/"
    origin: "http://localhost:3000"
  })
);

const db = {
  posts: [
    {
      id: 1,
      title: "The Value of Focus in the Face of Behaviors We Create in Tech",
      body:
        "A large part of our era’s decreasing ability to focus is due to irresponsible design of user experience in mass produced tech products. An ability to focus will be one of an employee’s greatest assets in the years ahead. While engagement, profit, and market share are main pursuits, we have to understand that in big tech, our user base is not differentiated from our employee base. With the increased focus in research supported UI/UX, we have certainly seen improvements and an acknowledgment of societal responsibility, but I would encourage all businesses to adopt this mentality: The habits we create in our users are habits we create in our workforce. What habits do you want to see in the employees of your company?"
    },
    {
      id: 2,
      title:
        "The Importance of Collecting Gender Disaggregated Data in Research and Testing",
      body:
        "Companies can support and promote gender equality, improve product engagement and satisfaction, and see a greater profitability all by investing more heavily in gender-disaggregated data collection in user research. Just listened to a wonderful 99% Invisible about the inherent male bias in design research and testing. When we do not confront our conscious and subconscious biases, we not only fail to serve half of our user base, but we incur the monetary cost."
    },
    {
      id: 3,
      title:
        "Balancing Many “Intelligences” in User Experience and Interface Design",
      body:
        "The UX/UI community seeks to empower users through design to reach the full actionable potential within the product environment. While many components of psychology’s classical intelligence theories are considered in this process, the idea of defining a singular user intelligence would seem aimless and dangerous. On the contrary, UX/UI must strike a balance between the observed and actionable intelligences observed of users with their product. While UX/UI greatly reveres and derives from hard science and research, its aims are more immediately operational and logistical in nature. It does not seek to discover the underlying mechanisms of the mind, or to understand the human from a strictly fitness-based standpoint. This, then, prioritizes intelligence not as a means of assessing user fitness, but of assessing user preference. Many intelligence hypotheses are used as bases for varying design approaches, not one of them seen as comprehensive, simply one of many means to an end. An example of such a subjective science, Apple teaches that there are “1000 no’s for every yes”. This can be clearly seen in the modern Apple remote, released in 2009, which is comprised of three simple, almost label-less buttons. Apple’s underlying intelligence principle, though perhaps not overtly, is cognitive speed assessment. In designing to create the most intelligent user for their product environment, they have created a system in which the user can visually and cognitively assess the interaction terrain within milliseconds. As with the intelligence principle of cognitive speed, this not only results in instant assessment, but relatively instant mental mapping of possible product usage. Conversely, Google follows a drastically different design principle. As evidenced by their company structure, the Google focus is on creating more functionality, more use-cases for power-users, and more diversity of application. While the Apple remote has summarized itself in 6 buttons, the Google remote for the ASUS Cube released in 2013 has a colossal 78 buttons. Google seems to operate from an understanding of intelligence as one’s ability to strategically utilize tools and manipulate environments presented to accomplish a goal. Therefore, for their pursuit of empowering the user’s product intelligence, Google has presented a plethora of tools to their users, providing no single use case. While Apple might say, “Focus on the product and the user will follow,” Google says, “Focus on the user and all else will follow.”"
    },
    {
      id: 4,
      title: "Some Thoughts on Speech Recognition Technology and Legislation",
      body:
        "I would love to be able to ask for information from internet while I go, but currently I don't have any guarantee that my voice, statements, or accessory data are going to be used in my best interest. Even if it's not a dystopian scenario now, tech companies can change their strategy and use at any time and can do so without actually disclosing the change. I have control over fewer aspects of my life than I want, and this is yet another area it seems that my options are being taken away from me. Why can't I pay money to have privacy along with the service? Sure, have a free version where you pay with your data. But don’t make that the ONLY option. I don’t think the technology is evil in and of itself. I think people could have made the same arguments when phones were invented, that someone could be listening into your calls now that conversations weren’t had in person, or when email was invented, that people could be reading what you were communicating as opposed to written letters. The danger is not regulating these companies on a governmental level in the way that we need. For the economic benefit, we’re encouraging hasty growth of tech without putting checks and balances in place, or saying, are we really helping people or making them vulnerable. We should be able to make natural language processing more prevalent in our world to make it more accessible to those it it, but we need to acknowledge the power of the information that’s being collected and make it transparent to regulating bodies and the people using it. Let the people choose what happens with their data. Speech recognition can also be set up such that it only recognizes and processes information from voices it’s been told to. You could make it such than those visiting your home aren’t subject to your choices/settings. Or there are markers in the voice that indicate age, so  you could protect your children’s information and ability to be impacted by the tech by making it so that those under a certain age shouldn’t be recognized by the device."
    },
    {
      id: 5,
      title:
        "Refocusing Existing Design Process to Increase User’s “Big C” Creativity",
      body:
        "The current design framework often begins with research, examining a population of potential or current users to pinpoint problem spaces. Many times, the resulting problem to be solved hinges upon making a current user process easier or faster. This starts the design process on a note of revision, rather than creation, before they even make their first design decision. After research culminates in a unique product goal, designers must hone their pursuits, defining with constraints determined by the user and the product environment. Often this includes journey mapping, establishing exactly how a user will navigate to the given goal. Designing with these preordained paths limits the ability of the designers and users to be creative and create eminent work. To design a system to be navigated without a set roadmap is no small feat. Historically, such possibilities have been confined in many ways by available technology. With the new saliency of scalable machine learning and natural language processing, dynamic interfaces are a more distinct reality. However, much of the limitation has been that of field focus upon efficiency rather than exploration, as previously mentioned. In “Interactive placemaking: creativity and user experience at urban installations”, Anijo Mathew describes lucid engineering, or engineering that is focused on creating a playful interaction beyond the base functionality of a system. Of examples, he says, “…the end user cannot immediately construct meaning from interacting with the products but meaning arises from playing with the interface over time…. Ludic engineering offers a novel approach…where the experience is not focused on the efficiency of completing a goal but rather on the journey itself.” When efficiency is no longer the constraint placed upon a novel goal, the design process shifts from creating Little C as users naturally navigate the system toward their own focused, constrained pursuit, to encouraging Big C, or a product that is recognized and regarded as influential to others. Designers must learn to sustain ambiguity through their process, even as they move towards a refined product, so that users might be able to maintain ambiguity in their utilization of the tool as well. With new tools available, designers might employ machine learning for responsive design. Giving the models data about the user’s product usage and system behavior, the product itself can retain ambiguity while allowing the user to make real progress by reorganizing components such that tools are re-associated with neighboring tools each time the interface resituates. Perhaps if a user continues back to the same tool or pathway consistently, the interface could replace one interface tool with another to encourage the user to think about the new tool engaged in the process which they have been repeating."
    },
    {
      id: 6,
      title: "Calculating the Release of New UX/UI",
      body:
        "Apple has historically been able to utilize their long term business plan to guide users into adopting innovative technology almost seamlessly. The Touch Bar is an excellent example of Apple introducing features in a calculated timeline to familiarize users with a feature before they rely upon it for future product developments. Onboarding users without disengaging them from their workflows and interrupting the excitement of incorporating new tools into their experience."
    }
  ]
};

app.get("/api/posts", (request, response) => {
  response.json(db.posts);
});

app.post("/api/posts", (request, response) => {
  const post = request.body;
  post.id = db.posts.length + 1;
  db.posts.push(post);
  response.json(post);
});

app.get("/api/posts/:id", (request, response) => {
  const id = Number(request.params.id);
  const post = db.posts.find(post => {
    return post.id === id;
  });

  if (post) {
    response.json(post);
  } else {
    response.status(404).send();
  }
});

app.delete("/api/posts/:id", (request, response) => {
  const id = Number(request.params.id);
  const post = db.posts.find(post => {
    return post.id === id;
  });

  if (post) {
    db.posts = db.posts.filter(post => {
      return post.id !== id;
    });
    response.status(204).send();
  } else {
    response.status(404).send();
  }
});

app.put("/api/posts/:id/edit", (request, response) => {
  const id = Number(request.params.id);
  const post = db.posts.find(post => {
    return post.id === id;
  });

  if (post) {
    Object.assign(post, request.body);
    response.json(post);
  } else {
    response.status(404).send();
  }
});

app.listen(process.env.PORT || 8000);
