const root = document.querySelector('#root');
const api = [
  {
    "name": "Golden Temple",
    "images": ["Amritsar1.webp", "Amritsar2.webp", "Amritsar3.webp"],
    "distance": 810,
    "lat": 31.619986,
    "lon": 74.876525,
    "reviews": "Golden Temple tend to be extremely positive, with many visitors considering it a must-visit destination not only for its religious importance but also for its architectural beauty, cultural richness, and the sense of peace it offers.",
    "location": "Amritsar, Punjab",
    "description": "The Golden Temple, or Sri Harmandir Sahib, holds immense significance for Sikhs and stands as a prominent symbol of their faith. Here are some of its key highlights. Architectural Marvel: The Golden Temple's architecture is a fusion of Hindu and Islamic styles, symbolizing the Sikh philosophy of inclusivity. The temple is adorned with marble, intricate gold leaf work, and stunning ornamental details. Golden Façade: The outer walls and dome of the temple are covered with approximately 750 kilograms of pure gold, which glimmers in the sunlight, earning the shrine its 'Golden' moniker. Sarovar (Holy Tank): The temple is surrounded by the Amrit Sarovar, a sacred pool of water. Pilgrims and visitors take ritual baths in its waters, believed to have healing properties and spiritual significance. Guru Granth Sahib: The holiest scripture of Sikhism, the Guru Granth Sahib, is housed inside the temple during the day and carried in a procession to its nighttime resting place in the Akal Takht, the temporal seat of Sikh religious authority. Langar (Community Kitchen): The Golden Temple serves free meals (langar) to all visitors regardless of their caste, creed, or religion. It's one of the largest community kitchens globally, exemplifying the Sikh principles of equality, service, and sharing. Harmandir Sahib Complex: The temple is part of a larger complex with various buildings, including the Akal Takht, Baba Atal Rai Tower, and Central Sikh Museum, showcasing Sikh history, artifacts, and paintings. Spiritual Gathering: People from all walks of life and different faiths come to the Golden Temple to pray, meditate, and experience the spiritual tranquility that surrounds the shrine. Daily Rituals: The temple maintains a schedule of continuous religious rituals, including the continuous singing of hymns from the Guru Granth Sahib (Akhand Path) and the captivating night-time ceremony (Palki Sahib) when the Guru Granth Sahib is ceremonially carried to its resting place.",
    "ratings": 5
  },

  {
    "name": "Red Fort",
    "images": ["Delhi1.webp", "Delhi2.webp", "Delhi3p.webp"],
    "distance": 480,
    "lat": 27.532769,
    "lon": 77.676947,
    "reviews": "Red Fort generally express appreciation for its historical significance, architectural beauty, and the immersive experience it offers, making it a highly recommended destination for tourists and history enthusiasts visiting Delhi.",
    "location": " Chandni Chowk, New Delhi",
    "description": "Historical Marvel: Visitors often praise the Red Fort for its historical significance and architectural beauty. The intricate design, use of red sandstone, and the overall grandeur of the fort captivate many. Architectural Splendor: The impressive scale and intricate detailing of the fort's structures, including the Diwan-i-Aam (Hall of Public Audience) and Diwan-i-Khas (Hall of Private Audience), receive high acclaim. Cultural Importance: Reviewers appreciate the fort as a symbol of India's rich cultural heritage. Its role in Indian history, as well as its UNESCO World Heritage status, adds to its allure. Sound and Light Show: Many visitors enjoy the evening sound and light show at the fort, which narrates the history of Delhi and the Mughal Empire, creating an immersive experience. Well-Maintained Grounds: The gardens and pathways within the fort complex are often commended for their cleanliness and maintenance, providing a pleasant environment for visitors to explore. Crowd Management: Depending on the season and time of day, the fort can be crowded. Some reviews mention that visiting during off-peak hours can enhance the experience by allowing a more leisurely exploration.",
    "ratings": 5
  },

  {
    "name": "Mathura and Vrindavan",
    "images": ["Mathura1.webp", "Mathura2.webp", "Mathura3.webp"],
    "distance": 335,
    "lat": 27.532762,
    "lon": 77.673989,
    "reviews": "both Mathura and Vrindavan are often praised for their spiritual and cultural significance, attracting devotees, tourists, and those interested in exploring Hindu mythology and traditions. The deeply rooted connection to Lord Krishna and the vibrant atmosphere of these towns contribute to their appeal.",
    "location": "Mathura and Vrindavan , Uttar Pradesh",
    "description": "Mathura: Religious Significance: Visitors often appreciate Mathura as the birthplace of Lord Krishna. The temples, especially the Krishna Janmabhoomi Temple Complex, evoke a sense of spirituality and reverence. Cultural Heritage: Reviews highlight the town's rich cultural heritage, showcased through its temples, ghats (steps leading to the river), and festivals. The bustling streets and vibrant markets also contribute to the cultural experience. Krishna Janmabhoomi Temple: The Krishna Janmabhoomi Temple Complex, believed to be the exact birthplace of Lord Krishna, receives special attention and is considered a significant site for devotees. Local Cuisine and Crafts: Visitors often praise the local cuisine, particularly the sweets, and appreciate the opportunity to purchase traditional handicrafts and souvenirs. Vrindavan: Spiritual Atmosphere: Reviews frequently highlight the deeply spiritual ambiance of Vrindavan. The town is associated with Lord Krishna's youthful days and his divine pastimes. Temple Visits: Vrindavan is home to numerous temples, each with its own unique significance. Visitors often speak highly of temples like Banke Bihari Temple, ISKCON Temple, and Radha Raman Temple. Devotional Activities: Devotees and visitors engage in devotional singing, known as kirtan, and participate in ceremonies and aartis (religious rituals) at the temples, contributing to the spiritual experience. Cultural Traditions: The town's cultural richness, especially during festivals like Holi and Janmashtami, is celebrated and appreciated by many visitors.",
    "ratings": 5
  },

  {
    "name": "Tajmajal",
    "images": ["tajMahal.jpg", "open-map.jpg"],
    "lat": 27.174827,
    "lon": 78.042219,
    "distance": 150,
    "reviews": "Stepping into the ivory embrace of the Taj Mahal was a transcendental experience, a journey into a realm where time seemed to stand still. The sheer magnificence of this architectural wonder left me breathless, and every facet of my visit unfolded like a chapter from a fairy tale.",
    "location": "Mausoleum in Agra, Uttar Pradesh",
    "type": "White Marlbal",
    "duration": "8 hour",
    "highlights": [
      "UNESCO World Heritage Site",
      "Night Viewing",
      "Architectural Symmetry"
    ],
    "ratings": 4.5,
    "description": "The Taj Mahal, often referred to as the Crown of Palaces is a world-renowned white marble mausoleum located in Agra, Uttar Pradesh, India. Built by the Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, the Taj Mahal is a masterpiece of Mughal architecture and a UNESCO World Heritage Site. Here is a description of the Taj Mahal"
  },
  {
    "name": "Nainital",
    "images": ["Nainital1.webp", "Nainital2.webp", "Nainital3.webp"],
    "lat": 29.379837,
    "lon": 79.45003,
    "distance": 410,
    "reviews": "Nainital often highlight its natural beauty, tranquil environment, and the range of activities it offers, making it a popular destination among tourists seeking a serene getaway amidst scenic hills and lakes.",
    "location": "Kumaon , Uttarakhand",
    "description": "Scenic Beauty: Lakes and Mountains: Visitors often rave about the picturesque setting of Nainital. The Naini Lake, surrounded by lush hills, is a prominent attraction. Other lakes like Bhimtal, Sattal, and Naukuchiatal add to the natural charm. Panoramic Views: The town offers breathtaking panoramic views from various viewpoints such as Snow View Point, Tiffin Top, and viewpoints around the Naini Lake, drawing admiration from visitors. Relaxing Atmosphere: Weather: Nainital's pleasant climate, especially during the summer months, attracts tourists seeking relief from the heat of the plains. Boating and Leisure: Boating on the lakes, leisurely walks around the town, and shopping in the markets are frequently mentioned as enjoyable activities contributing to a relaxing stay. Attractions and Activities: Cultural and Historical Sites: Reviews often mention places like the Naina Devi Temple, Governor's House, and St. John in the Wilderness Church for their historical and cultural significance. Adventure and Nature: Visitors appreciate the opportunities for trekking, bird-watching, and exploring the surrounding forests and hills for their natural beauty and adventure.Tourism Experience Accommodation and Amenities: Reviews frequently discuss a range of accommodations, from luxury resorts to budget-friendly options, catering to different preferences. Crowd and Seasonal Variations: Depending on the season, Nainital can be crowded. Some reviewers suggest visiting during weekdays or the off-season for a more peaceful experience.",
    "ratings": 5
  }

];

let template = `
<div class="element sm:flex gap-4 p-2 rounded mb-10 bg-white">
<div class="img-wrapper">
  <img src="images/{TOUR_IMAGE}" alt="mappy" />
</div>
<div class="p-6 w-6/12">
  <h1 class="font-medium text-3xl">{TOUR_NAME}</h1>
  <div class="font-medium text-gray-600">
    <h1 class="my-2">{TOUR_LOCATION}</h1>
    <p class="my-2">
    {TOUR_DESC}
    </p>
    <p>
      distance:
      <span class="text-green-500 cursor-pointer underline"
        >{TOUR_DISTANCE} km <i class="bi bi-geo-alt-fill"></i
      ></span>
    </p>
    <div class="flex justify-between mt-24">
      <div></div>
      <button
        class="p-3 bg-green-500 text-white rounded-2xl hover:bg-green-600">
        Show Details
      </button>
    </div>
  </div>
</div>
</div>
`;

function calculateDistance(lat1, lon1, lat2, lon2) {
  // Radius of the Earth in kilometers
  const R = 6371;

  // Convert latitude and longitude from degrees to radians
  const radLat1 = (lat1 * Math.PI) / 180;
  const radLon1 = (lon1 * Math.PI) / 180;
  const radLat2 = (lat2 * Math.PI) / 180;
  const radLon2 = (lon2 * Math.PI) / 180;

  // Calculate the differences between the coordinates
  const deltaLat = radLat2 - radLat1;
  const deltaLon = radLon2 - radLon1;

  // Haversine formula to calculate the distance
  const a = Math.sin(deltaLat / 2) ** 2 + Math.cos(radLat1) * Math.cos(radLat2) * Math.sin(deltaLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  // Distance in kilometers
  const distance = R * c;

  return distance;
}

const getLatLon = async function () {
  const data = await (await fetch('https://api.ipify.org?format=json')).json();
  const userIP = data.ip;

  // Send the IP address to a geolocation API
  const locationData = await ((await fetch(`https://ipapi.co/${userIP}/json/`)).json());

  const userLocation = {
    city: locationData.city,
    region: locationData.region,
    country: locationData.country_name,
    latitude: locationData.latitude,
    longitude: locationData.longitude,
  };
  return userLocation;
};

const getDistance = async function (destinationLat, destinationlon) {
  const clientLoc = await getLatLon();
  return calculateDistance(clientLoc.latitude, clientLoc.longitude, destinationLat, destinationlon);
};


api.forEach(async (tour) => {
  let copy = template;
  const distance = (await getDistance(tour.lat, tour.lon));
  if (distance) tour.distance = (+distance + 0.18 * distance).toFixed(1);
  copy = copy.replace(/{TOUR_NAME}/g, tour.name)
    .replace(/{TOUR_LOCATION}/g, tour.location)
    .replace(/{TOUR_DESC}/g, tour.description.slice(0, 300) + '...')
    .replace(/{TOUR_DISTANCE}/g, tour.distance)
    .replace(/{TOUR_IMAGE}/g, tour.images[0]);

  const division = document.createElement('div');
  division.innerHTML = copy;
  root.insertAdjacentElement('afterend', division);
})




