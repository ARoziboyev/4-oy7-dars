// 1.Berilgan massivdagi barcha elementlarni konsolga chiqaring.


// let four = ['anor','olma','anjir','behi',[4,6,7]]
// console.log(four); 

// 2.Massiv elementlarining yig‘indisini hisoblang.

// let four = ['anor','olma','anjir','behi',[4,6,7]]
// console.log(four.length); 

// 3.Massivdagi eng katta elementni toping.

// let four = [25,40]
// if (four[0]>four[1] || four[1]>four[0]) {
//     console.log(four); 
// }

// 5.Massivdagi barcha juft sonlarni konsolga chiqaring.


// let arr = [20,25,24,66,]

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         console.log(arr[i]);
        
//     }
// }

// 6.Massivdagi barcha toq sonlarni konsolga chiqaring.

// let arr = [20,25,24,66,30,33]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 == 0) {
//         console.log(arr[i]);
        
//     }
// }

// 7.Massivdagi manfiy sonlar sonini hisoblang.

// let arr = [20,-25,-24,66,30,-33]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//         console.log(arr[i]);
        
//     }
// }

// 8.Massivdagi musbat sonlar sonini hisoblang.

// let arr = [20,-25,-24,-66,30,-33]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         console.log(arr[i]);
        
//     }
// }


// 9.Massivdagi elementlarning o‘rtacha qiymatini toping
// bajarolmadim

// 10.Massivdagi barcha elementlarni teskari tartibda joylashtiring (massivni o‘zgartirmasdan).

// let arr = [20,25,24,66,30,33]
//    console.log(arr[5],arr[4],arr[3],arr[2],arr[1],arr[0]);
   

// 11.Massivning teskari nusxasini yarating.
// let arr = [20,25,24,66,30,33]
//    console.log(arr[5],arr[4],arr[3],arr[2],arr[1],arr[0]);
   
// 12.Massivning har bir elementini 2 ga ko‘paytiring va natijani yangi massivga saqlang.

// let arr = [10, 20, 30, 40, 50];
// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   newArr.push(arr[i] * 2);
// }

// console.log(newArr);


// 13.Massiv elementlari orasidan 0 qiymatlari sonini hisoblang.

// let arr = [10, 0, 30, 0, 0];
// let caunt = 0
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == 0) {
//     caunt++
//   }
// }

// console.log(caunt);

// 14.Massiv elementlari ichida 5 ga karrali bo‘lgan sonlarni konsolga chiqaring.

// let arr = [10,12, 20, 30,23, 40, 50];
// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 5 == 0) {
//         console.log(arr[i]);
        
//     }
// }


// 15.Massivni tartiblang (o‘sish bo‘yicha).

// let arr = [20,25,24,66,30,33]

// console.log(arr[0],arr[2],arr[1],arr[4],arr[5],arr[3]);

// 16.Massivni tartiblang (kamayish bo‘yicha).

// let arr = [20,25,24,66,30,33]

// console.log(arr[3],arr[5],arr[4],arr[1],arr[2],arr[0]);

// 17.Massivning har bir elementiga 3 qo‘shing va natijani yangi massivga saqlang.

// let arr = [10, 20, 30, 40, 50];
// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   newArr.push(arr[i] + 3);
// }

// console.log(newArr);


// 18.Massivdagi barcha musbat sonlarni alohida massivga ajrating.

// let arr = [20,-25,-24,-66,30,-33]
// let newArr = []
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         newArr.push(arr[i]);
        
//     }
// }
// console.log(newArr);

// 19.Massivdagi barcha manfiy sonlarni alohida massivga ajrating.


// let arr = [20,-25,-24,-66,30,-33]
// let newArr = []
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//         newArr.push(arr[i]);
        
//     }
// }
// console.log(newArr);


// 20.Massivning faqat toq indeksdagi elementlarini konsolga chiqaring.

// let arr = [20,25,24,66,30,33]

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//         console.log(arr[i]);
//     }
// }



// 22.Massivda nechta element 10 dan katta ekanini aniqlang.

// let arr = [-20,-25,24,66,30,-33]
// let newArr = []
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 10) {
//         newArr.push(arr[i]);
        
//     }
// }
// console.log(newArr);

// 24.Massivning birinchi elementini oxiriga o‘tkazing.

// let arr = [-20,-25,24,66,30,-33]
// arr[6] = -20
// console.log(arr);

// 25.Massivning oxirgi elementini boshiga o‘tkazing.


// let arr = [-20,-25,24,66,30,-33]
// arr[0] = -33
// arr[5] = -20
// console.log(arr);

// 26.Massivdan har ikkinchi elementni o‘chiring.

// let arr = [10, 20, 30, 40, 50];

// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (i % 2 === 0) { 
//     newArr.push(arr[i]);
//   }
// }

// console.log(newArr);


// 27.Massivdagi faqat manfiy elementlarni 0 bilan almashtiring.

// let arr = [-20,20,-5,-10,30,40]

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//         arr[0] = 0
//         arr[2] = 0
//         arr[3] = 0
//     }
//     console.log(arr);
// }



// 29.Massivdan 3 ga bo‘linmaydigan barcha elementlarni o‘chiring.

// let arr = [20,33,62,12,46,]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 !== 0) {
//         arr.pop()
//         console.log(arr);
//     }
//     }

// 31.Massiv elementlari orasidan faqat juft indeksdagi sonlarni yangi massivga saqlang.

// let arr = [20,-25,-24,-66,30,-33]
// let newArr = []
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         newArr.push(arr[i]);
        
//     }
// }
// console.log(newArr);


// 32.Massivdan 2 ga karrali sonlarni olib tashlang.

// let arr = [20,31,18,2,5,12]

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         arr.pop()
//     }
//     console.log(arr);
// }


// 34.Massivning birinchi va oxirgi elementlarini almashtiring.

// let arr = [-20,-25,24,66,30,-33]
// arr[0] = -33
// arr[5] = -20
// console.log(arr);

// 36.Massivdagi barcha elementlarni 3 ga bo‘lingan holatda yangi massivga saqlang.

// let arr = [9, 12, 15, 18, 21];

// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i] / 3);
// }

// console.log(newArr); 


// 37.Massivdan manfiy sonlarni olib tashlang.

// let arr = [-3, 5, -7, 8, -1, 10];

// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 0) {
//         newArr.push(arr[i]);
//     }
// }

// console.log(newArr); 


// 38.Massivdagi juft indeksdagi elementlarni 0 ga almashtiring.

// const arr = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) {
//         arr[i] = 0;
//     }
// }

// console.log(arr);

// 42.Massivni aylantiring (so‘nggi elementni boshiga qo‘ying).

// let arr = [1, 2, 3, 4, 5];

// let lastArr = arr[arr.length - 1];

// let arr2 = [lastArr];

// for (let i = 0; i < arr.length - 1; i++) {
//     arr2.push(arr[i]);
// }

// console.log(arr2);


// 43.Massivni aylantiring (birinchi elementni oxiriga qo‘ying).


// let arr = [1, 2, 3, 4, 5];

// let arr2 = arr[0];

// let arr3 = [];

// for (let i = 1; i < arr.length; i++) {
//     arr3.push(arr[i]);
// }

// arr3.push(arr2);

// console.log(arr3);



// 47.Massivdagi barcha sonlarni 2 ga karrali bo‘lgan sonlar bilan almashtiring.


// let arr = [1, 3, 5, 7, 9];


// for (let i = 0; i < arr.length; i++) {
//     arr[i] = (arr[i] % 2 == 0) ? arr[i] : arr[i] + (2 - (arr[i] % 2));
// }

// console.log(arr);


// 50.Massivni aylantirish (rotation) orqali 3 marta oldinga suring.

// let arr = [1, 2, 3, 4, 5, 6];

// let arr2 = 3;
// for (let i = 0; i < arr2; i++) {
//     let lastArr = arr.pop();
//     arr.unshift(lastArr);
// }

// console.log(arr);