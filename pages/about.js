import Link from 'next/link';
import { Card } from 'react-bootstrap';
import ListingDetails from '@/components/ListingDetails';
import PageHeader from '@/components/PageHeader';


export async function getStaticProps() {
    const listingId = '582364'; 
    const res = await fetch(`https://api-listings-id2p.onrender.com/api/listings/${listingId}`);
    
    if (!res.ok) {
        
        console.error('Failed to fetch the listing');
        return { props: { listing: null } }; 
    }

    const listing = await res.json();

    return {
      props: { listing }, 
    };
}


export default function About({ listing }) {
  return (
    <div>
      <PageHeader text="About the Developer - Pruthvi Patel" />
      <Card>
        <Card.Body>
          <p>I am Pruthvi Patel, an aspiring software developer and data analyst, currently pursuing my Computer Programming and Analysis degree at Seneca College, Toronto. I am passionate about technology and innovation, and I aim to apply my skills and knowledge to create user-friendly and efficient solutions.

I have a strong programming proficiency in C, JavaScript, HTML, and CSS, and I am interested in object-oriented programming with C++. I have also developed full-stack web applications using Node.js, Express.js, and various front-end technologies. Additionally, I have experience in managing complex databases using Oracle SQL, PostgreSQL, and MongoDB, and performing sophisticated data manipulations.

I am familiar with the Unix/Linux operating systems and Git as a version control tool, which are essential for modern software development. I also have project management skills, having used Jira Software to organize and track tasks and milestones. I am always seeking opportunities to grow and learn new technologies and methodologies that can enhance my software development and data analysis capabilities. The place that I like the most is:</p>
        
        </Card.Body>
      </Card>
      <br />

      <Card>
        <Card.Body>
           <Link href={`/listing/${listing._id}`} passHref legacyBehavior>
                <a>View Listing Details</a>
            </Link>
        </Card.Body>     
      </Card>
    
      <br />
      <ListingDetails listing={listing} />
    </div>
  );
};
