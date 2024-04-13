"use client";

import Link from "next/link";
import Image from "next/image";

import MainHeaderBackground from "./main-header-background";
import logoImg from "../../../assets/logo.png";
import classes from "./main-header.module.css";
import { usePathname } from "next/navigation";

export default function MainHeader() {
  const pathName = usePathname();
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          Meals dash
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <Link
                href="/meals"
                className={`${
                  pathName === "/meals" ? `${classes.active}` : ""
                }`}
              >
                Browse Meals
              </Link>
            </li>
            <li>
              <Link
                href="/community"
                className={`${
                  pathName === "/community" ? `${classes.active}` : ""
                }`}
              >
                Foodies Community
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
