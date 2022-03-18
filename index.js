let music = new Audio("ding.mp3");
let gameover = false;
let turn = 'X';
const changeTurn = ()=>{
    return turn === "X" ? "0":"X"
}

// function to cheak for a win

const cheakWin = ()=>{

    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    wins.forEach(function(e){
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) 
        && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) 
        && (boxtext[e[0]].innerText !== ""))
        {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText+"  " + " Won";
            gameover=true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "156px";
        }
    })

}

//Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {

    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === '')
        {
            boxtext.innerText = turn;
            turn = changeTurn();
            music.play();
            cheakWin();
            if(!gameover)
            {
                document.getElementsByClassName('info')[0].innerText = 'Turn for '+ turn;
            }
        }
    })
})


reset.addEventListener('click',(e)=>{
    let boxtext = document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach(element =>{
        element.innerText="";
    });
    turn="X";
    gameover=false;
    document.getElementsByClassName("info")[0].innerText="Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
});