let title = $('#input-title');
let user_login = $('#input-login');
let collectibles = $('#category-collectibles input');
let clothing = $('#category-clothing input');
let technics = $('#category-technics input');
let furniture = $('#category-furniture input');
let household = $('#category-household input');
let jewellery = $('#category-jewellery input');
let active = $('#state-active input');
let finished = $('#state-finished input');
let not_started = $('#state-not_started input');
let price = $('#max-price');

async function search() {
    let url = '?'
    let categories = check_categories();
    let status = check_status();

    if (title.val() !== '') {
        url = addParam(url, 'title', title.val());
    }
    if (user_login.val() !== '') {
        url = addParam(url, 'login', user_login.val());
    }
    if (categories !== '') {
        categories = categories.slice(1, categories.length);
        url = addParam(url, 'categories', categories);
    }
    if (status !== '') {
        status = status.slice(1, status.length);
        url = addParam(url, 'status', status);
    }
    if (price.val() !== '') {
        url = addParam(url, 'price', price.val());
    }
    url = addParam(url, 'rate', rangeRate.val());

    onForward('/results' + url);
}

function check_status() {
    let status = ''
    if (active.is(':checked')) {
        status += '-2';
    }
    if (finished.is(':checked')) {
        status += '-3';
    }
    if (not_started.is(':checked')) {
        status += '-1';
    }
    return status;
}

function addParam(url, param, value) {
    return url + param + '=' + value + '&';
}