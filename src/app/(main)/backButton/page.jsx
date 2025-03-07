"use client"; 
import { useRouter } from "next/navigation";
import { IoTriangle } from "react-icons/io5";

const BackButton = () => {
  const router = useRouter();

  return (
    <a onClick={() => router.back()} style={{ cursor: "pointer", display: "inline-block" }}>
      <IoTriangle />
    </a>
  );
};

export default BackButton;
