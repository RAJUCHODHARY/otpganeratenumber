let btn=document.querySelector('#btn');
let otpshow=document.querySelector('#otpshow');
btn.addEventListener('click',()=>{
const otplenght=6;

const otp=Math.floor(Math.random()*Math.pow(10,otplenght));
otpshow.innerHTML=otp;
})