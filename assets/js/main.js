var itemApi = 'http://localhost:3000/item'

function start() {
    getItem(renderItem);
}
start();
// Function
function getItem(callback) {
    fetch(itemApi)
        .then(respone => respone.json())
        .then(callback)
}
function renderItem(items) {
    // var doneItem = document.querySelector('.Item-item')
    var htmls = items.map(function (item) {

        return `
            <div class="col l-2-4 m-4 c-6">
                    <a href="#" class="home-product-item">
                      <div
                        class="home-product-item__img"
                        style="
                          background-image: url(${item.img});
                        "
                      ></div>
                      <h4 class="home-product-item-name">
                        ${item.title}
                      </h4>
                      <div class="home-product-item__price">
                        <span class="home-product-item__price-old"
                          >${item.price}đ</span
                        >
                        <span class="home-product-item__price-current"
                          >${((item.price) * 15) / 100}đ</span
                        >
                      </div>
                      <div class="home-product-item__action">
                        <div
                          class="home-product-item__like home-product-item__liked"
                        >
                          <i
                            class="home-product-item__like-icon-empty bi bi-heart"
                          ></i>
                          <i
                            class="home-product-item__like-icon-fill bi bi-heart-fill"
                          ></i>
                        </div>
                        <div class="home-product-item__rating">
                          <i
                            class="home-product-item__rated bi bi-star-fill"
                          ></i>
                          <i
                            class="home-product-item__rated bi bi-star-fill"
                          ></i>
                          <i
                            class="home-product-item__rated bi bi-star-fill"
                          ></i>
                          <i
                            class="home-product-item__rated bi bi-star-fill"
                          ></i>
                          <i class="bi bi-star-fill"></i>
                        </div>
                        <span class="home-product-item__sold"
                          >Đã bán ${item.numSold}k</span
                        >
                      </div>
                      <div class="home-product-item__source">
                        <span class="home-product-item__brand">${item.brand}</span>
                        <div class="home-product-item__source-location">
                          ${item.region}
                        </div>
                      </div>

                      <div class="home-product-item__favorite">
                        <i class="ti-check"></i><span>Yêu thích</span>
                      </div>
                      <div class="home-product-item__sale-off">
                        <span class="home-product-item__sale-off-percent"
                          >43%</span
                        >
                        <span class="home-product-item__sale-off-label"
                          >GIẢM</span
                        >
                      </div>
                    </a>
                  </div>
        `

    })
    document.querySelector('.home-product > .row').innerHTML = htmls.join('')



}