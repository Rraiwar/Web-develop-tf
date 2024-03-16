
            document.addEventListener("DOMContentLoaded", function() {
                const button = document.querySelector("#clickHereButton");
        
                button.addEventListener("click", function(event) {
                    event.preventDefault(); // ป้องกันการโหลดหน้าใหม่เมื่อคลิกที่ลิงก์
        
                    // ดึงค่า email และ password จากฟอร์ม
                    const email = document.getElementById("email").value;
                    const password = document.getElementById("password").value;
        
                    // ตรวจสอบว่า email และ password ถูกต้องหรือไม่
                    if (email === "tf007" && password === "tf007") {
                        alert("เข้าสู่ระบบสำเร็จ!");
                        // เปลี่ยนเส้นทางไปยังหน้า CJ
                        window.location.href = "/insiteadmin.html"; // เปลี่ยนเส้นทาง URL ตามต้องการ
                    } else {
                        alert("Email หรือ Password ไม่ถูกต้อง");
                    }
                });
            });
    