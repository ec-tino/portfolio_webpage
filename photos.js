const photos = [
    'myImages/jsa1.jpeg',
    'myImages/jsa4.jpeg','myImages/jsa3.jpeg',
    'myImages/mau.jpg','myImages/mau1.jpeg','myImages/mau2.jpeg',
    'myImages/mau-cert.jpeg', 
    'myImages/grandcanyon-team.jpeg',
    'myImages/grandcanyon-wood.jpeg',
    'myImages/habitat-wall.jpeg',
    'myImages/habitat.jpeg',
    'myImages/fashion_show1.jpeg', 'myImages/fashion_show2.jpeg',
    'myImages/aptKicks1.jpeg', 'myImages/pickup.jpeg'
];

const summaries = [
    "1 of 15: graduating from JSA", 
    "2 of 15: providing presentation feedback to fellow JSA participants",
    "3 of 15: working with team on Case Competion, JSA",
    "4 of 15: socializing ahead of IMAU debate",
    "5 of 15: arguing my stance during the executive committee meeting",
    "6 of 15: visiting the Liberian embassy",
    "7 of 15: receiving certificate of participation, IMAU",
    "8 of 15: visiting the Grand Canyon with the COVE volunteering team",
    "9 of 15: capturing service done for the Navajo people ",
    "10 of 15: assisting in building exterior walls",
    "11 of 15: taking a pose after fixing ceiling",
    "12 of 15: modeling for the ASU fashion show",
    "13 of 15: modeling for the ASU fashion show",
    "14 of 15: congratulating The Apt Kicks on the Colgate IM Champions board",
    "15 of 15: breaking for a photo, pickup soccer"
]

let currentIndex = 0;

function showPhoto(index) {
    const photoElement = document.getElementById('current-photo');
    const summaryElement = document.getElementById('photo-summary');
    photoElement.src = photos[index];
    summaryElement.textContent = summaries[index];
}

function nextPhoto() {
    currentIndex = (currentIndex + 1) % photos.length;
    showPhoto(currentIndex);
}

function prevPhoto() {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    showPhoto(currentIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    showPhoto(currentIndex);
});
