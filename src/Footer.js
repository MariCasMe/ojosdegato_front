fetch('https://ojosdegato.up.railway.app/pages/pages/Footer.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('footerContainer').innerHTML = data;
            })
            .catch(error => {
                console.error('Error al cargar el footer:', error);
            });