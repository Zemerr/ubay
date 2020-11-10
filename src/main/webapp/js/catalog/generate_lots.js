function lotHtmlGen(lotId, title, price) {
    return ['                    <div class="card auctions-item" onclick="onAuction(' + lotId + ')">\n' +
    '                        <img src="">\n' +
    '                        <div class="text">\n' +
    '                            <div class="title">\n' +
    '                                <p>' + title + '</p>\n' +
    '                            </div>\n' +
    '                            <p class="price">' + price + '</p>\n' +
    '                        </div>\n' +
    '                    </div>\n'];
}

function lotsGen(json) {
    let container = $('#auctions-container');

    json.lots.forEach(el => {
        let parsed = JSON.parse(el);
        let title = parsed['title'];
        let price = parsed['price'];
        let lotId = parsed['lotId'];
        let lot = lotHtmlGen(lotId, title, price);

        container.append(lot);
    });
}
