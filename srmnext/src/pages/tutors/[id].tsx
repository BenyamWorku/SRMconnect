/** @format */

import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

interface Address {
  street: string;
  city: string;
  zipcode: string;
}
interface Tutor {
  id: number;
  name: string;
  email: string;
  address: Address;
}

interface TutorProps {
  tutor: Tutor;
}

const TutorPage = ({ tutor }: TutorProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{tutor.name}</h1>
      <p>{tutor.email}</p>
      <p>{tutor.address.city}</p>
      <p>{tutor.address.street}</p>
      <p>{tutor.address.zipcode}</p>
      <p>{tutor.id} is the tutor ID</p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const tutors = await response.json();

  const paths = tutors.map((tutor: Tutor) => ({
    params: { id: tutor.id.toString() },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<TutorProps> = async ({
  params,
}) => {
  // this code is not even sent to the browser in the js bundle.
  //it is  strictly server side code. how cool is that?
// querying the database can be done here too
  try {
    if (!params || !params.id) {
      return { notFound: true };
    }
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${params.id}`,
    );
    const tutor = await response.json();
    console.log(tutor); // the whole tutor object

    return { props: { tutor } };
  } catch (error) {
    console.log(`here is the error message ${error}`);
    return { notFound: true };
  }
};

export default TutorPage;
