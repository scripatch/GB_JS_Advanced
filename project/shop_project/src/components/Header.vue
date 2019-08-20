<template>
    <header class="header">
        <div class="container header_wrapper">
            <div class="header_left">
                <a href="index.html" class="logo_link">
                    <img src="~@/assets/logo.png" alt="logo" class="logo_img">BRAN<span class="last_letter">D</span>
                </a>
                <form action="#" class="header_form">
                    <div class="browse_btn">Browse<img src="~@/assets/browse_arrow.png" alt="" class="browse_arrow">
                        <div class="drop_down">
                            <div class="drop_down_column">
                                <p class="drop_down_title">Women</p>
                                <ul class="drop_list">
                                    <li><a href="catalog.html" class="drop_down_link">Dresses</a></li>
                                    <li><a href="catalog.html" class="drop_down_link">Tops</a></li>
                                    <li><a href="catalog.html" class="drop_down_link">Sweaters/Knits</a></li>
                                    <li><a href="catalog.html" class="drop_down_link">Jackets/Coats</a></li>
                                    <li><a href="catalog.html" class="drop_down_link">Blazers</a></li>
                                    <li><a href="catalog.html" class="drop_down_link">Denim</a></li>
                                    <li><a href="catalog.html" class="drop_down_link">Leggings/Pants</a></li>
                                    <li><a href="catalog.html" class="drop_down_link">Skirts/Shorts</a></li>
                                    <li><a href="catalog.html" class="drop_down_link">Accessories </a></li>
                                </ul>
                                <p class="drop_down_title">Men</p>
                                <ul class="drop_list">
                                    <li><a href="catalog.html" class="drop_down_link">Tees/Tank tops</a></li>
                                    <li><a href="catalog.html" class="drop_down_link">Shirts/Polos</a></li>
                                    <li><a href="catalog.html" class="drop_down_link">Sweaters</a></li>
                                    <li><a href="catalog.html" class="drop_down_link">Sweatshirts/Hoodies</a></li>
                                    <li><a href="catalog.html" class="drop_down_link">Blazers</a></li>
                                    <li><a href="catalog.html" class="drop_down_link">Jackets/vests</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <input type="text" name="search_text" id="search_text" class="search_text"
                           placeholder="Search for Item..."/>
                    <button class="search_btn"><img src="~@/assets/search_btn.png" alt="search_btn"></button>
                </form>
            </div>
            <div class="header_right">
                <div class="cart_block">
                    <a href="cart.html" class="cart_link"><img src="~@/assets/cart.svg" alt="" class="cart_img"></a>

                    <div class="cart_menu_holder">
                        <div class="cart_menu">
                            <ul class="cart_menu_list">
                                <li class="cart_menu_item">
                                    <a href="product.html" class="cart_menu_link">
                                        <div class="cart_product_img_holder">
                                            <img src="~@/assets/cart_product1.jpg" alt="product" class="cart_product_img">
                                        </div>
                                        <div class="cart_product_details">
                                            <h4 class="cart_product_name">Rebox Zane</h4>
                                            <img src="~@/assets/cart-stars.png" alt="stars">
                                            <h4 class="cart_product_price">1 x $250</h4>
                                        </div>
                                        <div class="cart_remove_holder">
                                            <img src="~@/assets/del_cart.png" alt="remove">
                                        </div>
                                    </a>
                                </li>
                                <li class="cart_menu_item">
                                    <a href="product.html" class="cart_menu_link">
                                        <div class="cart_product_img_holder">
                                            <img src="~@/assets/cart_product2.jpg" alt="product" class="cart_product_img">
                                        </div>
                                        <div class="cart_product_details">
                                            <h4 class="cart_product_name">Rebox Zane</h4>
                                            <img src="~@/assets/cart-stars.png" alt="stars">
                                            <h4 class="cart_product_price">1 x $250</h4>
                                        </div>
                                        <div class="cart_remove_holder">
                                            <img src="~@/assets/del_cart.png" alt="remove">
                                        </div>
                                    </a>
                                </li>
                            </ul>
                            <div class="cart_price">
                                <h3 class="cart_price_text">TOTAL</h3>
                                <h3 class="cart_price_text">$500.00</h3>
                            </div>
                            <form action="cart.html">
                                <input type="button" class="cart_button" value="Checkout" onclick="location.href='checkout.html';">
                                <input type="submit" class="cart_button cart_to_cart" value="Go to Cart" onclick="location.href='cart.html';">
                            </form>
                        </div>
                    </div>

                </div>
                <div class="account_btn">My Account<img src="~@/assets/account_arrow.png" alt="" class="account_arrow">
                </div>

            </div>
        </div>
    </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>
