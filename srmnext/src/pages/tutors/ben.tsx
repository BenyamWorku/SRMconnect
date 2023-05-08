/** @format */

function TutorPage() {
  return <h1>This is the Tutor page.</h1>;
}

export default TutorPage;

// import { useRouter } from "next/router";
// import Layout from "../../components/Layout";

// //type annotation for both Tutor and TutorProps
// interface Tutor {
//   id: number;
//   name: string;
//   bio: string;
// }

// interface TutorProps {
//   tutor: Tutor;
// }

// export default function Tutor({ tutor }:TutorProps) {
//   const router = useRouter();

//   if (router.isFallback) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Layout>
//       <h1>{tutor.name}</h1>
//       <p>{tutor.bio}</p>
//     </Layout>
//   );
// }

// export async function getStaticPaths() {
//   // Fetch a list of tutors from your API
//   const res = await fetch(`https://localhost:3000/tutors`);
//   //localhost:3000/

//   const tutors: Tutor[] = await res.json();

//   // Get the paths we want to pre-render based on tutors
//   const paths = tutors.map((tutor) => ({
//     params: { id: tutor.id.toString() },
//   }));

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: true };
// }

// export async function getStaticProps({ params }) {
//   // Fetch a tutor by ID from your API
//   const res = await fetch(
//     `https://localhost:3000/tutors/${params.id}`,
//   );
//   const tutor = await res.json();

//   // Pass tutor data to the page via props
//   return { props: { tutor } };
// }


