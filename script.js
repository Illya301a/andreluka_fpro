//Create smileys data
const smileys = [
    {
        smile: "😆",
        voteCount: 0,
    },
    {
        smile: "😅",
        voteCount: 0,
    },
    {
        smile: "😃",
        voteCount: 0,
    },
    {
        smile: "😈",
        voteCount: 0,
    },
    {
        smile: "😉",
        voteCount: 0,
    },
    {
        smile: "😉",
        voteCount: 0,
    },
];

//Get smile && vote containers
let smileContainer = document.querySelector('#smile-container');
let voteContainer = document.querySelector('#vote-container');

//Update vote scores
function updateVotes() {
    voteContainer.innerHTML = "";

    smileys.forEach((item) => {
        let voteElement = document.createElement('div');
        voteElement.classList.add('vote-score');
        voteElement.textContent = item.voteCount;

        voteContainer.appendChild(voteElement);
    })
}

//Show smileys elements
function showSmiles() {
    smileContainer.innerHTML = "";

    smileys.forEach((item, index) => {
        let smileElement = document.createElement('div');
        smileElement.textContent = item.smile;

        //Добавил удаление смайликов
        let deleteButton = document.createElement('button');
        deleteButton.textContent = '-';
        deleteButton.addEventListener('click', () => {
            smileys.splice(index, 1);
            for (let i = 0; i < smileys.length; i++){
                smileys[i].voteCount = 0
                showSmiles()
                updateVotes()
            }
            showSmiles();
            updateVotes();
        });

        smileElement.appendChild(deleteButton);

        smileElement.addEventListener('click', () => {
            smileys[index].voteCount++;
            updateVotes();
        });

        smileContainer.appendChild(smileElement);
    });
}

//Добавил добавление смайликов
const newSmiley = document.querySelector('#newSmiley');
const addSmiley = document.querySelector('#addSmiley');

addSmiley.addEventListener('click', () => {
    const newSmileyText = newSmiley.value.trim();
    if (newSmileyText) {
        const newSmiley = {
            smile: newSmileyText,
            voteCount: 0,
        };
        smileys.push(newSmiley);
        newSmiley.value = '';
        showSmiles();
        updateVotes();
    }
});


//Initialization
showSmiles();
updateVotes();
