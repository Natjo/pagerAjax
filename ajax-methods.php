<?php
add_action('wp_ajax_pager', 'pager_callback');
add_action('wp_ajax_nopriv_pager', 'pager_callback');

function pager_callback()
{
    $template = !empty($_POST['template']) ? $_POST['template'] : '';
    $postId = !empty($_POST['postId']) ? $_POST['postId'] : 0;
    $page = !empty($_POST['page']) ? $_POST['page'] : 1;
    $items_per_page = !empty($_POST['items_per_page']) ? $_POST['items_per_page'] : 10;
    $searchS = !empty($_POST['s']) ? $_POST['s'] : '';

    if (!empty($searchS)) {
        //$articles = getSearchArticles(["s" => $searchS], $page, $items_per_page);
    } elseif (!empty($postId)) {
        //$post = get_post($postId);
       // $articles = getCategoryHubOtherArticles($post->ID, $page, $items_per_page);
    } else {
       // $items = getCategoryHubOtherArticlesStatic();
    }

    $datas = array();
    if (!empty($articles['items']) && is_array($articles['items'])) {
        foreach ($articles['items'] as $item) {
            ob_start();
            get_template_part('template-parts/cards/card', $template, $item);
            array_push($datas, ob_get_clean());
        }
    }

    $response['datas'] = $datas;
    $response['status'] = 200;
    $response['page'] = !empty($articles['pager']['current_page']) ? $articles['pager']['current_page'] : 1;
    $response['max_page'] = !empty($articles['pager']['total_page']) ? $articles['pager']['total_page'] : 1;
    $response['msg'] = __('No result', 'lsd_lang');

    wp_send_json($response);
}