import { useLoaderData } from "react-router-dom";
import AllReviewCard from "../components/AllReviewCard";
import { useEffect } from "react";

const AllReviews = () => {
  const reviews = useLoaderData();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="grid w-11/12 mx-auto pb-4 grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 overflow-hidden">
        {[...reviews]?.map((review) => (
          <AllReviewCard key={review?._id} review={review}></AllReviewCard>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
