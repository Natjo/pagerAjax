/**
 * Ajax form filter with more button
 * Set number of items per page: data-items-per-page
 * Need this 3 elements:
 * namespace-result - element where items will be displayed
 * namespace-more - add items until max_page
 * 
 * @param {Object} params
 * @param {string} params.namespace default is pagerAjax
 * 
 */

 const pagerAjax = () => {
    const url = paramsData.wp_ajax_url;
    const namespace = params.namespace || 'pagerAjax';
    const result = document.querySelector(`.${namespace}-result`);
    let page = result.dataset.itemsPerPage || 2;
	let items_per_page = result.dataset.itemsPerPage || 4;
    const btn_more = document.querySelector(`.${namespace}-more`);
    const tpl = document.getElementById(`${namespace}-tpl`).innerHTML;
    const loading = () => {
        btn_more.classList.add('loading');
        btn_more.disabled = true;
    };
    const onload = () => {
        btn_more.classList.remove('loading');
        btn_more.disabled = false;
    };

    const ajax = () => {
        loading();

        const formData = new FormData(form);
        formData.append('nonce', result.dataset.nonce);
        formData.append('action', result.action);
        formData.append('items_per_page', items_per_page);
        formData.append('page', page);

        const xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 0)) {
                const response = JSON.parse(xhr.response);

                if (response.datas.length) {
                    for (let data of response.datas) {
                        const card = eval("`" + tpl + "`");
                        result.insertAdjacentHTML('beforeend', card);
                    }
                    btn_more.style.display = page >= response.max_page ? 'none' : 'block';
                }
            }
            onload();
        };

        xhr.send(formData);
    };

    btn_more.onclick = () => {
        page++;
        ajax();
    };
};

export default pagerAjax;
