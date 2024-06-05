import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <div> Something Got Wrong</div>
      <Link href={"/"}>Back to Home</Link>
    </>
  );
};

export default NotFound;
