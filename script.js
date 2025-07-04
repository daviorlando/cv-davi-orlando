// Função para alternar o menu lateral
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');
    const overlay = document.querySelector('.overlay');

    sidebar.classList.toggle('expanded');

    if (window.innerWidth > 768) {
        mainContent.classList.toggle('expanded');
    } else {
        overlay.classList.toggle('active');
    }
}

// Função para mostrar seções
function showSection(event, sectionId) {
    // Previne o comportamento padrão do link
    event.preventDefault();

    // Remove classe active de todas as seções
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));

    // Remove classe active de todos os links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));

    // Adiciona classe active na seção selecionada
    document.getElementById(sectionId).classList.add('active');

    // Adiciona classe active no link clicado
    event.currentTarget.classList.add('active');

    // Fecha o menu em dispositivos móveis
    if (window.innerWidth <= 768) {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.querySelector('.overlay');
        sidebar.classList.remove('expanded');
        overlay.classList.remove('active');
    }
}

// Função para lidar com o envio do formulário
function handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulação de envio - em um projeto real, aqui seria feita a integração com um backend
    alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso. Retornarei o contato em breve no e-mail: ${email}`);

    // Limpa o formulário
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}

// Fecha o menu quando clicar fora dele em desktop
document.addEventListener('click', function (event) {
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.querySelector('.menu-toggle');

    // Só funciona em desktop
    if (window.innerWidth > 768) {
        if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
            if (sidebar.classList.contains('expanded')) {
                toggleMenu();
            }
        }
    }
});

// Adiciona responsividade
window.addEventListener('resize', function () {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');
    const overlay = document.querySelector('.overlay');

    if (window.innerWidth > 768) {
        overlay.classList.remove('active');
        if (sidebar.classList.contains('expanded')) {
            mainContent.classList.add('expanded');
        } else {
            mainContent.classList.remove('expanded');
        }
    } else {
        mainContent.classList.remove('expanded');
        if (!sidebar.classList.contains('expanded')) {
            overlay.classList.remove('active');
        }
    }
});

document.addEventListener("DOMContentLoaded", () => {
    fetch("sobre.html")
        .then(resp => {
            if (!resp.ok) throw new Error("Falha ao carregar a seção: " + resp.status);
            return resp.text();
        })
        .then(html => {
            // injeta o HTML dentro do placeholder
            document.getElementById("about-placeholder").innerHTML = html;
        })
        .catch(err => console.error(err));
});

document.addEventListener("DOMContentLoaded", () => {
    fetch("formacao.html")
        .then(resp => {
            if (!resp.ok) throw new Error("Falha ao carregar a seção: " + resp.status);
            return resp.text();
        })
        .then(html => {
            // injeta o HTML dentro do placeholder
            document.getElementById("formation").innerHTML = html;
        })
        .catch(err => console.error(err));
});

document.addEventListener("DOMContentLoaded", () => {
    fetch("portifolio.html")
        .then(resp => {
            if (!resp.ok) throw new Error("Falha ao carregar a seção: " + resp.status);
            return resp.text();
        })
        .then(html => {
            // injeta o HTML dentro do placeholder
            document.getElementById("portifolio").innerHTML = html;
        })
        .catch(err => console.error(err));
});

document.addEventListener("DOMContentLoaded", () => {
    fetch("contato.html")
        .then(resp => {
            if (!resp.ok) throw new Error("Falha ao carregar a seção: " + resp.status);
            return resp.text();
        })
        .then(html => {
            // injeta o HTML dentro do placeholder
            document.getElementById("contato").innerHTML = html;
        })
        .catch(err => console.error(err));
});

document.addEventListener("DOMContentLoaded", () => {
    fetch("navbar.html")
        .then(resp => {
            if (!resp.ok) throw new Error("Falha ao carregar a seção: " + resp.status);
            return resp.text();
        })
        .then(html => {
            // injeta o HTML dentro do placeholder
            document.getElementById("navbar").innerHTML = html;
        })
        .catch(err => console.error(err));
});