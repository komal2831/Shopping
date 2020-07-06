import React, { Component } from 'react';

class SliderImage extends Component {
	state = {}
	render() {
		return (
			<div id="slides" class="carousel slide" data-ride="carousel">
				<ul class="carousel-indicators">
					<li data-target="#slides" data-slide-to="0" class="active"></li>
					<li data-target="#slides" data-slide-to="1"></li>
					<li data-target="#slides" data-slide-to="2"></li>
				</ul>
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img src="img/product-1.png" />
					</div>
					<div class="carousel-item">
						<img src="img/product-2.png" />
					</div>
					<div class="carousel-item">
						<img src="img/product-3.png" />
					</div>

				</div>
			</div>
		);
	}
}

export default SliderImage;