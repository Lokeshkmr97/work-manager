import Image from "next/image";

// to change the title of the page 

export const metadata={
  title:"Home : Work Manager"
}

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl">Welcome to Work Manager</h1>
    </div>
  );
}
