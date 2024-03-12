const FilterByCategory = ({
  categories,
  selectedCategorysId,
  setSelectedCategorysId,
}) => (
  <div className="panel-block is-flex-wrap-wrap">
    <a
      href="#/"
      data-cy="AllCategories"
      className={`button is-success mr-6 ${selectedCategorysId.length && 'is-outlined'}`}
      onClick={() => setSelectedCategorysId([])}
    >
      All
    </a>

    {categories.map(category => (
      <a
        data-cy="Category"
        className={`button mr-2 my-1 ${selectedCategorysId.includes(category.id) && 'is-info'}`}
        href="#/"
        onClick={() => {
          if (selectedCategorysId.includes(category.id)) {
            setSelectedCategorysId(
              selectedCategorysId.filter(item => item !== category.id),
            );
          } else {
            setSelectedCategorysId([...selectedCategorysId, category.id]);
          }
        }}
        key={category.id}
      >
        {category.title}
      </a>
    ))}
  </div>
);

export default FilterByCategory;
