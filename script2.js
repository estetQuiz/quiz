var answerOnQuestionType1 = document.querySelectorAll(".type1")
var btn = document.querySelector('#checkRes')
var answerType1 = ['процессор', '8', 'windows', 'видеокарта', 'жесткий диск'] 
var rightAnswer = 0

var answerOnQuestionType2_1 = document.querySelectorAll('[name="q6"]')
var answerOnQuestionType2_2 = document.querySelectorAll('[name="q7"]')
var answerOnQuestionType2_3 = document.querySelectorAll('[name="q8"]')
var answerOnQuestionType2_4 = document.querySelectorAll('[name="q9"]')
var answerOnQuestionType2_5 = document.querySelectorAll('[name="q10"]')

var answerType2_1 = 'всё лучше'
var answerType2_2 = 'Да'
var answerType2_3 = 'Нет'
var answerType2_4 = 'эстетичный'
var answerType2_5 = '1'

var answerOnQuestionType3_1 = document.querySelectorAll('[name="q11"]')
console.log(answerOnQuestionType3_1, answerOnQuestionType3_1[0].checked)
var answerType3_1 = ["прозрачные","не прозрачные", "эстетичные"]

btn.addEventListener('click', checkResults)

function checkResults(){
    rightAnswer = 0
    countRightType1()
    countRightType2(answerOnQuestionType2_1, answerType2_1)
    countRightType2(answerOnQuestionType2_2, answerType2_2)
    countRightType2(answerOnQuestionType2_3, answerType2_3)
    countRightType2(answerOnQuestionType2_4, answerType2_4)
    countRightType2(answerOnQuestionType2_5, answerType2_5)
    countRightType3(answerOnQuestionType3_1, answerType3_1)
    alert("баллов набранно: " + rightAnswer + " из 6")
}

function countRightType1(){
    for(var i =0; i < answerOnQuestionType1.length; i++){
        answerOnQuestionType1[i].value = answerOnQuestionType1[i].value.toLowerCase()
        console.log(answerOnQuestionType1[i].value)
    }
    for(var i =0; i < answerType1.length; i++){
        if(answerType1[i] === answerOnQuestionType1[i].value){
            rightAnswer++
        }
    }
}

function countRightType2(listAnswerOnQuestion, answer){
    for(var i =0; i < listAnswerOnQuestion.length; i++){
        console.log(listAnswerOnQuestion[i].value)
        if(listAnswerOnQuestion[i].checked && listAnswerOnQuestion[i].value === answer){
            rightAnswer++
            break
        }
    }
}

function countRightType3(listAnswerOnQuestion, answer){
    for(var i = 0; i < listAnswerOnQuestion.length; i++){
        console.log(listAnswerOnQuestion[i].checked, listAnswerOnQuestion[i].value)
        if(listAnswerOnQuestion[i].checked){
            if(listAnswerOnQuestion[i].value == answer[i]){
                rightAnswer++
            }
        }
    }
}