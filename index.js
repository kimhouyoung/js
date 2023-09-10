const profileLink = document.getElementById("profileLink");

const profile = [
    {
        name: "장지수",
        occupation: "래퍼",
        introduction: "대한민국의 MZ세대 대표 크리에이터 장지수",
        profileImage: "./img/ss.webp",
        profileLink: "https://www.youtube.com/results?search_query=%EA%BD%88%EB%91%90%EB%A3%B9"
        },
        {
        name: "형독",
        occupation: "유튜버",
        introduction: "대한민국에서 갈빙리타 라는 말을 만든 장본인",
        profileImage: "./img/다운.jpg",
        profileLink: "https://www.youtube.com/@alstn9947"
        },
        {
        name: "J.Fla",
        occupation: "유튜버",
        introduction: "대한민국의 싱어송라이터이자 유튜브 뮤직 크리에이터",
        profileImage: "./img/OIP.jpeg",
        profileLink: "https://www.youtube.com/@JFlaMusic"
        },
        {
        name: "쯔양",
        occupation: "먹방 스트리머",
        introduction: "대한민국의 대표 먹방 크리에이터",
        profileImage: "./img/channels4_profile.jpg",
        profileLink: "https://www.youtube.com/@tzuyang6145"
        },
        {
        name: "빅맨",
        occupation: "비트박스",
        introduction: "대한민국을 대표하는 비트박서",
        profileImage: "./img/ss.jpeg",
        profileLink: "https://www.youtube.com/@Bigman_rtst"
        },
];

const slider = document.getElementById("slider");
const profileImage = document.getElementById("profileImage");
const name = document.getElementById("name");
const occupation = document.getElementById("occupation");
const introduction = document.getElementById("introduction");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const body = document.body; // body 요소를 가져옵니다.

let currentIndex = 0;
let autoSlideInterval;
const backgroundColors = ["#808080", "#964b00", "#553830", "#ccc", "#8b00ff"]; // 배경색 배열

function updateSlide(index) {
  profileImage.src = profile[index].profileImage;
  profileLink.href = profile[index].profileLink;
  name.textContent = profile[index].name;
  occupation.textContent = profile[index].occupation;
  introduction.textContent = profile[index].introduction;
  
  // 배경색 변경
  body.style.backgroundColor = backgroundColors[index];
}

function showPrevSlide() {
  currentIndex = (currentIndex - 1 + profile.length) % profile.length;
  updateSlide(currentIndex);
}

prevButton.addEventListener("click", () => {
  clearInterval(autoSlideInterval);
  showPrevSlide();
});

function showNextSlide() {
  currentIndex = (currentIndex + 1) % profile.length;
  updateSlide(currentIndex);
}

nextButton.addEventListener("click", () => {
  clearInterval(autoSlideInterval);
  showNextSlide();
});

function autoSlide() {
  showNextSlide();
}

autoSlideInterval = setInterval(autoSlide, 6000);

updateSlide(currentIndex);
