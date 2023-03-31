const button = document.querySelector('#btn');
button.addEventListener("click",calculaiter);

const buttonTip = document.querySelector('#addTip');
buttonTip.addEventListener('click',showTip);//нажатие кнопки Add a tip! выбор процентов чаевых
function showTip(e){
    e.preventDefault();

tip.style.display = "block";

}

function calculaiter(e){ //кнопка Calculator функция
    e.preventDefault()// запрет перезагрузки страницы
const bill =document.querySelector('#bill').value; //доступ к тому что напишет пользователь
const people = document.querySelector('#people').value;
const tip = document.querySelector('#tip').value;
if (bill === "" || people=== ""|| people < 1){
    Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Please enter your information!',
        
      })
}
//сколько заплатит1 человек
let amountPerson = bill/people; //расчет суммы на человека
//console.log(amountPerson);
//сколько чаевых заплатит 1 человек
//формулы для расчета
let tipPerPerson = (bill*tip)/people;// расчет чаевых
//console.log(tipPerPerson);
//сумма счета+чаевые
let totalSum=amountPerson+tipPerPerson;
//console.log(totalSum);
//показываем в приложении
//добавляем toFixed(2)
// вывод округленных чисел до 2 знаков после запятой
amountPerson = amountPerson.toFixed(2);
tipPerPerson = tipPerPerson.toFixed(2);
totalSum = totalSum.toFixed(2);

//загрузка в приложение
document.querySelector('#divBill').textContent = amountPerson ;//выводим текст на экран чаевые на 1 человека
document.querySelector('#divTip').textContent = tipPerPerson;// вывод чаевых
document.querySelector('#BillandTip').textContent = totalSum;//вывод общей суммы
//console.log(tipPerPerson.toFixed(2))// выводим 2 знака после запятой с помощью toFixed(2)
}