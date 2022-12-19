document.getElementsByTagName("h1")[0].style.fontSize = "8vw";

let titles = ['love', 'lain', '𝕃𝕒𝕚𝕟', 'Ｌａｉｎ'];
    let currentTitle = 0;

    function updateTitle() {
      document.title = titles[currentTitle];
      currentTitle = (currentTitle + 1) % titles.length;
    }

    setInterval(updateTitle, 1000);
