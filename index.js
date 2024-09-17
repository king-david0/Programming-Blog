import express from "express";
import bodyParser from "body-parser";
import path from "path";
import multer from "multer";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from 'uuid'; 


const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res) => {
  res.render("login.ejs");
});

// this part is for the content

const contentData = {
  cars: [
    {
      username: "John Doe",
      profileImage: "/images/car-image1.jpg",
      postImage: "/images/car-image1.jpg",
      postText:
        "Electric vehicles (EVs) are rapidly transforming the automotive industry. From the early days of limited range and slow charging, today's EVs offer impressive performance, extended ranges, and quick charging capabilities. Companies like Tesla, Nissan, and even traditional automakers are pushing the boundaries of what's possible, making EVs not only a sustainable choice but also a powerful one. As technology continues to evolve, the future of driving is electric.",
      isUserPost: false,
    },
    {
      username: "Jane Smith",
      profileImage: "/images/github-brands-solid.svg",
      postImage: "/images/car-image2.jpg",
      postText: "Another interesting car fact...",
      isUserPost: false,
    },
  ],

  jets: [
    {
      username: "John Maverick",
      profileImage: "/images/jet-flying.jpg",
      postImage: "/images/jet-flying.jpg",
      postText: "Witness the speed and agility of this jet...",
      isUserPost: false,
    },
    {
      username: "SkyHigh",
      profileImage: "/images/gamepad-solid.svg",
      postImage: "/images/supersonic-jet.jpg",
      postText:
        "Speed has always been a hallmark of jet design, and the fastest jets in the world push the boundaries of what's possible in aviation. The Lockheed SR-71 Blackbird, once a top-secret reconnaissance aircraft, still holds the record for the fastest jet, reaching speeds of over Mach 3. Other notable mentions include the MiG-25 Foxbat and the F-15 Eagle, both of which are capable of speeds exceeding Mach 2. These jets represent the pinnacle of aeronautical engineering, combining incredible speed with advanced technology to dominate the skies.",
      isUserPost: false,
    },
  ],
  agriculture: [
    {
      username: "FarmerJoe",
      profileImage: "/images/gamepad-solid.svg",
      postImage: "/images/crops-harvest.jpg",
      postText: "This year's harvest is looking better than ever...",
      isUserPost: false,
    },
    {
      username: "GreenThumb",
      profileImage: "/images/gamepad-solid.svg",
      postImage: "/images/farmng-tech.jpg",
      postText:
        "Revolutionizing agriculture with the latest farming technology...",
      isUserPost: false,
    },
  ],
  commerce: [
    {
      username: "MarketGuru",
      profileImage: "/images/gamepad-solid.svg",
      postImage: "/images/market-trends.jpg",
      postText: "Understanding the latest market trends...",
      isUserPost: false,
    },
    {
      username: "EcomExpert",
      profileImage: "/images/gamepad-solid.svg",
      postImage: "/images/online-shopping.jpg",
      postText: "E-commerce is transforming the way we shop...",
      isUserPost: false,
    },
  ],
  electronics: [
    {
      username: "TechSavvy",
      profileImage: "/images/discord-brands-solid.svg",
      postImage: "/images/new-gadget.jpg",
      postText: "This gadget is a game-changer in the world of electronics...",
      isUserPost: false,
    },
    {
      username: "CircuitMaster",
      profileImage: "/images/gamepad-solid.svg",
      postImage: "/images/robotics.jpg",
      postText: "The future of robotics and electronics is here...",
      isUserPost: false,
    },
  ],
  business: [
    {
      username: "BizWiz",
      profileImage: "/images/gamepad-solid.svg",
      postImage: "/images/business-meeting.jpg",
      postText: "Effective strategies for successful business meetings...",
      isUserPost: false,
    },
    {
      username: "Entrepreneur101",
      profileImage: "/images/gamepad-solid.svg",
      postImage: "/images/startup.jpg",
      postText: "Scaling your startup to new heights...",
      isUserPost: false,
    },
  ],

  wallpaper: [
    {
      username: "Alice Johnson",
      profileImage: "/images/gamepad-solid.svg",
      postImage: "/images/wallpaper-image1.jpg",
      postText: "Check out this amazing wallpaper...",
      isUserPost: false,
    },
    {
      username: "Bob Brown",
      profileImage: "/images/gamepad-solid.svg",
      postImage: "/images/wallpaper-image2.jpg",
      postText:
        "Less is more with minimalist wallpapers that focus on simplicity and clean design. Whether it's a monochromatic color scheme, geometric patterns, or a single, bold accent, minimalist wallpapers can transform a space into a modern, sophisticated haven. These designs work well in any setting, from a sleek home office to a cozy bedroom, offering a timeless aesthetic that never goes out of style.",
      isUserPost: false,
    },
  ],

  news: [
    {
      username: "DailyDigest",
      profileImage: "/images/gamepad-solid.svg",
      postImage: "/images/news-coverage.jpg",
      postText: "Today's top stories you need to know...",
      isUserPost: false,
    },
    {
      username: "BreakingNews",
      profileImage: "/images/breaking-news.jpg",
      postImage: "/images/breaking-news.jpg",
      postText: "Breaking: Major events happening right now...",
      isUserPost: false,
    },
  ],
  startups: [
    {
      username: "Innovator",
      profileImage: "/images/book-open-solid.svg",
      postImage: "/images/creative-ideas.jpg",
      postText: "Turning innovative ideas into successful startups...",
      isUserPost: false,
    },
    {
      username: "FounderLife",
      profileImage: "/images/gamepad-solid.svg",
      postImage: "/images/startup-launch.jpg",
      postText: "From concept to launch: The startup journey...",
      isUserPost: false,
    },
  ],
  art: [
    {
      username: "ArtisticSoul",
      profileImage: "/images/painting.jpg",
      postImage: "/images/painting.jpg",
      postText: "Exploring the beauty of modern art...",
      isUserPost: false,
    },
    {
      username: "CanvasMaster",
      profileImage: "/images/gamepad-solid.svg",
      postImage: "/images/art-gallery.jpg",
      postText: "A glimpse into a world of creativity and expression...",
      isUserPost: false,
    },
  ],
  quotes: [
    {
      username: "WiseWords",
      profileImage: "/images/inspiration.png",
      postImage: "/images/inspiration.png",
      postText:
        '"The only limit to our realization of tomorrow is our doubts of today."',
      isUserPost: false,
    },
    {
      username: "MotivationDaily",
      profileImage: "/images/motivational-quote.jpg",
      postImage: "/images/motivational-quote.jpg",
      postText:
        '"Success is not final, failure is not fatal: It is the courage to continue that counts."',
      isUserPost: false,
    },
  ],
  literature: [
    {
      username: "BookLover",
      profileImage: "/images/classical-novels.jpg",
      postImage: "/images/classical-novels.jpg",
      postText: "Delving into the timeless classics of literature...",
      isUserPost: false,
    },
    {
      username: "PageTurner",
      profileImage: "/images/poetry.jpg",
      postImage: "/images/poetry.jpg",
      postText: "Poetry that resonates with the soul...",
      isUserPost: false,
    },
  ],
  music: [
    {
      username: "MelodyMaker",
      profileImage: "/images/guiter.jpg",
      postImage: "/images/guiter.jpg",
      postText: "Creating melodies that touch the heart...",
      isUserPost: false,
    },
    {
      username: "BeatMaster",
      profileImage: "/images/concert.jpg",
      postImage: "/images/concert.jpg",
      postText: "Feel the rhythm, experience the energy of live music...",
      isUserPost: false,
    },
  ],
};
const username = {
  user: [
    {name: ""},
  ]
}
app.post("/homePage", (req, res) => {
  const allContent = Object.values(contentData).flat();
  const myName = req.body.username
  if(myName){
    username.user[0].name= myName
}
  // console.log(contentData[category])
  res.render("index.ejs", { 
    content: allContent, 
    showPostForm: false, 
    category: null, 
    username: username.user});
});

app.get("/homePage", (req, res) => {
  const allContent = Object.values(contentData).flat();
  res.render("index.ejs", {
     content: allContent,
      showPostForm: false, 
      category: null, 
      username: username.user
    });
});

app.get("/category/:category", (req, res) => {
  const category = req.params.category.toLowerCase();

  const content = contentData[category] || [];

  res.render("index.ejs", {
    content, 
    showPostForm: true, 
    category, 
    username: username.user 
  });
});

const upload = multer({ dest: path.join(__dirname, "public", "images") });

app.post("/submit-post", upload.single("imageUpload"), (req, res) => {
  const category = req.body.category;
  const postContent = req.body.postContent;
  const imageUpload = req.file;

  if (username.user.length > 0) {
    const currentUsername = username.user[0].name;
    
    contentData[category].push({
      id: uuidv4(),
      username: currentUsername, 
      postText: postContent,
      postImage: imageUpload ? `/images/${imageUpload.filename}` : "",
      profileImage: "/images/gamepad-solid.svg", 
      isUserPost: true,
    });

    console.log(`${currentUsername} posted a new message.`); 
  } else {
    console.log('No user available to post.');
  }
  res.redirect(`/category/${category}`);
});
// Route to handle delete request
app.delete('/delete-post/:category/:id', (req, res) => {
  const { category, id } = req.params;

  console.log(`Deleting post with ID ${id} from category ${category}`);

  if (contentData[category]) {

    contentData[category] = contentData[category].filter(post => post.id !== id);
    res.json({ success: true });

  } else {

    res.status(404).json({ success: false, message: 'Category not found' });
  }
});


// Route to handle patch request
app.patch('/update-post/:category/:id', (req, res) => {
  const { category, id } = req.params;
  const { newText } = req.body;

  if (contentData[category]) {
    const post = contentData[category].find(post => post.id === id);
    if (post) {

      post.postText = newText;
      res.json({ success: true, post });

    } else {
      res.status(404).json({ success: false, message: 'Post not found' });
    }
  } else {
    res.status(404).json({ success: false, message: 'Category not found' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
