import { tokenomicsCategory } from "@/data/tokenomics";

const Category = () => {
  return (
    <ul className="style-none">
      {tokenomicsCategory.map((category) => (
        <li key={category.color} style={{ color: category.color }}>
          {category.title}
          <span className="float-end">({category.value}%)</span>
        </li>
      ))}
    </ul>
  );
};

export default Category;
