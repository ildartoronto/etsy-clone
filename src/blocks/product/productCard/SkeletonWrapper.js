import ProductSkeleton from "./ProductSkeleton";

const SkeletonWrapper = ({ count = 10 }) => {
  let skeletons = [];
  for (let i = 0; i < count; i++) {
    skeletons.push(<ProductSkeleton key={i} />);
  }
  return skeletons;
};

export default SkeletonWrapper;
