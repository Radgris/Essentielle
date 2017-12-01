let $ = require('jquery')  // jQuery now loaded and assigned to $

let count1 = 10
let count2 = 6
let count3 = 15
let count4 = 4
let count5 = 15
let count6 = 8
let count7 = 2
let count8 = 10
let count9 = 18
let count10 = 7

$('#p1').text(count1.toString())
$('#m1').on('click', () => {
   count1 ++ 
   $('#p1').text(count1)
}) 
$('#p1').text(count1.toString())
$('#n1').on('click', () => {
   count1 --
   $('#p1').text(count1)
}) 
$('#p1').text(count1.toString())


$('#p2').text(count2.toString())
$('#m2').on('click', () => {
   count2 ++ 
   $('#p2').text(count2)
}) 
$('#p2').text(count2.toString())
$('#n2').on('click', () => {
   count2 --
   $('#p2').text(count2)
}) 

$('#p3').text(count3.toString())
$('#m3').on('click', () => {
   count3 ++ 
   $('#p3').text(count3)
}) 
$('#p3').text(count3.toString())
$('#n3').on('click', () => {
   count3 --
   $('#p3').text(count3)
}) 

$('#p4').text(count4.toString())
$('#m4').on('click', () => {
   count4 ++ 
   $('#p4').text(count4)
}) 
$('#p4').text(count4.toString())
$('#n4').on('click', () => {
   count4 --
   $('#p4').text(count4)
}) 

$('#p5').text(count5.toString())
$('#m5').on('click', () => {
   count5 ++ 
   $('#p5').text(count5)
}) 
$('#p5').text(count5.toString())
$('#n5').on('click', () => {
   count5 --
   $('#p5').text(count5)
}) 

$('#p6').text(count6.toString())
$('#m6').on('click', () => {
   count6 ++ 
   $('#p6').text(count6)
}) 
$('#p6').text(count6.toString())
$('#n6').on('click', () => {
   count6 --
   $('#p6').text(count6)
}) 

$('#p7').text(count7.toString())
$('#m7').on('click', () => {
   count7 ++ 
   $('#p7').text(count7)
}) 
$('#p7').text(count7.toString())
$('#n7').on('click', () => {
   count7 --
   $('#p7').text(count7)
}) 

$('#p8').text(count8.toString())
$('#m8').on('click', () => {
   count8 ++ 
   $('#p8').text(count8)
}) 
$('#p8').text(count8.toString())
$('#n8').on('click', () => {
   count8 --
   $('#p8').text(count8)
}) 

$('#p9').text(count9.toString())
$('#m9').on('click', () => {
   count9 ++ 
   $('#p9').text(count9)
}) 
$('#p9').text(count9.toString())
$('#n9').on('click', () => {
   count9 --
   $('#p9').text(count9)
}) 

$('#p10').text(count10.toString())
$('#m10').on('click', () => {
   count10 ++ 
   $('#p10').text(count10)
}) 
$('#p10').text(count10.toString())
$('#n10').on('click', () => {
   count10 --
   $('#p10').text(count10)
}) 
