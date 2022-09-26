

var extenso = new Date();
var dayWeek = extenso.getDay();
var day = extenso.getDate();
var month = extenso.getMonth();
var year = extenso.getFullYear();

var week = new Array("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado");
var months = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");

document.getElementById("date").innerHTML= `Seja Bem-vindo (a)! Hoje é ${week[dayWeek]},  ${day} de ${months[month]} de ${year}`