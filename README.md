
# Pager Ajax

![version](https://img.shields.io/github/manifest-json/v/Natjo/pagerAjax)

Ajax pager with template item.  


## Html
### with form

```html
	<form id="search">
		<input name="text" type="text">
	</form>	
	<ul class="pagerAjax-result" 
	data-action="pager" 
	data-nonce="7b2ca16dbe" 
	data-current-page="1" 
	data-items-per-page="4" 
	data-total-page="2" 
	data-template="card" 
	data-form="#search">
		<li class="item card">
			<a href="/">
				<h1>Title</h1>
				<div class="desc">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, unde!
				</div>
			</a>
		</li>
		<li class="item card">
			<a href="/">
				<h1>Title 2</h1>
				<div class="desc">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, unde!
				</div>
			</a>
		</li>
		<li class="item card">
			<a href="/">
				<div class="tag">tag</div>
				<h1>Title 3</h1>
				<div class="desc">Lorem ipsum, dolor .</div>
			</a>
		</li>
		<li class="item card">
			<a href="/">
				<div class="tag">tag</div>
				<h1>Title 4</h1>
				<div class="desc">Lorem ipsum, dolor .</div>
			</a>
		</li>
	</ul>
	
	<button class="pagerAjax-more" 
	data-label="Diplay page {{nextpage}} of {{totalPage}}" 
	aria-label="Diplay page 2 of 4">See next articles</button>
```


## Javascript
```javascript
import PagerAjax from "../modules/pagerAjax.js";
PagerAjax();
```

## Demo
bouygues le mag