const listData = [
{
    id:1,
    name: '[Resin] Goku 1/4 cực nét',
    dim_attribute: '40cm * 56cm * 24cm - (Dài * Cao * Sâu)',
    weight_attribute: '3kg',
    description: 'Mô hình Goku Resin kích thước 1/4 cực nét, đầy đủ phụ kiện, box. Nếu anh em cần mod led thì vui lòng liên hệ shop khi order nha.',
    image: 'https://i.ebayimg.com/images/g/aTsAAOSwMMxe-94F/s-l1200.webp'
},
{
    id:2,
    name: '[Resin] Goku SSJ 4 1/4 cực nét',
    dim_attribute: '22cm * 56cm * 22cm - (Dài * Cao * Sâu)',
    weight_attribute: '3kg',
    description: 'Mô hình Goku Resin kích thước 1/4 cực nét, đầy đủ phụ kiện, box. Nếu anh em cần mod led thì vui lòng liên hệ shop khi order nha.',
    image: 'https://media.karousell.com/media/photos/products/2022/4/8/original_dragonball_goku_super_1649412048_ec3eb94f_progressive.jpg'
},
{
    id:3,
    name: '[Resin] Broly',
    dim_attribute: '24cm * 42cm * 14cm - (Dài * Cao * Sâu)',
    weight_attribute: '2,1kg',
    description: 'Mô hình Broly Resin cực nét, đầy đủ phụ kiện, box. Nếu anh em cần mod led thì vui lòng liên hệ shop khi order nha.',
    image: 'https://www.clubhousestatues.com/cdn/shop/files/B169DB90-2CDC-4AB7-AE16-57A43041367E.jpg?v=1703168952&width=1946'
},
{
    id:4,
    name: '[Resin] Vegeta bán thân',
    dim_attribute: '28cm * 37cm * 15cm - (Dài * Cao * Sâu)',
    weight_attribute: '1,6kg',
    description: 'Mô hình Vegeta bán thân Resin cực nét, đầy đủ phụ kiện, box. Hàng nét đến từng sợi tóc nhé anh em. Hàng order trước từ 7 -15 ngày nha.',
    image: 'https://cdn11.bigcommerce.com/s-ttxokgrlfn/images/stencil/1280x1280/products/1909/13134/_20231012202426__22780.1697114997.jpg?c=1'
},
{
    id:5,
    name: '[Resin] Vegeta bán thân',
    dim_attribute: '28cm * 37cm * 15cm - (Dài * Cao * Sâu)',
    weight_attribute: '1,6kg',
    description: 'Mô hình Vegeta bán thân Resin cực nét, đầy đủ phụ kiện, box. Hàng nét đến từng sợi tóc nhé anh em. Hàng order trước từ 7 -15 ngày nha.',
    image: 'https://cdn11.bigcommerce.com/s-ttxokgrlfn/images/stencil/1280x1280/products/1909/13134/_20231012202426__22780.1697114997.jpg?c=1'
},
{
    id:6,
    name: '[Resin] Vegeta bán thân',
    dim_attribute: '28cm * 37cm * 15cm - (Dài * Cao * Sâu)',
    weight_attribute: '1,6kg',
    description: 'Mô hình Vegeta bán thân Resin cực nét, đầy đủ phụ kiện, box. Hàng nét đến từng sợi tóc nhé anh em. Hàng order trước từ 7 -15 ngày nha.',
    image: 'https://cdn11.bigcommerce.com/s-ttxokgrlfn/images/stencil/1280x1280/products/1909/13134/_20231012202426__22780.1697114997.jpg?c=1'
},
{
    id:7,
    name: '[Resin] Vegeta bán thân',
    dim_attribute: '28cm * 37cm * 15cm - (Dài * Cao * Sâu)',
    weight_attribute: '1,6kg',
    description: 'Mô hình Vegeta bán thân Resin cực nét, đầy đủ phụ kiện, box. Hàng nét đến từng sợi tóc nhé anh em. Hàng order trước từ 7 -15 ngày nha.',
    image: 'https://cdn11.bigcommerce.com/s-ttxokgrlfn/images/stencil/1280x1280/products/1909/13134/_20231012202426__22780.1697114997.jpg?c=1'
},
{
    id:8,
    name: '[Resin] Vegeta bán thân',
    dim_attribute: '28cm * 37cm * 15cm - (Dài * Cao * Sâu)',
    weight_attribute: '1,6kg',
    description: 'Mô hình Vegeta bán thân Resin cực nét, đầy đủ phụ kiện, box. Hàng nét đến từng sợi tóc nhé anh em. Hàng order trước từ 7 -15 ngày nha.',
    image: 'https://cdn11.bigcommerce.com/s-ttxokgrlfn/images/stencil/1280x1280/products/1909/13134/_20231012202426__22780.1697114997.jpg?c=1'
}
,
{
    id:5,
    name: '[Resin] Vegeta bán thân',
    dim_attribute: '28cm * 37cm * 15cm - (Dài * Cao * Sâu)',
    weight_attribute: '1,6kg',
    description: 'Mô hình Vegeta bán thân Resin cực nét, đầy đủ phụ kiện, box. Hàng nét đến từng sợi tóc nhé anh em. Hàng order trước từ 7 -15 ngày nha.',
    image: 'https://cdn11.bigcommerce.com/s-ttxokgrlfn/images/stencil/1280x1280/products/1909/13134/_20231012202426__22780.1697114997.jpg?c=1'
},
{
    id:6,
    name: '[Resin] Vegeta bán thân',
    dim_attribute: '28cm * 37cm * 15cm - (Dài * Cao * Sâu)',
    weight_attribute: '1,6kg',
    description: 'Mô hình Vegeta bán thân Resin cực nét, đầy đủ phụ kiện, box. Hàng nét đến từng sợi tóc nhé anh em. Hàng order trước từ 7 -15 ngày nha.',
    image: 'https://cdn11.bigcommerce.com/s-ttxokgrlfn/images/stencil/1280x1280/products/1909/13134/_20231012202426__22780.1697114997.jpg?c=1'
},
{
    id:7,
    name: '[Resin] Vegeta bán thân',
    dim_attribute: '28cm * 37cm * 15cm - (Dài * Cao * Sâu)',
    weight_attribute: '1,6kg',
    description: 'Mô hình Vegeta bán thân Resin cực nét, đầy đủ phụ kiện, box. Hàng nét đến từng sợi tóc nhé anh em. Hàng order trước từ 7 -15 ngày nha.',
    image: 'https://cdn11.bigcommerce.com/s-ttxokgrlfn/images/stencil/1280x1280/products/1909/13134/_20231012202426__22780.1697114997.jpg?c=1'
},
{
    id:8,
    name: '[Resin] Vegeta bán thân',
    dim_attribute: '28cm * 37cm * 15cm - (Dài * Cao * Sâu)',
    weight_attribute: '1,6kg',
    description: 'Mô hình Vegeta bán thân Resin cực nét, đầy đủ phụ kiện, box. Hàng nét đến từng sợi tóc nhé anh em. Hàng order trước từ 7 -15 ngày nha.',
    image: 'https://cdn11.bigcommerce.com/s-ttxokgrlfn/images/stencil/1280x1280/products/1909/13134/_20231012202426__22780.1697114997.jpg?c=1'
},
{
    id:8,
    name: '[Resin] Vegeta bán thân',
    dim_attribute: '28cm * 37cm * 15cm - (Dài * Cao * Sâu)',
    weight_attribute: '1,6kg',
    description: 'Mô hình Vegeta bán thân Resin cực nét, đầy đủ phụ kiện, box. Hàng nét đến từng sợi tóc nhé anh em. Hàng order trước từ 7 -15 ngày nha.',
    image: 'https://cdn11.bigcommerce.com/s-ttxokgrlfn/images/stencil/1280x1280/products/1909/13134/_20231012202426__22780.1697114997.jpg?c=1'
},
{
    id:8,
    name: '[Resin] Vegeta bán thân',
    dim_attribute: '28cm * 37cm * 15cm - (Dài * Cao * Sâu)',
    weight_attribute: '',
    description: 'Mô hình Vegeta bán thân Resin cực nét, đầy đủ phụ kiện, box. Hàng nét đến từng sợi tóc nhé anh em. Hàng order trước từ 7 -15 ngày nha.',
    image: 'https://cdn11.bigcommerce.com/s-ttxokgrlfn/images/stencil/1280x1280/products/1909/13134/_20231012202426__22780.1697114997.jpg?c=1'
},
{
    id:8,
    name: '[Resin] Vegeta bán thân',
    dim_attribute: '28cm * 37cm * 15cm - (Dài * Cao * Sâu)',
    weight_attribute: '1,6kg',
    description: 'Mô hình Vegeta bán thân Resin cực nét, đầy đủ phụ kiện, box. Hàng nét đến từng sợi tóc nhé anh em. Hàng order trước từ 7 -15 ngày nha.',
    image: 'https://cdn11.bigcommerce.com/s-ttxokgrlfn/images/stencil/1280x1280/products/1909/13134/_20231012202426__22780.1697114997.jpg?c=1'
},
{
    id:8,
    name: '[Resin] Vegeta bán thân',
    dim_attribute: '28cm * 37cm * 15cm - (Dài * Cao * Sâu)',
    weight_attribute: '',
    description: 'Mô hình Vegeta bán thân Resin cực nét, đầy đủ phụ kiện, box. Hàng nét đến từng sợi tóc nhé anh em. Hàng order trước từ 7 -15 ngày nha.',
    image: 'https://cdn11.bigcommerce.com/s-ttxokgrlfn/images/stencil/1280x1280/products/1909/13134/_20231012202426__22780.1697114997.jpg?c=1'
},
]

const target = document.querySelector("#target")

function mapFromData(data) {
    const template = `
    <div class="col-3">
        <div class="product-card">
            <img src="${data.image}" class="product-img" alt="">
            
            <div class="product-text p-5">
                <p class="product-name mb-3">
                    ${data.name}
                </p>

                <p class="product-dimension mb-3">
                    <b>Kích thước:</b>
                    ${data.dim_attribute || '=/='}
                </p>

                <p class="product-weight mb-3">
                    <b>Nặng:</b>
                    ${data.weight_attribute}
                </p>

                <p class="product-description mb-3">
                   ${data.description} 
                </p>
                <button class="header-action-btn btn-buy cursor-pointer">
                    Thêm vào giỏ
                </button>
            </div>
        </div>
    </div>`

    return template
}

function renderListData() {
    let str = '';
    listData.forEach((item)=> {
        str += mapFromData(item)
    })

    target.innerHTML = str;
}

renderListData();