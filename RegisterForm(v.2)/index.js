function submitData(){
    let firstnameDOM = document.querySelector('input[name=firstname]')
    let surnameDOM = document.querySelector('input[name=surname]')
    let ageDOM = document.querySelector('input[name=age]')

    // เอาเฉพาะตัวที่checked = true เท่านั้น
    // จะได้ไม่ต้องมาวน loop หา checked =true
    let genderDOM = document.querySelector('input[name=gender]:checked')
    let interestsDOM = document.querySelectorAll('input[name=interest]:checked')
    
    let descriptionDOM = document.querySelector('textarea[name=description]')
    
    // เตรียมสะสมข้อมูลเป็น object ก้อนนึงเพื่อเตรียมตัวส่งไปยัง backend ได้

    // interest อาจทำเป็น array หรือ นำมาต่อกันเป็น 'sport,music,book' ก็ได้ (ในที่นี้จะทำเปนแบบหลัง)
    let interest =''

    for(let i=0 ; i<interestsDOM.length ; i++){
        interest += interestsDOM[i].value

        if(i!=interestsDOM.length-1) interest += ', '

    }

    let userData={
        firstName: firstnameDOM.value,
        surname: surnameDOM.value,
        age: ageDOM.value,
        gender: genderDOM.value,
        description: descriptionDOM.value,
        interest: interest
    }

    // เราจะได้ object มา ซึ่งเราสามารถแปลงสิ่งนี้เป้น json แล้วสามารถส่ง json ไปผ่าน API ออกมาได้่
    console.log('submitData', userData)

}