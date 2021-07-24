
// q1のif文回答

function q1(){
    if(["どんてん"].includes(document.q_1.question1.value)){
        console.log("正解");
        $("#question1-result-p").text("正解");

    }else{ console.log("不正解");
        $("#question1-result-p").text("不正解")
    
    }

    document.getElementById("question1")
}

// q2

function q2(){
    if(["うたかた"].includes(document.q_2.question2.value)){
        console.log("正解");
        $("#question2-result-p").text("正解");

    }else{ console.log("不正解");
        $("#question2-result-p").text("不正解")
    
    }

    document.getElementById("question2")
}

// q3

function q3(){
    if(["あまのじゃく"].includes(document.q_3.question3.value)){
        console.log("正解");
        $("#question3-result-p").text("正解");

    }else{ console.log("不正解");
        $("#question3-result-p").text("不正解")
    
    }

    document.getElementById("question3")
}

// q4

function q4(){
    if(["ゆうこう"].includes(document.q_4.question4.value)){
        console.log("正解");
        $("#question4-result-p").text("正解");

    }else{ console.log("不正解");
        $("#question4-result-p").text("不正解")
    
    }

    document.getElementById("question4")
}

// q5

function q5(){
    if(["れもん"].includes(document.q_5.question5.value)){
        console.log("正解");
        $("#question5-result-p").text("正解");

    }else{ console.log("不正解");
        $("#question5-result-p").text("不正解")
    
    }

    document.getElementById("question5")
}

// q6

function question6(answer) {

    if(answer == 0){
        console.log("不正解");
        $("#question6-result-p").text("不正解");
    }else if(answer == 1){
        console.log("正解");
        $("#question6-result-p").text("正解");
    }else if(answer == 2){
        console.log("不正解");
        $("#question6-result-p").text("不正解")
    }

}

// q7

function question7(answer) {

    if(answer == 0){
        console.log("正解");
        $("#question7-result-p").text("正解");
    }else if(answer == 1){
        console.log("不正解");
        $("#question7-result-p").text("不正解");
    }else if(answer == 2){
        console.log("不正解");
        $("#question7-result-p").text("不正解")
    }

}

// q8

function question8(answer) {

    if(answer == 0){
        console.log("不正解");
        $("#question8-result-p").text("不正解");
    }else if(answer == 1){
        console.log("不正解");
        $("#question8-result-p").text("不正解");
    }else if(answer == 2){
        console.log("正解");
        $("#question8-result-p").text("正解")
    }

}

// q9

function question9(answer) {

    if(answer == 0){
        console.log("正解");
        $("#question9-result-p").text("正解");
    }else if(answer == 1){
        console.log("不正解");
        $("#question9-result-p").text("不正解");
    }else if(answer == 2){
        console.log("不正解");
        $("#question9-result-p").text("不正解")
    }

}

// q10

function question10(answer) {

    if(answer == 0){
        console.log("不正解");
        $("#question10-result-p").text("不正解");
    }else if(answer == 1){
        console.log("正解");
        $("#question10-result-p").text("正解");
    }else if(answer == 2){
        console.log("不正解");
        $("#question10-result-p").text("不正解")
    }

}