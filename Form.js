function getValues()
        {
            let Enroll=document.getElementById("enroll").value;
            let name=document.getElementById("name").value;
            let reg=document.getElementById("regno").value;
            let caste=document.getElementById("caste").value;
            let Sex=document.getElementById("sex").value;
            let Email=document.getElementById("email").value;
            let phone=document.getElementById("mob").value;
            let residance=document.getElementById("addr").value;
            let role=document.getElementById("role").value;
            let dob=document.getElementById("date").value;
            let cur_intern=document.getElementById("curr_training").value;
            document.writeln("Your Details: <br>"+"Your Enrollment Number: "+Enroll+"<br>");
            document.writeln("Your Name: "+name+"<br>");
            document.writeln("Registration No.: "+reg+"<br>");
            document.writeln("Your Category: "+caste+"<br>");
            document.writeln("Your Gender: "+Sex+"<br>");
            document.writeln("Your Email: "+Email+"<br>");
            document.writeln("Your Phone Number: "+phone+"<br>");
            document.writeln("Your Role: "+role+"<br>");
            document.writeln("Your Date of Birth: "+dob+"<br>");
            document.writeln("Currently Doing Intern/Training: "+cur_intern+"<br>");
        }