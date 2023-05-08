/** @format */

function SocialworkerPage() {
  return <h1>This is the social worker page.</h1>;
}

export default SocialworkerPage;

// import { useRouter } from "next/router";
// import Layout from "../../components/Layout";

// //type annotation for both Tutor and TutorProps
// interface Socialworker {
//   id: number;
//   name: string;
//   bio: string;
// }

// interface SocialworkerProps {
//   socialworker: Socialworker;
// }

// export default function Socialworker({ socialworker }: SocialworkerProps) {
//   const router = useRouter();

//   if (router.isFallback) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Layout>
//       <h1>{socialworker.name}</h1>
//       <p>{socialworker.bio}</p>
//     </Layout>
//   );
// }

// export async function getStaticPaths() {
//   // Fetch a list of tutors from your API
//   const res = await fetch(`https://localhost:3000/socialworkers`);
//   //localhost:3000/

//   const socialworkers: Socialworker[] = await res.json();

//   // Get the paths we want to pre-render based on tutors
//   const paths = socialworkers.map((socialworker) => ({
//     params: { id: socialworker.id.toString() },
//   }));

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: true };
// }

// export async function getStaticProps({ params }) {
//   // Fetch a socialworker by ID from your API
//   const res = await fetch(
//     `https://localhost:3000/tutors/${params.id}`,
//   );
//   const socialworker = await res.json();

//   // Pass socialworker data to the page via props
//   return { props: {socialworker} };
// }
