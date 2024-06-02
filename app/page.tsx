import Link from "next/link";
import AddToCart from "./components/AddToCart";

export default function Home() {
	return (
		<main>
			<h1>Hello world</h1>
			<Link className="link" href="/users">
				Users
			</Link>
			<AddToCart />
		</main>
	);
}
