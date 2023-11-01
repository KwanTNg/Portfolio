const pianoKeys = document.querySelectorAll(".key");

function playSound(newUrl) {
  new Audio(newUrl).play();
}

pianoKeys.forEach((pianoKey, i) => {
  //   const number = i < 9 ? "0" + (i + 1) : i + 1;
  const reMap = [
    "02",
    "04",
    "07",
    "09",
    "11",
    "14",
    "16",
    "18",
    "21",
    "23",
    "01",
    "03",
    "05",
    "06",
    "08",
    "10",
    "12",
    "13",
    "15",
    "17",
    "19",
    "20",
    "22",
    "24",
  ];
  const newUrl = "24-piano-keys/key" + reMap[i] + ".mp3";
  pianoKey.addEventListener("click", () => playSound(newUrl));
});
