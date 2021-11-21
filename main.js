function homework() {
  let educational = document.getElementById('educationalLevel2').value;
  let classroom2 = document.getElementById('classroom2').value;
  let branch2 = document.getElementById('branch2').value;
  let text = document.getElementById('textarea');
  if (educational === "الابتدائية") {
    if (classroom2 === "الاول" || classroom2 === "الثاني" || classroom2 === "الثالث") {
      text.innerHTML = `
      القراءة :

      الاسلامية :

      الرياضيات :

      الانكليزي : 

      العلوم :`
    }
    if (classroom2 === "الرابع" || classroom2 === "الخامس" || classroom2 === "السادس") {
      text.innerHTML = `
      العربية :
      
      الاسلامية :

      الرياضيات :

      الانكليزي : 

      العلوم :
      
      الاجتماعيات : `
    }

    
  }

  if (educational === "الثانوية") {
    if (classroom2 === "الاول" || classroom2 === "الثاني") {
      text.innerHTML = `
      العربية :

      الاسلامية :

      الرياضيات :

      الانكليزي : 

      العلوم :`
    }
    if (classroom2 === "الثالث") {
      text.innerHTML = `
      العربية :
      
      الاسلامية :

      الرياضيات :

      الانكليزي : 

      الفيزياء :
      
      الكيمياء :
      
      الأحياء :
      
      الاجتماعيات :`
    }

    if (classroom2 === "الرابع") {
      text.innerHTML = `
      العربية :
      
      الاسلامية :

      الرياضيات :

      الانكليزي : 

      الفيزياء :
      
      الكيمياء :
      
      الأحياء : `
    }

    if (classroom2 === "السادس" || classroom2 === "الخامس") {
      if (branch2 === "الاحيائي") {
        text.innerHTML = `
      العربية :
      
      الاسلامية :

      الرياضيات :

      الانكليزي : 

      الفيزياء :
      
      الكيمياء :
      
      الأحياء : `
      }
      
      if (branch2 === "التطبيقي") {
        text.innerHTML = `
      العربية :
      
      الاسلامية :

      الرياضيات :

      الانكليزي : 

      الفيزياء :
      
      الكيمياء :
      
      الاقتصاد : `
      }
    }

    
  }
}
  
  function styleFn(us, ...grades) {
  document.getElementById('es').innerHTML =`${grades[0]}`;
  document.getElementById('ar').innerHTML =`${grades[1]}`;
  document.getElementById('math').innerHTML =`${grades[2]}`;
  document.getElementById('en').innerHTML =`${grades[3]}`;
  document.getElementById('elom').innerHTML = `${grades[4]}`;
  document.getElementById('ejt').innerHTML = `${grades[5]}`;
  document.getElementById('ph').innerHTML = `${grades[6]}`;
  document.getElementById('km').innerHTML = `${grades[7]}`;

}
function level() {
let level = document.getElementById("classroom").value;
let level2 = document.getElementById("classroom2").value;
let educational = document.getElementById("educationalLevel").value;
let educational2 = document.getElementById("educationalLevel2").value;
let branch = document.getElementById("branch").value;
let branch2 = document.getElementById("branch2").value;

if (level === 'الخامس' && educational === "الثانوية"  || level === 'السادس' && educational === "الثانوية" ) {
  document.getElementById('branch').style['display'] = "block";
}
else {
  document.getElementById('branch').style['display'] = "none";
}
if (level2 === 'الخامس' && educational2 === "الثانوية"  || level2 === 'السادس' && educational2 === "الثانوية" ) {
  document.getElementById('branch2').style['display'] = "block";
}
else {
  document.getElementById('branch2').style['display'] = "none";
}
}

function levell() {
  let level = document.getElementById("classroom").value;
  let educational = document.getElementById("educationalLevel").value;
  let branch = document.getElementById("branch").value;

  if (educational === "الابتدائية") {
    document.getElementById('esl').style['display'] = "block";
    document.getElementById('arb').style['display'] = "block";
    document.getElementById('eng').style['display'] = "block";
    document.getElementById('mat').style['display'] = "block";
    document.getElementById('elo').style['display'] = "block";

    if (level === "الرابع" && educational === "الابتدائية" || level === "الخامس"  && educational === "الابتدائية" || level === "السادس" && educational === "الابتدائية" ) {
      document.getElementById('ejtma').style['display'] = "block";
    }
    else {
      document.getElementById('ejtma').style['display'] = "none";
    }
  }

  if (educational === "الثانوية") {
    document.getElementById('esl').style['display'] = "block";
    document.getElementById('arb').style['display'] = "block";
    document.getElementById('eng').style['display'] = "block";
    document.getElementById('mat').style['display'] = "block";
    document.getElementById('elo').style['display'] = "block";
    document.getElementById('ejtma').style['display'] = "block";
    if (level === "الثالث") {
      document.getElementById('kms').style['display'] = "block";
      document.getElementById('phi').style['display'] = "block";
      document.getElementById('ejtma').innerHTML = "احياء";
    } else if (level === "الرابع" || level === "الخامس" || level === "السادس") {
      document.getElementById('phi').style['display'] = "block";
      document.getElementById('ejtma').style['display'] = "block";
      document.getElementById('elo').style['display'] = "block";
      document.getElementById('ejtma').innerHTML = "احياء";
      document.getElementById('elo').innerHTML = "كيمياء";
      document.getElementById('kms').style['display'] = "none";
      if (branch === "التطبيقي") {
        document.getElementById('ejtma').innerHTML = "اقتصاد";
      }
    }
  }
}

function serch() {
let studentsNames  = userName.value.toLowerCase();
let level = document.getElementById("classroom").value;
let educational = document.getElementById("educationalLevel").value;
let branch = document.getElementById("branch").value;
 if (educational === "الابتدائية") {
   if (level === 'الاول') {
    switch (studentsNames.trim()) {
      case '':
         styleFn(userName.value, 0, 0, 0, 0, 0, '--', '--', '--')
     break;
     default:
     document.getElementById('header').innerHTML = `عزيزي الطالب الاسم الذي قمت بكتابته <span style = 'color: red;'>"${userName.value}"</span> غير موجود يرجى التأكد من صحة الاسم`
    }
}
   if (level === 'الثاني') {
    switch (studentsNames.trim()) {
      case '':
         styleFn(userName.value, 0, 0, 0, 0, 0, '--', '--', '--')
     break;
     default:
     document.getElementById('header').innerHTML = `عزيزي الطالب الاسم الذي قمت بكتابته <span style = 'color: red;'>"${userName.value}"</span> غير موجود يرجى التأكد من صحة الاسم`
    }
   }
   if (level === 'الثالث') {
    switch (studentsNames.trim()) {
      case '':
         styleFn(userName.value, 0, 0, 0, 0, 0, '--', '--', '--')
     break;
     default:
     document.getElementById('header').innerHTML = `عزيزي الطالب الاسم الذي قمت بكتابته <span style = 'color: red;'>"${userName.value}"</span> غير موجود يرجى التأكد من صحة الاسم`
    }
   }
   if (level === 'الرابع') {
    switch (studentsNames.trim()) {
      case '':
         styleFn(userName.value, 0, 0, 0, 0, 0, 0, '--', '--')
     break;
     default:
     document.getElementById('header').innerHTML = `عزيزي الطالب الاسم الذي قمت بكتابته <span style = 'color: red;'>"${userName.value}"</span> غير موجود يرجى التأكد من صحة الاسم`
    }
   } 
   if (level === 'الخامس') {
    switch (studentsNames.trim()) {
      case '':
         styleFn(userName.value, 0, 0, 0, 0, 0, 0, '--', '--')
     break;
     default:
     document.getElementById('header').innerHTML = `عزيزي الطالب الاسم الذي قمت بكتابته <span style = 'color: red;'>"${userName.value}"</span> غير موجود يرجى التأكد من صحة الاسم`
    }
   }
   if (level === 'السادس') {
    switch (studentsNames.trim()) {
      case '':
         styleFn(userName.value, 0, 0, 0, 0, 0, 0, '--', '--')
     break;
     default:
     document.getElementById('header').innerHTML = `عزيزي الطالب الاسم الذي قمت بكتابته <span style = 'color: red;'>"${userName.value}"</span> غير موجود يرجى التأكد من صحة الاسم`
    }
   }
  }


  if (educational === "الثانوية") {
    if (level === 'الاول') {
      switch (studentsNames.trim()) {
        case '':
           styleFn(userName.value, 0, 0, 0, 0, 0, 0, '--', '--')
       break;
       default:
       document.getElementById('header').innerHTML = `عزيزي الطالب الاسم الذي قمت بكتابته <span style = 'color: red;'>"${userName.value}"</span> غير موجود يرجى التأكد من صحة الاسم`
      }
    }
    if (level === 'الثاني') {
      switch (studentsNames.trim()) {
        case '':
           styleFn(userName.value, 0, 0, 0, 0, 0, 0, '--', '--')
       break;
       default:
       document.getElementById('header').innerHTML = `عزيزي الطالب الاسم الذي قمت بكتابته <span style = 'color: red;'>"${userName.value}"</span> غير موجود يرجى التأكد من صحة الاسم`
      }
       
    }
    if (level === 'الثالث') {
      switch (studentsNames.trim()) {
        case 'زيد رحمن':
           styleFn(userName.value, 90, 50, 80, 80, 40, 90, 30, 70)
       break;
       default:
       document.getElementById('header').innerHTML = `عزيزي الطالب الاسم الذي قمت بكتابته <span style = 'color: red;'>"${userName.value}"</span> غير موجود يرجى التأكد من صحة الاسم`
      }
    }
    
    if (level === 'الرابع') {
      switch (studentsNames.trim()) {
        case '':
           styleFn(userName.value, 0, 0, 0, 0, 0, 0, 0, '--')
       break;
       default:
       document.getElementById('header').innerHTML = `عزيزي الطالب الاسم الذي قمت بكتابته <span style = 'color: red;'>"${userName.value}"</span> غير موجود يرجى التأكد من صحة الاسم`
      }
    } 
    if (level === 'الخامس') {
      if (branch === "الاحيائي") {
        switch (studentsNames.trim()) {
          case '':
             styleFn(userName.value, 0, 0, 0, 0, 0, 0, 0, '--')
         break;
         default:
         document.getElementById('header').innerHTML = `عزيزي الطالب الاسم الذي قمت بكتابته <span style = 'color: red;'>"${userName.value}"</span> غير موجود يرجى التأكد من صحة الاسم`
        }
      }
      else {
        switch (studentsNames.trim()) {
          case '':
             styleFn(userName.value, 0, 0, 0, 0, 0, 0, 0, '--')
         break;
         default:
         document.getElementById('header').innerHTML = `عزيزي الطالب الاسم الذي قمت بكتابته <span style = 'color: red;'>"${userName.value}"</span> غير موجود يرجى التأكد من صحة الاسم`
        }
      }
      
    }
    if (level === 'السادس') {
      if (branch === "الاحيائي") {
        switch (studentsNames.trim()) {
        case '':
           styleFn(userName.value, 0, 0, 0, 0, 0, 0, 0, '--')
       break;
       default:
       document.getElementById('header').innerHTML = `عزيزي الطالب الاسم الذي قمت بكتابته <span style = 'color: red;'>"${userName.value}"</span> غير موجود يرجى التأكد من صحة الاسم`
      }
        }
        else {
          switch (studentsNames.trim()) {
            case '':
               styleFn(userName.value, 0, 0, 0, 0, 0, 0, 0, '--')
           break;
           default:
           document.getElementById('header').innerHTML = `عزيزي الطالب الاسم الذي قمت بكتابته <span style = 'color: red;'>"${userName.value}"</span> غير موجود يرجى التأكد من صحة الاسم`
          }
        }
     }
  }
}
