"use client";

import {
  Input,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
} from "@nextui-org/react";
import { useEffect } from "react";
import { useWords } from "../_store/words";
import { usePathname } from "next/navigation";

export default function Bar() {
  const { get, words, setFilter } = useWords();
  const path = usePathname();
  const flatWords = words.flat();

  useEffect(() => {
    get();
  }, []);

  return (
    <Navbar>
      <NavbarBrand>
        <Link href="/" className="text-black text-xl">
          {`${
            flatWords.filter((e) => (path !== "/know" ? !e.know : e.know)).length
          } words from ${flatWords.length}`}
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <Input
          placeholder="Search"
          type="search"
          onChange={(e) => setFilter(e.target.value)}
        />
      </NavbarContent>
      <NavbarContent justify="end">
        <Link href="/know" className="text-black text-xl">
          Know
        </Link>
        <Link href="/test" className="text-black text-xl">
          Test
        </Link>
      </NavbarContent>
    </Navbar>
  );
}
