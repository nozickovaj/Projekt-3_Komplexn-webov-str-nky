// Responzivní menu

const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] === "fa-bars") {
    hamburgerIcon.classList.add("fa-xmark");
    hamburgerIcon.classList.remove("fa-bars");
    menuList.style.display = "block";
  } else {
    hamburgerIcon.classList.add("fa-bars");
    hamburgerIcon.classList.remove("fa-xmark");
    menuList.style.display = "none";
  }
});

// Light / Dark mode
// myHelp: https://www.youtube.com/watch?v=Kxv7GIDK9tg

//selectors
const themeToggleBtn = document.querySelector(".theme-toggle");
// state
const theme = localStorage.getItem("theme");
// on mount
theme && document.body.classList.add(theme);
// handler
handleThemeToggle = () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark-mode");
  } else {
    localStorage.removeItem("theme");
  }
};
//event
themeToggleBtn.addEventListener("click", handleThemeToggle);

// Zvětšování a změnšování obrázku po najetí a odjetí myši
const image1 = document.querySelector(".image1");
const image2 = document.querySelector(".image2");
const image3 = document.querySelector(".image3");

// vytvoření funkce
const imageScale = (image) => {
  image.addEventListener("mouseenter", () => {
    image.style.transform = "scale(1.1)";
  });

  image.addEventListener("mouseleave", () => {
    image.style.transform = "scale(1)";
  });
};

// použití funkce
imageScale(image1);
imageScale(image2);
imageScale(image3);

// Kontrola hesla
// myHelp: https://www.youtube.com/watch?v=Iov7QfBLz_A

const password = document.querySelector(".password");
const passwordRepeat = document.querySelector(".password-repeat");
const resultText = document.querySelector(".text");

// vytvoření funkce
const passwordCheck = (createPassword) => {
  createPassword.addEventListener("input", () => {
    const passwordValue = password.value;
    const passwordRepeatValue = passwordRepeat.value;

    if (passwordValue === passwordRepeatValue) {
      resultText.textContent = "Hesla se shodují.";
      resultText.classList.add("valid");
      resultText.classList.remove("invalid");
    } else {
      resultText.textContent = "Hesla se neshodují. Zadejte znovu.";
      resultText.classList.add("invalid");
      resultText.classList.remove("valid");
    }

    if (passwordValue === "" && passwordRepeatValue === "") {
      resultText.textContent = "";
    }
  });
};

// použití funkce
passwordCheck(password);
passwordCheck(passwordRepeat);

// Scrollování
// myHelp: www.youtube.com/watch?v=H_8pQ4eOy8g&list=PLQ8x_VWW6AktVAKDISvXrcsh6kp7Jt_SM&index=95

window.addEventListener("scroll", function () {
  let scrolled = window.scrollY;
  let scrollable = document.documentElement.scrollHeight - window.innerHeight;

  if (Math.ceil(scrolled) === scrollable) {
    let toTop = document.querySelector(".top-page");
    toTop.style.display = "block";

    toTop.addEventListener("click", function () {
      toTop.style.display = "none";
    });
  }
});
