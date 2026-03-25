async function checkUsername(username) {
            try{
                const response = await fetch('check_user.php',{
                    method: 'POST',
                    headers: {'Content-Type':'application/x-www-form-urlencoded'},
                    body: `username=${encodeURIComponent(username)}`
                });
                const data = await response.json();
                
                const messageBox = document.getElementById('status');
                messageBox.innerText = data.message;
                messageBox.style.color = data.available?'green':'red';
            }catch (error){
                console.error('Error fetching data:',error)
            }
            
            
        }