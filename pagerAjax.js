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
    const url = ParamsData.wp_ajax_url;
    const namespace = "pagerAjax";
    const result = document.querySelector(`.${namespace}-result`);
    const btn_more = document.querySelector(`.${namespace}-more`);
    let page = Number(result.dataset.currentPage) || 1;
    let items_per_page = Number(result.dataset.itemsPerPage) || 4;
    let total_page = Number(result.dataset.totalPage) || 4;

    const loading = () => {
        btn_more.classList.add("loading");
        btn_more.disabled = true;
    };
    const onload = () => {
        btn_more.classList.remove("loading");
        btn_more.disabled = false;
    };

    const ariaLabel = () => {
        let label = btn_more.dataset.label;
        label = label.replace("{{nextpage}}", page + 1);
        label = label.replace("{{totalPage}}", total_page);
        btn_more.setAttribute("aria-label", label);
    };

    const ajax = () => {
        loading();
        const form = document.querySelector(result.dataset.form);
        let formData = form ? new FormData(form) : new FormData();
        formData.append("nonce", result.dataset.nonce);
        formData.append("action", result.dataset.action);
        formData.append("template", result.dataset.template);
        formData.append("items_per_page", items_per_page);
        formData.append("postId", result.dataset.postId || 0);
        formData.append("page", page);

        const xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 0)) {
                const response = JSON.parse(xhr.response);
                if (response.datas.length) {
                    response.datas.forEach((data, i) => result.insertAdjacentHTML("beforeend", data));
                    const firstEl = result.querySelectorAll("li")[(page - 1) * items_per_page];
                    firstEl && firstEl.querySelector("a").focus();
                    ariaLabel();
                    btn_more.style.display = page >= response.max_page ? "none" : "block";
                }
            }
            onload();
        };

        xhr.send(formData);
    };

    ariaLabel();

    btn_more.onclick = () => {
        page++;
        ajax();
    };
};

export default pagerAjax;
