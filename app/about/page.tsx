import type { Metadata } from "next";
import {redirect} from 'next/navigation'
export const metadata: Metadata = {
  title: "About",
};
const About = () => {
  redirect('/');
  return (
    <>
      <h2>About</h2>
    </>
  );
};
export default About;