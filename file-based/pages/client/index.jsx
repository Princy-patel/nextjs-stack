import React from "react";
import Link from "next/link";

function ClientPage() {
  const clients = [
    { id: "john", name: "John Doe" },
    { id: "max", name: "Maximilian" },
  ];
  return (
    <div>
      <h1>The Client Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/client/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientPage;
