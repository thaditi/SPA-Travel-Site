setInterval(() => {
  var x = document.getElementsByClassName("active");
  var span1 = document.getElementById("texth2");
  var span2 = document.getElementById("textp");
  // card 1
  var c1img = document.getElementById("c1img");
  var c1title = document.getElementById("c1title");
  var c1text = document.getElementById("c1text");

  // card 2
  var c2img = document.getElementById("c2img");
  var c2title = document.getElementById("c2title");
  var c2text = document.getElementById("c2text");

  //card 3
  var c3img = document.getElementById("c3img");
  var c3title = document.getElementById("c3title");
  var c3text = document.getElementById("c3text");

  var Id = x[1].id;
  switch (Id) {
    case "JAPAN":
      span1.innerHTML = "Japan";
      span2.innerHTML = "Japan";
      c1img.src = "img/JAPAN/mt-fuji-3408353.jpg";
      c2img.src =
        "img/JAPAN/red-and-brown-castle-landscape-photography-161401.jpg";
      c3img.src =
        "img/JAPAN/people-walking-between-high-rise-buildings-1344545.jpg";
      c1title.innerHTML = "Mount Fuji";
      c1text.innerHTML =
        "Mt. Fuji is an active volcano about 100 kilometers southwest of Tokyo. Commonly called “Fuji-san,” it’s the country’s tallest peak, at 3,776 meters. A pilgrimage site for centuries, it’s considered one of Japan’s 3 sacred mountains, and summit hikes remain a popular activity. Its iconic profile is the subject of numerous works of art, notably Edo Period prints by Hokusai and Hiroshige.";
      c2title.innerHTML = "Shurijo Castle";
      c2text.innerHTML =
        "Shuri Castle was a Ryukyuan gusuku castle in Shuri, Okinawa Prefecture, Japan. Between 1429 and 1879, it was the palace of the Ryukyu Kingdom, before becoming largely neglected. In 1945, during the Battle of Okinawa, it was almost completely destroyed. After the war, the castle was re-purposed as a university campus.";
      c3title.innerHTML = "Tokyo";
      c3text.innerHTML =
        "Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens. The city's many museums offer exhibits ranging from classical art (in the Tokyo National Museum) to a reconstructed kabuki theater (in the Edo-Tokyo Museum).";

      break;
    case "CHINA":
      span1.innerHTML = "China";
      span2.innerHTML = "China";
      c1img.src = "img/CHINA/architecture-asian-building-castle-189833.jpg";
      c2img.src = "img/CHINA/great-wall-of-china-1423580.jpg";
      c3img.src = "img/CHINA/buddha-statue-2870587.jpg";
      c1title.innerHTML = "Beijing";
      c1text.innerHTML =
        "Beijing, China’s sprawling capital, has history stretching back 3 millennia. Yet it’s known as much for modern architecture as its ancient sites such as the grand Forbidden City complex, the imperial palace during the Ming and Qing dynasties. Nearby, the massive Tiananmen Square pedestrian plaza is the site of Mao Zedong’s mausoleum and the National Museum of China, displaying a vast collection of cultural relics.";
      c2title.innerHTML = "The Great Wall Of China";
      c2text.innerHTML =
        "The Great Wall of China is the collective name of a series of fortification systems generally built across the historical northern borders of China to protect and consolidate territories of Chinese states and empires against various nomadic groups of the steppe and their polities.";
      c3title.innerHTML = "Taiyuan";
      c3text.innerHTML =
        "Taiyuan is the capital and largest city of Shanxi province, People's Republic of China. It is one of the main manufacturing bases of China. Throughout its long history, Taiyuan was the capital or provisional capital of many dynasties in China, hence the name Lóngchéng.";

      break;
    case "INDONESIA":
      span1.innerHTML = "Indonesia";
      span2.innerHTML = "Indonesia";
      c1img.src = "img/INDONESIA/aerial-photo-of-islands-on-sea-2583852.jpg";
      c2img.src =
        "img/INDONESIA/gray-concrete-buildings-under-blue-and-white-cloudy-sky-161293.jpg";
      c3img.src = "img/INDONESIA/green-grass-field-1743165.jpg";
      c1title.innerHTML = "Raja Ampat";
      c1text.innerHTML =
        "The Raja Ampat Islands are an Indonesian archipelago off the northwest tip of Bird’s Head Peninsula in West Papua. Comprising hundreds of jungle-covered islands, Raja Ampat is known for its beaches and coral reefs rich with marine life. Ancient rock paintings and caves are on Misool Island, while the crimson bird of paradise lives on Waigeo Island.";
      c2title.innerHTML = "Prambanan Temple";
      c2text.innerHTML =
        "Prambanan or Rara Jonggrang is a 9th-century Hindu temple compound in Special Region of Yogyakarta, Indonesia, dedicated to the Trimūrti, the expression of God as the Creator, the Preserver and the Transformer.";
      c3title.innerHTML = "Mount Agung";
      c3text.innerHTML =
        "Mount Agung is an active volcano in Bali, Indonesia, southeast of Mount Batur volcano, also in Bali. It is the highest point on Bali, and dominates the surrounding area, influencing the climate, especially rainfall patterns. From a distance, the mountain appears to be perfectly conical.";
      break;
  }
}, 500);
