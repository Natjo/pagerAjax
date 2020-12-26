
# Pager Ajax

![version](https://img.shields.io/github/manifest-json/v/Natjo/pagerAjax)

Ajax pager with template item.  
Set number of items per page: data-items-per-page
Need this 2 elements:  
- `namespace`-result - element wher items will be displayed
- `namespace`-more - add items until max_page


## result
```html
	<ul class="pagerAjax-result" data-action="myAction" data-nonce="mynonce" data-items-per-page="4">
		<li class="card">
			<a href="/">
				<div class="tag">tag</div>
				<h1>Title</h1>
				<div class="desc">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, unde!
				</div>
			</a>
		</li>
		<li class="card">
			<a href="/">
				<div class="tag">tag</div>
				<h1>Title 2</h1>
				<div class="desc">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, unde!
				</div>
			</a>
		</li>
		<li class="card">
			<a href="/">
				<div class="tag">tag</div>
				<h1>Title 3</h1>
				<div class="desc">Lorem ipsum, dolor .</div>
			</a>
		</li>
		<li class="card">
			<a href="/">
				<div class="tag">tag</div>
				<h1>Title 4</h1>
				<div class="desc">Lorem ipsum, dolor .</div>
			</a>
		</li>
</ul>
<button class="filterAjax-more">More result</button>
```
## template
```html
<template id="tpl-card">
	<li class="card">
		<a href="${data.url}">
			<div class="tag">${data.tag}</div>
			<h1>${data.title}</h1>
			<div class="desc">${data.desc}</div>
		</a>
	</li>
</template>
```

## javscript
```javascript
const myPager = new PagerAjax({
    //namespace: 'pagerAjax',
});
```

## php
```php
add_action( 'wp_ajax_mmyAction', 'mmyAction_callback' );
add_action( 'wp_ajax_nopriv_mmyAction', 'mmyAction_callback' );

function myAction_callback()
{
    $response['status'] = 200;
	$response['page'] = 1;
	$response['max_page'] = 2;
	$response['msg'] = __('No result', 'lsd_lang');
	$response['msg'] = array(
		array(
			"tag" => "amet",
			"title" => "Lorem ipsum",
			"desc" => "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
			"url" => "/",
		)
	);

    wp_send_json($response);
}
```

## Demo
[See codepen demo](https://codepen.io/natjo/pen/poEdaRP?editors=0110)


