document.getElementsByTagName("h1")[0].style.fontSize = "8vw";

let titles = ['love', 'lain', '𝕃𝕒𝕚𝕟', 'Ｌａｉｎ' , "you're there", 'YES UR HERE', 'ｕｒ ｈｅｒｅ', 'welcome', 'wₑₗcₒₘₑ', 'to' , 'ⓣⓞ', 'my', '『m』『y』', 'site' , 'ǝʇıs'];
    let currentTitle = 0;

    function updateTitle() {
      document.title = titles[currentTitle];
      currentTitle = (currentTitle + 1) % titles.length;
    }

    setInterval(updateTitle, 1000);
