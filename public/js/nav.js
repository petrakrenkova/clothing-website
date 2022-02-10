const createNav = () => {
    let nav = document.querySelector ('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="img/dark-logo.png" alt="dark logo" class="brand-logo">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">search</button>
                </div>
                <a>
                    <img src="img/user.png" alt="user">
                    <div class="login-logout-popup">
                        <p class="account-info">Log in as, name</p>
                        <button class="btn" id="user-btn">Log out</button>
                    </div>
                </a>
                <a href="#"><img src="img/cart.png" alt="cart"></a>
        </div>
        </div>
        <ul class="links-container">
            <li class="link-items"><a href="#" class="link">home</a></li>
            <li class="link-items"><a href="#" class="link">women</a></li>
            <li class="link-items"><a href="#" class="link">men</a></li>
            <li class="link-items"><a href="#" class="link">kids</a></li>            
            <li class="link-items"><a href="#" class="link">accessories</a></li>          
        </ul>
    `;
}

createNav();