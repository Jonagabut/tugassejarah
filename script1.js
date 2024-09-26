function register() {
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;

    // Mengecek apakah username sudah terdaftar di local storage
    if (localStorage.getItem(username)) {
        alert("Username sudah terdaftar. Silakan coba lagi.");
    } else {
        // Menambahkan akun baru ke local storage
        localStorage.setItem(username, password);
        alert("Pendaftaran berhasil!");

        // Mengosongkan field input pendaftaran
        document.getElementById("register-username").value = "";
        document.getElementById("register-password").value = "";
    }
}

function login() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    // Mengecek apakah akun sesuai di local storage
    const storedPassword = localStorage.getItem(username);

    if (storedPassword === password) {
        alert(`Login berhasil! Selamat datang, ${username}!`);
    } else {
        alert("Login gagal. Periksa kembali username dan password Anda.");
    }
}
