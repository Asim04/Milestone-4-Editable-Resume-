
    window.addEventListener("load", ()=>{

        let name = localStorage.getItem("name", )
        // console.log("♣♣ widdow addevent", name);  // For Check broweser console
        
        let desig = localStorage.getItem("desig")
        let phone = localStorage.getItem("phone")
        let emai = localStorage.getItem("email")
        let address = localStorage.getItem("address");    console.log(localStorage.getItem("address"));
        let education = localStorage.getItem("edu")
        let Higher_qualification = localStorage.getItem("hq")
        let secondary_qualification = localStorage.getItem("sq")
        let skill_1 = localStorage.getItem("skill1")
        let skill_2 = localStorage.getItem("skill2")
        let skill_3 = localStorage.getItem("skill3")
        let skill_4 = localStorage.getItem("skill4")
        let lang_1 = localStorage.getItem("lang1")
        let lang_2 = localStorage.getItem("lang2")
        let about = localStorage.getItem("about")
        let start_year = localStorage.getItem("styea")
        let end_Year = localStorage.getItem("edyear")
        let company = localStorage.getItem("company")
        let company_lucation = localStorage.getItem("Com-lucation")
        let job_Tital = localStorage.getItem("job-tital")
        let achivement_1 = localStorage.getItem("achv-1")
        let achivement_2 = localStorage.getItem("achv-2")
        let achivement_3 = localStorage.getItem("achv-3")
        let picture = localStorage.getItem("profile_pic")
        // ---------------------------------------------------------------


        let resName:any = document.getElementById("resName")
        resName.textContent = name     // form se jo text-contant aage ga wooo loscalstorage main save ho ga and then hum local storage se oper get kr k line no: 4  name k varible main store kara liya

        let resDesig:any = document.getElementById("resDesig")
        resDesig.textContent = desig  

        let resPhone:any = document.getElementById("resPhone")
        resPhone.textContent = phone  

        let resEmail:any = document.getElementById("resEmail")
        resEmail.textContent = emai 

        let resـAddress:any = document.getElementById("res-Address")
        resـAddress.textContent = address  

        let degree:any = document.getElementById("degree")
        degree.textContent = education

        let High_qualification:any = document.getElementById("High-qualification")
        High_qualification.textContent = Higher_qualification

        let secondry_qualification:any = document.getElementById("secondry-qualification")
        secondry_qualification.textContent = secondary_qualification

        let skill1:any = document.getElementById("skill-1")
        skill1.textContent = skill_1

        let skill2:any = document.getElementById("skill-2")
        skill2.textContent = skill_2

        let skill3:any = document.getElementById("skill-3")
        skill3.textContent = skill_3

        let skill4:any = document.getElementById("skill-4")
        skill4.textContent = skill_4

        let lang1:any = document.getElementById("lang-1")
        lang1.textContent = lang_1

        let lang2:any = document.getElementById("lang-2")
        lang2.textContent = lang_2

        let about_res:any = document.getElementById("about")
        about_res.textContent = about

        let startYear:any = document.getElementById("start-year")
        startYear.textContent = start_year

        let endYear:any = document.getElementById("end-year")
        endYear.textContent = end_Year

        let comPany:any = document.getElementById("company")
        comPany.textContent = company?.trim()

        let copany_location:any = document.getElementById("copany-location")
        copany_location.textContent = company_lucation

        let Designation:any = document.getElementById("Designation")
        Designation.textContent = job_Tital

        let Achievements1:any = document.getElementById("Achievements1")
        Achievements1.textContent = achivement_1

        let Achievements2:any = document.getElementById("Achievements2")
        Achievements2.textContent = achivement_2

        let Achievements3:any = document.getElementById("Achievements3")
        Achievements3.textContent = achivement_3

        let resume_image:any = document.getElementById("resume-image")
        resume_image.src = picture
        
      
        







        console.log(localStorage.getItem("skill3"));
        console.log(localStorage.getItem("email"));
        console.log(localStorage.getItem("Com-lucation"));
        console.log(localStorage.getItem("achv-3"));
        
    
    
    

    })    
    


// print Button
let print_Button = document.getElementById("print_button")

print_Button!.addEventListener("click", ()=>{
    window.print()
});

// ============= Edit Button =============================
let edit_button = document.getElementById("edit_button")

edit_button!.addEventListener("click", ()=>{
    window.history.back()
})