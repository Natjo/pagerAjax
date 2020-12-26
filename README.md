
# Pager Ajax

![version](https://img.shields.io/github/manifest-json/v/Natjo/pagerAjax)

Ajax pager with template item.  


## Result list
List where items will be added when clicking `pagerAjax-more` button.  
- `data-items-per-page` is the number of items to add - *default is 4*
- `data-current-page` is depending of items per page - *default is 2 that means 8 items on DOM*.

```html
<ul class="pagerAjax-result" 
	data-action="myAction" data-nonce="mynonce" 
	data-current-page="1" data-items-per-page="4">
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

<button class="pagerAjax-more">More result</button>
```
## Template
```html
<template id="pagerAjax-tpl">
	<li class="card">
		<a href="${data.url}">
			<div class="tag">${data.tag}</div>
			<h1>${data.title}</h1>
			<div class="desc">${data.desc}</div>
		</a>
	</li>
</template>
```

## Javascript
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
	$response['datas'] = array(
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


