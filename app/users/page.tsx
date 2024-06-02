type User = {
	id: number;
	name: string;
	email: string;
};

async function UserPage() {
	const res = await fetch("https://jsonplaceholder.typicode.com/users", {
		cache: "no-store",
	});
	const users: User[] = await res.json();
	return (
		<>
			<h1>Users</h1>
			<p>{new Date().toLocaleTimeString()}</p>
			<table className="table table-zebra">
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<tr key={user.id}>
							<td>{user.name}</td>
							<td>{user.email}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}

export default UserPage;
