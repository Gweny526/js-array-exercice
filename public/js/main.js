// // // 01
// let group = ["Georges", "Wassime", "Ayhan", "Gweny"];
// console.log(group);
// // group.slice(3);
// // console.log(group);
// // console.log(group.splice(3));
// console.log(group.indexOf("Ayhan"));
// console.log(group[3]);
// console.log(group.length);
// // console.log(group.length);
// console.log("______");
// // 02
// let prenom = ["Gweny"]
// console.log(prenom);

// prenom.push("Dos Santos");
// prenom.push("29 ans")
// console.log(prenom);

// console.log("______");
// // 3
// let classeCoding = [];
// classeCoding.push("Ayhan");
// console.log(classeCoding);
// classeCoding.push("Benedicte");
// console.log(classeCoding);
// classeCoding.push("Louise", "Jamila");
// console.log(classeCoding);
// classeCoding.push("Sebastien", "Adame");
// console.log(classeCoding);

// // classeCoding.splice(4,2);
// // toujours faire a partir de l'index
// classeCoding.splice(classeCoding.indexOf("seb"),2);
// console.log(classeCoding);

// classeCoding.push("Dawid", "Malo");
// // classeCoding[6] = classeCoding[6].toUpperCase;
// console.log(classeCoding);

// classeCoding.push("Alex");
// console.log(classeCoding);
// // puisque que le dernier rentré est alex et que du coup pop sert a retiré le derniere mais on peut aussi utilisé le splice+ indexof
// classeCoding.pop();

// console.log(classeCoding);

// classeCoding.push("Maxence", "Mohammed");
// console.log(classeCoding);

// classeCoding.push("Saliou");
// console.log(classeCoding);

// classeCoding.push("Zulma", "Maximilien");
// classeCoding[classeCoding.indexOf("Zulma")] = classeCoding[classeCoding.indexOf("Zulma")].toUpperCase();
// classeCoding[classeCoding.indexOf("Maximilien")] = classeCoding[classeCoding.indexOf("Maximilien")].toUpperCase();
// console.log(classeCoding);

// classeCoding.push("Natchez");
// console.log(classeCoding);

// classeCoding.push("Zakaria", "Ayoub");
// classeCoding.splice(classeCoding.indexOf("zak"),2)
// console.log(classeCoding);

// classeCoding.push("Achraf");
// console.log(classeCoding);

// classeCoding.push("Abdellah");
// console.log(classeCoding);

// 04
let myTab = ["test", "gweny", "lol"];
console.log(myTab);
// // "<" permettra de prendre tout les mot plus grand que 5
// const result = myTab.filter(myTab => myTab.length < 5)
// console.log(result);

myTab.forEach(el => {console.log(el);});

