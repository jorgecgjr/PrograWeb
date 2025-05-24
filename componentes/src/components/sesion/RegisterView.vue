<template>
    <div class="container">
            <div class="wrapper">
                <div class="title"><span>Registro</span></div>
                <form action="#">
                    <div class="row">
                        <i class="bi bi-person"></i>
                        <input type="text" placeholder="Nombre" required>
                    </div>
                    <div class="row">
                        <i class="bi bi-person"></i>
                        <input type="text" placeholder="Apellido" required>
                    </div>
                    <div class="row">
                        <i class="bi bi-envelope"></i>
                        <input type="email" placeholder="Correo electrónico" required>
                    </div>
                    <div class="row">
                        <i class="bi bi-lock"></i>
                        <input type="password" placeholder="Contraseña" required>
                    </div>
                    <div class="row button">
                        <input type="submit" value="Registrarse">
                    </div>
                    <div class="signup-link">¿Ya tienes una cuenta? <a href="index.html">Iniciar sesión</a></div>
                </form>
            </div>
        </div>
</template>