async function onCreateAuction() {
    let title = $('#input-title').val();
    let desc = $('#textarea-description').val();
    let startPrice = $('#input-start_price').val();
    let maxPrice = $('#input-max_price').val();
    let startTime = new Date($('#input-start_time').val()).getTime();
    let duration = +$('#range-duration').val();
    let photos = document.getElementById('input-photos');

    if (!title || !desc || !startPrice || !maxPrice || !startTime || photos.files.length < 1) {
        errEmptyFields();
    } else if (!REGEX_LOT_TEXT.test(title)) {
        errTitleFormat();
    } else if (photos.files.length > 6) {
        errPhotoCount();
    } else if (!checkPrices(startPrice, maxPrice)) {
    } else if (!checkMinTime(startTime)) {
        errStartTime();
    } else {
        //parse date
        let st = datetimeToData(startTime);

        let categories = check_categories()
        if (categories !== '') {
            categories = categories.slice(1, categories.length);
        }

        // create object for request
        let auction = {
            title: title,
            desc: desc,
            startPrice: Number(startPrice).toFixed(2),
            maxPrice: Number(maxPrice).toFixed(2),
            // startTime: new Date().getTime() + 5_000, //TODO: manual user control set startTime
            startTime: st.getTime(),
            duration: duration,
            categories: categories
        };
        // download files
        auction["images"] = await loadFiles(photos);

        // post request
        let response = await fetch("http://localhost:8080/api/auction", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(auction)
        });
        // machining  response
        if (response.ok) {
            onForward("/auctions");
        } else {
            setErrorText('permission denied');
            showInfoText();
        }
    }
}

function checkPrices(startPrice, maxPrice) {
    if (+startPrice >= +maxPrice) {
        errMaxPrice();
        return false;
    } else if (+startPrice < 0 || +maxPrice < 0) {
        errNegativePrice()
        return false;
    } else if (+startPrice > 100_000 || +maxPrice > 100_000) {
        errPriceTooBig();
        return false;
    }
    return true;
}
