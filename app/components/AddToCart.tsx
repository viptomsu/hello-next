"use client";

export default function AddToCart() {
	return (
		<button
			className="btn btn-primary"
			onClick={() => {
				console.log("Added to cart");
			}}>
			Add to cart
		</button>
	);
}
