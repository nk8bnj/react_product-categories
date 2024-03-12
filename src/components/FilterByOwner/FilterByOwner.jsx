const FilterByOwner = ({ users, selectedUserName, setSelectedUserName }) => (
  <p className="panel-tabs has-text-weight-bold">
    <a
      data-cy="FilterAllUsers"
      href="#/"
      className={selectedUserName === 'All' ? 'is-active' : ''}
      onClick={() => setSelectedUserName('All')}
    >
      All
    </a>

    {users.map(user => (
      <a
        data-cy="FilterUser"
        href="#/"
        key={user.id}
        className={user.name === selectedUserName ? 'is-active' : ''}
        onClick={() => setSelectedUserName(user.name)}
      >
        {user.name}
      </a>
    ))}
  </p>
);

export default FilterByOwner;
