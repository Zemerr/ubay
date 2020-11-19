function auctionHtmlGen(lotId, title, price, bidsCount, photo) {
    return ['        <div class="auction-item card">\n' +
    '            <img src="' + photo + '0.jpg" alt="auction-' + lotId + '" onclick="onAuction(' + lotId + ')">\n' +
    '            <div class="info_block">\n' +
    '                <div class="title" onclick="onAuction(' + lotId + ')">' + title + '</div>\n' +
    '                <div class="price">' + price + '</div>\n' +
    '            </div>\n' +
    '        </div>\n'];
}

function resultAuctionsGen(json) {
    let container = $('#auctions-container');
    json.forEach(el => {
        let title = el['title'];
        let price = el['price'];
        let lotId = el['lotId'];
        let photo = el['photo'];
        let bidsCount = el['bidCount'];
        let auction = auctionHtmlGen(lotId, title, price, bidsCount, photo);

        container.append(auction);
    });
}