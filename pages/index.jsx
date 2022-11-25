import { CLIENT_PUBLIC_FILES_PATH } from "next/dist/shared/lib/constants";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link.js";
import React from "react";
import styles from "styles/Home.module.css";
import EachPost from "compornent/EachPost";
import Header from "compornent/Header";
import Footer from "compornent/Footer";
import Hero from "compornent/Hero/Hero";

const subTitle = "アウトプットしてください";

export default function Home() {
  return;
  <>
    <Hero title="CUBE" subTitle="アウトプットしていくサイト" />
  </>;
}
