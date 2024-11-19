import { useRouter } from 'next/router';
import useSWR from 'swr';
import ListingDetails from '@/components/ListingDetails';
import Error from 'next/error';
import PageHeader from '@/components/PageHeader';

export default function Listing() {
    const router = useRouter();
    const { id } = router.query; 
  
    const { data, error, isValidating } = useSWR(id ? `https://api-listings-id2p.onrender.com/api/listings/${id}` : null);
  
    if (isValidating) return null;
  
    if (error || !data || data.length === 0) {
      return <Error statusCode={404} />;
    }
  
    return (
      <div>
        <PageHeader text={data.name} />
        <ListingDetails listing={data} />
      </div>
    );
  };
  
  
